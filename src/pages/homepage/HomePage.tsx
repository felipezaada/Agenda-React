import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Mensagem from "../../components/Mensagem";
import Clock from "../../components/Clock";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const HomePage = () => {
    const [isGreen1, setIsGreen1] = useState(false);
    const [isGreen2, setIsGreen2] = useState(false);
    const [isGreen3, setIsGreen3] = useState(false);
    const [isGreen4, setIsGreen4] = useState(false);

    function clique1() {
        setIsGreen1(!isGreen1);
    }
    function clique2() {
        setIsGreen2(!isGreen2);
    }
    function clique3() {
        setIsGreen3(!isGreen3);
    }
    function clique4() {
        setIsGreen4(!isGreen4);
    }

    return (
        <View style={styles.container}>
            <Mensagem></Mensagem>
            <Clock x={0} y={430}></Clock>
            <View style={styles.square}>
                <View style={styles.squareContainer}>
                    <View style={styles.caixinhaContainer}>
                        <TouchableOpacity
                            style={[styles.caixinha, isGreen1 && styles.caixinhaVerde]}
                            onPress={clique1}
                        />
                        <Text style={styles.texto}>Limpar a casa</Text>
                    </View>
                    <View style={styles.caixinhaContainer}>
                        <TouchableOpacity
                            style={[styles.caixinha, isGreen2 && styles.caixinhaVerde]}
                            onPress={clique2}
                        />
                        <Text style={styles.texto}>Lavar a roupa</Text>
                    </View>
                    <View style={styles.caixinhaContainer}>
                        <TouchableOpacity
                            style={[styles.caixinha, isGreen3 && styles.caixinhaVerde]}
                            onPress={clique3}
                        />
                        <Text style={styles.texto}>Organizar a dispensa</Text>
                    </View>
                    <View style={styles.caixinhaContainer}>
                        <TouchableOpacity
                            style={[styles.caixinha, isGreen4 && styles.caixinhaVerde]}
                            onPress={clique4}
                        />
                        <Text style={styles.texto}>Regar as plantas</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({

    container: {
        bottom: screenHeight * -0.30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    square: {
        bottom: screenHeight * 1,
        width: screenWidth * 0.9,
        height: screenHeight * 0.42,
        borderWidth: 2,
        borderColor: 'black',
    },

    squareContainer: {
        position: 'absolute',
        left: 0,
        bottom: screenHeight * 0.01,
        alignItems: 'flex-start',
    },

    caixinhaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },

    caixinha: {
        width: screenWidth * 0.115,
        height: screenHeight * 0.06,
        marginHorizontal: 15,
        borderWidth: 2,
        borderColor: 'black',
    },

    caixinhaVerde: {
        backgroundColor: '#F381b2'
    },

    texto: {
        fontSize: screenWidth * 0.05,
        color: 'black',
        marginLeft: 10
    }

});
