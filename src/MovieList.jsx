import React, { useState, useEffect } from 'react'

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                )

                if (response.ok) {
                    const data = await response.json();
                    setMovies(data);
                } else {
                    throw new Error("Failed to fetch movies");
                }
            } catch (error) {
                console.error("영화 목록 가져오기 실패: ", error.message);
            }
        }
        fetchMovies();
    }, []);
    return (
        <div><h1 className="text-3xl font-bold text-red-600">Movie List</h1>
            <ul>
                {/* 영화 목록을 매핑하여 목록 항목 렌더링 */}
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul></div>
    )
}

export default MovieList