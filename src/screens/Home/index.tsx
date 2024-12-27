import {useState} from "react";
import {Alert, FlatList, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Participant} from "../components/Participant";
import {styles} from "./style";

export function Home() {

    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');


    function viewEventInfo() {
        return <View style={styles.infoEvent}>
            <Text style={styles.eventName}>
                Virada de Ano / Alienados
            </Text>
            <Text style={styles.eventDate}>
                Terça, 31 de Dezembro de 2024.
            </Text>
        </View>;
    }

    function viewAddParticipant() {
        return <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor="#6B6B6B"
                onChangeText={setParticipantName}
                value={participantName}
            />
            <TouchableOpacity style={styles.button} onPress={addParticipant}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>;
    }

    function listParticipants() {
        return <FlatList
            data={participants}
            keyExtractor={(item) => item}
            renderItem={({item}) => (
                <Participant
                    key={item}
                    name={item}
                    onRemove={() => removeParticipant(item)}
                />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                </Text>
            )}
        />;
    }

    function addParticipant() {
        if (participantName.trim() === '') {
            return Alert.alert("Nome inválido", "O nome do participante não pode estar vazio.");
        }
        if (participants.includes(participantName)) {
            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
        }
        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');
    }

    function removeParticipant(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            {viewEventInfo()}
            {viewAddParticipant()}
            {listParticipants()}
        </View>
    )
}