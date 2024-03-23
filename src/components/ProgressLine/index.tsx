import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useEffect, useState } from "react";
import { Pressable, ProgressBarAndroidComponent, Text, View } from "react-native";
// import { ProgressBar, Colors } from 'react-native-paper';



export default function ProgressLine({ link, name, atual, ideal }: { link: string, name: string, atual: number, ideal: number, props?: any }) {

    // const [qtdPercent, setQtdpercent] = useState(atual / ideal)
    const [qtdPercent, setQtdpercent] = useState(4 / 5)
    const [ fraction, setFraction] = useState("")

    // function toFraction(qtdPercent: number) {
    //     //console.log(qtdPercent * 100 / 20)
    //     var a = "" + (qtdPercent * 100 / 20) + "/5"
    //      console.log(a)
    //     return a
    // }
    
    // useEffect(() => {
    //     setFraction(toFraction(qtdPercent))
    //     console.log(fraction)
    // }, [qtdPercent])
    function toFraction(qtdPercent: number) {
        //console.log(qtdPercent * 100 / 20)
        var a = "" + (qtdPercent * 100 / 20) + "/5"
        console.log(a)
        setFraction(a)
    }

    useEffect(() => {
        toFraction(qtdPercent)
        console.log(fraction)
    }, [])


    return (
        <View className={"flex flex-col rounded-lg mx-1 w-full "}>
            <View className={"mx-4 flex-row items-center border-2 gap-4 border-gray-400 rounded-lg bg-gray-300 m-1 p-1"}>


                <Pressable
                    className={`flex-col w-3/12 rounded-md border-2 px-0 my-0 bg-yellow-500`}
                    onPress={() => link}
                >
                    <Text>{name} {"-"} {atual} / {ideal}</Text>
                </Pressable>

                <View
                    className={"flex-col flex-1 text-center h-1   bg-red-700"}
                >
                    {/* <View className={"h-[1px] mt-2 mb-4 w-5/6 bg-gray-200"} /> */}
                    <View
                        className={(`h-[4px] w-${fraction ? fraction : "1/5"} bg-green-400`)}
                    // style={ "width: 50% ;" }
                    />
                    {/* <View className={"flex-col items-end mx-4 border-2 border-black-500  bg-red-700 w-5 h-5"}></View> */}

                </View>


                <Pressable
                    className={`flex-col w-1/12 rounded-md border-2 items-center bg-yellow-500`}
                    onPress={() => link}
                >
                    <Text>{Math.round(qtdPercent*100)}{"%"}</Text>
                </Pressable>

                {/* { props.children } */}

                {/* <View
                    className={""}
                >
                    <Ionicons name="arrow-redo-outline"></Ionicons>
                </View> */}
                {/* <ProgressBarAndroidComponent
                    progress={0.9} 
                     color={Colors?.red800}
                     style={"align: center"}
                 />*/}
            </View>
        </View>
    );
}
