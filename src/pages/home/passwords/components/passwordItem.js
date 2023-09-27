import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export function PasswordItem({ data, removePassword }) {
    const [hidePass, setHidePass] = useState(false);
    return (
        <Pressable onLongPress={removePassword} style={style.container} >
            <Text
                style={style.text}
                secureTextEntry={hidePass}>
                {data}
            </Text>
            <TouchableOpacity style={style.eye} onPress={() => setHidePass(!hidePass)}>
                {hidePass ?
                    <Ionicons name="eye" color={"white"} size={25} />
                    :
                    <Ionicons name="eye-off" color={"white"} size={25} />
                }

            </TouchableOpacity>
        </Pressable>

    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "black",
        padding: 14,
        flex: 1,
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: "#fff",
        width: "85%",
    },
    eye: {
        width: "15%",
        justifyContent: "center",
        alignItems: "center",
    }
})