import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { responsiveHeight,responsiveFontSize,responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../styles/colors'
import CountDown from 'react-native-countdown-component';

const TrailTimer = () => {

   
    const [trialEnd, settrialEnd] = useState(false)


    

  return (
    <View>
              {/* { trialEnd ?
        <View style={styles.trialTimeWrapper} >
           <Text style={styles.trialTimeText} >Free Trial ends in</Text>
           <View style={styles.trialTimerWrapper} >
            <Text style={styles.trialTime} >19</Text>
            <Text style={styles.trialTimeDots} >:</Text>
            <Text style={styles.trialTime} >55</Text>
            <Text style={styles.trialTimeDots} >:</Text>
            <Text style={styles.trialTime} >25</Text>
           </View>
        </View> : 
        <View style={styles.trialTimeEndedWrapper} >
           <Text style={styles.trialTimeEnded} >Your Free trail has ended</Text>
          
        </View>

        } */}
        <View style={[styles.trialTimeWrapper,{ display:trialEnd?'none':'flex'}]} >
           <Text style={styles.trialTimeText} >Free Trial ends in</Text>
           <View style={styles.trialTimerWrapper} >
           <CountDown
        until={60000}
        onFinish={() => {settrialEnd(!trialEnd)}}
        // onPress={() => alert('hello')}
        size={20}
        timeToShow={['H','M', 'S']}
        timeLabels={false}
        digitStyle={{backgroundColor:colors.yellow2 }}
        digitTxtStyle={{ color:colors.black, }}
      />
         </View>
        </View> 
       

        <View style={[styles.trialTimeEndedWrapper,,{ display:!trialEnd?'none':'flex'}]} >
           <Text style={styles.trialTimeEnded} >Your Free trail has ended</Text>
          
        </View>
        

    </View>
  )
}

export default TrailTimer

const styles = StyleSheet.create({

    trialTimeWrapper:{
        flexDirection:'row',
        backgroundColor:colors.yellow1,
        alignSelf:'center',
        marginTop:responsiveHeight(3),
        paddingHorizontal:responsiveWidth(12),
        paddingVertical:responsiveHeight(1),
        gap:responsiveWidth(3),
        borderRadius:responsiveWidth(1),
        alignItems:'center',
       
      },
      trialTimeText:{
        color:colors.black,
        fontSize:responsiveFontSize(1.9),
        fontWeight:'500'
      },
      trialTimerWrapper:{
       flexDirection:'row',
       alignItems:'center',
       gap:responsiveWidth(1)
      },
      trialTime:{
        backgroundColor:colors.yellow2,
        paddingHorizontal:responsiveWidth(2),
        paddingVertical:responsiveHeight(1.1),
        borderRadius:responsiveWidth(1),
        color:colors.black,
        fontSize:responsiveFontSize(1.9)
      },
      trialTimeDots:{
        fontSize:responsiveFontSize(1.9),
        color:colors.black,
        fontWeight:'600'
      },
      trialTimeEnded:{
        color:colors.black,
        fontSize:responsiveFontSize(1.9),
        fontWeight:'500'
      },
      trialTimeEndedWrapper:{
        backgroundColor:colors.yellow1,
        alignSelf:'center',
        marginTop:responsiveHeight(3),
        paddingHorizontal:responsiveWidth(25),
        paddingVertical:responsiveHeight(2),
   
        borderRadius:responsiveWidth(1),
        alignItems:'center'
      }
})