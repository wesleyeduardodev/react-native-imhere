import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#131016",
        padding: 24,
    },
    input: {
        width: "100%",
        height: 56,
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        color: "#FFF",
        padding: 16,
        fontSize: 16,
        marginBottom: 12,
    },
    button: {
        width: "100%",
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31CF67",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    listEmptyText: {
        color: "#FFF",
        fontSize: 14,
        textAlign: "center",
    },
    title: {
        fontSize: 24,
        color: "#FFF",
        fontWeight: "bold",
        marginBottom: 24,
        textAlign: "center",
    },
    label: {
        fontSize: 18,
        color: "#6B6B6B",
        marginTop: 16,
    },
    value: {
        fontSize: 20,
        color: "#FFF",
        marginTop: 4,
    },
});
