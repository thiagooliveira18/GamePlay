import React from "react";
import { Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from "../../global/styles/theme";

//Obriga que tenha uma url de imagem.
type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props/* requisição da url */) {
    const { secondary50, secondary70 } = theme.colors;


    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary50, secondary70]}
        >
            <Image
                source={{ uri: urlImage }}
                style={styles.avatar}
            />
        </LinearGradient>
    )
}