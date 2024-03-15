import React from "react";
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';

export default function Info1({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Palworld anuncia primeira raid do game</Text>
                <Text style={styles.text}>A Pocketpair revelou, nesta sexta-feira (15), qual será a
                primeira Raid de Palworld. Chamado de Bellanoir, o novo Pal será um inimigo formidável.
                De acordo com a Pocketpair, somente os jogadores mais fortes terão uma chance contra o
                novo monstro.</Text>
                <Text style={styles.text}>A Raid de Palworld não tem data prevista de lançamento. No teaser
                trailer, a Pocketpair apenas informou que Bellanoir chegará ao game “em breve”. Nas próximas
                semanas, o estúdio deve fornecer mais informações sobre a atualização.</Text>

                <Text style={styles.titulo}>Raid de Palworld vai chegar em breve</Text>
                <Text style={styles.text}>Enquanto na internet gamers descrevem Bellanoir como “Evil Gardevoir”,
                fãs de Palworld estão ansiosos com a estreia da primeira Raid. O conteúdo adicional promete um
                novo desafio, no jogo que pegou a indústria dos games de surpresa.</Text>
                <Text style={styles.text}>Não sabemos quando a primeira Raid de Palworld vai começar,
                mas a Pocketpair busca voluntários para ajudar a corrigir bugs. O objetivo é conseguir
                lançar as expansões de forma mais rápida. Além disso, a companhia recentemente pediu
                desculpa por corrigir bug popular.</Text>

                <Image
                    source={{ uri: 'https://www.adrenaline.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=910&height=568&format=.jpg&quality=91&imagick=/wp-content/uploads/2024/03/Palworld-raid-912x569.jpg' }}
                    style={styles.image}
                />
                <Pressable style={styles.botao}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.textoBotao}>Voltar para o Blog</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#323238',
    },

    botao: {
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: '#8314CC',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 50,
    },

    textoBotao: {
        color: "white",
        fontSize: 20,
    },

    text: {
        color: '#FFFFFF',
        fontSize: 16,
        justifyContent: 'justify',
        padding: 20,
    },
    titulo: {
        color: '#8314CC',
        fontSize: 20,
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        width: 300,
        height: 200,
        marginVertical: 20,
        borderRadius: 10,
    }
});
