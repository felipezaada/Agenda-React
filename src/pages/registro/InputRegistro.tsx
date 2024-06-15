import React, { useState } from "react";
import { Dimensions, ScrollView, Text, TextInput, View } from "react-native";
import BotaoR from "../../components/BotaoR";
import BotaoPequeno from "../../components/BotaoP";
import Mensagem from "../../components/Mensagem";
import Styles from "../../components/Styles";

const screenWidth = Dimensions.get('window').width;

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
            contentContainerStyle={Styles.ScrollContainer}
            persistentScrollbar={false}
        >

            <View style={Styles.ContainerMensagem}>
                <Mensagem />
            </View>

            <View style={Styles.ContainerLabelR}>

                <Text style={Styles.TextoLabel}>Digite seu nome completo</Text>
                <TextInput
                    style={Styles.Label}
                    placeholder="Nome"
                    placeholderTextColor={'#a9a9a9'}
                    value={nome}
                    onChangeText={setNome}
                />

                <Text style={Styles.TextoLabel}>Digite seu email</Text>
                <TextInput
                    style={Styles.Label}
                    placeholder="Email"
                    placeholderTextColor={'#a9a9a9'}
                    value={email.toLowerCase()}
                    onChangeText={setEmail}
                />

                <Text style={Styles.TextoLabel}>Digite sua senha</Text>
                <TextInput
                    style={Styles.Label}
                    placeholder="Senha"
                    placeholderTextColor={'#a9a9a9'}
                    value={senha}
                    onChangeText={setSenha}
                />

                <Text style={Styles.TextoLabel}>Confirme sua senha</Text>
                <TextInput
                    style={Styles.Label}
                    placeholder="Confirmar senha"
                    placeholderTextColor={'#a9a9a9'}
                    value={senha2}
                    onChangeText={setSenha2}
                />

            </View>

            <View style={{ height: screenWidth * 0.6 }} />

            <View style={Styles.ContainerBotao}>
                <BotaoR titulo="Registrar" dados={dados}></BotaoR>
                <BotaoPequeno texto="Já possui uma conta?" texto2={"Sign-in"} />
            </View>


        </ScrollView>

    );
};

export default InputRegistro;


