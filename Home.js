import *as React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ImageBackground, Platform} from 'react-native'
import axios from 'axios'
import {RFValue} from 'react-native-responsive-fontsize'

export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
          url:'http://localhost:5000',
          data_list:[],
        }
    }

    componentDidMount(){
      this.get_data()
    }

    get_data = () => {
      const {url} = this.state.url
      axios.get(url).then(
        (response)=>{
          return this.setState({
            data_list: response.data.data
          })
        }
      ).catch((error)=>{
        alert(error.message)
      })
    }

    render_item = ({item, index}) => {
      const name = item.name
      var image = require('../assets/Gas_Giant.png')
      return(
      <TouchableOpacity onPress={this.props.navigation.navigate('Star', {planet_name: name}, {planet_image:image})}>
        <View style={{backgroundColor:'white', borderRadius:15, height:20, width:15, height:10, weight:10}}>
          <Image source={image}/>
          <Text style={{fontWeight:'bold'}}>Name Of Planet: {name}</Text>
        </View>
      </TouchableOpacity>
      )
    }

    render(){
      if(this.state.data_list !== 0){
        return(
          <View style={styles.container}>
            <SafeAreaView
              style={{
                marginTop:
                  Platform.OS === "android" ? StatusBar.currentHeight : 0,
              }}
            />
            <ImageBackground source={require('../assets/bg.png')}/>
            <Text style={{fontWeight:'bold', textAlign:'center', fontSize:15}}>Planet World</Text>

            <FlatList
            data={this.state.data_list}
            renderItem={this.render_item}
            keyExtractor={({item, index})=>{index.toString()}}
            />
          </View>
        )
      }
      else{
        return (
          <View style={styles.container}>
            <ImageBackground source={require('../assets/bg.png')}/>
            <Text>Loading...</Text>
          </View>
        )
      }
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor:'lightblue'
      },
      headerContainer: {
        flex: 0.12,
        backgroundColor: "#1A2D5F"
      },
      headerTitle: {
        color: "#fff",
        fontSize: RFValue(28),
        fontWeight: "bold"
      },
      upperContainer: {
        flex: 0.88,
        backgroundColor: "#1A2D5F"
      },
      cardTitle: {
        fontSize: RFValue(25),
        textAlign: "center"
      },
      cardContainer: {
        backgroundColor: "#1A2D5F",
        borderWidth: 0
      }})