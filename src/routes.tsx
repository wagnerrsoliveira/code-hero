import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListHero from './pages/ListHero';
import DetailHero from './pages/DetailHero';
import { PALETTE } from './assets/Colors';


const Stack = createStackNavigator();


function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListHero">
                <Stack.Screen name="ListHero" component={ListHero} options={{ headerShown: false }} />
                <Stack.Screen name="DetailHero" component={DetailHero}
                    options={{
                        title: 'Detalhes',
                        headerStyle: {
                            backgroundColor: PALETTE.PRIMARY
                        },
                        headerTitleStyle:{
                            color:PALETTE.WHITE
                        },
                        headerTintColor:PALETTE.WHITE
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;