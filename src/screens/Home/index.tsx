import React, {useState} from "react";
import {Alert, FlatList, TextInput, TouchableOpacity, View, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Participant} from "../components/Participant";
import {styles} from "./style";

type ParticipantType = {
    name: string;
    phone: string;
};

export function Home() {
    const [participants, setParticipants] = useState<ParticipantType[]>([]);
    const [participantName, setParticipantName] = useState('');
    const [participantPhone, setParticipantPhone] = useState('');

    const navigation = useNavigation();

    function addParticipant() {
        if (participantName.trim() === '' || participantPhone.trim() === '') {
            return Alert.alert("Dados inválidos", "O nome e o telefone do participante não podem estar vazios.");
        }
        if (participants.some(p => p.name === participantName)) {
            return Alert.alert("Participante já existe", "Já existe um participante com esse nome.");
        }
        setParticipants([...participants, {name: participantName, phone: participantPhone}]);
        setParticipantName('');
        setParticipantPhone('');
    }

    function handleParticipantPress(participant: ParticipantType) {
        navigation.navigate("ParticipantDetails", {participant});
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor="#6B6B6B"
                onChangeText={setParticipantName}
                value={participantName}
            />
            <TextInput
                style={styles.input}
                placeholder="Telefone do participante"
                placeholderTextColor="#6B6B6B"
                keyboardType="phone-pad"
                onChangeText={setParticipantPhone}
                value={participantPhone}
            />
            <TouchableOpacity style={styles.button} onPress={addParticipant}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
            <FlatList
                data={participants}
                keyExtractor={item => item.phone}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => handleParticipantPress(item)}>
                        <Participant
                            name={item.name}
                            onRemove={() => setParticipants(prev => prev.filter(p => p.phone !== item.phone))}
                        />
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>Adicione participantes à lista de presença.</Text>
                )}
            />
        </View>
    );
}
