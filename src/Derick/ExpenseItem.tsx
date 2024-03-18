//Import important functions like Text in order to implement them into the UI
import {View, Text, StyleSheet, Image, Pressable, TextInput} from 'react-native';
//Import the React library
import React from 'react';
//Import FontAwesome icons so the UI can contain icons
import { FontAwesome } from '@expo/vector-icons';
//Import the color library to set UI elements' colors
import Colors from '../../constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import {Link} from 'expo-router';
import Button from '../../components/Buttons'
import { ExpenseToPayItem } from './types';

export const defaultPlaqueImage= require('../Images/GreenPlaque.png');

//Struct-like with one element for UI
type ExpenseListItemProps={
    //Variable that keeps track of the item in the cart
    expenseItem: ExpenseToPayItem;
};

const Expense=({expenseItem}: ExpenseListItemProps)=> {
    return (
        <View style={styles.container}>
            <View style={styles.container3}>
                <Image source={defaultPlaqueImage} style={styles.image} resizeMode="contain"/>
                <View style={styles.container3}>
                    <Text>    </Text>
                    <AntDesign name="checkcircleo" size={30} color="black" style={styles.check}/>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1, padding: 5,}}>
                            <Text style={styles.title}>{expenseItem.task}</Text>
                            <Text>Due {expenseItem.dueDate}</Text>
                        </View>
                        <View style={styles.quantitySelector}>
                            <Text>${expenseItem.cost}</Text>
                            <FontAwesome6 name="money-check-dollar" size={30} color="black" style={styles.money}/>
                        </View>
                    </View>
                </View>
            </View> 
        </View>
    );
};

//styles contains reusable settings for the UI above
const styles=StyleSheet.create({
    //Container style, settings for containing a set of UI elements (i.e. an item in a FlatList)
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        //position: 'absolute',
        //Give rounded corners
        borderRadius: 10,
        //Add padding
        padding: 5,
        //Add flex
        flex: 1,
        //Make the item straight in a row
        flexDirection: 'row',
        //Center it out
        alignItems: 'center',
    },
    container3: {
        position: 'absolute',
        //Give rounded corners
        borderRadius: 10,
        //Add padding
        padding: 5,
        //Add flex
        flex: 1,
        //Make the item straight in a row
        flexDirection: 'row',
        //Center it out
        alignItems: 'center',
    },
    //Style for images, sets their dimensions
    image: {
        //Set width
        width: 400,
        //Make sure it scales properly
        aspectRatio: 1,
        //Center it
        alignSelf: 'center',
        //Set right margin
        marginRight: 10
    },
    //Style for the title of content
    title: {
        //Give a lot of weight
        fontWeight: '500',
        //Set size of text
        fontSize: 25,
        //Set bottom margin
        marginBottom: 5
    },
    //Style for text like price and size
    subtitleContainer: {
        //Set flex to row
        flexDirection: 'row',
        //Add a gap
        gap: 5
    },
    //Style for the quantity selector (plus and minus signs)
    quantitySelector: {
        //Set flex to row
        flexDirection: 'row',
        //Add a gap
        //gap: 10,
        //Center elements
        alignItems: 'center',
        //Add vertical margin
        marginVertical: 10
    },
    //Style for the quantity counter
    quantity: {
        //Set heavy weight
        fontWeight: '500',
        //Set size
        fontSize: 18
    },
    //Style for price of item
    price: {
        //Set color to blue
        color: Colors.light.tint,
        //make font bold
        fontWeight: 'bold'
    },
    check: {
        //justify left
        justifyContent: 'flex-start',
        padding: 10,
    },
    money: {
        //justify right
        justifyContent: 'flex-end',
        padding: 10,
    },
});

export default Expense;