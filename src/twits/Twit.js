import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'

export default class Twit extends Component {
    componentDidUpdate(props, nextProps) {
        console.log("update")
    }
    render() {
        const { data } = this.props;
        let date = ""
        const today = new Date();
        const created = new Date(data.created_at);
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
        // console.log(create.getDate())
        // console.log(new Date(data.created_at).getDate())
        return (
            <View style={styles.wrapper}>
                <View style={styles.test}>
                    <View style={styles.avatarWrapper}>
                        <Image style={{ ...styles.avatar, backgroundColor: `#${data.user.profile_background_color}` }} source={{ uri: data.user.profile_image_url }} />
                    </View>
                    <View stly={styles.mainWrapper}>
                        <View style={styles.header}>
                            <Text style={styles.bold}> {data.user.name} </Text>
                            <Text style={styles.screenName}>@{data.user.screen_name}</Text>
                            <Text style={styles.date}>{date}</Text>
                        </View>
                        <View style={styles.body}>
                            <Text>{data.text}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        borderBottomWidth: 1,
        borderBottomColor: "rgba(125, 125, 125, 0.3)",
        paddingHorizontal: 5,
        paddingVertical: 3,

    },
    test: {
        flexDirection: "row",
    },
    avatarWrapper: {
        width: 50,
        height: 50,
        borderRadius: 500,
        borderWidth: 1,
        marginRight: 5,
        borderColor: "rgba(0,0,0,0.04)",
    },
    avatar: {
        width: "100%",
        height: "100%",
        borderRadius: 500
    },
    mainWrapper: {

    },
    header: {
        flexDirection: "row"
    },
    bold: {
        fontWeight: "700"
    },
    screenName: {
        color: "rgba(125,125,125,1)",
        marginRight: 5
    },
    date: {
        color: "rgba(125,125,125,1)"
    },
    body: {
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
    }
})