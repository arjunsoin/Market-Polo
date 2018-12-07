import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
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
            <View style={{ height: 200, width: 220, marginLeft: 20, borderRadius: 30, borderColor: '#dddddd', 
            shadowColor: '#000', shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5, shadowRadius: 5, }}>
                <View style={{ flex: 2,  }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover',borderRadius: 30 }}
                    />
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                  onPress={() => this.setState({checked: !this.state.checked})}
                />
            </View>

            </View>
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
