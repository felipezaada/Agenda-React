import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({

  // Containers
  HomePageContainer: {
    bottom: screenHeight * -0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  BotaoHContainer: {
    bottom: screenHeight * -0.2,
    paddingHorizontal: 35,
  },

  BotaoPContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  BoxContainer: {
    position: 'absolute',
    left: 0,
    bottom: screenHeight * 0.01,
    alignItems: 'flex-start',
  },

  PequenaBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },

  ContainerLabelR: {
    bottom: screenHeight * -0.1,
  },

  ContainerBotao: {
    bottom: screenHeight * 0.03,
    alignSelf: 'center',
    position: 'absolute',
  },

  ContainerMensagem: {
    bottom: screenHeight * -0.05,
    alignItems: 'center',
  },

  ContainerImagem: {
    padding: 10,
    alignItems: 'center',
  },

  ScrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },

  // Textos
  TextoLabel: {
    fontSize: screenWidth * 0.05,
    right: screenWidth * -0.05,
    color: '#000000',
  },

  TextoBemVindo: {
    alignSelf: 'center',
    bottom: screenHeight * 0.01,
    fontSize: screenWidth * 0.05,
    fontWeight: '900',
    color: '#000000',
  },

  TextoBotao: {
    color: '#FFFFFF',
    fontSize: screenWidth * 0.06,
  },
  
  TextoHomePage: {
    fontSize: screenWidth * 0.05,
    color: 'black',
    marginLeft: 10,
  },

  TextoBotaoP: {
    fontSize: 0.04 * screenWidth,
    color: "#000000",
  },

  TextoPinkBotaoP: {
    fontSize: 0.04 * screenWidth,
    color: "#f381b2",
    marginLeft: 0.01 * screenWidth,
  },

  TextoG: {
    textAlign: 'center',
    fontWeight: '900',
    color: '#000000',
    padding: 10,
    fontSize: screenWidth * 0.07,
  },

  TextoM: {
    textAlign: 'justify',
    color: '#000000',
    fontSize: screenWidth * 0.05,
    padding: 10,
  },

  // Outros
  Label: {
    width: screenWidth * 0.85,
    height: screenHeight * 0.070,
    fontSize: screenWidth * 0.045,
    margin: 10,
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#222',
    color: '#000000',
  },

  Botao: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.08,
    borderRadius: 10,
    borderColor: "#F381b2",
    backgroundColor: "#F381b2",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
  },

  Box: {
    bottom: screenHeight * 0.82,
    width: screenWidth * 0.9,
    height: screenHeight * 0.42,
    borderWidth: 2,
    borderColor: 'black',
  },

  PequenaBox: {
    width: screenWidth * 0.115,
    height: screenHeight * 0.06,
    marginHorizontal: 15,
    borderWidth: 2,
    borderColor: 'black',
  },
  
  BoxPink: {
    backgroundColor: '#F381b2',
  },

  Imagem: {
    alignSelf: 'center',
    margin: 10,
    width: screenWidth * 0.38,
    height: screenHeight * 0.20,
  },

  PaddingBotao: {
    padding: 10,
  },

  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  BotaoP: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },

});

export default Styles;
