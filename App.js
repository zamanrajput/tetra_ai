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
      height: 200,
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
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
    },
  });
  
  return (
    <ScrollView style={{padding:12,}}>
      <Text style={{color:'black',fontWeight:'bold'}}>Start Here</Text>

      <View style={styles.cardContainer}>
        <ImageBackground
          source={{ uri: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg' }} // replace with your image URL
          style={styles.imageBackground}
          imageStyle={styles.image}
        >
          <Text style={styles.imageText}>Improve Me</Text>
        </ImageBackground>
      </View>

      <View style={styles.cardContainer}>
        <ImageBackground
          source={{ uri: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg' }} // replace with your image URL
          style={styles.imageBackground}
          imageStyle={styles.image}
        >
          <Text style={styles.imageText}>Master any cover</Text>
        </ImageBackground>
      </View>

      <View style={styles.cardContainer}>
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg' }} // replace with your image URL
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
