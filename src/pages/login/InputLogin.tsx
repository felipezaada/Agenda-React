import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import BotaoL from "../../components/BotaoL";
import BotaoPequeno from "../../components/BotaoPequeno";

const InputLogin = () => {

    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')

    const dados = {
        email,
        senha
    }

    return (
        <>

        <View style={styles.Container}>
        
            <Text style={styles.Texto2}>Bem-vindo de novo</Text>
            <Image
            source={require('../../assets/hello.png')}
            style={styles.Imagem}
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
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
            />
        </View>

        <View style={styles.Container2}>
            <BotaoL titulo="Entrar" dados={dados}></BotaoL>
        </View>

        <View style={styles.Container3}>
            <BotaoPequeno texto="Não possui uma conta?" texto2={"Sign-Up"}/>
        </View>

        </>
    );
};

export default InputLogin;

const styles = StyleSheet.create({
    Box: {
        bottom: -160,
        width: 350,
        height: 52,
        margin: 10,
        padding: 15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#222',
        fontSize: 20
    },
    Texto: {
        right: 95,
        fontSize: 20,
        bottom: -165,
        color: '#000000'
    },

    Imagem: {
        bottom: -150,
        width: 150,
        height: 150
    },

    Texto2: {
        fontSize: 20,
        fontWeight: '900',
        color: '#000000',
        bottom: -140,
        alignItems: 'center',
        justifyContent: 'center'
    },

    Container: {
        bottom: 180,
        padding: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },

    Container2: {
        bottom: 40,
        alignContent: 'center'
    },

    Container3: {
        bottom: 25,
        alignContent: 'center'
    }

});
