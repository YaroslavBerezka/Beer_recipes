import styled from "styled-components";
import {useCallback, useEffect} from "react";
import { useBeerRecipesStore } from '../store/store.js';
import { useNavigate, useParams } from 'react-router-dom';
import {Container, Typography, Button} from '@mui/material';

const BackButton = styled(Button)`
      background-color: #525252;
      color: white;
      transition: background-color 0.3s ease;
      margin-bottom: 20px;
      &:hover {
        background-color: gold;
      }
    `;

const Recipe = () => {

    const { id } = useParams();
    const { recipes } = useBeerRecipesStore((state) => state);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id]);

    const recipe = id ? recipes.find((r) => r.id === parseInt(id)) || null : null;

    const handleGoBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    if (!recipe) {
        return (
            <Container>
                <Typography variant="h6">Recipe not found</Typography>
                <Button variant="contained" onClick={handleGoBack}>
                    Go Back
                </Button>
            </Container>
        );
    }

    const renderFoodPairing = () => {
        return (
            <>
                <Typography variant="subtitle2" style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                    <b>Food Pairing:</b>
                </Typography>
                <ul style={{ marginBottom: '1rem', paddingLeft: '0.5rem', textAlign: 'center', listStyle: 'none' }}>
                    {recipe.food_pairing.map((pairing, index) => (
                        <li key={index} style={{ marginBottom: '0.25rem' }}>
                            {pairing}
                        </li>
                    ))}
                </ul>
            </>
        );
    };

    return (
        <Container sx={{padding: '20px'}}>
            <BackButton onClick={handleGoBack}> ❮ </BackButton>
            <Typography variant="h4" style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                {recipe.name}
            </Typography>
            <img
                src={recipe.image_url}
                alt={recipe.name}
                style={{ height: '400px', margin: '1rem auto', display: 'flex', justifyContent: 'center' }}
            />
            <Typography variant="subtitle1" style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                {recipe.tagline}
            </Typography>
            <Typography variant="subtitle2" style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                <b>First Brewed:</b> {recipe.first_brewed}
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '1rem', textAlign: 'center' }}>
                {recipe.description}
            </Typography>
            <Typography variant="subtitle2" style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                <b>ABV:</b> {recipe.abv}%
            </Typography>
            {recipe.ibu && (
                <Typography variant="subtitle2" style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                    <b>IBU</b>: {recipe.ibu}
                </Typography>
            )}
            <Typography variant="subtitle2" style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                <b>Target FG:</b> {recipe.target_fg}
            </Typography>
            <Typography variant="subtitle2" style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                <b>Target OG</b>: {recipe.target_og}
            </Typography>
            {recipe.ebc && (
                <Typography variant="subtitle2" style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
                    <b>EBC:</b> {recipe.ebc}
                </Typography>
            )}
            {recipe.srm && (
                <Typography variant="subtitle2" style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
                    <b>SRM:</b> {recipe.srm}
                </Typography>
            )}
            {recipe.ph && (
                <Typography variant="subtitle2" style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
                    <b>pH:</b> {recipe.ph}
                </Typography>
            )}
            <Typography variant="subtitle2" style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
                <b>Attenuation Level:</b> {recipe.attenuation_level}
            </Typography>
            <Typography variant="subtitle2" style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
                <b>Volume:</b> {recipe.volume.value} {recipe.volume.unit}
            </Typography>
            <Typography variant="subtitle2" style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
                <b>Boil Volume:</b> {recipe.boil_volume.value} {recipe.boil_volume.unit}
            </Typography>
            {renderFoodPairing()}
            <Typography variant="subtitle2" style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
                <b>Brewer's Tips:</b> {recipe.brewers_tips}
            </Typography>
            <Typography variant="subtitle2" style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                Contributed By: {recipe.contributed_by}
            </Typography>
        </Container>
    );
};

export default Recipe;
