import { StyleSheet, Text, View,ImageBackground, Image,TouchableOpacity,Button,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import {Slider} from '@miblanchard/react-native-slider';
import TrackPlayer,{Capability,usePlaybackState,useProgress,State,RepeatMode,Event,useTrackPlayerEvents} from 'react-native-track-player';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { sWidht,sHeight,wHeight,wWidht } from '../utiles/Dimensions';
import { Lesson1,AvtarAudio } from '../constants/imagePath';
import colors from '../styles/colors';
import EIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';

const Lesson = ({data}) => {
    // // const data = props.data[1]
    const {audio,date,lessonImage,lessonTopic,tick,buttonText,messageText,messageTime} = data[0]
    // console.log("Props",!audio);
    const playbackState = usePlaybackState()
    const progress = useProgress()
    const [song, setSong] = useState(null);

   const Song = {    title: 'Avaritia',
    artist: 'deadmau5',
    artwork: require('../assets/song.png') ,
    url: 'https://studymaterial.newindiagyan.online/uploads/file_example_MP3_700KB.mp3', // Load media from the network
}
    useEffect( () => {
       
      setupPlayer()
    //  return  () =>{
    //     TrackPlayer.reset()
    //     // await TrackPlayer.remove(song)
    //     TrackPlayer.destory()
    //  }

    return () => {
      TrackPlayer.pause()
      TrackPlayer.remove()
      };
    }, [])
    
console.log("song",playbackState);
// console.log("trackerCC",currentTrack);

const toggelPlayback = async playbackState =>{

   console.log("current track",TrackPlayer.getCurrentTrack);
   const currentTrack = await TrackPlayer.getCurrentTrack
   if(currentTrack != null){
    if(playbackState === State.Paused || playbackState === State.Ready || playbackState === State.Buffering || playbackState === State.Connecting ){
    await TrackPlayer.play()
    }
    else if(playbackState === State.Stopped){
         // Seek to the beginning of the track
      await TrackPlayer.seekTo(0);
      // Play the current track again
      await TrackPlayer.play();
    } else{
        await TrackPlayer.pause()
    }

    }
}
   

    const setupPlayer = async ()=>{
        try {
            await TrackPlayer.setupPlayer();

        //    await TrackPlayer.updateOptions({
        //         // Media controls capabilities
        //         capabilities: [
        //             Capability.Play,
        //             Capability.Pause,
        //             Capability.SkipToNext,
        //             Capability.SkipToPrevious,
        //             Capability.Stop,
        //         ],
        //         // Capabilities that will show up when the notification is in the compact form on Android
        //         compactCapabilities: [Capability.Play, Capability.Pause],  
        //     });
           await TrackPlayer.add(audio)
        } catch (error) {   

        }
    }

    const Item = ({item}) => {
        
    //   { !!item?.audio &&
    //     setSong(item?.audio)
    //     console.log("audio PP");}
        
       return (
        <View style={styles.lessonWrapper}>
        <Text style={styles.lessonDate} >{item.date}</Text>
    
        <View style={styles.lessonTopicContainer} >
    
    
            <Image  source={Lesson1} style={styles.lessonLogo}/>
            <View style={styles.lessonTopicWrapper} >
            <Text style={styles.lessonTopicText} >{item?.lessonTopic}</Text>
    
            <View style={styles.lessonContinueWrapper}>
              
             { item.tick && <View style={styles.lessonContinueTickWrapper} >
              
              <Icon  name="checkmark-circle" size={responsiveWidth(4)} color={colors.blackOpacity50} style={{}} />
              <Icon  name="checkmark-circle" size={responsiveWidth(4)} color={colors.TickLesson} style={{}} />
              <Icon  name="checkmark-circle" size={responsiveWidth(4)} color={colors.blackOpacity50} style={{}} />
              <Icon  name="checkmark-circle" size={responsiveWidth(4)} color={colors.blackOpacity50} style={{}} />
    
             </View>}
              <TouchableOpacity style={styles.lessonContinueButton} >
                  <Text style={styles.lessonContinueButtonText} >{item?.buttonText}</Text>
              </TouchableOpacity>
    
            </View>
            </View>
        </View>
    
    
       { !!item?.messageText && <View style={styles.messageWrapper} >
              <Text style={styles.messageWrapperText} >{item?.messageText}</Text>
              <Text style={styles.messageTime} >{item?.messageTime}</Text>
        </View> }
    
       { !!item?.audio && <View style={styles.audioWrapper} >
           
           <TouchableOpacity onPress={ async ()=>{
            // await TrackPlayer.skip(0)
              toggelPlayback(playbackState)
        }}  >
    
               <Icon name={playbackState === State.Paused || playbackState === State.Ready || playbackState === State.Buffering || 
               playbackState === State.Connecting ||  playbackState === State.Stopped  ?'play':'pause-circle' } size={responsiveWidth(7)} color={colors.blackOpacity40} />    
           </TouchableOpacity>
             
        
          
        <Slider
            value={progress.position}
            // onValueChange={}
            // trackStyle={{width:100}}
            thumbTintColor={colors.themeColor}
            maximumValue={progress.duration}
            minimumValue={0}
            onValueChange={ async value=> {
                await TrackPlayer.seekTo(value)
            }}

            containerStyle={{width:'75%',}}
            maximumTrackTintColor='#eeeeee'
            minimumTrackTintColor={colors.blackOpacity15}
            thumbStyle={{width:responsiveWidth(3),height:responsiveHeight(1.5)}}
            disabled={true}
           
        />
    
        <Image source={AvtarAudio} style={styles.avtrLogo} />
    
        {/* <Text style={styles.audioTime} >12:01 pm</Text> */}
        </View>}
    
        {/* <Button title='Song Play'  onPress={ async ()=>{
            // await TrackPlayer.skip(0)
              toggelPlayback(playbackState)
        }} /> */}
    
    
    
    
    </View>
    )}

  return (
   <View style={{flex:1,paddingVertical:responsiveHeight(3)}} >
      <FlatList
      showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
   </View>
  )
}

export default Lesson

const styles = StyleSheet.create({
    lessonWrapper:{
        marginHorizontal:responsiveWidth(4.5),
        marginTop:responsiveHeight(1.5),
        gap:responsiveHeight(0.5),
       
    },
    lessonDate:{
        alignSelf:'center',
        backgroundColor:colors.lessonDate,
        paddingHorizontal:responsiveWidth(3),
        paddingVertical:responsiveHeight(0.5),
        fontSize:responsiveFontSize(1.4),
        // fontWeight:'500',
        borderRadius:responsiveWidth(1),
        color:colors.blackOpacity50

    },
    lessonTopicContainer:{
     
        width:wWidht*0.68,
      borderRadius:responsiveWidth(2),
      overflow:'hidden'
      

    },
    lessonLogo:{
        resizeMode:'contain',
        width:'100%',
        height:responsiveHeight(20),
      
    },
    lessonTopicWrapper:{
        backgroundColor:colors.white,
        width:'100%',
        borderBottomLeftRadius:responsiveWidth(2),
        borderBottomRightRadius:responsiveWidth(2)
    },
    lessonTopicText:{
        color:colors.black,
        marginLeft:responsiveWidth(3),
        marginTop:responsiveHeight(1),
        fontSize:responsiveFontSize(1.9),
        fontWeight:'500'
    },
    lessonContinueWrapper:{
        flexDirection:'row',
        alignItems:'center',
        // alignSelf:'center',
        marginVertical:responsiveHeight(1.5),
        justifyContent:'space-around'
        
    },
    lessonContinueTickWrapper:{
        flexDirection:'row',
     

    },
    lessonContinueButton:{
        backgroundColor:colors.themeColor,
        paddingHorizontal:responsiveWidth(6),
        paddingVertical:responsiveHeight(0.5),
        borderRadius:responsiveWidth(5)
    },
    lessonContinueButtonText:{
        color:colors.whiteText,
        fontSize:responsiveFontSize(1.9)
    },
    messageWrapper:{
        width:wWidht*0.68,
        backgroundColor:colors.white,
        borderRadius:responsiveWidth(1)
    },
    messageWrapperText:{
        fontSize:responsiveFontSize(2.1),
        alignSelf:'center',
        color:colors.blackOpacity80
    },
    messageTime:{
       color:colors.blackOpacity30,
       alignSelf:'flex-end',
       marginRight:responsiveWidth(1.5)
    },
    audioWrapper:{
        width:wWidht*0.68,
        backgroundColor:colors.white,
        borderRadius:responsiveWidth(1),
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:responsiveWidth(1),
        paddingVertical:responsiveHeight(1),
        justifyContent:'space-between'

    },
    avtrLogo:{
        width:responsiveWidth(12),
        height:responsiveHeight(5.5),
        resizeMode:'contain'
    }



})