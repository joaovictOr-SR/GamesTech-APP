import React from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Blog({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Veja algumas noticias vinda do Blog</Text>
            <Pressable 
            style={styles.botao} 
            onPress={() => navigation.navigate('Info1')}>
               <Text style={styles.textoBotao}>Abra noticia 1</Text>
            </Pressable>
            <Pressable 
            style={styles.botao} 
            onPress={() => navigation.navigate('Info2')}>
               <Text style={styles.textoBotao}>Abra Noticia 2</Text>
            </Pressable>
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

    botao:{
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: '#8314CC',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 10,
    },

    textoBotao: {
        color: "white",
        fontSize: 20,
    }, 
    text: {
        color: '#FFFFFF', 
        fontSize: 20, 
        textAlign: 'center',
    }

});
