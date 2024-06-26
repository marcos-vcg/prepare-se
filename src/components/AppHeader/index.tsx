import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { View, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextComponent from "~/components/TextComponent";
// import navigation from '@react-navigation/stack';



export default function AppHeader({ appName, navigation, backgroundColor, ...props }: { appName: string, navigation: any, backgroundColor: string, props?: any }) {
//    const navigation = useNavigation()
   
    return (
        <View
            className={"flex-row justify-between p-2"}
            style={{ backgroundColor: backgroundColor }}
        >
            {/* <View className={"flex-row space-x-10 justify-between border-2 border-gray-500 rounded-lg bg-gray-300 my-3 mx-3"}> */}
            <View className={"flex-col justify-center m-2 px-2"}>
                {/* <View className={"flex-col items-start justify-center m-2 bg-green-300"}></View> */}
                <TextComponent
                    className={"text-xl font-bold"}
                    text={appName}
                    color="white">
                </TextComponent>

                {/* <Text> */}
                    {/* className={"flex-row text-xl font-bold leading-6 text-center"} */}
                    {/* {props?.children} */}
                    {/* {appName} */}
                {/* </Text> */}
            </View>
            
            {/* <View className={"flex-col items-end m-2 border-black-500 rounded-full bg-red-700 w-10 h-10"}> */}
            <View className={"flex-col items-end m-2"} >
                <Ionicons
                    name="person-outline"
                    size={30}
                    style={{color: 'white'}}
                    onPress={() => navigation.navigate('Profile')}
                />
                {/* <Button
                    onPress={() => navigation.navigate('Profile')}
                    title="Open Modal"
                /> */}
                {/* <FontAwesome size={28} style={{}} /> */}
                {/* <Image
                    style={{ width: 30, height: 30, }}
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                /> */}
            </View>
        </View>
    );
}
