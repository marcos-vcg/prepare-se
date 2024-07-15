
import './global.css';
import "react-native-gesture-handler";
import { theme } from 'utils/theme';

import RootStack from "./src/navigation";
// import AppHeader from '~/components/AppHeader';
import { StatusBar } from 'react-native';

const AppTheme = {
	colors: {
		primary: 'gray' || theme?.colors?.primary?.DEFAULT,
		backgroundColor: "#3c3c3c",

		gray1: "#3c3c3c",
		gray2: "#515151",
		gray3: "#666666",
		gray4: "#8c8c8c",
		gray5: "#b5b5b5",

		grayOxford1: "#171718",
		grayOxford2: "#1f2124",
		grayOxford3: "#393d42",
		grayOxford4: "#6a6e73",
		grayOxford5: "#9fa3a9",

		cinzaMaisEscuro: "#252525",
		cinzaMeioEscuro: "#4f5050",
		cinzaMedio: "#7a7a7a",
		cinzaMeioClaro: "#a4a4a5",
		cinzaMaisClaro: "#cecfcf",

		teste: "#f4511e",
	}
}

export default function App() {

	return (
		<>
			<StatusBar
				backgroundColor={theme.colors.black}

				// backgroundColor={"#252525"}
				// backgroundColor={AppTheme.colors.primary}
				// backgroundColor={"#38A69D"}
				barStyle={"light-content"}
			/>
			{/* <AppHeader appName={"Sobrevivencialismo"} /> */}
			<RootStack />
		</>
	);

}
