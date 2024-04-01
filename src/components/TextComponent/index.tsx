import React from "react";
import { Text, View } from "react-native";



export default function TextComponent(
    { text, color, className }: { text: string, color: string, className: string }
) {
    return (
        <View>
            <Text
                className={className}
                style={{
                    color: color
                }}
            >
                {text}
            </Text>
        </View>
    );
}