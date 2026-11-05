import { config } from '../config/config.js';


export const getMovieById = async (req,res,next)=>{
    try {
        const options={
            method: 'GET',
            headers: {accept: 'application/json', Authorization: `Bearer ${config.apiKey}`}
        };
        const {id}=req.params;
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`,options);
        
         if(!response.ok){
            const error=new Error(`Error al traer la pelicula`);
            error.status=response.status;
            throw error;
        }

        const data = await response.json();

        return res.status(200).json(data);

    } catch (error) {
        next(error);
    }
}
export const getMovies = async (req,res,next)=>{
    try {
        const options={
            method: 'GET',
            headers: {accept: 'application/json', Authorization: `Bearer ${config.apiKey}`}
        };
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list`,options);
        
        if(!response.ok){
            const error=new Error(`Error al traer las peliculas`);
            error.status=response.status;
            throw error;
        }

        const data = await response.json();

        return res.status(200).json(data);

    } catch (error) {
        next(error);
    }
}