import axios from 'axios';

const API_BASE = 'https://www.themealdb.com/api/json/v1/1';

export const fetchRecipes = async (query: any) => {
    let url = `${API_BASE}/search.php?s=`;
    if (query.i) url = `${API_BASE}/filter.php?i=${query.i}`;
    if (query.a) url = `${API_BASE}/filter.php?a=${query.a}`;
    if (query.c) url = `${API_BASE}/filter.php?c=${query.c}`;
    const response = await axios.get(url);
    return response.data.meals;
};

export const fetchRecipeById = async (id: string) => {
    const response = await axios.get(`${API_BASE}/lookup.php?i=${id}`);
    return response.data.meals[0];
};