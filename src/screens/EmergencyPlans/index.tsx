
import { Text, View } from 'react-native';
import LinkTo from '~/components/LinkTo';


const Page = () => {
    const emergencyTypesList =
        [
            { name: 'Incêndio', link: '' },
            { name: 'Apagão', link: '' },
            { name: 'Falta de Agua', link: '' },
            { name: 'Falta de Comida', link: '' },
            { name: 'Tsunami', link: '' },
            { name: 'Epidemia', link: '' },
            { name: 'Guerra', link: '' },
        ]

    return (
        <View className={"flex items-center flex-1 px-2 mt-4"}>

            <Text className={"flex text-xl font-bold"}>Planos de Emergência</Text>

            <View className={"h-[1px] mt-2 mb-4 w-5/6 bg-gray-200"} />

            <Text className={styles.title}>Situações Críticas</Text>

            {emergencyTypesList.map(
                emergency => {
                    return <LinkTo
                        link={emergency.link}
                        to={emergency.name}
                    />
                    // return <Text className={`text-red-600`}>{emergency}</Text>
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

