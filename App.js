import { View, Text } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/Routes';
// import AuthStack from './AuthStack';
// import { AuthContext } from '../utiles/AuthContext';
// import Services from '../utiles/Services';


const App = () => {

  // const {userData,setUserData} = useContext(AuthContext)

  // useEffect(() => {
    
  //   Services.getUserAuth().then( resp => {
  //     console.log(resp)
  //     if(resp){
  //       setUserData(resp)
  //     }
  //     else{
  //       setUserData(null)
  //     }
  //   })
  // }, [])
  

  return (
      <View style={{flex:1}} >
        <Routes/>
      </View>
  )
}

export default App