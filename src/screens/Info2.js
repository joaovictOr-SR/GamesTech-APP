import React from "react";
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';

export default function Info2({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Far Cry celebra 20 anos com descontos de até 85% em jogos da franquia</Text>
                <Text style={styles.text}>A Ubisoft está comemorando o 20º aniversário da série Far Cry e está celebrando 
                a data oferecendo descontos de até 85% em todos os jogos da franquia. A promoção, válida até o dia 3 de 
                abril, abrange a Ubisoft Store, Steam e outras plataformas online, com variações nos períodos de desconto
                 conforme a plataforma.</Text>
                <Text style={styles.text}>Além disso, a Ubisoft realizará uma transmissão ao vivo em 21 de março, às 14h 
                (horário de Brasília), na Twitch. Durante a transmissão, desenvolvedores compartilharão histórias e momentos
                 memoráveis da série. Embora não haja anúncios de novos jogos, os espectadores poderão obter drops do Twitch 
                 para Far Cry 6.</Text>
                <Text style={styles.text}>A Ubisoft Store oferece duas fases de vendas com descontos de até 85% em jogos Far Cry. 
                A Steam apresenta ofertas na maioria dos jogos da série até 21 de março, enquanto a Epic Games Store estende seus
                 descontos até 28 de março.</Text>
                 
                 <Text style={styles.titulo}>DLCs e promoções em diversas plataformas</Text>
                 <Text style={styles.text}>A desenvolvedora também revelou que os descontos se estendem para os consoles. Dessa forma, 
                 jogadores de PlayStation e Xbox também podem aproveitar reduções de preço em jogos selecionados e DLCs até 27 e 25 de
                  março, respectivamente.</Text>
                 <Text style={styles.text}>Entre as ofertas destacadas na Ubisoft Store até 20 de março estão expansões e passes de temporada
                  com descontos de até 70%. A partir de 20 de março até 3 de abril, edições especiais e padrão de diversos títulos da série 
                  estarão disponíveis por preços reduzidos, incluindo edições de até 85% de desconto.</Text>
                 <Text style={styles.text}>No PlayStation Store, os jogadores encontrarão ofertas similares, com descontos em edições especiais 
                 e padrão de vários jogos Far Cry. Recentemente, a loja de jogos da Sony anunciou uma série de promoções.</Text>  
                 <Text style={styles.text}>“O Steam oferecerá descontos na maioria dos jogos Far Cry até 21 de março, e todos os jogos Far Cry 
                 terão descontos na Epic Games Store até 28 de março. Os jogadores de PlayStation e Xbox também podem obter descontos em jogos 
                 Far Cry selecionados e DLC até 27 de março e março. 25, respectivamente”, destacou a Ubisoft.</Text>  

                <Image
                    source={{ uri: 'https://www.adrenaline.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=910&height=568&format=.jpg&quality=91&imagick=/wp-content/uploads/2024/03/far-cry-20-anos-912x569.jpg' }}
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
