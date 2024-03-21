
import { Text, View } from 'react-native';
import CardInfo from '~/components/CardInfo';
import DefaultView from '~/components/DefaultView';


const Page = () => {
    const emergencyTypesList =
        ['Incêndio', 'Apagão', 'Falta de Agua', 'Falta de Comida', 'Tsunami', 'Epidemia', 'Guerra']

    return (
        <DefaultView title={"Home"}>

            <Text className={`text-xl font-bold`}>Notícias</Text>
            <View className={"h-[1px] mt-2 mb-4 w-5/6 bg-gray-200"} />

            <CardInfo
                title='Estoque de arroz baixo'
                body='Nos próximos dias o preço do arroz pode subir devido a redução da oferta em relação a demanda.'
                footer=''
            />

            <Text className={`text-xl font-bold`}>Fórum</Text>
            <View className={"h-[1px] mt-2 mb-4 w-5/6 bg-gray-200"} />

            <CardInfo
                title='Melhores alimentos para cultivar'
                body='Nesse tópico vamos debater sobre as melhores opções de cultivo de comida para consumo próprio.'
                footer=''
            />

            <Text className={`text-xl font-bold`}>Gráfico do Estoque</Text>
            <View className={"h-[1px] mt-2 mb-4 w-5/6 bg-gray-200"} />


            {/* {Gráfico do Estoque} */}

        </DefaultView>
    );

}

export default Page;


const styles = {
    container: `items-center flex-1 justify-center`,
    separator: `h-[1px] my-4 w-4/5 bg-gray-200`,
    title: `text-xl font-bold`
};

