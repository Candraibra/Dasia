import React from 'react';
import { View, Image, Text, TouchableOpacity, YellowBox, Alert, ScrollView, Dimensions, StatusBar, Button, StyleSheet, ImageBackground, ToastAndroid } from 'react-native';
import { createStackNavigator, navigation } from 'react-navigation';
import Kotak from './android/component/Kotak.js';
import Logo from './android/component/Logo.js';
import { Col, Grid, Row } from "react-native-easy-grid"
import RF from "react-native-responsive-fontsize";
// import Sound from 'react-native-sound';
import { PlaySound, StopSound, PlaySoundRepeat, PlaySoundMusicVolume } from 'react-native-play-sound';
import Navigation from 'react-navigation';
// import createFluidNavigator from 'react-navigation-fluid-transitions';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTransparent: 'true',
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Logo />
        <Kotak />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: "Materi - Materi ",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1,
      fontSize: 18,
      fontFamily: 'Inter-UI-Reguler'
    },
    headerStyle: {
      backgroundColor: '#4886ff',

    },
    headerTintColor: '#fff',
    headerRight: (
      <Text />
    ),
    // TintColor : '#000213',

  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar backgroundColor="#4886ff" barStyle="light-content" />
        <Text style={{ fontSize: RF(2.6), color: '#5e5e5e', paddingLeft: Dimensions.get('window').width * 7.3 / 100, paddingTop: Dimensions.get('window').height * 6.7 / 100, fontFamily: 'Inter-UI-Bold' }}>Pilih Materi</Text>
        <Text style={{ fontSize: RF(2.05), color: '#c6c6c6', paddingRight: '21.2%', paddingLeft: Dimensions.get('window').width * 7.3 / 100, paddingTop: Dimensions.get('window').height * 2.7 / 100, fontFamily: 'Inter-UI-Medium' }}>Berisi tentang materi - materi tentang
                budayat yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini</Text>
        <ScrollView scrollEnabled={true} showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', paddingLeft: Dimensions.get('window').width * 7.3 / 100 }}>
          <View style={{ marginTop: Dimensions.get('window').height * 4.5 / 100, borderRadius: 5, marginRight: Dimensions.get('window').width * 7.3 / 100, width: Dimensions.get('window').width * 78.3 / 100, height: Dimensions.get('window').height * 58.8 / 100, backgroundColor: '#fdb94c' }}>
            <Text style={{
              fontSize: RF(2.6),
              color: '#fff',
              fontFamily: 'Inter-UI-Medium', paddingLeft: Dimensions.get('window').width * 7.8 / 100, paddingTop: Dimensions.get('window').height * 5 / 100
            }}>
              Tarian Daerah</Text>
            <Text style={{ fontSize: RF(2.05), paddingRight: Dimensions.get('window').width * 7.8 / 100, color: '#fff', fontFamily: 'Inter-UI-Medium', paddingLeft: Dimensions.get('window').width * 7.8 / 100, paddingTop: Dimensions.get('window').height * 2.8 / 100 }}>
              Berisi tentang materi - materi tentang budaya yang bisa anda pelajari
            </Text>
            <TouchableOpacity onPress={() =>
              this.props.navigation.navigate('Tarian')} style={{ marginLeft: Dimensions.get('window').width * 40 / 100, marginTop: Dimensions.get('window').width * 40 / 100, justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width * 30.7 / 100, height: Dimensions.get('window').height * 8.1 / 100, backgroundColor: '#4886ff', borderRadius: 5 }}>
              <Text style={{ fontSize: RF(2.05), color: '#fff' }}>Lihat</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: Dimensions.get('window').height * 4.5 / 100, borderRadius: 5, marginRight: Dimensions.get('window').width * 7.3 / 100, width: Dimensions.get('window').width * 78.3 / 100, height: Dimensions.get('window').height * 58.8 / 100, backgroundColor: '#fdb94c' }}>
            <Text style={{
              fontSize: RF(2.6),
              color: '#fff',
              fontFamily: 'Inter-UI-Medium', paddingLeft: Dimensions.get('window').width * 7.8 / 100, paddingTop: Dimensions.get('window').height * 5 / 100
            }}>
              Rumah Adat</Text>
            <Text style={{ fontSize: RF(2.05), paddingRight: Dimensions.get('window').width * 7.8 / 100, color: '#fff', fontFamily: 'Inter-UI-Medium', paddingLeft: Dimensions.get('window').width * 7.8 / 100, paddingTop: Dimensions.get('window').height * 2.8 / 100 }}>
              Berisi tentang materi - materi tentang budaya yang bisa anda pelajari
            </Text>
            <TouchableOpacity onPress={() =>
              this.props.navigation.navigate('Rumah')} style={{ marginLeft: Dimensions.get('window').width * 40 / 100, marginTop: Dimensions.get('window').width * 40 / 100, justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width * 30.7 / 100, height: Dimensions.get('window').height * 8.1 / 100, backgroundColor: '#4886ff', borderRadius: 5 }}>
              <Text style={{ fontSize: RF(2.05), color: '#fff' }}>Lihat</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: Dimensions.get('window').height * 4.5 / 100, borderRadius: 5, marginRight: Dimensions.get('window').width * 7.3 / 100, width: Dimensions.get('window').width * 78.3 / 100, height: Dimensions.get('window').height * 58.8 / 100, backgroundColor: '#fdb94c' }}>
            <Text style={{
              fontSize: RF(2.6),
              color: '#fff', paddingRight: Dimensions.get('window').width * 7.8 / 100,
              fontFamily: 'Inter-UI-Medium', paddingLeft: Dimensions.get('window').width * 7.8 / 100, paddingTop: Dimensions.get('window').height * 5 / 100
            }}>
              Cagar Budaya</Text>
            <Text style={{ fontSize: RF(2.05), paddingRight: Dimensions.get('window').width * 7.8 / 100, color: '#fff', fontFamily: 'Inter-UI-Medium', paddingLeft: Dimensions.get('window').width * 7.8 / 100, paddingTop: Dimensions.get('window').height * 2.8 / 100 }}>
              Berisi tentang materi - materi tentang budaya yang bisa anda pelajari
            </Text>
            <TouchableOpacity onPress={() =>
              this.props.navigation.navigate('Tempat')} style={{ marginLeft: Dimensions.get('window').width * 40 / 100, marginTop: Dimensions.get('window').width * 40 / 100, justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width * 30.7 / 100, height: Dimensions.get('window').height * 8.1 / 100, backgroundColor: '#4886ff', borderRadius: 5 }}>
              <Text style={{ fontSize: RF(2.05), color: '#fff' }}>Lihat</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: Dimensions.get('window').height * 4.5 / 100, borderRadius: 5, marginRight: Dimensions.get('window').width * 7.3 / 100, width: Dimensions.get('window').width * 78.3 / 100, height: Dimensions.get('window').height * 58.8 / 100, backgroundColor: '#fdb94c' }}>
            <Text style={{
              fontSize: RF(2.6),
              color: '#fff', paddingRight: Dimensions.get('window').width * 7.8 / 100,
              fontFamily: 'Inter-UI-Medium', paddingLeft: Dimensions.get('window').width * 7.8 / 100, paddingTop: Dimensions.get('window').height * 5 / 100
            }}>
              Senjata Daerah</Text>
            <Text style={{ fontSize: RF(2.05), paddingRight: Dimensions.get('window').width * 7.8 / 100, color: '#fff', fontFamily: 'Inter-UI-Medium', paddingLeft: Dimensions.get('window').width * 7.8 / 100, paddingTop: Dimensions.get('window').height * 2.8 / 100 }}>
              Berisi tentang materi - materi tentang budaya yang bisa anda pelajari
            </Text>
            <TouchableOpacity onPress={() =>
              this.props.navigation.navigate('Senjata')} style={{ marginLeft: Dimensions.get('window').width * 40 / 100, marginTop: Dimensions.get('window').width * 40 / 100, justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width * 30.7 / 100, height: Dimensions.get('window').height * 8.1 / 100, backgroundColor: '#4886ff', borderRadius: 5 }}>
              <Text style={{ fontSize: RF(2.05), color: '#fff' }}>Lihat</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

    );
  }
}
class LaguScreens extends React.Component {
  static navigationOptions = {
    title: "Lagu Daerah ",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1,
      fontSize: 18,
      fontFamily: 'Inter-UI-Reguler'
    },
    headerStyle: {
      backgroundColor: '#ff6382',

    },
    headerTintColor: '#fff',
    headerRight: (
      <Text />
    ),
    // TintColor : '#000213',

  };
  state = {
    names: [
      { 'judul': 'In My Fellings', 
      'asal': 'Amrik', 
      "src": 'inmyfellings', 
     },
     { 'judul': 'In My Fellings', 
     'asal': 'Amrika', 
     "src": 'inmyfellings', 
    },
    { 'judul': 'In My Fellings', 
    'asal': 'Amrikee', 
    "src": 'inmyfellings', 
   },
   { 'judul': 'In My Fellings', 
   'asal': 'Amriko', 
   "src": 'inmyfellings', 
  },
     
    ]
  }
  render() {
    return (

      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ fontSize: RF(2.6), color: '#5e5e5e', marginBottom: 30, paddingLeft: Dimensions.get('window').width * 7.3 / 100, paddingTop: Dimensions.get('window').height * 6.7 / 100, fontFamily: 'Inter-UI-Bold' }}>Kumpulan Lagu</Text>
        {this.state.names.map((item, index) =>
       <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: Dimensions.get('window').height * 4.4 / 100 }}>
     

          <Grid style={{ paddingLeft: Dimensions.get('window').width * 7.3 / 100 }}>
            <Col style={{ flex: 1, justifyContent: 'center', }}>
              <Row style={{ marginBottom: 10 }}>
                <Text style={{ color: "#5e5e5e", fontFamily: "InterUI-Medium", fontSize: RF(2.5) }}>{item.judul}</Text>
              </Row>
              <Row>
                <Text style={{ color: "#929292", fontFamily: "InterUI-Regular", fontSize: RF(2.3) }}>{item.asal}</Text>
              </Row>
            </Col>
            <Col style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
              <View
                style={{ padding: 15, backgroundColor: "#ff6382", borderRadius: 3 }}
                onPress={() => PlaySound(item.src)}>
                <Text style={{ color: "white" }}>Play</Text>
              </View>
            </Col>
          </Grid>
             <View style={{ borderBottomColor: "#929292", width: "90%", borderBottomWidth: 0.7, paddingTop: 15 }}>
             </View>
     
        </ScrollView>)}

      </View>
    );
  }
}

