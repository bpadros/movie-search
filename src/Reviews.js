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
            <div className='container-review'>
            <div className='card-list-review'>
				{movies
					.filter(movie => movie.poster_path)
					.map(movie => (
						<div className='card-review' key={movie.id}>
							<a href="Listreviews.js"> <img
								className='card--image-review'
								src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
								alt={movie.title + ' poster'}
							/></a>
							
							<div className='card--content-review'>
								<h2>I watched...</h2>
								<div className='inline-review'>
								<h3 className='card--title-review'>{movie.title}</h3>
								<p>
									<small>
										{movie.release_date}
									</small>
								</p>
								</div>
								<div className='inline-review'>
								<input type="checkbox" />
								<p>Specify the date you watched it</p>
								</div>
							<textarea name="" id="" cols="30" rows="10"></textarea>
							<p>rating:</p>
							
							<button className='save-review'>SAVE</button>
							</div>
						
						</div>
					))}
			</div>
            </div>
		</>
	);
};

export default SearchMovies;