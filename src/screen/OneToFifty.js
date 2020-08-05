/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import Timer from '../components/Time'
import Table from '../components/Table'
let array = []
for(let i = 1 ; i<=25 ; i++) {
    array.push(i)
}
const OneToFifty: () => React$Node = () => {
  const [gameFlag,setGameFlag] = useState(false);
  const [numbers,setNumbers] = useState(array);
	const [current,setCurrent] = useState(1)
	const [time,setTime] = useState(0)

	const endGame = () => {
		setGameFlag(false);
	};
	const startGame = () => {
		setNumbers(shuffleArray(array));
		setCurrent(1);
		setGameFlag(true);
		setTime(new Date)
	};
	const shuffleArray = array => {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

  const onCellPress = (num) =>{
		if(current === num){
			if(num === 50) {
				let diff = new Date().getTime() - new Date(time).getTime()
				let sec = Math.floor(diff / 1000);
				let mili = diff % 1000;
				alert(Number(sec)+"초 " + Number(mili) + "입니다.")

				endGame();
			}
			const index = numbers.indexOf(num);
			setNumbers(numbers => [
				...numbers.slice(0, index),
				num < 26 ? num + 25 : 0,
				...numbers.slice(index + 1)
			]);
			setCurrent(current => current + 1);
		}
  }
  return (
    <SafeAreaView style={{flex:1,paddingHorizontal:20}}>
      <View style={{marginTop:40,flexWrap:'wrap',alignItems:"center"}}>
        <Table numbers={numbers} handler={onCellPress}/>
      </View>
      <View style={{marginTop:20}}>
				{gameFlag ? 
			      null
            : 
            <Button title="시작" onPress={startGame}/>
        }
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default OneToFifty;