class TarianScreen extends React.Component {
  static navigationOptions = {
    title: "Tarian Daerah",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1,
      fontSize: 18,
      fontFamily: 'Inter-UI-Reguler'
    },
    headerStyle: {
      backgroundColor: '#4886ff',

    },
    headerTintColor: '#fff',
    headerRight: (
      <Text />
    ),
    // TintColor : '#000213',

  };
  state = {
    names: [
      { 'name': 'Tarian Daerah', "image": require('./assets/img/coba.png'), 'joko': 'Berisi tentang materi - materi tentang budaya yang  bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 1 },
      { 'name': 'Joged Daerah', "image": require('./assets/img/coba.png'), 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 2 },
      { 'name': 'Tot Daerah', "image": require('./assets/img/dasia.png'), 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 3 },
      { 'name': 'Lucu Daerah', "image": require('./assets/img/dasia.png'), 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 4 },
      { 'name': 'Joko Njogged', "image": require('./assets/img/dasia.png'), 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 5 },
      { 'name': 'Lutung Daerah', "image": require('./assets/img/dasia.png'), 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 6 },
    ]
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar backgroundColor="#4886ff" barStyle="light-content" />
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingBottom: Dimensions.get('window').height * 4.4 / 100 }}>
          {this.state.names.map((item, index) =>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
              <ImageBackground source={item.image} key={item.key} imageStyle={{ borderRadius: 5 }} style={{ marginTop: Dimensions.get('window').height * 4.4 / 100, borderRadius: 5, width: Dimensions.get('window').width * 85.4 / 100, height: Dimensions.get('window').height * 26.7 / 100 }}>
                <Text style={{ fontFamily: 'Inter-UI-Bold', fontWeight: 'bold', fontSize: RF(2.6), color: '#fff', paddingLeft: Dimensions.get('window').width * 4.9 / 100, paddingTop: Dimensions.get('window').height * 3.5 / 100 }}>Tarian Daerah</Text>
                <Text style={{ fontFamily: 'Inter-UI-Reguler', fontSize: RF(2.05), color: '#fff', paddingRight: Dimensions.get('window').width * 4.9 / 100, paddingLeft: Dimensions.get('window').width * 4.9 / 100, paddingTop: Dimensions.get('window').height * 1.75 / 100 }}>Jgyygygyyyaodawkdawodkwaodkwaodkwaok</Text>
                <TouchableOpacity onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate('TarianDetails', { name: item.name, image: item.image, isi: item.joko });
                }} style={{ marginTop: Dimensions.get('window').height * 6 / 100, justifyContent: 'center', alignItems: 'center', marginLeft: Dimensions.get('window').width * 4.9 / 100, borderRadius: 5, backgroundColor: '#4886ff', width: Dimensions.get('window').width * 22.5 / 100, height: Dimensions.get('window').height * 6.5 / 100 }}>
                  <Text style={{ fontSize: RF(2.05), color: '#fff', }}>{item.name}</Text>
                </TouchableOpacity>
              </ImageBackground>
            </ScrollView>)}
        </ScrollView>
      </View>
    );
  }
}

