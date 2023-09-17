import React from 'react';
import {SafeAreaView, View, Text} from "react-native";

function MemberResult({route}) {
    return (
        <SafeAreaView>
            <Text>Üye Adı: {route.params.user.userName}</Text>
            <Text>Üye SoyAdı: {route.params.user.userSurName}</Text>
            <Text>Üye Yaşı: {route.params.user.userAge}</Text>
            <Text>Üye Mail Adresi: {route.params.user.userMail}</Text>

            <View>

            </View>
        </SafeAreaView>
    );
}

export default MemberResult;
