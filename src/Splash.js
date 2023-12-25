import React, { useEffect } from 'react';
import {View, StyleSheet,Text} from 'react-native';
import * as Animatable from "react-native-animatable"

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
        navigation.navigate("Home")
        },2000)
    },[])
    return (
        <View className="flex-1 justify-center items-center bg-redPrimary">
          <Animatable.Text animation={"zoomIn"}
          duration={2000}
           className="text-4xl text-white font-bold" >Country Live🌎</Animatable.Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Splash;
