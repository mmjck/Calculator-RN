/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';


import {Display as styles} from './styles';


export default props => {
    const { value } = props;
    return (
        <View style={styles.display}>
            <Text style={styles.displayValue}>{value}</Text>
        </View>

    );
};

