import { View, Text, Platform, FlatList, TextInput, StyleSheet, Image } from "react-native";
import {StatusBar} from 'expo-status-bar';
import ExpenseItem from "./ExpenseItem";
import Button from '../../components/Buttons'
import { useCart } from "./ExpenseProvider";
import { ExpenseToPayItem } from "./types";
import { createContext, useState } from "react";
import Colors from "../../constants/Colors";

export const backgroundImage= require('../Images/GreenPlaqueTall.png');

type ExpenseEntry={
    items: ExpenseToPayItem[];
}

const CartContext=createContext<ExpenseEntry>(
    {
    //Set items to empty array
    items: [],
    },
);

const ExpenseList=()=>{

    const [items, setItems]=useState<ExpenseToPayItem[]>([]);

    const [name, setName]=useState('');
    const [price, setPrice]=useState('');
    const [dueDay, setDueDay]=useState('');
    const [id, setID]=useState(0);

    const addItem=(a: number)=>{
        console.log("addItem");
        console.log(id);
        //Define values of item based on struct found in types.ts
        const newItem:ExpenseToPayItem={
            id: id,
            task: name,
            dueDate: dueDay,
            cost: parseFloat(price)
        };
        setItems([newItem, ...items]);
        setID(id+1);
    };

    const deleteItemById = id => () => {
        const filteredData = items.filter(item => item.id !== id);
        useState({ items: filteredData });
    }

    const addToCart=()=> {
        console.log("addToCart");
        addItem(1);
        console.log("completed");
    };

    //const{items, total}=useCart();
    return (
        <View style={{padding: 10, width: 500, position: 'absolute'}}>
            <Text style={styles.title}>EXPENSES</Text>
            <FlatList 
            data={items} 
            renderItem={({item})=><ExpenseItem expenseItem={item}/>}
            contentContainerStyle={{padding: 125, gap: 125}}
            />
            <Text style={styles.label}>Task</Text>
            <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={setName}/>

            <Text style={styles.label}>Cost</Text>
            <TextInput placeholder="0.00" style={styles.input} keyboardType="numeric" value={price} onChangeText={setPrice}/>

            <Text style={styles.label}>Due Date</Text>
            <TextInput placeholder="Monday" style={styles.input} value={dueDay} onChangeText={setDueDay}/>

            <Button onPress={addToCart} text="Add New Expense" />
        </View>
    );
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    input: {
        backgroundColor: 'white',
        padding: 1,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    label: {
        fontSize: 16,
    },
    image: {
        width: '15%',
        aspectRatio: 1,
        alignSelf: 'center',
    },
    textButton: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.light.tint,
        marginVertical: 10,
    },
    title: {
        //Give a lot of weight
        fontWeight: '500',
        //Set size of text
        fontSize: 50,
        //Set bottom margin
        marginBottom: 5,
        alignSelf: 'center',
        color: 'green'
    },
});

export default ExpenseList;