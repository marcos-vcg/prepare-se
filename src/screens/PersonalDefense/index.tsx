
import React from 'react';
import { Text, View } from 'react-native';
import CardInfo from '~/components/CardInfo';


const Page = () => {
    const fightTypesList =
        ['Karatê', 'Jiu-Jitsu', 'Muai-Thay', 'Judô']

    return (
        <View className={"flex items-center flex-1 px-2 mt-4"}>

            <Text className={`text-xl font-bold`}>Defesa Pessoal</Text>
            <View className={"h-[1px] mt-2 mb-4 w-5/6 bg-gray-200"} />

            <CardInfo
                title='Defender a si e ao próximo'
                body='Aprender a lutar não se trata de atacar os outros, mas sim defender a si mesmo e a terceiros de situações de risco.'
                footer=''
            />

            <Text className={`text-xl font-bold`}>Artes Marciais</Text>
            <View className={"h-[1px] mt-2 mb-4 w-5/6 bg-gray-200"} />

            <CardInfo
                title='Aprenda a se Defender'
                body='Você precisa saber se defender para ter maiores chances de sobreviver a um confronto de combate corporal.'
                footer=''
            />

            {fightTypesList.map(
                fight => {
                    return <Text className={`text-red-600`}>{fight}</Text>
                }
            )}
        </View>
    );

}

export default Page;


const styles = {
    container: `items-center flex-1 justify-center`,
    separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
    title: `text-xl font-bold`
};

