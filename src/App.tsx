
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyNavigator from "./components/MyNavigator";

export default class App extends Component{
  render(){
    return (
      <NavigationContainer>
        <MyNavigator></MyNavigator>
      </NavigationContainer>
    );
  } 
};