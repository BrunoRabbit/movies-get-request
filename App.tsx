import { FlatList, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { getLoadApiMovie } from './services/movie_service';
import { useEffect, useState } from 'react';
import { FilmInTheaters } from './components/FilmInTheaters';

export const App = () => {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLoadApiMovie(setMovies, setLoading);
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {loading &&
        <View style={styles.loadingArea}>
          <ActivityIndicator size={'large'} color={'#FFF'} />
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      }
      {!loading &&
        <>
          <Text style={styles.moviesTotalText}>Total de filmes {movies.length}</Text>
          <FlatList
            data={movies}
            style={styles.moviesList}
            renderItem={FilmInTheaters}
            keyExtractor={(item: MovieModel) => item.titulo}
          />
        </>
      }
    </SafeAreaView>
  );
}

export default App;