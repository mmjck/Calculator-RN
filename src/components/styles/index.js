/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';



const height_ = Dimensions.get('window').width / 4;
const width_ = Dimensions.get('window').width / 4;



export const Display = StyleSheet.create({
    display: {
        flex: 1,
        padding:20,
        justifyContent:'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems:'flex-end',
    },
    displayValue:{
        fontSize: 60,
        color:'#fff',
    },
 });



export const Button = StyleSheet.create({
    button: {
        fontSize: 40,
        height: height_,
        width: width_,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor :'#8888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor:'#fa8231',
    },
    buttonDouble: {
        width: width_ * 2,
    },
    buttonTriple: {
        width: width_ * 3,
    },
});
