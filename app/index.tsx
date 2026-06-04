import { Text, View } from "react-native"


// div - View
// p, h1, h2 - Text
// --
// Flexbox is default
const Index = () => {
   //  JSX : JavaScript XML (TSX)
   //  Can't HTML
   return (
       <View
       style={{
               flex: 1,
               justifyContent: "center", // Vertical centering
               alignItems: "center"      // Horizontal centering
           }}
       >
           <Text style={{ textAlign: "center", fontSize: 20 }}>
               Hello, RAD
           </Text>
       </View>
   )
}

export default Index


 

 
