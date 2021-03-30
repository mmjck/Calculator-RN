/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import { Button as styles } from './styles';

export default props => {
    const { onClick, label, double, triple, operation } = props;
    const stylesButton = [styles.button];


    if (double) {
        stylesButton.push(styles.buttonDouble);
    }

    if (triple) {

        stylesButton.push(styles.buttonTriple);
    }

    if (operation) {
        stylesButton.push(styles.operationButton);
    }
    return (
        <TouchableHighlight onPress={() => onClick(label)}>
            <Text style={stylesButton}>{label}</Text>
        </TouchableHighlight>

    );
};

