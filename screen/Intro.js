import React from 'react';
import { StyleSheet, View,Text,Image, StatusBar, Dimensions,TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
 
const slides = [
  {
    key: 1,
    title: 'The perfect app to level up your yoga',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    image: require('../assets/onBoardImages/intro1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Your progress, at your fingertips',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/onBoardImages/intro2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Get feedback anytime, anywhere',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/onBoardImages/intro3.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 4,
    title: 'Transform your teaching with AI',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/onBoardImages/intro4.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 5,
    title: 'Provide real-time feedback',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/onBoardImages/intro5.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 6,
    title: 'Chat anytime with your students',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/onBoardImages/intro6.png'),
    backgroundColor: '#22bcb5',
  }
];
 
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showRealApp: false
          }
    }
  
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <StatusBar barStyle = "dark-content" hidden = {false} translucent backgroundColor="transparent"/>
        <Image style={styles.image} source={item.image} />
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{item.text}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Signup')} >
            <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider 
                // dotStyle={{fontSize:5}}
                // keyExtractor={slides.key =()=> slides.key.toString()}//{item => item.index_id
                renderItem={this._renderItem} 
                data={slides} 
                onDone={this._onDone}/>;
    }
  }
}

const styles = StyleSheet.create({
    slide:{
        flex:1
    },
    image:{
        width: '100%', 
        height: Dimensions.get('window').width,
    },
    titleContainer:{
        marginTop:57,
        marginHorizontal:40,
        padding:5
    },
    title:{
        fontSize:28,
        fontWeight:'bold'
        // fontFamily:'poppins'
    },
    textContainer:{
        marginTop:19,
        marginHorizontal:25,
        padding:5
    },
    text:{
        fontSize:15,
        color:'#96969B'
    },
    button:{
        height:40,
        alignItems:'center',
        backgroundColor:'#BCFCFF',
        marginHorizontal:50,
        borderRadius:20,
        marginTop:110,
        justifyContent:'center'

    },
    buttonText:{
        fontSize:15,
        fontWeight:'bold',

    }
    
  });