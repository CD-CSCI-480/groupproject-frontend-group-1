import Button from '../../components/Buttons';
import Colors from '../../constants/Colors';
import { useState, createContext } from 'react';
import {View, Text, StyleSheet, TextInput, Image, Alert} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { ExpenseToPayItem } from './types';

type ExpenseEntry={
    items: ExpenseToPayItem[];
    //Function to add new products to the list
    addItem: ()=>void;
    task: string;
    dueDate: string;
    cost: number;
    total: number;
}

const CartContext=createContext<ExpenseEntry>({
    //Set items to empty array
    items: [],
    //Add item is an empty function
    addItem: ()=>{},
    //total initialized to 0
    task: "",
    dueDate: "",
    cost: 0,
    total: 0,
    },
);

const CreateNewExpense=()=> {
    const [name, setName]=useState('');
    const [price, setPrice]=useState('');
    const [dueDay, setDueDay]=useState('');
    const {id}=useLocalSearchParams();
    const [items, setItems]=useState<ExpenseToPayItem[]>([]);
    const resetFields=()=> {
        setName('');
        setPrice('');
    };
    const [errors, setErrors]=useState('');

    //Error checking
    const validateInput=()=> {
        setErrors('');
        if (!name) {
            setErrors('Name is required');
            return false;
        }
        if (!price) {
            setErrors('Price is required');
            return false;
        }
        if (isNaN(parseFloat(price))) {
            setErrors("Price is not a number");
            return false;
        }
        return true;
    };

    const onSubmit=()=> {
        onCreate();
    }

    const onCreate=()=> {
        addItem();
        resetFields();
    };

    //Delete an item
    const onDelete=()=> {
        console.warn('Delete!!!')
    };

    const confirmDelete=()=> {
        Alert.alert("Confirm", "Are you sure you want to delete this item?", [
            {
                text: "Cancel",
            },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: onDelete,
            }]);
    };
    
    const addItem=()=>{
        //Define values of item based on struct found in types.ts
        const newItem:ExpenseToPayItem={
            id: 0,
            task: name,
            dueDate: dueDay,
            cost: parseFloat(price)
        };
        setItems([newItem, ...items]);
    };

    const total=items.reduce((sum)=>(sum++),0);

    return (
        //UI, shows the image, text boxes for input, and create/update and delete elements.
        <View style={styles.container}>
            <Text style={styles.label}>Item Name</Text>
            <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={setName}/>

            <Text style={styles.label}>Item Price ($)</Text>
            <TextInput placeholder="0.00" style={styles.input} keyboardType="numeric" value={price} onChangeText={setPrice}/>

            <Text style={styles.label}>Due Date</Text>
            <TextInput placeholder="Monday" style={styles.input} value={dueDay} onChangeText={setDueDay}/>

            <Text style={{color: 'red'}}>{errors}</Text>
            <Button onPress={onSubmit} text={'Create'}/>
            <Text style={styles.textButton} onPress={confirmDelete}>Delete</Text>
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
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20,
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
    }
});

export default CreateNewExpense;