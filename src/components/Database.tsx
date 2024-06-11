import AsyncStorage from "@react-native-async-storage/async-storage";

async function getData(key: string) {
    const resultado = await AsyncStorage.getItem(key);
    return resultado ? JSON.parse(resultado) : null;
};

async function getDataR(key: string) {
    const resultado = await AsyncStorage.getItem(key);
    return resultado ? JSON.parse(resultado) : [];
};

async function storeDataB(key: string, estado: boolean) {
    await AsyncStorage.setItem(key, JSON.stringify(estado));
};

async function storeDataL(key: string, email: string) {
    await AsyncStorage.setItem(key, JSON.stringify(email));
};

async function storeDataR(key: string, dados: TipoR) {
    let dadosExistem = await getData(key);
    if (dadosExistem) {
        dadosExistem.push(dados);
        await AsyncStorage.setItem(key, JSON.stringify(dadosExistem));
    } else {
        await AsyncStorage.setItem(key, JSON.stringify([dados]));
    }
    console.log(await getData('dados'));
};

export default { getData, getDataR, storeDataB, storeDataL, storeDataR };