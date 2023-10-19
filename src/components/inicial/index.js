import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Inicial (){
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.gradient} colors={['#F8836A', 'rgba(242, 190, 179, 0.42)']}>
                 <Image style={styles.inicialLogo} source={require("../../../assets/inicialLogo.png")} />
                 
                 <TouchableOpacity
                    style={styles.botaoCadastrar}
                    onPress={() => {
                    }}
                 >
                    <Text style={styles.botaoTextoCadastrar}>Cadastre-se</Text>

                 </TouchableOpacity>

                 <TouchableOpacity
                    style={styles.botaoEntrar}
                    onPress={() => {
                    }}
                 >
                    <Text style={styles.botaoTextoEntrar}>Entrar</Text>

                 </TouchableOpacity>
            </LinearGradient>
           
        </View>
    )
       
}

const styles = StyleSheet.create({
    container: {
       width: '100%',
       height: '100%',
       justifyContent: 'center',
       alignItems: 'center',
       flex: 1
    },

    inicialLogo:{
        width: 250,
        height: 237.918,
        flex: 0
    },

    gradient:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    botaoCadastrar:{
        marginTop: 60,
        width: 250,
        height: 40,
        backgroundColor: 'transparent',
        borderRadius: 20,
        borderWidth: 2, 
        borderColor: '#703C31',
        justifyContent: 'center',
        alignItems: 'center',
    },

    botaoTextoCadastrar:{
        color: '#703C31', 
        fontSize: 18,
        fontWeight: '900',
        fontFamily: 'Roboto'
    },

    botaoEntrar:{
        marginTop: 10,
        width: 250,
        height: 40,
        backgroundColor: '#703C31',
        borderRadius: 20,
        borderWidth: 2, 
        borderColor: '#703C31',
        justifyContent: 'center',
        alignItems: 'center',
    },

    botaoTextoEntrar:{
        color: '#F2BEB3', 
        fontSize: 18,
        fontWeight: '900',
        fontFamily: 'Roboto'
    }
});