import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Profile from "./../screens/Profile";
import TabNavigator from "./tab-navigator";
import AppHeader from "~/components/AppHeader";
import { Button, StatusBar } from "react-native";
import React from "react";


export type RootStackParamList = {
    DrawerNavigator: undefined;
    Profile: undefined;
    TabNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
    return (
        <NavigationContainer>
            {/* <StatusBar backgroundColor={"#38A69D"} barStyle={"light-content"}/> */}
            <AppHeader appName={"Sobrevivencialismo"} />
            
            <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{}}>
                <Stack.Screen
                    name="TabNavigator"
                    component={TabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ 
                        title: "Perfil",
                        presentation: "modal",

                        headerShown: true,
                        headerTitleAlign: "center", 
                        headerTitleStyle: { fontWeight: 'bold', },
                        headerTintColor: '#fff',
                        headerStyle: { backgroundColor: '#f4511e',},
                        

                        headerRight: () => (
                            <Button
                                disabled={false}
                                onPress={() => null}
                                title="update"
                                color="green" />
                        ),

                        // headerLeft: () => null,
                        // headerLeftLabelVisible: true,
                        // headerBackTitleVisible: false,
                        // headerBackTitle: 'Custom Back',
                        // headerBackTitleStyle: { fontSize: 30 },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
