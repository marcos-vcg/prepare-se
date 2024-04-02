import { StyleSheet } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '.';
import Home from '../screens/Home';
import Stock from '../screens/Stock';
import EmergencyPlans from '../screens/EmergencyPlans';
import PersonalDefense from '~/screens/PersonalDefense';
import Health from '../screens/Health';
import AppHeader from '~/components/AppHeader';
import { theme } from 'utils/theme';



const Tab = createBottomTabNavigator();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {

  return <FontAwesome size={28} style={styles.tabBarIcon} {...props} />;
}

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>;

export default function TabLayout({ navigation }: Props) {


  return (
    <>
      <AppHeader appName={"Sobrevivencialismo"} navigation={navigation} backgroundColor={theme.colors.background.DEFAULT} />

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          // tabBarStyle: { backgroundColor: '#3c3c3c'},
          tabBarStyle: { backgroundColor: theme.colors.background.DEFAULT },

          headerShown: false,

        }}>


        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,

          }}
        />

        <Tab.Screen
          name='Stock'
          component={Stock}
          options={{
            title: 'Stock',
            tabBarIcon: ({ color }) => <TabBarIcon name='shopping-cart' color={color} />,

          }}
        />

        <Tab.Screen
          name='EmergencyPlans'
          component={EmergencyPlans}
          options={{
            title: 'EmergencyPlans',
            tabBarIcon: ({ color }) => <TabBarIcon name='warning' color={color} />,

          }}
        />

        <Tab.Screen
          name='PersonalDefense'
          component={PersonalDefense}
          options={{
            title: 'PersonalDefense',
            tabBarIcon: ({ color }) => <TabBarIcon name='fire' color={color} />,

          }}
        />

        <Tab.Screen
          name='Health'
          component={Health}
          options={{
            title: 'Health',
            tabBarIcon: ({ color }) => <TabBarIcon name='heart' color={color} />,

          }}
        />

      </Tab.Navigator>
    </>
  );
}


const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15
  },
  tabBarIcon: {
    marginBottom: -3
  }
});
