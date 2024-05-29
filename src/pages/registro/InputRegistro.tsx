import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotaoR from "../../components/BotaoR";
import BotaoPequeno from "../../components/BotaoPequeno";
import Mensagem from "../../components/Mensagem";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const InputRegistro = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senha2, setSenha2] = useState('')

    const dados = {
        nome,
        email,
        senha,
        senha2
    }

    return (

        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            persistentScrollbar={false}
        >

            <View style={styles.container}>

                <Mensagem />

                <Text style={styles.texto}>Digite seu nome completo</Text>
                <TextInput
                    style={styles.box}
                    placeholder="Nome"
                    placeholderTextColor={'#a9a9a9'}
                    value={nome}
                    onChangeText={setNome}
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
                    value={senha}
                    onChangeText={setSenha}
                />

                <Text style={styles.texto}>Confirme sua senha</Text>
                <TextInput
                    style={styles.box}
                    placeholder="Confirmar senha"
                    placeholderTextColor={'#a9a9a9'}
                    value={senha2}
                    onChangeText={setSenha2}
                />

            </View>

            <View style={{ height: screenWidth * 0.08 }} />

            <View style={styles.containerBotao}>
                <BotaoR titulo={"Registrar"} dados={dados}></BotaoR>
                <BotaoPequeno texto="Já possui uma conta?" texto2="Sign-in" />
            </View>

        </ScrollView>

    );
};

export default InputRegistro;

const styles = StyleSheet.create({

    scrollContainer: {
        flexGrow: 1
    },

    box: {
        bottom: screenHeight * 0.035,
        width: screenWidth * 0.85,
        height: screenHeight * 0.067,
        margin: 7,
        padding: 15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#222',
        fontSize: screenWidth * 0.042,
        alignSelf: 'center',
        color: '#000000'
    },

    texto: {
        fontSize: screenWidth * 0.05,
        bottom: screenHeight * 0.035,
        right: screenWidth * -0.08,
        color: '#000000'
    },

    container: {
        flex: 1,
        bottom: screenHeight * 0.02,
    },

    containerBotao: {
        bottom: screenHeight * 0.03,
        alignItems: 'center',
        justifyContent: 'center'
    },

});
