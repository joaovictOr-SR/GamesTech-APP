import React from "react";
import {View,Text, StyleSheet, Image} from 'react-native';

export default function About(){
    return(
       <View style={styles.container}>
           <Text style={styles.titulo}>GameTech: A Evolução do Jornalismo de Jogos</Text>
           <Text style={styles.text}>Fundada em 1º de abril de 2015, a GameTech rapidamente
            se estabeleceu como uma das líderes no jornalismo de jogos eletrônicos. Nascida 
            da paixão e do expertise de um grupo de amigos gamers e desenvolvedores, a GameTech
             tem o compromisso de trazer as últimas notícias, análises aprofundadas, e coberturas 
             exclusivas do mundo dos jogos.</Text>
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
        textAlign: 'justify',
        padding: 20,
    },
    titulo: {
        color: '#FFFFFF',
        fontSize: 19,
        textAlign: 'center',
        padding: 20,
    },
});