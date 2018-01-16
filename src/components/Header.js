import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ titleText }) => {
    const { headerStyle, textStyle } = styles;

    return (
        <View style={headerStyle}>
            <Text style={textStyle}>{titleText}</Text>
        </View>
    );
};

const styles = {
    headerStyle: {
        backgroundColor: '#000',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        position: 'relative',
        alignItems: 'center'
    },
    textStyle: {
        color: '#fff',
        fontSize: 20
    }
}

export default Header;
