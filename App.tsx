
import './global.css';


import "react-native-gesture-handler";


import RootStack from "./src/navigation";
import AppHeader from '~/components/AppHeader';

export default function App() {

	return (
		<>
			<AppHeader appName={"Sobrevivencialismo"} />
			<RootStack />
		</>
	);

}
