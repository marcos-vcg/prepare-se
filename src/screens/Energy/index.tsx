
import { Text, View } from 'react-native';
import DefaultView from '~/components/DefaultView';
import LinkTo from '~/components/LinkTo';


const Page = () => {
    const emergencyTypesList =
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
        <DefaultView title={"Energias"}>

            <Text className={styles.title}>Controle das Fontes de Energia</Text>

            {emergencyTypesList.map(
                emergency => {
                    return <LinkTo
                        link={emergency.link}
                        to={emergency.name}
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
    separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
    title: `text-xl font-bold`
};

