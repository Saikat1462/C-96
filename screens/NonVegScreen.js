import React,{Component} from "react"
import { Text,View,StyleSheet, TouchableOpacity, Image } from "react-native"

export default class NonVegScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require("../assets/NonVegDietChart.png")} style={{flex:1,marginTop:1,width:1400, height:760,padding:50}}/>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
})