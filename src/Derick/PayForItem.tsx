import { StyleSheet, Image, FlatList, Text, Dimensions, View } from 'react-native';

import Colors from '../../constants/Colors';
import banks from './banks';
import BankItem from './bankItem';
import Button from '../../components/Buttons';

export default function MenuScreen() {
  return (
    //List of products in two columns
    <View style={styles.container}>
        <Text>Enter Payment Method</Text>
        <FlatList
            style={{ height: Dimensions.get('screen').height / 3}}
            data={banks}
            renderItem={({item})=> <BankItem Bank={item}/>}
            contentContainerStyle={{gap: 10, padding: 10}}
        />
        <Text>OR</Text>
        <Text style={{color: 'blue'}}>Enter your Credit or Debit Card Number</Text>
        <Button text='Visit External Site to Pay'/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });