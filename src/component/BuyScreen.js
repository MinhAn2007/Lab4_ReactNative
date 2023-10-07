import React ,{useState}from "react";
import { StyleSheet, View, Text, Image, Linking, TouchableOpacity,Pressable} from "react-native";

const BuyScreen = () => {
    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(141800); // Giá ban đầu
    const [discountCodes, setDiscountCodes] = useState(["MAGIAM1"]); // Các mã giảm giá
  
    const handleButtonPress = (operation) => {
      if (operation === "+") {
        setCount(count + 1);
        setTotalPrice(totalPrice + 141800); // Tăng giá theo số lượng sách
      } else if (operation === "-" && count > 1) {
        setCount(count - 1);
        setTotalPrice(totalPrice - 141800); // Giảm giá theo số lượng sách
      }
    };
  
    const handleApplyDiscount = (code) => {
      if (discountCodes.includes(code)) {
        setTotalPrice(totalPrice - 50000);
        setDiscountCodes(discountCodes.filter((item) => item !== code));
      }
    };
  
    return (
        <View style={styles.header}>
          <Image style={styles.image} source={require('/assets/book.png')} />
          <View style={{ flexDirection: 'column', marginLeft: 3 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 13 }}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 13, marginTop: 10 }}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.price}>141.800 đ</Text>
            <Text style={styles.reduced}>141.800 đ</Text>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <TouchableOpacity style={styles.press} title={'-'} onPress={() => handleButtonPress('-')}>-</TouchableOpacity>
              <Text style={{ marginRight: 15, fontWeight: 'bold', fontSize: 20 }}>{count}</Text>
              <TouchableOpacity style={styles.press} title={'+'} onPress={() => handleButtonPress('+')}>+</TouchableOpacity>
              <Text style={{ color: 'blue', marginTop: 5, marginLeft: 45, fontWeight: 'bold', fontSize: 15 }}
                onPress={() => Linking.openURL('https://shopee.vn/')}>
                Mua sau
              </Text>
            </View>
            <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 14, marginLeft: -140 }}>Mã giảm giá đã lưu</Text>
            <Text style={{ marginTop: -18, color: 'blue', marginLeft: 10, fontWeight: 'bold', fontSize: 14 }}
              onPress={() => Linking.openURL('https://tiki.vn/khuyen-mai/ma-giam-gia')}>
              Xem tại đây
            </Text>
          </View>
          <View style={styles.promo}>
            <View style={{ backgroundColor: 'yellow', height: '40%', width: '30%', border: '1px solid grey', marginRight: '-20px' }}></View>
            <Text style={{ fontWeight: 'bold', fontSize: '20px' }}>Mã giảm giá</Text>
            </View>
            <TouchableOpacity onPress={() => handleApplyDiscount("MAGIAM1")} style={styles.use}>Áp dụng</TouchableOpacity>
          <View style = {{backgroundColor:'#d4d0cf', height: '3%',width: '110%',marginLeft:'-100%',marginTop:'85%'}}></View>
          <View style={styles.div}>
          <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 13}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          <Text style={{ marginTop: -18, color: 'blue', marginLeft: 10, fontWeight: 'bold', fontSize: 13 }}
              onPress={() => Linking.openURL('https://tiki.vn/khuyen-mai/ma-giam-gia')}>
              Nhập tại đây?
            </Text></Text>  
            </View>
            <View style = {{backgroundColor:'#d4d0cf', height: '3%',width: '110%',marginLeft:'-103%',marginTop:'106%'}}></View>
            <Text style={{ marginTop: '112%', fontWeight: 'bold', fontSize: 22, marginLeft: '-105%' }}>Tạm tính
            </Text>
            <Text style={{color:'red',marginLeft:'35%',marginTop:'112%',fontSize:20,fontWeight:'bold'}}>{totalPrice} đ</Text>
            <View style = {{backgroundColor:'#d4d0cf', height: '10%',width: '140%',marginRight:'-20px',marginLeft:'-103%',marginTop:'123%'}}></View>
            <Text style={{ marginTop: '142%', fontWeight: 'bold', fontSize: 24, marginLeft: '-115%' ,color:'#8e9490'}}>Thành Tiền
            </Text>
            <Text style={{color:'red',marginLeft:'30%',marginTop:'142%',fontSize:20,fontWeight:'bold'}}>{totalPrice} đ</Text>
            <TouchableOpacity style={styles.buttonSend}>TIẾN HÀNH ĐẶT HÀNG</TouchableOpacity>

        </View>

      );
    }

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    image: {
        width: '32%',
        height: '30%',
        resizeMode: 'contain',
        marginLeft: '3%',
        marginVertical: '-5%',
        marginRight: '3%',
    },
    price: {
        marginTop: 10,
        color: 'red',
        fontSize: 22,
        fontWeight: 'bold',
    },
    reduced: {
        marginTop: 10,
        color: 'grey',
        fontSize: 15,
        textDecorationLine: 'line-through',
    },
    press: {
        width: 25,
        height: 25,
        backgroundColor: '#d4d0cf',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        fontWeight: 'bold',
        fontSize: '20px',

    },
    divPicture: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '13%',
        width: '80%',
        marginLeft: '10%',
        border:'1px solid blue',
        marginTop: '5%',
    },
    promo:{
        marginLeft: '-92%',
        marginTop: '60%',
        flexDirection: 'column',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '10%',
        width: '60%',
        border:'1px solid grey',
    } ,
    use:{
        marginLeft: '7%',
        marginTop: '60%',
        fontWeight: 'bold',
        fontSize: '20px',
        fontFamily: 'sans-serif',
        border:'1px solid',
        width: '25%',
        height: '10%',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#fff',
        backgroundColor: '#0A5EB7',
    },
    div:{
        marginLeft: '-103%',
        marginTop: '90%',
        height: '10%',
        width: '100%',
    },
    buttonSend:{
        color:'white',
        marginLeft:'-83%',
        marginTop:'155%',
        fontSize:22,
        fontWeight:'bold',
        backgroundColor:'red',
        width:'90%',
        height:'8%',
        textAlign:'center',
        justifyContent:'center',
        fontFamily:'sans-serif',
    }
});

export default BuyScreen;
