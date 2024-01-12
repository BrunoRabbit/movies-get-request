type setMovies = React.Dispatch<React.SetStateAction<MovieModel[]>>;
type setLoading = React.Dispatch<React.SetStateAction<boolean>>;

export const getLoadApiMovie = async (setMovies: setMovies, setLoading: setLoading) => {
    setLoading(true);
    const req = await fetch("https://api.b7web.com.br/cinema/");
    const json = await req.json();

    if (json) {
        setMovies(json);
    }
    
    setLoading(false);
}