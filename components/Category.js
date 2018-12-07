import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

class Category extends Component {
    render() {
        return (
                <View style={{ height: 200, width: 220, marginLeft: 20, borderRadius: 30, borderColor: '#dddddd', shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5, }}>
                    <View style={{ flex: 2, borderRadius: 10, margin: 10}}>
                        <Image source={this.props.imageUri}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 10, }}
                        />
                    </View>
                </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
