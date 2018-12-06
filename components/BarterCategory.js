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
            <View style={{ height: 200, width: 220, marginLeft: 20, borderWidth: 0.5, borderRadius: 30, borderWidth: 2, borderColor: 'black', }}>
                <View style={{ flex: 2,  }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover',borderRadius: 30 }}
                    />
                </View>
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                  onPress={() => this.setState({checked: !this.state.checked})}

                />
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
