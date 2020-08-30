import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default class SearchBar extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <TextInput style={styles.input} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: 35,
        width: "70%",
        borderRadius: 50,
        paddingLeft: 20,
        backgroundColor: "rgba(125,125,125,0.15)",
    }
})