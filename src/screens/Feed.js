import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Feed() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Ultimas Atualizações do Aplicativo</Text>
            <Text style={styles.titulatuali}>Atualização 2.0 15/03/2024</Text>
            <Text style={styles.text}>Interface Renovada: Inspirada nos feedbacks de nossa
             valiosa comunidade, redesenhamos a interface do usuário para ser mais intuitiva,
              rápida e agradável visualmente. Navegar pelas últimas notícias, artigos, e vídeos 
              nunca foi tão fácil.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#323238',
    },
    text: {
        color: '#FFFFFF', 
        fontSize: 16, 
        justifyContent: 'justify',
        padding: 20,
    },
    titulo: {
        color: '#FFFFFF', 
        fontSize: 20,
        justifyContent: 'justify',
        padding: 20,
    },
    titulatuali: {
        color: '#FFFFFF', 
        fontSize:17,
        justifyContent: 'justify',
        padding: 20,
    }

});
