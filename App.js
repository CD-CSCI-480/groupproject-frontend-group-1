import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Expense from './src/Derick/ExpenseItem';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import Button from './components/Buttons';
import {Link} from 'expo-router';
import ExpenseList from './src/Derick/ExpenseList'
import MenuItem from './src/Derick/PayForItem'

export const backgroundImage= require('./src/Images/PlaqueEmpty.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image source={backgroundImage} style={styles.image} resizeMode="contain"/>
        <View style={styles.container2}>
          <StatusBar style="auto" />
          <ExpenseList/>
        </View>
       
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    position: 'absolute',
    //Give rounded corners
    borderRadius: 10,
    //Add padding
    padding: 5,
    //Add flex
    flex: 1,
    //Center it out
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    //Set width
    width: 525,
    //Make sure it scales properly
    aspectRatio: 1,
    //Center it
    alignSelf: 'center',
    //Set right margin
    marginRight: 10
  },
  check: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
  },
  title: {
    //Give a lot of weight
    fontWeight: '500',
    //Set size of text
    fontSize: 25,
    //Set bottom margin
    marginBottom: 5
  },
});
