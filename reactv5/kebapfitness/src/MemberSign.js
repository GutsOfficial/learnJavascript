import React, {useState} from 'react';
import {SafeAreaView, View, Text} from "react-native";
import Input from './Input'
import Button from './Button'
function MemberSign({navigation}) {
    const [userName,setUserName] = useState(null);
    const [userSurName,setUserSurName] = useState(null);
    const [userAge,setUserAge] = useState(null);
    const [userMail,setUserMail] = useState(null);
function handleSubmit(){
    const user ={
        userName,
        userSurName,
        userAge,
        userMail
    };
    navigation.navigate('MemberResult',{user})
};
    return (
        <SafeAreaView>
            <Text>Kayıt Ol</Text>
        <Input onChangeText={setUserName} label="Kullanıcı adı" placeHolder="Üye ismini giriniz..."/>
            <Input onChangeText={setUserSurName} label="Kullanıcı SoyAdı" placeHolder="Üye SoyAdı giriniz..."/>
            <Input onChangeText={setUserAge} label="Kullanıcı Yaş" placeHolder="Üye Yaşını giriniz..."/>
            <Input onChangeText={setUserMail} label="Kullanıcı Eposta" placeHolder="Üye Eposta giriniz..."/>
            <Button text="Kayıt Ol" onPress={handleSubmit}/>
        </SafeAreaView>
    );
}

export default MemberSign;
