import { Request, Response } from 'express';
import { fetchRecipes, fetchRecipeById } from '../services/recipeService';

export const getRecipes = async (req: Request, res: Response) => {
    try {
        const recipes = await fetchRecipes(req.query);
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipes' });
    }
};

export const getRecipeById = async (req: Request, res: Response) => {
    try {
        const recipe = await fetchRecipeById(req.params.id);
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipe details' });
    }
};