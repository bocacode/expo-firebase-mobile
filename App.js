import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from 'react-native'
import { firebase } from './config'

const db = firebase.firestore()

export default function App() {
  const [allRestaurants, setAllRestaurants] = useState()

  const handleAddRestaurant = () => {
    db.collection('restaurant').doc().set({
      name: 'Monicas Restaurant',
      address: 'Boca',
      image:
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    })
  }

  const handleGetRestaurants = () => {
    db.collection('restaurant').onSnapshot(querySnapshot => {
      const todosRestaurantes = []
      querySnapshot.forEach(doc => {
        todosRestaurantes.push(doc.data())
      })
      setAllRestaurants(todosRestaurantes)
    })
  }

  console.log(allRestaurants)

  return (
    <SafeAreaView style={{...styles.container, marginTop: Platform.OS === 'android' ? 20 : 0 }}>
      <ScrollView>
        <Text> Our app </Text>
        <Button title='add restaurant' onPress={handleAddRestaurant} />
        <TouchableOpacity style={styles.button} onPress={handleGetRestaurants}>
          <Text style={{ fontSize: 29 }}>get restaurants </Text>
        </TouchableOpacity>

        {allRestaurants &&
          allRestaurants.map(restaurant => {
            return (
              <View>
                <Text> {restaurant.name}</Text>
                <Image source={{ uri: restaurant.image }} style={{ width: '100%', height: 200 }} />
              </View>
            )
          })}

        <StatusBar style='auto' />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  button: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 20,
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
