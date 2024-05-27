import React, { useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotaoL from "../../components/BotaoL";
import BotaoPequeno from "../../components/BotaoPequeno";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const InputLogin = () => {

    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')

    const dados = {
        email,
        senha
    }

    return (
        <ScrollView 
            contentContainerStyle={styles.ScrollContainer}
            persistentScrollbar={false}>

            <View style={styles.Container}>
            
                <Text style={styles.TextoBemVindo}>Bem-vindo de novo</Text>
                <Image
                source={require('../../assets/hello.png')}
                style={styles.Imagem}
                />

                <Text style={styles.Texto}>Digite seu email</Text>
                <TextInput
                    style={styles.Box}
                    placeholder="Email"
                    placeholderTextColor={'#a9a9a9'}
                    value={email}
                    onChangeText={setEmail}
                    
                />
                <Text style={styles.Texto}>Digite sua senha</Text>
                <TextInput
                    style={styles.Box}
                    placeholder="Senha"
                    placeholderTextColor={'#a9a9a9'}
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={setSenha}
                />
            </View>

            <View style={{ height: screenWidth * 0.2 }} />

            <View style={styles.ContainerBotao}>
                <BotaoL titulo="Entrar" dados={dados}></BotaoL>
                <BotaoPequeno texto="Não possui uma conta?" texto2={"Sign-Up"}/>
            </View>

        </ScrollView>
    );
};

export default InputLogin;

const styles = StyleSheet.create({

    ScrollContainer: {
        flexGrow: 1,
    },
    Box: {
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
    Texto: {
        right: screenHeight * 0.115,
        fontSize: screenWidth * 0.05,
        color: '#000000'
    },

    Imagem: {
        margin: 10,
        width: screenWidth * 0.37,
        height: screenHeight * 0.19
    },

    TextoBemVindo: {
        bottom: screenWidth * 0.02,
        fontSize: screenWidth * 0.05,
        fontWeight: '900',
        color: '#000000',
    },

    Container: {
        flex: 1,
        bottom: screenWidth * -0.05,
        alignItems: 'center',
        justifyContent: 'center'
    },

    ContainerBotao: {
        bottom: screenWidth * 0.04,
        alignItems: 'center',
        justifyContent: 'center'
    },

});