class TarianDetails extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'A Nested Details Screen'),
      headerTitleStyle: {
        textAlign: "center",
        flex: 1,
        fontSize: 18,
        fontFamily: 'Inter-UI-Reguler'
      },
      headerStyle: {
        backgroundColor: '#4886ff',

      },
      headerTintColor: '#fff',
      headerRight: (
        <Text />
      ),
    };
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
        <Image style={{ marginTop: Dimensions.get('window').height * 7.3 / 100, width: Dimensions.get('window').width * 85.4 / 100, height: Dimensions.get('window').height * 32.6 / 100, borderRadius: 5, borderColor: '#000' }} source={this.props.navigation.state.params.image} />
        <Text style={{ marginTop: Dimensions.get('window').width * 1 / 100, fontSize: RF(2.4), lineHeight: 40, textAlign: 'auto', fontFamily: 'Inter-UI-Reguler', color: '#929292', marginLeft: Dimensions.get('window').width * 7.3 / 100, marginRight: Dimensions.get('window').width * 7.3 / 100 }}>{this.props.navigation.state.params.isi}</Text>
      </View>
    );
  }
}

class RumahScreen extends React.Component {
  static navigationOptions = {
    title: "Rumah Budaya",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1,
      fontSize: 18,
      fontFamily: 'Inter-UI-Reguler'
    },
    headerStyle: {
      backgroundColor: '#4886ff',

    },
    headerTintColor: '#fff',
    headerRight: (
      <Text />
    ),
    // TintColor : '#000213',

  };

  state = {
    names: [
      { 'name': 'Tarian Daerah', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 1 },
      { 'name': 'Joged Daerah', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 2 },
      { 'name': 'Tot Daerah', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 3 },
      { 'name': 'Lucu Daerah', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 4 },
      { 'name': 'Joko Njogged', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 5 },
      { 'name': 'Lutung Daerah', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 6 },
    ]
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar backgroundColor="#4886ff" barStyle="light-content" />

        {/* <Text style={{ fontSize: RF(2.6), color: '#5e5e5e', paddingLeft: Dimensions.get('window').width*7.3/100, paddingTop: Dimensions.get('window').height*6.7/100, fontFamily: 'Inter-UI-Bold' }}>Pilih Materi</Text>
        <Text style={{ fontSize: RF(2.05), color: '#c6c6c6', paddingRight: '21.2%', paddingLeft: Dimensions.get('window').width*7.3/100, paddingTop: Dimensions.get('window').height*2.7/100, fontFamily: 'Inter-UI-Medium' }}>Berisi tentang materi - materi tentang
                budayat yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini</Text>
        
        <ScrollView scrollEnabled={true}showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{flexGrow: 1,justifyContent: 'space-between',paddingLeft:Dimensions.get('window').width*7.3/100}}>
          <View  key = {item.id} style={{marginTop:Dimensions.get('window').height*4.5/100,borderRadius:5,marginRight:Dimensions.get('window').width*7.3/100,width: Dimensions.get('window').width*78.3/100,height: Dimensions.get('window').height*58.8/100,backgroundColor: '#fdb94c'}} >
            <Text style={{fontSize: RF(2.6), 
        color: '#fff',  
        fontFamily: 'Inter-UI-Medium',paddingLeft:Dimensions.get('window').width*7.8/100,paddingTop:Dimensions.get('window').height*5/100}}>{item.name}</Text>
            <Text style={{fontSize: RF(2.05),paddingRight:Dimensions.get('window').width*7.8/100,
        color: '#fff',  
        fontFamily: 'Inter-UI-Medium',paddingLeft:Dimensions.get('window').width*7.8/100,paddingTop:Dimensions.get('window').height*2.8/100}}>{item.joko}</Text>
          <TouchableOpacity onPress={() =>
            this.props.navigation.navigate('Materis', {itemName: item.name})} style={{marginLeft:Dimensions.get('window').width*40/100,marginTop:Dimensions.get('window').width*35/100,justifyContent: "center",alignItems: "center",width:Dimensions.get('window').width*30.7/100,height:Dimensions.get('window').height*8.1/100,backgroundColor:'#4886ff',borderRadius:5}}>
            <Text style={{fontSize:RF(2.05),color:'#fff'}}>Lihat</Text>
          </TouchableOpacity>
          </View>
          )}
          </ScrollView> */}
      </View>
    );
  }
}

