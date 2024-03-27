
import React from 'react';
import { Text, View } from 'react-native';
import CardInfo from '~/components/CardInfo';
import DefaultView from '~/components/DefaultView';


const Profile = () => {
    // const fightTypesList =
    //     ['Karatê', 'Jiu-Jitsu', 'Muai-Thay', 'Judô']

    return (
        <DefaultView title={"Meu Perfil"}>

            <CardInfo
                title='Informações Pessoais'
                body='Informações sobre o condicionamento físico para dar dicas de como melhorar o condicionamento físico.'
                footer=''
            />

            <Text className={`text-xl font-bold`}>Meu Perfil</Text>
            <Text className={`text-xl font-bold`}>Altura</Text>
            <Text className={`text-xl font-bold`}>Peso</Text>
            <Text className={`text-xl font-bold`}>Idade</Text>
            <Text className={`text-xl font-bold`}>Sexo</Text>
            <Text className={`text-xl font-bold`}>Perfil Biológico: Magro, Comun, Atlético, Grande</Text>
            <Text className={`text-xl font-bold`}>IMC</Text>
            
            <View className={"h-[1px] mt-2 mb-4 w-5/6 bg-gray-200"} />

            <CardInfo
                title='Sobrepeso'
                body='Seu peso ideal é: "90kg". Você precisa perder cerca de "8kg".'
                footer=''
            />
{/* 
            {fightTypesList.map(
                fight => {
                    return <Text className={`text-red-600`}>{fight}</Text>
                }
            )} */}
        </DefaultView>
    );

}

export default Profile;