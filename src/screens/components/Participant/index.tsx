import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./style";

type Props = {
    name: string;
    phone: string;
    onRemove: () => void;
};

export function Participant({name, phone, onRemove}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.phone}>
                    {phone}
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    );
}