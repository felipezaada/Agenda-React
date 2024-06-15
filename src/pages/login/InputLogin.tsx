import React, { useState } from "react";
import { Dimensions, Image, ScrollView, Text, TextInput, View } from "react-native";
import BotaoL from "../../components/BotaoL";
import BotaoPequeno from "../../components/BotaoP";
import Styles from "../../components/Styles";

const screenWidth = Dimensions.get('window').width;

const InputLogin = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const dados = {
        email,
        senha
    }

    return (

        <ScrollView
            contentContainerStyle={Styles.ScrollContainer}
            persistentScrollbar={false}>

            <View style={Styles.ContainerImagem}>
                <Text style={Styles.TextoBemVindo}>Bem-vindo de novo</Text>
                <Image
                    source={require('../../assets/hello.png')}
                    style={Styles.Imagem}
                />
            </View>

            <View>

                <Text style={Styles.TextoLabel}>Digite seu email</Text>
                <TextInput
                    style={Styles.Label}
                    placeholder="Email"
                    placeholderTextColor={'#a9a9a9'}
                    value={email}
                    onChangeText={setEmail}

                />
                <Text style={Styles.TextoLabel}>Digite sua senha</Text>
                <TextInput
                    style={Styles.Label}
                    placeholder="Senha"
                    placeholderTextColor={'#a9a9a9'}
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={setSenha}
                />

            </View>

            <View style={{ height: screenWidth * 0.4 }} />

            <View style={Styles.ContainerBotao}>
                <BotaoL titulo="Entrar" dados={dados}></BotaoL>
                <BotaoPequeno texto="Não possui uma conta?" texto2={"Sign-Up"} />
            </View>

        </ScrollView>

    );
};

export default InputLogin;
