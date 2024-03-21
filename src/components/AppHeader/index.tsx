import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Text, View } from "react-native";



export default function AppHeader({ props }: { props?: any }) {
    return (
        <View className={"flex-row space-x-10 justify-between border-2 border-sky-500 rounded-lg bg-gray-300 mt-10 mx-4"}>
            <View className={"flex-col items-start justify-center m-2 bg-green-300"}>
                <Text
                    className={"flex-row text-lg font-bold  leading-6 text-center"}>
                    {/* {props?.children} */}
                    Sobrevivencialismo
                </Text>
            </View>

            <View className={"flex-col items-end m-2 border-black-500 rounded-full bg-red-700 w-10 h-10"}>
                <FontAwesome size={28} style={{ }}/>
            </View>
        </View>
    );
}
