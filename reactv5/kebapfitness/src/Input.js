import React from 'react';
import {SafeAreaView, Text,View, TextInput, StyleSheet} from "react-native";


function Input({label, onChangeText,placeHolder}) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.label} >{label}</Text>
                <TextInput onChangeText={onChangeText} style={styles.input_container} placeholder={placeHolder}/>
            </View>
        </SafeAreaView>
    );
}

export default Input;

const styles = StyleSheet.create({
    container:{
    margin:10,
    },
    input_container:{
        borderWidth:1,
        margin:5,
        padding:3,
        borderRadius:5,
        borderColor:'#aaa',


    },
    label:{
        fontSize:15,
        fontWeight:'bold',
        marginLeft:5,
    }
})
