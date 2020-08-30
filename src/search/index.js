import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import SearchBar from './SearchBar';
import SearchTab from './SearchTab';

export default class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <SearchBar />
                <SearchTab />
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
