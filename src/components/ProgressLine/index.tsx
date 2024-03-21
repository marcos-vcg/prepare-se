import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, Text, View } from "react-native";



export default function ProgressLine({ link, to }: { link: string, to: string, props?: any }) {
    return (
        <View className={"flex flex-col  rounded-lg mx-1 w-full"}>
            <View className={"items-center border-2 border-gray-400 rounded-lg bg-gray-300 m-8 p-4"}>


                <Pressable
                    className={`rounded-md px-1 my-2`}
                    onPress={() => ''}
                >
                    <Text>{to}</Text>
                </Pressable>

                {/* { props.children } */}

                <View
                    className={""}
                >
                    <Ionicons name="home"></Ionicons>
                </View>
            </View>
        </View>
    );
}
