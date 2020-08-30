import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Text>Search</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: 100,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(125, 125, 125, 0.5)"
    }
});
