import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from "react-native";
import Button from './Button'

function WelcomeScreen({navigation}) {
    function goToMemberSign(){
        navigation.navigate('MemberSign')
    }
    return (
       <SafeAreaView style={styles.container}>
         <Text style={styles.header}>Kebap Fitness Salonu</Text>
           <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign}/>
       </SafeAreaView>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',

    },
    header:{
        fontSize:30,
        fontWeight:'bold',
        margin:10,
        textAlign:'center'
    }
})
