import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

import { styles } from "./style";

export function TextArea({ ...rest }: TextInputProps) {
    return (
        <TextInput
            style={styles.container}
            {...rest}
        />
    );
}