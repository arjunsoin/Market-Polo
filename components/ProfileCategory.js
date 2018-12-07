import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Category extends Component {
    render() {
        return (
                <View style={{ height: 110, width: 270, marginTop: 10, marginLeft: 20, borderWidth: 0.5, borderRadius: 30, borderColor: '#dddddd' }}>
                    <View style={{ flex: 2 }}>
                        <Image source={this.props.imageUri}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover', margin: 10 }}
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