import apiClient from "../ApiClient";
import type{Film } from "../../types/Film";
export const FilmService = {
    getAllFilms: async() => {
        const response = await apiClient.get<Film[]>('/Film');
        return response.data;
    },
    createFilm: async(filmData:Omit<Film,'id'>) => {
        const response = await apiClient.post<Film>('/Films',filmData);
        return response.data;
    }
}