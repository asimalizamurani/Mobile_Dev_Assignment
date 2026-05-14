// import { Pressable, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { StatusBar } from "expo-status-bar"

// const HomeScreen = () => {
//   const isActive = true;

//   // StyleSheet.compose is a built-in React Native utility used to combine two style objects together 
//   const buttonStyle = StyleSheet.compose(
//     styles.button,
//     isActive ? styles.activeButton : null
//   )

//   return (
//     <View style={styles.container}>
//       <View 
//       // style={[styles.button, isActive && styles.activeButton]}
//      //compose method
//     //  @ts-ignore
//       style={buttonStyle}
//      >
//         <Text style={styles.buttonText}>Compoed Text</Text>
//       </View>
//     </View>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   button: {
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 10,
//     backgroundColor: "#ccc" // default grey
//   },
//   activeButton: {
//     backgroundColor: "#6c63FF",
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   }

// })