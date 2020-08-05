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
	TouchableWithoutFeedback
} from 'react-native';

const Table: () => React$Node = (props) => {

  return (
    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
			{props.numbers.map((num, index) => (
				<TouchableWithoutFeedback key={index} onPress={()=>props.handler(num)}>
					<View style={styles.cell}><Text>{num != 0 ? num : ""}</Text></View>
				</TouchableWithoutFeedback>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cell:{
		width:"20%",
		height:70,
		justifyContent:'center',
		alignItems:"center",
		borderWidth:1
	}
});

export default Table;