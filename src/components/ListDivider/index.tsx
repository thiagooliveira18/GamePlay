import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './style';
import { theme } from "../../global/styles/theme";

type Props = {
    isCentered?: boolean;
}

export function ListDivider({ isCentered }: Props) {

    return (
        <View
            style={[
                styles.container,
                isCentered ? {
                    marginVertical: 12
                } : {
                    marginTop: 2,
                    marginBottom: 31
                }
            ]}>

        </View>
    )
}