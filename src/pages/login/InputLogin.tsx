import React, { useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotaoL from "../../components/BotaoL";
import BotaoPequeno from "../../components/BotaoP";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const InputLogin = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const dados = {
        email,
        senha
    }

    return (

        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            persistentScrollbar={false}>

            <View style={styles.container}>

                <Text style={styles.textoBemVindo}>Bem-vindo de novo</Text>
                <Image
                    source={require('../../assets/hello.png')}
                    style={styles.imagem}
                />

                <Text style={styles.texto}>Digite seu email</Text>
                <TextInput
                    style={styles.box}
                    placeholder="Email"
                    placeholderTextColor={'#a9a9a9'}
                    value={email}
                    onChangeText={setEmail}

                />
                <Text style={styles.texto}>Digite sua senha</Text>
                <TextInput
                    style={styles.box}
                    placeholder="Senha"
                    placeholderTextColor={'#a9a9a9'}
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={setSenha}
                />

            </View>

            <View style={{ height: screenWidth * 0.2 }} />

            <View style={styles.containerBotao}>
                <BotaoL titulo="Entrar" dados={dados}></BotaoL>
                <BotaoPequeno texto="Não possui uma conta?" texto2={"Sign-Up"} />
            </View>

        </ScrollView>

    );
};

export default InputLogin;

const styles = StyleSheet.create({

    scrollContainer: {
        flexGrow: 1,
    },

    box: {
        width: screenWidth * 0.85,
        height: screenHeight * 0.067,
        margin: 10,
        padding: 15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#222',
        fontSize: screenWidth * 0.042,
        color: '#000000'
    },

    texto: {
        right: screenWidth * 0.22,
        fontSize: screenWidth * 0.05,
        color: '#000000'
    },

    imagem: {
        margin: 10,
        width: screenWidth * 0.37,
        height: screenHeight * 0.19
    },

    textoBemVindo: {
        bottom: screenHeight * 0.01,
        fontSize: screenWidth * 0.05,
        fontWeight: '900',
        color: '#000000'
    },

    container: {
        flex: 1,
        bottom: screenHeight * -0.04,
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerBotao: {
        bottom: screenHeight * 0.03,
        alignItems: 'center',
        justifyContent: 'center'
    },

});
