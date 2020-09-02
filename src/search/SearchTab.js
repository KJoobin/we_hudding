import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class SearchTab extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.tabs}>
                    <Text> 인기 </Text>
                </View>
                <View style={styles.tabs}>
                    <Text> 최신 </Text>
                </View>
                <View style={styles.tabs}>
                    <Text> 사용자 </Text>
                </View>
                <View style={styles.tabs}>
                    <Text> 사진 </Text>
                </View>
                <View style={styles.tabs}>
                    <Text> 동영상 </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        height: "50%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    tabs: {
        height: "100%",
        width: "20%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})