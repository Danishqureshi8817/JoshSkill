import { Lesson1 } from "../constants/imagePath";

export default [


    {
        id:'01',
        date:'AUGUST 21,2023',
        lessonImage:Lesson1,
        lessonTopic:'Lesson 1: Course Introduction',
        tick:true,
        buttonText:'Continue Lesson',
        messageText:'Danish , I want you to listen to this',
        messageTime:'12:03 pm',
        audio:{    title: 'Avaritia',
        artist: 'deadmau5',
        artwork: require('../assets/song.png') ,
        url: 'https://studymaterial.newindiagyan.online/uploads/file_example_MP3_700KB.mp3', // Load media from the network
        },
        

    },
    {
        id:'02',
        date:'AUGUST 25,2023',
        lessonImage:Lesson1,
        lessonTopic:'Lesson 2: Course Introduction',
        tick:false,
        buttonText:'Continue Lesson2',
        messageText:null,
        messageTime:'12:01 pm',
    
        

    },
    {
        id:'03',
        date:'AUGUST 25,2023',
        lessonImage:Lesson1,
        lessonTopic:'Lesson 3: Course Introduction',
        tick:false,
        buttonText:'Continue Lesson3',
        messageText:null,
        messageTime:'12:01 pm',
    
        

    },


]