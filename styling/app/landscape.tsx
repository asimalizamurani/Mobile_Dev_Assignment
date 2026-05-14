// import { SafeAreaView, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
// import React from 'react'
// import * as ScreenOrientation from "expo-screen-orientation";

// const HomeScreen = () => {
//   const {height, width} = useWindowDimensions();
//   const isTablet = width >= 768;
//   const isLandscape = width > height;

//   const lockLandscpe = async() => {
//     await ScreenOrientation.lockAsync(
//       ScreenOrientation.OrientationLock.LANDSCAPE,
//     );
//   };

//   const lockPortrait = async() => {
//     await ScreenOrientation.lockAsync(
//       ScreenOrientation.OrientationLock.PORTRAIT,
//     );
//   };
  
//   console.log(lockLandscpe, lockPortrait);
  

//   // console.log({
//   //   height,
//   //   width
//   // })
//   return (
//     <SafeAreaView style={{flex: 1, padding: 16}}>
//       <Text style={{fontSize: width * 0.06}}>Responsive Text</Text>

//       <View style={{
//         flexDirection: isTablet ? 'row' : 'column'
//       }}>
//         <View style={{
//           width: isTablet ? width / 2 : width - 32,
//           backgroundColor: "purple",
//           padding: 20,
//           borderRadius: 12,
//           marginBottom: isTablet ? 0 : 12,
//         }}>
//           <Text style={{
//             color: "white",
//           }}>Card 1</Text>
//         </View>

//         <View style={{
//           width: isTablet ? width / 2 : width - 32,
//           backgroundColor: "purple",
//           padding: 20,
//           borderRadius: 12,
//         }}>
//           <Text style={{
//             color: "white",
//           }}>Card 2</Text>
//         </View>
//       </View>

//       <Text style={{
//         color: "#888", marginTop: 16
//       }}>Screen: {Math.round(width)} {Math.round(height)}
//         {isLandscape ? '(Landscape)' : '(Portrait)' }
//       </Text>

//       {/* Orientation buttons */}
//       <View style={{
//         flexDirection: 'row',
//         marginTop: 24,
//         gap: 12,
//       }}>
//         <Pressable
//         onPress={lockLandscpe}
//         style={{
//           flex: 1,
//           backgroundColor: "purple",
//           padding: 12,
//           borderRadius: 8,
//           alignItems: "center"
//         }}
//         >
//           <Text style={{color: "white"}}>Force Landscape</Text>
//         </Pressable>

//         <Pressable
//         onPress={lockPortrait}
//         style={{
//           flex: 1,
//           backgroundColor: "purple",
//           padding: 12,
//           borderRadius: 8,
//           alignItems: "center"
//         }}
//         >
//           <Text style={{color: "white"}}>Force Portrait</Text>
//         </Pressable>
//       </View>
//     </SafeAreaView>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({})