import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import Twit from './Twit';

export default class index extends Component {
    render() {
        const { data } = this.props;
        return (
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>

                {data.map((el) => {
                    return <Twit key={el.id_str} data={el} />
                })}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        height: "100%",
        backgroundColor: "white",
    }
});