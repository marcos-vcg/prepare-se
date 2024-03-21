import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, Text, View } from "react-native";



export default function ProgressLine({ link, name, atual, ideal }: { link: string, name: string, atual: string, ideal: string, props?: any }) {
    return (
        <View className={"flex flex-col rounded-lg mx-1 w-full"}>
            <View className={"mx-5 flex-row items-center border-2 border-gray-400 rounded-lg bg-gray-300 m-2 p-2"}>


                <Pressable
                    className={`flex-row rounded-md px-1 my-1`}
                    onPress={() => link}
                >
                    <Text>{name}</Text>
                    <Text>{" - "}</Text>
                    <Text>{atual} / {ideal}</Text>
                </Pressable>
                <View
                    className={""}
                >
                    
                </View>

                {/* { props.children } */}

                {/* <View
                    className={""}
                >
                    <Ionicons name="arrow-redo-outline"></Ionicons>
                </View> */}
            </View>
        </View>
    );
}
