import React from "react";
import { Text, View } from "react-native";



export default function CardInfo({ title, body, footer, ...props }: { title: string, body: string, footer: string, props?: any }) {
    return (
        <View className={"flex flex-col  rounded-lg mx-1 w-full"}>
            <View className={"items-center border-2 border-gray-400 rounded-lg bg-gray-300 m-8 p-4"}>
                <Text
                    className={`text-xl font-bold text-red-500 text-center `}>
                    {title}
                </Text>

                <View className="h-[1px] my-2 w-full bg-gray-200"></View>

                <View
                    className={`rounded-md px-1 my-2`}
                >
                    <Text>{body}</Text>
                </View>

                {/* { props.children } */}

                {/* <Text
                    className={`text-lg leading-6 text-center`}
                >
                    {footer}
                </Text> */}
            </View>
        </View>
    );
}






// const styles = {
//     codeHighlightContainer: "rounded-md px-1 my-2",
//     getStartedContainer: "items-center mx-12",
//     getStartedText: "text-lg leading-6 text-center",
//     helpContainer: "items-center mx-5 mt-4",
//     helpLink: "py-4",
//     helpLinkText: "text-center"
// };
