import React ,{ useState }  from 'react';

const SearchMovies = () => {
    const [query, setQuery] = useState('');
	const [movies, setMovies] = useState([]);

	const searchMovies = async e => {
		e.preventDefault();

		const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			setMovies(data.results);
			console.log(movies);
		} catch (err) {
			console.error(err);
		}
};



	
    return (
        <>
        <form className='form' onSubmit={searchMovies}>
				<label className='label' htmlFor='query'>
					Movie Name:
				</label>
				<input
					className='input'
					type='text'
					name='query'
					placeholder='i.e. The godfather'
					value={query}
					onChange={e => setQuery(e.target.value)}
				/>
				<button className='button' type='submit'>
					Search
				</button>
			</form>
            <div className='container'>
            <div className='card-list'>
				{movies
					.filter(movie => movie.poster_path)
					.map(movie => (
						<div className='card' key={movie.id}>
							<a href="#"> <img
								className='card--image'
								src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
								alt={movie.title + ' poster'}
								
							/></a>
							
							<div className='card--content'>
								<h3 className='card--title'>{movie.title}</h3>
								<p>
									<small>
										{movie.release_date}
									</small>
								</p>
							{/* <p>{movie.overview}</p> */}
							</div>
					
						</div>
					))}
			</div>
            </div>
			<div>
				{/* <h2>TABLA</h2>
				<table id="table">
						
						</table> */}
  
  

			</div>
		</>
	);
};

export default SearchMovies;