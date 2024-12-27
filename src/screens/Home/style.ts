import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
    },
    eventName: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
        textAlign: 'center'
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
        textAlign: 'center'
    },

    form: {
        width: '100%',
        flexDirection: 'column', // Alterado para alinhar os itens verticalmente
        marginTop: 36,
        marginBottom: 42,
    },
    input: {
        width: '100%', // Ocupa toda a largura do formulário
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginBottom: 12, // Espaçamento entre os inputs
    },
    button: {
        width: '100%', // Botão ocupa toda a largura
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    infoEvent: {
        width: '100%',
        textAlign: 'center'
    },
    listEmptyText: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center'
    }
})