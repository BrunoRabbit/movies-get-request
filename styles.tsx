import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#333',
    },
    moviesTotalText: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,

    },
    moviesList: {
        flex: 1,
    },
    loadingArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        color: '#FFF',
    }
});
