import { StyleSheet, Text, View,Image,FlatList,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import TrailTimer from '../../components/TrailTimer'
import { BlueTick, RBBanner } from '../../constants/imagePath'
import { wHeight, wWidht } from '../../utiles/Dimensions'
import F6Icon from 'react-native-vector-icons/FontAwesome6';


const CompletePay = () => {

    const coursePointData =[
       '12 months access to all 4 courses',
       'Spoken English plus 3 courses',
       '2 Courses by Ankur warikoo',
       'Course by Satish Anand'
    ]

  return (
    <View  style={styles.mainContainer} >
    

    {/* <ScrollView style={{flex:0.9}} >
       <TrailTimer/>
       <Image source={RBBanner}  style={styles.addBanner} />

        <Text style={styles.heading} >English Speaking Course</Text>
        <View style={styles.coursePointWrapper} >
        <FlatList
       
       data={coursePointData}
       // numColumns={2}
       renderItem={({item,index}) => (
           <View style={styles.row1courseItem}>
               <Image source={BlueTick} style={styles.blueTick} />
               <Text style={styles.rowcourseItemText}>{item}</Text>
           </View>
       )}
       keyExtractor={index => index}
      numColumns={2}
      
     />
        </View>
   

      <View style={styles.greenBoxWrapper} >
         
         <Text style={styles.greenBoxText1} >Spoken English</Text>
         <F6Icon onPress={()=>{}}  name="plus" size={responsiveWidth(4)} color={colors.buttonGreen} style={{}} />
         <Text style={styles.greenBoxText}  >How to Start a Conversation</Text>
         <F6Icon onPress={()=>{}}  name="plus" size={responsiveWidth(4)} color={colors.buttonGreen} style={{}} />
         <Text style={styles.greenBoxText}  >Personality Development</Text>
         <F6Icon onPress={()=>{}}  name="plus" size={responsiveWidth(4)} color={colors.buttonGreen} style={{}} />
         <Text style={styles.greenBoxText4}  >Public Speaking</Text>

      </View>

      <Image source={RBBanner}  style={styles.addBanner} />
      <Image source={RBBanner}  style={styles.addBanner} />
      <Image source={RBBanner}  style={styles.addBanner} />
      </ScrollView>
      
      <View style={{flex:0.1,alignItems:'center',justifyContent:'center'}} >


      <TouchableOpacity onPress={()=>{navigation.navigate(CompletePay)}}  style={styles.button}>
          <Text style={styles.buttomText} >Pay 1199</Text>
      </TouchableOpacity>

      </View> */}
      

    </View>
  )
}

export default CompletePay

const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        backgroundColor:colors.white,
        paddingHorizontal:responsiveWidth(2),
        // alignItems:'center',
        gap:responsiveHeight(1.5),
        
      

    },
    addBanner:{
       resizeMode:'contain',
    //    width:'90%',
       height:wHeight*0.25,
       alignSelf:'center'
    //    marginTop:responsiveHeight(1)
    },
    heading:{
      color:colors.black,
      fontSize:responsiveFontSize(2.6),
      fontWeight:'bold',
      alignSelf:'center'
    //   marginTop:responsiveHeight(1)
    },
    coursePointWrapper:{
        // marginTop:responsiveHeight(2),
        height:wHeight*0.1,
        alignSelf:'center'
    },
    blueTick:{
        resizeMode:'contain',
        width:wWidht*0.1,
        height:wHeight*0.03,
        alignSelf:'flex-start'
    },
    rowcourseItemText:{
        color:colors.black,
        width:wWidht*0.35,
        fontSize:responsiveFontSize(1.8),
        fontWeight:'500',
        

    },
    row1courseItem:{
        flexDirection:'row',
        // alignItems:'center',
        marginBottom:responsiveHeight(1),
        
    },
    greenBoxWrapper:{
        backgroundColor:colors.greenShadow,
        width:'90%',
        height:wHeight*0.08,
        borderColor:colors.buttonGreen,
        borderWidth:1,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-evenly',
        paddingHorizontal:responsiveWidth(0.5),
        borderRadius:responsiveWidth(1),
        alignItems:'center'
       
        // flexWrap:'wrap'
   
        
    },
    greenBoxText1:{
        color:colors.black,
        width:responsiveWidth(12),
        fontSize:responsiveFontSize(1.5),
        textAlign:'center',
        fontWeight:'500'
    },
    greenBoxText:{
        color:colors.black,
        width:responsiveWidth(22),
        fontSize:responsiveFontSize(1.5),
        textAlign:'center',
        fontWeight:'500'
    },
    greenBoxText4:{
        color:colors.black,
        width:responsiveWidth(14),
        fontSize:responsiveFontSize(1.5),
        textAlign:'center',
        fontWeight:'500'
    },
    button:{
        backgroundColor:colors.themeColor,
        paddingHorizontal:responsiveWidth(10),
        paddingVertical:responsiveHeight(2),
        alignItems:'center',
        borderRadius:responsiveWidth(10),
        position:'relative',
      
 
        
    
    },
    buttomText:{
        color:colors.whiteText,
        fontSize:responsiveFontSize(1.9),
        fontWeight:'500',
        letterSpacing:0.4
    
    
    },

})