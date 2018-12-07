import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
} from "react-native";
import { SearchBar, Button, CheckBox} from 'react-native-elements';
class BarterCategory extends Component {

    constructor(props) {
        super(props);

        this.state = {
          checkBoxChecked: []
        }
      }
    render() {
        return (
            <TouchableOpacity onPress={this.props.method}>  
                <View style={{ height: 200, width: 220, margin: 20, borderRadius: 30, borderColor: '#dddddd', 
                }}>
                    <View style={{ flex: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5, shadowRadius: 5, }}>
                        <Image source={this.props.imageUri}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover',borderRadius: 30 }}
                        />

                    </View>
                <View style = {{alignItems: 'center', margin: 15}}>
                    <Text style = {{color: '#96594a', fontWeight: 'bold', fontSize: 26}}
                    > {this.props.productcaption} </Text>
                </View>
                </View>
            </TouchableOpacity>
        );
    }
}
export default BarterCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
