import React from "react";
import {NavigationContainer} from "react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Home} from "./src/screens/Home";
import {ParticipantDetails} from "./src/screens/components/ParticipantDetails";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{title: "Lista de Participantes"}}
                />
                <Stack.Screen
                    name="ParticipantDetails"
                    component={ParticipantDetails}
                    options={{title: "Detalhes do Participante"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
