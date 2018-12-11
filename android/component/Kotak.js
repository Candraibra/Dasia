import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import { withNavigation } from 'react-navigation';
import RF from "react-native-responsive-fontsize";

class Kotak extends React.Component {
    render() {
        // const alignTextTop = Platform.OS ==='android' ? {textAlignVertical: 'top'}: {};
        return (
            <View>
                <TouchableOpacity style={styles.container1} onPress={() => this.props.navigation.navigate('Details')}>
                    <Text style={styles.judul}>
                        Materi - Materi
        </Text>
                    <Text style={styles.subjudul}>
                        Berisi tentang materi - materi tentang
                budayat yang bisa anda pelajari
        </Text>
                    <Text style={styles.keterangan}>
                        27 Materi
        </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container2} onPress={() => this.props.navigation.navigate('Lagu')}>
                    <Text style={styles.judul}>
                        Lagu Daerah
        </Text>
                    <Text style={styles.subjudul}>
                        Berisi tentang lagu - lagu tentang budaya yang bisa anda pelajari
        </Text>
                    <Text style={styles.keterangan}>
                        7 Lagu Daerah
        </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container3} onPress={() => this.props.navigation.navigate('Tentang')}>
                    <Text style={styles.judul1}>
                        Tentang Aplikasi
        </Text>
                    <Text style={styles.subjudul}>
                        Berisi tentang informasi aplikasi.
        </Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container1: {
        marginTop: Dimensions.get('window').height * 8.2 / 100,
        height: Dimensions.get('window').height * 20.5 / 100,
        width: Dimensions.get('window').width * 85.1824818 / 100,
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 10,
        borderLeftColor: '#ff6382',
        borderLeftWidth: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
    },
    container2: {
        marginTop: Dimensions.get('window').height * 2.7 / 100,
        height: Dimensions.get('window').height * 20.5 / 100,
        width: Dimensions.get('window').width * 85.1824818 / 100,
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 10,
        borderLeftColor: '#fdb94c',
        borderLeftWidth: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
    },
    container3: {
        marginTop: Dimensions.get('window').height * 2.7 / 100,
        height: Dimensions.get('window').height * 20.5 / 100,
        width: Dimensions.get('window').width * 85.1824818 / 100,
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 10,
        borderLeftColor: '#4886ff',
        borderLeftWidth: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
    },
    judul: {
        paddingLeft: '10%',
        fontSize: RF(2.6),
        color: '#5e5e5e',
        fontFamily: 'Inter-UI-Medium'
    },
    judul1: {
        paddingLeft: '10%',
        fontSize: RF(2.6),
        color: '#5e5e5e',
        fontFamily: 'Inter-UI-Medium'
    },
    subjudul: {
        paddingLeft: '10%',
        fontSize: RF(2.05),
        color: '#b3b3b3',
        paddingTop: 6.7,
        paddingRight: 18,
        fontFamily: 'Inter-UI-Medium'
    },
    keterangan: {
        paddingLeft: '10%',
        fontSize: RF(2.05),
        color: '#d5d5d5',
        paddingTop: 6.7,
        fontFamily: 'Inter-UI-Medium'
    }
});

export default withNavigation(Kotak);