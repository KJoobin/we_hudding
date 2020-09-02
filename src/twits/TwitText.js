import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

/*
[
    {
        "text": "MTV",
        "indices": [105, 109]
    },
    {
        "text": "VMAs",
        "indices": [110, 115]
    }
]
*/

export default class TwitText extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props !== nextProps;
    }
    render() {
        const { text, hashtags } = this.props;
        const textLen = text.length;
        const hashtagLen = hashtags.length;
        const twit = [];
        if (!hashtagLen) {
            twit.push(<Text>{text}</Text>)
        }
        for (let i = 0; i < hashtagLen; i += 1) {
            const hashText = hashtags[i].text;
            const hashIndices = hashtags[i].indices;
            if (i === 0) {
                twit.push(<Text>{text.slice(0, hashIndices[0])}</Text>);
                twit.push(<Text style={styles.hashtag}>#{hashText}</Text>);
                continue;
            }
            twit.push(<Text>{text.slice(hashtags[i - 1].indices[1] + 1, hashIndices[0])}</Text>);
            twit.push(<Text style={styles.hashtag}>#{hashText}</Text>);
            if (i === hashtagLen - 1) {
                twit.push(<Text>{text.slice(hashIndices[1] + 1)}</Text>);
            }
        }
        return (
            <View style={styles.wrapper}>
                {twit}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    text: {

    },
    hashtag: {
        color: 'blue',
        marginRight: 5
    }
})