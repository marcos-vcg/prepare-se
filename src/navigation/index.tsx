import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

// import Modal from "../../screens/modal";
import TabNavigator from "./tab-navigator";
import AppHeader from "~/components/AppHeader";
import { StatusBar } from "react-native";


export type RootStackParamList = {
    DrawerNavigator: undefined;
    // Modal: undefined;
    TabNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={"#38A69D"} barStyle={"light-content"}></StatusBar>
            
            <Stack.Navigator initialRouteName="TabNavigator">
                <Stack.Screen
                    name="TabNavigator"
                    component={TabNavigator}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                    name="Modal"
                    component={Modal}
                    options={{ presentation: "modal", headerLeft: () => null }}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
