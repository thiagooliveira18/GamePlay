import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',//ocupe as extremidades
        marginTop: getStatusBarHeight() + 26,// pega a barrinha preta de cima do celular e faz o calculo para n ficar em cima
        marginBottom: 42,
    },
    matches: {
        marginTop: 24,
        marginLeft: 24
    }
});