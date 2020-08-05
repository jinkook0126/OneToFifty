/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Timer: () => React$Node = () => {

	const [timer,setTimer] = useState(0);

	useEffect(()=>{
		console.log("mount")
		const records = setInterval(()=>{
			setTimer(timer => timer + 100)
		},100)
		return ()=>{
			console.log("close")
			clearInterval(records)
		}
	},[])
  return (
    <View style={{flexDirection:'row'}}>
			<Text>{Math.floor(timer / 1000)}</Text>
			<Text> : </Text>
			<Text>{Number((timer % 1000) / 100)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default Timer;