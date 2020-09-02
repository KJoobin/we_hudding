import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'


export default class SearchBar extends Component {
    render() {
        const { temp, keyDown, submit } = this.props;
        return (
            <View style={styles.wrapper}>
                <TextInput style={styles.input} value={temp} onChangeText={keyDown} onSubmitEditing={submit} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: "50%"
    },
    icons: {
        paddingLeft: 20
    },
    input: {
        height: 35,
        width: "70%",
        borderRadius: 50,
        paddingLeft: 20,
        backgroundColor: "rgba(125,125,125,0.15)",
    }
})