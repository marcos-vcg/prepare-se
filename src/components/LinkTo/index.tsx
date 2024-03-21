import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, Text, View } from "react-native";



export default function LinkTo({ link, to }: { link: string, to: string, props?: any }) {
    return (
        <View className={"flex flex-col rounded-lg mx-1 w-full"}>
            <View className={"mx-5 flex-row items-center border-2 border-gray-400 rounded-lg bg-gray-300 m-2 p-2"}>


                <Pressable
                    className={`rounded-md px-1 my-1`}
                    onPress={() => link}
                >
                    <Text>{to}</Text>
                </Pressable>

                {/* { props.children } */}

                <View
                    className={""}
                >
                    <Ionicons name="arrow-redo-outline"></Ionicons>
                </View>
            </View>
        </View>
    );
}