class TempatWisataScreen extends React.Component {
  static navigationOptions = {
    title: "Tempat Wisata dan Cagar Budaya",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1,
      fontSize: 18,
      fontFamily: 'Inter-UI-Reguler'
    },
    headerStyle: {
      backgroundColor: '#4886ff',

    },
    headerTintColor: '#fff',
    headerRight: (
      <Text />
    ),
    // TintColor : '#000213',

  };

  state = {
    names: [
      { 'name': 'Tarian Daerah', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 1 },
      { 'name': 'Joged Daerah', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 2 },
      { 'name': 'Tot Daerah', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 3 },
      { 'name': 'Lucu Daerah', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 4 },
      { 'name': 'Joko Njogged', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 5 },
      { 'name': 'Lutung Daerah', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 6 },
    ]
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar backgroundColor="#4886ff" barStyle="light-content" />

        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
          <View style={{ marginTop: Dimensions.get('window').height * 4.4 / 100, borderRadius: 5, width: Dimensions.get('window').width * 85.4 / 100, height: Dimensions.get('window').height * 26.7 / 100, backgroundColor: '#000' }}>
            <Text style={{ fontSize: RF(2.05), color: '#fff', paddingLeft: Dimensions.get('window').width * 4.9 / 100, paddingTop: Dimensions.get('window').height * 3.5 / 100 }}>Joko</Text>
            <Text style={{ fontSize: RF(2.05), color: '#fff', paddingRight: Dimensions.get('window').width * 4.9 / 100, paddingLeft: Dimensions.get('window').width * 4.9 / 100, paddingTop: Dimensions.get('window').height * 1.75 / 100 }}>Jgyygygyyyaodawkdawodkwaodkwaodkwaok</Text>
            <View style={{ marginTop: Dimensions.get('window').height * 6 / 100, justifyContent: 'center', alignItems: 'center', marginLeft: Dimensions.get('window').width * 4.9 / 100, borderRadius: 5, backgroundColor: '#4886ff', width: Dimensions.get('window').width * 22.5 / 100, height: Dimensions.get('window').height * 6.5 / 100 }}>
              <Text style={{ fontSize: RF(2.05), color: '#fff', }}>Pelajari</Text>
            </View>
          </View>
        </ScrollView>
        {/* <Text style={{ fontSize: RF(2.6), color: '#5e5e5e', paddingLeft: Dimensions.get('window').width*7.3/100, paddingTop: Dimensions.get('window').height*6.7/100, fontFamily: 'Inter-UI-Bold' }}>Pilih Materi</Text>
        <Text style={{ fontSize: RF(2.05), color: '#c6c6c6', paddingRight: '21.2%', paddingLeft: Dimensions.get('window').width*7.3/100, paddingTop: Dimensions.get('window').height*2.7/100, fontFamily: 'Inter-UI-Medium' }}>Berisi tentang materi - materi tentang
                budayat yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini</Text>
        
        <ScrollView scrollEnabled={true}showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{flexGrow: 1,justifyContent: 'space-between',paddingLeft:Dimensions.get('window').width*7.3/100}}>
          <View  key = {item.id} style={{marginTop:Dimensions.get('window').height*4.5/100,borderRadius:5,marginRight:Dimensions.get('window').width*7.3/100,width: Dimensions.get('window').width*78.3/100,height: Dimensions.get('window').height*58.8/100,backgroundColor: '#fdb94c'}} >
            <Text style={{fontSize: RF(2.6), 
        color: '#fff',  
        fontFamily: 'Inter-UI-Medium',paddingLeft:Dimensions.get('window').width*7.8/100,paddingTop:Dimensions.get('window').height*5/100}}>{item.name}</Text>
            <Text style={{fontSize: RF(2.05),paddingRight:Dimensions.get('window').width*7.8/100,
        color: '#fff',  
        fontFamily: 'Inter-UI-Medium',paddingLeft:Dimensions.get('window').width*7.8/100,paddingTop:Dimensions.get('window').height*2.8/100}}>{item.joko}</Text>
          <TouchableOpacity onPress={() =>
            this.props.navigation.navigate('Materis', {itemName: item.name})} style={{marginLeft:Dimensions.get('window').width*40/100,marginTop:Dimensions.get('window').width*35/100,justifyContent: "center",alignItems: "center",width:Dimensions.get('window').width*30.7/100,height:Dimensions.get('window').height*8.1/100,backgroundColor:'#4886ff',borderRadius:5}}>
            <Text style={{fontSize:RF(2.05),color:'#fff'}}>Lihat</Text>
          </TouchableOpacity>
          </View>
          )}
          </ScrollView> */}
      </View>
    );
  }
}

