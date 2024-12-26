import {Text, View} from "react-native";

import {styles} from "./style";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Wesley Eduardo
            </Text>

            <Text style={styles.eventDate}>
                Acelera Programador
            </Text>
        </View>
    )
}