import { Text, View, Image } from 'react-native';
import { styles } from './styles';

export const FilmInTheaters = ({ item }: { item: MovieModel }) => {

    return (
        <View style={styles.movieItem}>
            <Image 
                source={{ uri: item.avatar }}
                 style={styles.movieImage} 
                resizeMode='contain'
            />
            <Text style={styles.movieTitle}>{item.titulo}</Text>
        </View>
    );
}