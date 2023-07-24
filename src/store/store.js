import {create} from 'zustand';

const MIN_PER_RENDER = 15;

export const useBeerRecipesStore = create((set, getState) => ({
    recipes: [],
    selectedRecipes: [],
    currentPage: 1,
    addPage: () => {
        set((state) => ({currentPage: state.currentPage + 1}));
    },
    updateSelectedRecipes: (recipes) => {
        set({selectedRecipes: recipes});
    },
    fetchRecipes: async () => {
        try {
            const {currentPage} = getState();
            const response = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}`);
            const data = await response.json()
            set((state) => ({recipes: [...state.recipes, ...data]})); 
        } catch (error) {
            console.error('Failed to fetch recipes:', error);
        }
    },
    deleteSelectedRecipes: async () => {
        const {recipes, selectedRecipes} = getState();
        const filteredRecipes = recipes.filter((recipe) => !selectedRecipes.includes(recipe));
        set({selectedRecipes: []});
        if (filteredRecipes.length < MIN_PER_RENDER) {
            set({recipes: filteredRecipes});
            set((state) => ({currentPage: state.currentPage + 1})); 
            await getState().fetchRecipes();
        } else {
            set({recipes: filteredRecipes});
        }
    },
}));