class SenjataScreen extends React.Component {
  static navigationOptions = {
    title: "Senjata Daerah",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1,
      fontSize: 18,
      fontFamily: 'Inter-UI-Reguler'
    },
    headerStyle: {
      backgroundColor: '#4886ff',

    },
    headerTintColor: '#fff',
    headerRight: (
      <Text />
    ),
    // TintColor : '#000213',

  };

  state = {
    names: [
      { 'name': 'Tarian Daerah', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 1 },
      { 'name': 'Joged Daerah', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 2 },
      { 'name': 'Tot Daerah', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 3 },
      { 'name': 'Lucu Daerah', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 4 },
      { 'name': 'Joko Njogged', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 5 },
      { 'name': 'Lutung Daerah', 'joko': 'Berisi tentang materi - materi tentang budaya yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini', 'id': 6 },
    ]
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar backgroundColor="#4886ff" barStyle="light-content" />
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
          <View style={{ marginTop: Dimensions.get('window').height * 4.4 / 100, borderRadius: 5, width: Dimensions.get('window').width * 85.4 / 100, height: Dimensions.get('window').height * 26.7 / 100, backgroundColor: '#000' }}>
            <Text style={{ fontSize: RF(2.05), color: '#fff', paddingLeft: Dimensions.get('window').width * 4.9 / 100, paddingTop: Dimensions.get('window').height * 3.5 / 100 }}>Joko</Text>
            <Text style={{ fontSize: RF(2.05), color: '#fff', paddingRight: Dimensions.get('window').width * 4.9 / 100, paddingLeft: Dimensions.get('window').width * 4.9 / 100, paddingTop: Dimensions.get('window').height * 1.75 / 100 }}>Jgyygygyyyaodawkdawodkwaodkwaodkwaok</Text>
            <View style={{ marginTop: Dimensions.get('window').height * 6 / 100, justifyContent: 'center', alignItems: 'center', marginLeft: Dimensions.get('window').width * 4.9 / 100, borderRadius: 5, backgroundColor: '#4886ff', width: Dimensions.get('window').width * 22.5 / 100, height: Dimensions.get('window').height * 6.5 / 100 }}>
              <Text style={{ fontSize: RF(2.05), color: '#fff', }}>Pelajari</Text>
            </View>
          </View>
        </ScrollView>
        {/* <Text style={{ fontSize: RF(2.6), color: '#5e5e5e', paddingLeft: Dimensions.get('window').width*7.3/100, paddingTop: Dimensions.get('window').height*6.7/100, fontFamily: 'Inter-UI-Bold' }}>Pilih Materi</Text>
        <Text style={{ fontSize: RF(2.05), color: '#c6c6c6', paddingRight: '21.2%', paddingLeft: Dimensions.get('window').width*7.3/100, paddingTop: Dimensions.get('window').height*2.7/100, fontFamily: 'Inter-UI-Medium' }}>Berisi tentang materi - materi tentang
                budayat yang bisa anda pelajari, tentang tarian tarian daerah yang ada di Indonesia ini</Text>
        
        <ScrollView scrollEnabled={true}showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{flexGrow: 1,justifyContent: 'space-between',paddingLeft:Dimensions.get('window').width*7.3/100}}>
          <View  key = {item.id} style={{marginTop:Dimensions.get('window').height*4.5/100,borderRadius:5,marginRight:Dimensions.get('window').width*7.3/100,width: Dimensions.get('window').width*78.3/100,height: Dimensions.get('window').height*58.8/100,backgroundColor: '#fdb94c'}} >
            <Text style={{fontSize: RF(2.6), 
        color: '#fff',  
        fontFamily: 'Inter-UI-Medium',paddingLeft:Dimensions.get('window').width*7.8/100,paddingTop:Dimensions.get('window').height*5/100}}>{item.name}</Text>
            <Text style={{fontSize: RF(2.05),paddingRight:Dimensions.get('window').width*7.8/100,
        color: '#fff',  
        fontFamily: 'Inter-UI-Medium',paddingLeft:Dimensions.get('window').width*7.8/100,paddingTop:Dimensions.get('window').height*2.8/100}}>{item.joko}</Text>
          <TouchableOpacity onPress={() =>
            this.props.navigation.navigate('Materis', {itemName: item.name})} style={{marginLeft:Dimensions.get('window').width*40/100,marginTop:Dimensions.get('window').width*35/100,justifyContent: "center",alignItems: "center",width:Dimensions.get('window').width*30.7/100,height:Dimensions.get('window').height*8.1/100,backgroundColor:'#4886ff',borderRadius:5}}>
            <Text style={{fontSize:RF(2.05),color:'#fff'}}>Lihat</Text>
          </TouchableOpacity>
          </View>
          )}
          </ScrollView> */}
      </View>
    );
  }
}

