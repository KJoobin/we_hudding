import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
} from 'react-native'

export default class TwitDate extends Component {
    
    render() {
        const { created_at } = this.props;
        let date = ""
        const today = new Date();
        const created = new Date(created_at);
        const passTime = today - created
        const day = 24 * 60 * 60 * 1000

        if (passTime > day) {
            // 포스팅이 24시간 이상 지남
            const createdY = created.getFullYear();
            const createdM = created.getMonth();
            const createdD = created.getDate();
            createdY !== today.getFullYear() && (date += `${createdY}년`);
            date += `${createdM}월 ${createdD}일`
        }

        return <Text style={styles.date}>- {date}</Text>
    }
}

const styles = StyleSheet.create({
    date: {
        color: "rgba(125,125,125,1)"
    },

})