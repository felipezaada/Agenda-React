import React, { useEffect, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Mensagem from "../../components/Mensagem";
import Clock from "../../components/Clock";
import Database from "../../components/Database";
import Styles from "../../components/Styles";

const screenHeight = Dimensions.get('window').height;

const HomePage = () => {

    const [isPink1, setIsPink1] = useState(false);
    const [isPink2, setIsPink2] = useState(false);
    const [isPink3, setIsPink3] = useState(false);
    const [isPink4, setIsPink4] = useState(false);

    useEffect(() => {
        async function getInitialState() {
            const nomeS = await await Database.getData('email');
            if (nomeS) {
                const caixa1 = await Database.getData(`${nomeS}.caixa1`);
                const caixa2 = await Database.getData(`${nomeS}.caixa2`);
                const caixa3 = await Database.getData(`${nomeS}.caixa3`);
                const caixa4 = await Database.getData(`${nomeS}.caixa4`);

                if (caixa1 !== null) {
                    setIsPink1(caixa1);
                }
                if (caixa2 !== null) {
                    setIsPink2(caixa2);
                }
                if (caixa3 !== null) {
                    setIsPink3(caixa3);
                }
                if (caixa4 !== null) {
                    setIsPink4(caixa4);
                }
            }
        }
        getInitialState();
    }, []);

    // nem sabia disso ai pra cima, do useEffect, descobri num forum e fui na base no ctrl c + cltr v
    // ATUALIZAÇÃO, DEPOIS DE MUITO FUÇAR CONSEGUI PERSISTIR OS DADOS (MINHA LÓGICA, NÃO TAVA CONSEGUINDO USAR O ROUTES)

    async function clique1() {
        setIsPink1(!isPink1);
        const nomeS = await Database.getData('email');
        if (nomeS) {
            await Database.storeDataB(`${nomeS}.caixa1`, !isPink1);
        }
    }

    async function clique2() {
        setIsPink2(!isPink2);
        const nomeS = await Database.getData('email');
        if (nomeS) {
            await Database.storeDataB(`${nomeS}.caixa2`, !isPink2);
        }
    }

    async function clique3() {
        setIsPink3(!isPink3);
        const nomeS = await Database.getData('email');
        if (nomeS) {
            await Database.storeDataB(`${nomeS}.caixa3`, !isPink3);
        }
    }

    async function clique4() {
        setIsPink4(!isPink4);
        const nomeS = await Database.getData('email');
        if (nomeS) {
            await Database.storeDataB(`${nomeS}.caixa4`, !isPink4);
        }
    }

    return (
        <View style={Styles.HomePageContainer}>
            <Mensagem></Mensagem>
            <View>
                <Clock x={0} y={screenHeight * 0.41} />
            </View>
            <View style={Styles.Box}>
                <View style={Styles.BoxContainer}>
                    <View style={Styles.PequenaBoxContainer}>
                        <TouchableOpacity
                            style={[Styles.PequenaBox, isPink1 && Styles.BoxPink]}
                            onPress={clique1}
                        />
                        <Text style={Styles.TextoHomePage}>Limpar a casa</Text>
                    </View>
                    <View style={Styles.PequenaBoxContainer}>
                        <TouchableOpacity
                            style={[Styles.PequenaBox, isPink2 && Styles.BoxPink]}
                            onPress={clique2}
                        />
                        <Text style={Styles.TextoHomePage}>Lavar a roupa</Text>
                    </View>
                    <View style={Styles.PequenaBoxContainer}>
                        <TouchableOpacity
                            style={[Styles.PequenaBox, isPink3 && Styles.BoxPink]}
                            onPress={clique3}
                        />
                        <Text style={Styles.TextoHomePage}>Organizar a dispensa</Text>
                    </View>
                    <View style={Styles.PequenaBoxContainer}>
                        <TouchableOpacity
                            style={[Styles.PequenaBox, isPink4 && Styles.BoxPink]}
                            onPress={clique4}
                        />
                        <Text style={Styles.TextoHomePage}>Regar as plantas</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default HomePage;
