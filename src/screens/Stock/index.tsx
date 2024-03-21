
import { Text, View } from 'react-native';
import DefaultView from '~/components/DefaultView';
import LinkTo from '~/components/LinkTo';
import ProgressLine from '~/components/ProgressLine';


const Page = () => {
    const stockControlList =
        [
            { name: 'Arroz', qtdMensal: '4', qtdAtual: '1' },
            { name: 'Feijão', qtdMensal: '2', qtdAtual: '1' },
            { name: 'Macarrão', qtdMensal: '4', qtdAtual: '1' },
            { name: 'Sal', qtdMensal: '2', qtdAtual: '1' },
            { name: 'Açúcar', qtdMensal: '4', qtdAtual: '1' },
            { name: 'Café', qtdMensal: '4', qtdAtual: '1' },
            { name: 'Pão', qtdMensal: '4', qtdAtual: '1' },
        ]
    // [{ name: 'Arroz', qtdMinimal: { s: "1", m: "4", a: "" } }, 'Feijão', 'Macarrão', 'Sal', 'Açúcar', 'Café', 'Pão']

    const energyTypesList =
        [
            { name: 'Elétrica', link: '' },
            { name: 'Baterias', link: '' },
            { name: 'Gás', link: '' },
            { name: 'Combustível', link: '' },
            { name: 'Inflamáveis', link: '' },
            { name: 'Velas', link: '' },
            { name: 'Acendedores', link: '' },
        ]

    return (
        <DefaultView title={"Controle de Estoque"}>

            <Text className={"my-4 text-xl font-bold"}>Controle de Água</Text>
            <Text className={"text-red-600"}>Potável - 6 Litros</Text>
            <Text className={"text-red-600"}>Não Tratada - 10 Litros</Text>

            <View className={"h-[1px] mt-2 mb-4 w-5/6 bg-gray-200"} />

            <Text className={"my-4 text-xl font-bold"}>Controle de Comida</Text>

            {stockControlList.map(
                food => {
                    return <ProgressLine
                        link=''
                        name={food.name}
                        atual={food.qtdAtual}
                        ideal={food.qtdMensal}
                    />
                    // <Text className={`text-red-600`}>{food}</Text>

                }
            )}


            <Text className={"flex mt-5 text-xl font-bold"}>Energias</Text>
            <View className={"h-[1px] mt-2 mb-4 w-5/6 bg-gray-200"} />
            <Text className={"flex mt-5 text-xl font-bold"}>Fontes de Energia</Text>

            {energyTypesList.map(
                energy => {
                    return <LinkTo
                        link={energy.link}
                        to={energy.name}
                    />
                    // return <Text className={`text-red-600`}>{emergency}</Text>
                }
            )}

        </DefaultView>
    );

}

export default Page;


const styles = {
    container: `items-center flex-1 justify-center`,
    separator: `h-[1px] my-7 w-5/6 bg-gray-200`,
    title: `text-xl font-bold`
};

