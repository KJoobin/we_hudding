import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import Twit from './Twit';

export default class index extends Component {
    render() {
        const { data } = this.props;
        return (
            <View style={styles.wrapper}>
                <ScrollView style={styles.scrollView}>

                    {data.map((el) => {
                        return <Twit key={el.id_str} data={el} />
                    })}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
    },
    scrollView: {
        backgroundColor: "white",
    }
});