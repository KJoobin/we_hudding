import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import SearchBar from './SearchBar';
import SearchTab from './SearchTab';

export default class Search extends React.Component {

    render() {
        const { temp, keyDown, submit } = this.props;
        return (
            <View style={styles.wrapper}>
                <SearchBar temp={temp} keyDown={keyDown} submit={submit} />
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
