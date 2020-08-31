import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'

import TwitDate from './TwitDate';
import TwitText from './TwitText';
export default class Twit extends Component {
    shouldComponentUpdate(props, nextProps) {
        return props !== nextProps;
    }
    render() {
        const { data } = this.props;
        console.log(data.entities.hashtags);
        console.log(data.text);

        return (
            <View style={styles.wrapper}>
                <View style={styles.test}>
                    <View style={styles.avatarWrapper}>
                        <Image style={{ ...styles.avatar, backgroundColor: `#${data.user.profile_background_color}` }} source={{ uri: data.user.profile_image_url }} />
                    </View>
                    <View style={styles.mainWrapper}>
                        <View style={styles.header}>
                            <Text style={styles.bold}> {data.user.name} </Text>
                            <Text style={styles.screenName}>@{data.user.screen_name}</Text>
                            <TwitDate created_at={data.created_at} />
                        </View>
                        <View style={styles.body}>
                            <Text style={styles.wrap}>{data.text}</Text>
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
        flex:1,
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
        display: "flex",
        flexDirection:"row",
    },
     wrap: {
         flexWrap:"wrap"
     }
})