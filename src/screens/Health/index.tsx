
import React from 'react';
import { Text, View } from 'react-native';
import CardInfo from '~/components/CardInfo';
import DefaultView from '~/components/DefaultView';


const Page = () => {
    const healthTypesList =
        ['Corrida', 'Academia', 'Funcional', 'Artes Marciais']
    const fightTypesList =
        ['Karatê', 'Jiu-Jitsu', 'Muai-Thay']

    return (
        <DefaultView title={"Saúde"}>

            <CardInfo
                title='Você está acima do peso'
                body='Você precisa perder cerca de X quilos.
                Ao perder peso alem de melhorar sua saúde tambem melhora as suas chances de sobrevivência nas situações de emergência.'
                footer=''
            />

            <Text className={`text-xl font-bold`}>Medicina</Text>
            <View className={"h-[1px] mt-2 mb-4 w-5/6 bg-gray-200"} />

            <CardInfo
                title='Aprenda sobre Medicina Alternativa'
                body='Em uma situação de Emergência podem faltar remédios e ter alguns conhecimentos de medicina alternativa pode aumentar sua qualidade de vida.'
                footer=''
            />



            <Text className={`text-xl font-bold`}>Atividade Física</Text>
            <View className={"h-[1px] mt-2 mb-4 w-5/6 bg-gray-200"} />

            <CardInfo
                title='Se mantenha em Forma'
                body='Estar em forma vai ajudar a correr e a ter mais preparo físico durante atividades braçais.'
                footer=''
            />

            {healthTypesList.map(
                health => {
                    return <Text className={`text-red-600`}>{health}</Text>
                }
            )}
        </DefaultView>
    );

}

export default Page;


const styles = {
    container: `items-center flex-1 justify-center`,
    separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
    title: `text-xl font-bold`
};

