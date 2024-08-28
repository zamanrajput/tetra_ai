import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import FeatherIcons from 'react-native-vector-icons/Feather';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();


import React from 'react';
import { ScrollView, ImageBackground, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

 function Home() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: '#fff',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft: 20,
      marginBottom: 10,
    },
    cardContainer: {
      marginHorizontal: 0,
      marginBottom:10,
      borderRadius: 10,
      marginVertical:10,
      overflow: 'hidden',
    },
    imageBackground: {
      width: width - 40,
      height: 300,
      justifyContent: 'center',
      alignItems: 'start',
    },
    image: {
      borderRadius: 10,
    },
    imageText: {
   
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
    },
  });
  
  const image1 = require('./assets/image1.jpg')
  const image2 = require('./assets/image2.jpg')
  const image3 = require('./assets/image3.jpg')

  return (
    <ScrollView style={{padding:12,}}>
      <Text style={{color:'black',fontWeight:'bold'}}>Start Here</Text>

      <View style={styles.cardContainer}>
        <ImageBackground
          source={image1} // replace with your image URL
          style={styles.imageBackground}
          imageStyle={styles.image}
        >
          <Text style={styles.imageText}>Improve Me</Text>
        </ImageBackground>
      </View>

      <View style={styles.cardContainer}>
        <ImageBackground
          source={image2} // replace with your image URL
          style={styles.imageBackground}
          imageStyle={styles.image}
        >
          <Text style={styles.imageText}>Master any cover</Text>
        </ImageBackground>
      </View>

      <View style={styles.cardContainer}>
        <ImageBackground
          source={image3} // replace with your image URL
          style={styles.imageBackground}
          imageStyle={styles.image}
        >
          <Text style={styles.imageText}>Evaluate your setup</Text>
        </ImageBackground>
      </View>
      <View style={{height:100}}/>
    </ScrollView>
  );
}





function HomeScreen() {
  return <View>
    <Text>HomeScreen</Text>
  </View>
}
function ExploreScreen() {
  return <View>
    <Text>ExploreScreen</Text>
  </View>
}

function ProfileScreen() {
  return <View>
    <Text>ProfileScreen</Text>
  </View>
}


function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: 'absolute', height:60},
        tabBarIconStyle:{
          height:40
        }

      }}
    
    >
      <Tab.Screen options={{
        tabBarLabel: 'Home',
        tabBarLabelStyle:{
          fontSize:13
          ,marginBottom:4
        },
        tabBarIconStyle:{
          marginTop:4
        },
        tabBarIcon: ({ focused, color, size }) => (

          <FeatherIcons name="home" color={color} size={30} />
        ),
      }} name="Home" component={Home} />



      <Tab.Screen options={{
        tabBarLabel: 'Explore',
        tabBarLabelStyle:{
          fontSize:13
          ,marginBottom:4
        },
        tabBarIconStyle:{
          marginTop:4
        },
        tabBarIcon: ({ focused, color, size }) => (

          <FeatherIcons name="search" color={color} size={30} />
        ),
      }} name="Explore" component={ExploreScreen} />


      <Tab.Screen options={{
        tabBarLabel: 'Profile',
        tabBarLabelStyle:{
          fontSize:13
          ,marginBottom:4
        },
        tabBarIconStyle:{
          marginTop:4
        },
        tabBarIcon: ({ focused, color, size }) => (

          <FontAwesomeIcons name="user" color={color} size={30} />
        ),
      }} name="Profile" component={ProfileScreen} />

    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <MyTabs />




    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
