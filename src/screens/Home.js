import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Feed() {
    return (
        <View style={styles.container}>

            <Image
                source={{ uri: 'https://media.discordapp.net/attachments/1097493454545764472/1218176887436738652/j93X1xBzszMNwAAAABJRU5ErkJggg.png?ex=6606b6a2&is=65f441a2&hm=23c32bf3f01cd9bc96c8060af0e47680c50f8dacba79a46c3b1f5efb29e98e3f&=&format=webp&quality=lossless&width=733&height=541' }} 
                style={styles.image} 
            />
            <Text style={styles.text}>Bem vindo (a) ao aplicativo da GamesTech o 
            aplicativo que te ajudará a manter informado através de seus blogs sobre o mundo dos Games!</Text>
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
        textAlign: 'center',
        marginTop: 20, 
    },
    image: {
        width: 230, 
        height: 200, 
    }
});
