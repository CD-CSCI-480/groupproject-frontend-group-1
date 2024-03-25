import { StyleSheet, Image, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import {bank} from './types';
import {Link, useSegments} from 'expo-router';

//Default image in place of no specific pizza image

type BankItemProps={
    Bank: bank;
}

//UI for each item in the FlatList, including the image, name, and price of an item.
const BankItem=({Bank}: BankItemProps)=> {
  return(
    <View style={styles.container}>
        <Text style={styles.subTitle}>{Bank.name}</Text>
    </View>
  )
}

export default BankItem;


const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    maxWidth: '50%',
    flexDirection: 'row',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  }
});