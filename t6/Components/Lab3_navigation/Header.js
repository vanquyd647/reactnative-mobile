import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Button } from "react-native-web";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

  // The number of stars you want to display
  const numberOfStars = 5;

  // Create an array of star icons
  const stars = Array.from({ length: numberOfStars }, (v, i) => (
    <Entypo key={i} name="star" size={24} color="yellow" />
  ));
  const FontFamily = {
    robotoRegular: "Roboto-Regular",
    };
const Header = () => {
  // const numberOfStars = 5;
  // const stars = Array.from({ length: numberOfStars }, (v, i) => <StarIcon key={i} />);
  
  return (
    
    
    <View style={styles.container}>
      <Image
        source={require("../../assets/vs_black.png")}
        style={styles.Ellipse}
      ></Image>
        <Text style={styles.text1}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      <View>
        <Text style={styles.text2}> {stars}
        (Xem 828 đánh giá)
        </Text>
      </View>
      <View>
        <Text style={styles.text3}>
        1.790.000 đ
        </Text>
      </View>
      <View>
        <Text style={styles.text4}>
      Ở ĐÂU RẺ HƠN HOÀN TIỀN <AntDesign style={styles.vectoric1} name="questioncircleo" size={24} color="black" />
        </Text>
      </View>
      <View >
        <Pressable style={styles.Pre} onPress={()=>{}}>
        <Text style={styles.text5}>4 MÀU-CHỌN MÀU  <AntDesign style={styles.iconvector} name="right" size={14} color="black" /></Text>
        </Pressable>
      </View>
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
  },
    Ellipse: {
    width: 301,
    height: 361,
    flexShrink: 0
  },
  text1: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal'
  },
  text2:{
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  text3:{
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  },
  text4:{
    color: '#FA0000',
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  },
  text5:{
    fontSize: 15,
    fontFamily: FontFamily.robotoRegular,
    color: "#000",
    textAlign: "center"
  },
   
  button: {
    marginTop: 70,
    width: 326,
    height: 44,
    flexShrink: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CA1536',
    backgroundColor: '#EE0A0A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4, 
  },
  rectanglePressable: {
    padding: 20,
    paddingRight: 50,
    fontSize: 18,
    textDecorationLine: "line-through",
  },

  Pre:{
      borderWidth: 1,
      borderRadius: 20,
      height: 50,
      width: 300,
      padding: 10,
      
  },
  iconvector:{
    
    }
 
});

export default Header;
