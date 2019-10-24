import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Button } from 'react-native-elements'
import MedicationModal from './MedicationModal'

class MedicationCard extends Component{

    constructor(){
        super()
        this.state ={
          isVisible: false
        }
    }

    toggleModal = () => {
        this.setState({
            isVisible: false
        })
    }

    handleOnPress = () =>{
        this.setState({
            isVisible: true
        })
    }

    modalView = () => {
        return this.state.isVisible? <MedicationModal medication={this.props.medication} onToggle={this.toggleModal}/> : null
    }
    
    render(){
        return(
            <>
            <View style={styles.view}>
                {this.modalView()}
                <Button
                onPress={this.handleOnPress}
                type="outline"
                title={this.props.medication.name}
                raised={true}
                containerStyle={{marginBottom:5}}
                buttonStyle={{backgroundColor:'#ec700a'}}
                titleStyle={{fontWeight:'500', color: 'white', fontSize: 18, 
                textShadowColor: 'black',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 5 }}
                />
            </View>
            </>
        )
    }
}



const styles = StyleSheet.create({
    view: {
        flex:1
    },
    medicationButton: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 1,
        margin: 5
    }
})

export default MedicationCard