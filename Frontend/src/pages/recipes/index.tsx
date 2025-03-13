import { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('/api/recipes').then((res) => setRecipes(res.data));
    }, []);

    return (
        <div>
            <h1>Recipes</h1>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.idMeal}>
                        <a href={`/recipes/${recipe.idMeal}`}>{recipe.strMeal}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
