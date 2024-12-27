import React from "react";
import {View, Text} from "react-native";
import {styles} from "./style";

export function ParticipantDetails({route}: any) {
    const {participant} = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes do Participante</Text>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.value}>{participant.name}</Text>
            <Text style={styles.label}>Telefone:</Text>
            <Text style={styles.value}>{participant.phone}</Text>
        </View>
    );
}
