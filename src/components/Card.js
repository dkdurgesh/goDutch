import React from 'react';
import {View, StyleSheet, Platform} from 'react-native'


export default SilverBox = (props) => {
    let {
        style
    } = props;
    if(style == null || style === undefined) {
        style = {}
    }
    return (
        <View style={[styles.silverBox,style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    silverBox: {
        flex: 1, elevation: 3, shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        zIndex: 2,
    }
});