class DetailsMateri extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('itemName', 'A Nested Details Screen'),
      headerTitleStyle: {
        textAlign: "center",
        flex: 1,
        fontSize: 18,
        fontFamily: 'Inter-UI-Reguler'
      },
      headerStyle: {
        backgroundColor: '#4886ff',

      },
      headerTintColor: '#fff',
      headerRight: (
        <Text />
      ),
    };
  };

  render() {
    const { navigation } = this.props;
    const itemName = navigation.getParam('itemName', 'NO-ID');

    return (
      <View style={styles.container}>
        <Text><Text>{itemName}</Text></Text>

      </View>
    );
  }
}

class TentangScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Tentang Aplikasi',
      headerTitleStyle: {
        textAlign: "center",
        flex: 1,
        fontSize: 18,
        fontFamily: 'Inter-UI-Reguler'
      },
      headerStyle: {
        backgroundColor: '#4886ff',

      },
      headerTintColor: '#fff',
      headerRight: (
        <Text />
      ),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          JOKO
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height * 8.9 / 100,
    backgroundColor: '#fff'
  },
  scrollContainer: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
    padding: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(240,240,240,1)',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    padding: 7,
  },
  header: {
    textAlign: 'left',
  },
  feature: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(180,180,180)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(230,230,230)',
  },
});

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Lagu: LaguScreens,
    Details: DetailsScreen,
    Materis: DetailsMateri,
    Tarian: TarianScreen,
    Rumah: RumahScreen,
    Tempat: TempatWisataScreen,
    Senjata: SenjataScreen,
    Tentang: TentangScreen,
    TarianDetails: TarianDetails,
  },
  {
    initialRouteName: 'Home',
  },

);



export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

