import *as React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ImageBackground} from 'react-native'
import axios from 'axios'
import {RFValue} from 'react-native-responsive-fontsize'

export default class StarScreen extends React.Component{
    constructor(){
        super()
        this.state={
          details:{},
          url:`https://2431-2405-201-8008-e095-a413-c282-beb3-6a86.ngrok.io?name=${this.props.navigation.getParam('planet_name')}`
        }
    }

    componentDidMount(){
      this.get_details()
    }

    get_details = () => {
      axios.get(this.state.url).then((response)=>{
        this.setState({
          details:response.data.data
        })
      }).catch((error)=>{alert(error.message)})
    }

    planet_details=(url)=>{
      const {details} = this.state.details
      var image = this.props.navigation.getParam(planet_image)
      return(
        <View style={styles.container}>
          <ImageBackground source={require('../assets/bg')}></ImageBackground>
          <Text style={{fontWeight:'bold', fontSize:15, textAlign:'center'}}>Details of Planet {details.name}</Text>
          <Image source = {image} style={styles.image}/>

          <Text style={{textAlign:'center', fontSize:10}}>Planet Name: {details.name}</Text>
          <Text style={{textAlign:'center', fontSize:10}}>Planet Distance From The Nearest Star: {details.distance}</Text>
          <Text style={{textAlign:'center', fontSize:10}}>Mass of The Planet: {details.mass}</Text>
          <Text style={{textAlign:'center', fontSize:10}}>Radius of The Planet: {details.radius}</Text>
          <Text style={{textAlign:'center', fontSize:10}}>Gravity of The Planet: {details.gravity}</Text>
        </View>
      )
    }

    render(){
        return this.planet_details(this.state.url)
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    image: {
      width: "100%",
      height: "100%",
      alignSelf:'center'
    },
    upperContainer: {
      flex: 0.63,
      justifyContent: "center",
      alignItems: "center"
    },
    starName: {
      fontSize: RFValue(40),
      fontWeight: "bold",
      textAlign: "center",
      color: "#fff"
    },
    middleContainer: {
      flex: 0.22,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    text: {
      fontSize: RFValue(18),
      color: "#fff",
      fontWeight: "400",
      textAlign: "center"
    },
    lowerContainer: {
      flex: 0.15,
      backgroundColor: "#151F39",
      justifyContent: "center",
      alignItems: "center"
    }
  });