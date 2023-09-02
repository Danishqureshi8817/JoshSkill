import { View, Text } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home,LessonChat} from '../screen';
import navigationStrings from '../constants/navigationStrings';





const Stack = createNativeStackNavigator();


const HomeStack = () => {




  return (
    <Stack.Navigator screenOptions={{headerShown:false}}  >

    <Stack.Screen name={navigationStrings.Home} component={Home} options={{headerShown:true}} />
    <Stack.Screen name={navigationStrings.Lesson} component={LessonChat} options={{headerShown:true,}} />

 


  </Stack.Navigator>
  )
}

export default HomeStack