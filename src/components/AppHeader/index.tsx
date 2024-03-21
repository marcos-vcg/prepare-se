import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Text, View, Image } from "react-native";



export default function AppHeader({ appName, ...props }: { appName: string, props?: any }) {
    return (
        <View className={"flex-row space-x-10 justify-between border-2 border-gray-500 rounded-lg bg-gray-300 mt-10 mx-4"}>
            <View className={"flex-col justify-center m-2"}>
                {/* <View className={"flex-col items-start justify-center m-2 bg-green-300"}></View> */}
                <Text
                    className={"flex-row text-lg font-bold  leading-6 text-center"}>
                    {/* {props?.children} */}
                    {appName}
                </Text>
            </View>
            
            {/* <View className={"flex-col items-end m-2 border-black-500 rounded-full bg-red-700 w-10 h-10"}> */}
            <View className={"flex-col items-end m-2"}>
                <Ionicons name="person-circle" size={30} style={{}} />
                {/* <FontAwesome size={28} style={{}} /> */}
                {/* <Image
                    style={{ width: 30, height: 30, }}
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                /> */}
            </View>
        </View>
    );
}
