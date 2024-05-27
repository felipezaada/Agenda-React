import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotaoR from "../../components/BotaoR";
import BotaoPequeno from "../../components/BotaoPequeno";
import Mensagem from "../../components/Mensagem";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const InputRegistro = () => {

    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')
    const[senha2, setSenha2] = useState('')

    const dados = {
        nome,
        email,
        senha,
        senha2
    }

    return (
        <>
        
        <ScrollView
            style={styles.Container}
            persistentScrollbar={false}
        >

        <View style={styles.ContainerMensagem}>
            <Mensagem></Mensagem>
        </View>

            <Text style={styles.Texto}>Digite seu nome completo</Text>
            <TextInput
                style={styles.Box}
                placeholder="Nome"
                placeholderTextColor={'#a9a9a9'}
                value={nome}
                onChangeText={setNome}
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
                value={senha}
                onChangeText={setSenha}
            />

            <Text style={styles.Texto}>Confirme sua senha</Text>
            <TextInput
                style={styles.Box}
                placeholder="Confirmar senha"
                placeholderTextColor={'#a9a9a9'}
                value={senha2}
                onChangeText={setSenha2}
            />
            

        <View style={{ height: screenWidth * 0.08 }} />

        <View style={styles.ContainerBotao}> 
            <BotaoR titulo={"Registrar"} dados={dados}></BotaoR>
            <BotaoPequeno texto="Já possui uma conta?" texto2="Sign-in"/>
        </View>

        </ScrollView>
        
        </>

    );
};

export default InputRegistro;

const styles = StyleSheet.create({
    Box: {
        bottom: screenWidth * 0.07,
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
    Texto: {
        fontSize: screenWidth * 0.05,
        bottom: screenWidth * 0.06,
        right: screenHeight * -0.041,
        color: '#000000',
    },

    Container: {
        flex: 1,
        bottom: screenWidth * 0.04,
    },

    ContainerMensagem: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    ContainerBotao: {
        alignItems: 'center',
        justifyContent: 'center',
    },

});
