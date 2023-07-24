import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom';
import Navigation from "./components/Navigation";
import Recipe from './pages/Recipe';
import RecipesList from './pages/RecipeList';
import Error from './pages/Error';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"
               element={<Navigation/>}
               errorElement={
                    <Navigation>
                        <Error/>
                    </Navigation>
                } >
            <Route index path="/" element={<RecipesList/>}/>
            <Route path="/recipe/:id" element={<Recipe/>}/>
        </Route>,
    ),
);

const App = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default App;
