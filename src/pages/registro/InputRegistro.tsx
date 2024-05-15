import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import BotaoR from "../../components/BotaoR";
import BotaoPequeno from "../../components/BotaoPequeno";
import Mensagem from "../../components/Mensagem";

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
        
        <View style={styles.Container}>

        <View style={styles.Container1}>
            <Mensagem></Mensagem>
        </View>

            <Text style={styles.Texto}>Digite seu nome completo</Text>
            <TextInput
                style={styles.Box}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.Texto}>Digite seu email</Text>
            <TextInput
                style={styles.Box}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.Texto}>Digite sua senha</Text>
            <TextInput
                style={styles.Box}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
            />

            <Text style={styles.Texto}>Confirme sua senha</Text>
            <TextInput
                style={styles.Box}
                placeholder="Confirmar senha"
                value={senha2}
                onChangeText={setSenha2}
            />
            
        </View>
        
        <View style={styles.Container2}> 
            <BotaoR titulo={"Registrar"} dados={dados}></BotaoR>
        </View>

        <View style={styles.Container3}>
            <BotaoPequeno texto="   Já possui uma conta?" texto2="Sign-in"/>
        </View>

        </>

    );
};

export default InputRegistro;

const styles = StyleSheet.create({
    Box: {
        bottom: 35,
        width: 350,
        height: 52,
        margin: 7,
        padding: 15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#222',
        fontSize: 20,
        alignSelf: 'center'
    },
    Texto: {
        fontSize: 20,
        bottom: 30,
        left: 30,
        color: '#000000',
    },

    Container: {
        bottom: 20,
    },

    Container1: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    Container2: {
        bottom: 40
    },

    Container3: {
        bottom: 30,
    },

});