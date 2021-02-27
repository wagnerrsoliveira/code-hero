import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListHero from './pages/ListHero';
import DetailHero from './pages/DetailHero';
import { PALETTE } from './assets/Colors';
import Web from './pages/Web';


const Stack = createStackNavigator();

function getDefaultOption(title: string) {
    return ({
        title,
        headerStyle: {
            backgroundColor: PALETTE.PRIMARY
        },
        headerTitleStyle: {
            color: PALETTE.WHITE
        },
        headerTintColor: PALETTE.WHITE
    })
}


function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListHero">
                <Stack.Screen name="ListHero" component={ListHero} options={{ headerShown: false }} />
                <Stack.Screen name="DetailHero" component={DetailHero}
                    options={ getDefaultOption('Detalhes')} />
                <Stack.Screen name="Web" component={Web}
                    options={getDefaultOption('Web Info')} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;