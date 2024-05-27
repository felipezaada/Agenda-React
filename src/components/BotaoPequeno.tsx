import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function executar (navigation: any, texto2: string){
    if (texto2 === "Sign-in") {
        navigation.navigate('Login');
    } else {
        navigation.navigate('Registro');
    }
}

const BotaoPequeno = (props: { texto: string, texto2: string }) => {
    const navigation = useNavigation();
    const valorProp = props.texto2;

    return (
        <View style={styles.Container}>
            <View style={styles.Row}>
                <Text style={styles.Texto}>{props.texto}</Text>
                <TouchableOpacity
                    style={styles.Botao}
                    onPress={() => executar(navigation, valorProp)}
                >
                    <Text style={styles.Texto2}>{props.texto2}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default BotaoPequeno;

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Botao: {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
    },
    Texto: {
        fontSize: 0.04 * screenWidth,
        color: "#000000",
    },
    Texto2: {
        fontSize: 0.04 * screenWidth,
        color: "#f381b2",
        marginLeft: 0.01 * screenWidth,
    },
});