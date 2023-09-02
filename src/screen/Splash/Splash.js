import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { wHeight,wWidht,sHeight,sWidht } from '../../utiles/Dimensions'
import { Logo } from '../../constants/imagePath'


const Splash = () => {
  return (
    <View style={styles.mainContainer} >
         

<Image source={Logo} style={styles.logo} />


    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    logo:{
        width:wWidht*0.6,
        height:wHeight*0.3,
        resizeMode:'contain'
    }
})