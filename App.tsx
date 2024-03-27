
import './global.css';


import "react-native-gesture-handler";


import RootStack from "./src/navigation";
import AppHeader from '~/components/AppHeader';
import { StatusBar } from 'react-native';

export default function App() {

	return (
		<>
			<StatusBar backgroundColor={"#38A69D"} barStyle={"light-content"} />
			{/* <AppHeader appName={"Sobrevivencialismo"} /> */}
			<RootStack />
		</>
	);

}
