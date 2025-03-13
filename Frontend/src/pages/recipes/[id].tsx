import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`/api/recipes/${id}`).then((res) => setRecipe(res.data));
        }
    }, [id]);

    if (!recipe) return <p>Loading...</p>;

    return (
        <div>
            <h1>{recipe.strMeal}</h1>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>{recipe.strInstructions}</p>
        </div>
    );
};

export default RecipeDetail;
