import {PropsWithChildren, createContext, useContext, useState} from 'react';
import { ExpenseToPayItem } from './types';

type ExpenseEntry={
    items: ExpenseToPayItem[];
    //Function to add new products to the list
    addItem: (a: number)=>void;
    total: number;
}

const CartContext=createContext<ExpenseEntry>(
    {
    //Set items to empty array
    items: [],
    //Add item is an empty function
    addItem: ()=>{},
    //total initialized to 0
    total: 0,
    },
);

const CartProvider=({children}: PropsWithChildren)=> {
    console.log("CartProvider");

    const [items, setItems]=useState<ExpenseToPayItem[]>([]);

    const addItem=(a: number)=>{
        console.log("addItem");
        //Define values of item based on struct found in types.ts
        const newItem:ExpenseToPayItem={
            id: 0,
            task: "Pay bills",
            dueDate: "4/16",
            cost: 113.29
        };
        setItems([newItem, ...items]);
    };

    const total=items.reduce((sum)=>(sum++),0);

    return (
        <CartContext.Provider value={{items,addItem, total}}>
            {children}
        </CartContext.Provider>
    );
};

//Export main function's return value
export default CartProvider;

//Export function so it can be called externally
export const useCart=()=>useContext(CartContext);