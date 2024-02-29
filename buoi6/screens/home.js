
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React, {useState, useEffect} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

  const numberOfStars = 5;
  const stars = Array.from({ length: numberOfStars }, (v, i) => (
    <Entypo key={i} name="star" size={24} color="yellow" />
  ));
  const FontFamily = {
    robotoRegular: "Roboto-Regular",
    };
const Home = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [color, setColor] = useState("vs_black.png");
    const [name , setName] = useState("Black")
    const handleChoose = () => {
      navigation.navigate("Set", { color },{ name });
    };
    useEffect(() => {
      if (route.params?.color) {
      }
    }, [route.params?.color]); 
  return (
     
    <View style={styles.container}>
      <Image
        source={require(`../assets/img/${route.params?.color ?? color}`)}
        style={styles.IMG1}
      ></Image>
        <Text style={styles.text1}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      <View style={styles.group0}>
        <Text style={styles.text2}> {stars}
        (Xem 828 đánh giá)
        </Text>
      </View>
      <View style={styles.group1}>
        <Text style={styles.text3}>1.790.000 đ</Text>
        <Text style={styles.text4}>1.790.000 đ</Text>
      </View>
      <View style={styles.group2}>
        <Text style={styles.text5}>
      Ở ĐÂU RẺ HƠN HOÀN TIỀN    <AntDesign style={styles.vectoric1} name="questioncircleo" size={24} color="black" />
        </Text>
      </View>
      <View style={styles.group3}>
        <Pressable style={styles.Pre} onPress={() => handleChoose()}>
        <Text style={styles.text6}>4 MÀU-CHỌN MÀU  <AntDesign style={styles.iconvector} name="right" size={14} color="black" /></Text>
        </Pressable>
      </View>
      <View style={styles.group4}>
        <Pressable style={styles.Pre1} onPress={() => alert('Xác nhận mua thành công!!!')}>
        <Text style={styles.text7}>CHỌN MUA</Text>
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
    IMG1: {
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
    color: 'rgba(0, 0, 0, 0.58)',
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    paddingLeft: 50,
    textDecorationLine: "line-through",
  },
  text5:{
    color: '#FA0000',
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
   
  },
  text6:{
    fontSize: 15,
    fontFamily: FontFamily.robotoRegular,
    color: "#000",
    textAlign: "center"
  },
  text7:{
    fontSize: 20,
    fontFamily: FontFamily.robotoRegular,
    color: "#f9f2f2",
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
  Pre1:{
    borderWidth: 1,
    borderRadius: 20,
    height: 50,
    width: 300,
    padding: 10,
    backgroundColor: '#FA0000',
    
},
  iconvector:{
//    marginLeft:9
  },
  group0: {
    flexDirection: "row",
    paddingTop:20,
  },
  group1: {
    flexDirection: "row",
    paddingTop:20,
  },
  group2: {
    flexDirection: "row",
    paddingTop:20,
    marginRight:80,
  },
  group3: {
    flexDirection: "row",
    paddingTop:40,
  },
  group4: {
    flexDirection: "row",
    paddingTop:40,
    
  },

});

export default Home;
