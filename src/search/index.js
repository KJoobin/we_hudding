import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

class Search extends React.Component {
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

export default Search;
