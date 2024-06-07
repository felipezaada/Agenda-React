import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Mensagem from "../../components/Mensagem";
import Clock from "../../components/Clock";
import AsyncStorage from "@react-native-async-storage/async-storage";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

interface Tipo{
    email: string;
}

const storeData = async (key: string, estado: boolean) => {
    await AsyncStorage.setItem(key, JSON.stringify(estado));
    const estadoBotao = await getDados('estado');
    console.log(estadoBotao);
};

const getNomeS = async () => {
    const resultado = await AsyncStorage.getItem('email');
    return resultado ? resultado : null;
};

const getDados = async (key: string) => {
    const resultado = await AsyncStorage.getItem(key);
    return resultado ? JSON.parse(resultado) : null;
};

const HomePage = () => {
    
    const [isPink1, setIsPink1] = useState(false);
    const [isPink2, setIsPink2] = useState(false);
    const [isPink3, setIsPink3] = useState(false);
    const [isPink4, setIsPink4] = useState(false);

        useEffect(() => {
            async function getInitialState() {
                const nomeS = await getNomeS();
                if(nomeS){
                const caixa1 = await getDados(`${nomeS}.caixa1`);
                const caixa2 = await getDados(`${nomeS}.caixa2`);
                const caixa3 = await getDados(`${nomeS}.caixa3`);
                const caixa4 = await getDados(`${nomeS}.caixa4`);

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
        const nomeS = await getNomeS();
        if (nomeS) {
            await storeData(`${nomeS}.caixa1`, !isPink1);
        }
    }   

    async function clique2() {
        setIsPink2(!isPink2);
        const nomeS = await getNomeS();
        if (nomeS) {
            await storeData(`${nomeS}.caixa2`, !isPink2);
        }
    }     

    async function clique3() {
        setIsPink3(!isPink3);
        const nomeS = await getNomeS();
        if (nomeS) {
            await storeData(`${nomeS}.caixa3`, !isPink3);
        }
    }    

    async function clique4() {
        setIsPink4(!isPink4);
        const nomeS = await getNomeS();
        if (nomeS) {
            await storeData(`${nomeS}.caixa4`, !isPink4);
        }
    }   

    return (
        <View style={styles.container}>
            <Mensagem></Mensagem>
            <Clock x={0} y={430}></Clock>
            <View style={styles.square}>
                <View style={styles.squareContainer}>
                    <View style={styles.caixinhaContainer}>
                        <TouchableOpacity
                            style={[styles.caixinha, isPink1 && styles.caixinhaRosa]}
                            onPress={clique1}
                        />
                        <Text style={styles.texto}>Limpar a casa</Text>
                    </View>
                    <View style={styles.caixinhaContainer}>
                        <TouchableOpacity
                            style={[styles.caixinha, isPink2 && styles.caixinhaRosa]}
                            onPress={clique2}
                        />
                        <Text style={styles.texto}>Lavar a roupa</Text>
                    </View>
                    <View style={styles.caixinhaContainer}>
                        <TouchableOpacity
                            style={[styles.caixinha, isPink3 && styles.caixinhaRosa]}
                            onPress={clique3}
                        />
                        <Text style={styles.texto}>Organizar a dispensa</Text>
                    </View>
                    <View style={styles.caixinhaContainer}>
                        <TouchableOpacity
                            style={[styles.caixinha, isPink4 && styles.caixinhaRosa]}
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

    caixinhaRosa: {
        backgroundColor: '#F381b2'
    },

    texto: {
        fontSize: screenWidth * 0.05,
        color: 'black',
        marginLeft: 10
    }

});
