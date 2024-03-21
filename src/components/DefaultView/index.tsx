import { ScrollView, Text, View } from 'react-native';



const DefaultView = (props: any) => {

    return (
        <ScrollView>
            <View className={"flex items-center flex-1 px-2 mt-4"}>

                <Text className={"flex text-xl font-bold"}>{props.title}</Text>
                <View className={"h-[1px] mt-2 mb-4 w-5/6 bg-gray-200"} />

                {props.children}

            </View></ScrollView>
    );

}

export default DefaultView;
