import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View>

                <Image
                    fadeDuration={0}
                    resizeMode="contain"
                    style={styles.garisimage}
                    source={require('../../assets/img/dasia.png')} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    logo: {
        fontSize: 35,
        fontWeight: "bold",
        letterSpacing: 5,
        color: "black"
    },
    Garis: {
        left: 35,
        position: "relative"
    },
    garisimage: {
        width: Dimensions.get('window').width * 34.3 / 100,
        height: Dimensions.get('window').height * 8.9 / 100
    }
});
