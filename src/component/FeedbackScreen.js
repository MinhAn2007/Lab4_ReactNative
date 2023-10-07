import React ,{useState}from "react";
import { StyleSheet, View, Text, Image ,TouchableOpacity,Pressable,TextInput,Button} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ImagePicker from 'react-native-image-picker';

const FeedbackScreen = () => {
    const [rating, setRating] = useState(0);

    const send = () => {
        alert('Gửi đánh giá thành công');
        console.log('Gửi đánh giá thành công');
    }

      
    const handleStarPress = (selectedRating) => {
      setRating(selectedRating);
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('/assets/usb.jpg')} style={styles.logo} />
                <Text style={styles.textHeader}>USB Bluetooth Music Receiver HJX-001-Biến loa thường thành loa
                 Bluetooth</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.textBody}>Đánh giá sản phẩm</Text>
            </View>
            <View style={styles.starRating}>
            {[1, 2, 3, 4, 5].map((index) => (
                <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
                <Image
                    source={
                    index <= rating
                        ? require('/assets/star.jpg') // Hình ảnh sao đã được chọn
                        : require('/assets/emptyStar.png') // Hình ảnh sao chưa được chọn
                    }
                    style={{ width: 40, height: 40 }}
                />
                </TouchableOpacity>
            ))}

            </View>
            <Pressable style={styles.divPicture}>
            <Icon
                name="camera"
                size={30}
                color="#000"
            />
             <Text style={styles.textImage}>Thêm hình ảnh</Text>
            </Pressable>
            <TextInput style={styles.area} placeholder="Hãy chia sẽ những điều bạn thích về sản phẩm" multiline={true}/>
            <Text style={styles.met}>https://meet.google.com/nsj-ojwi-xpp</Text>
            <Pressable style={styles.button} >
                <Button color={'#1511EB'} title="Gửi"onPress={send}></Button>
            </Pressable>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: '100%'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '18%'
    },
    textHeader: {
        fontSize: 17,
        fontWeight: 'bold',
        height: '65%',
        alignContent: 'center',
        marginLeft: 10,
    },
    logo: {
        width: '25%',
        height: '55%',
    },
    body:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBody: {
        fontSize: 25,
        fontWeight: 'bold',
        height: '65%',
        alignContent: 'center',
        marginTop: '6%',
    },
    starRating: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '10%',
        width: '80%',
        marginLeft: '10%',
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
    textImage:{
        fontSize: 22,
        fontWeight: 'bold',
        alignContent: 'center',
        marginLeft: '-30%'
    },
      content2:{
        flex: 1,
        flexDirection: "column",
    },
    footer:{
        flex: 0.7,
        flexDirection: "column",
    },
    area:{
        /* Rectangle 31 */
        marginLeft: '10%',
        marginTop: '7%',
        width: '81%',
        height: '35%',
        BoxSizing : 'border-box',
        border: '0.5px solid grey',
        borderRadius: '5px',
        borderColor: 'gray',
        borderWidth: 1,
        textAlignVertical: 'top',
        padding: 10,
        fontSize: 18,
        color: 'black', // Màu văn bản
        placeholderTextColor: 'gray', // Màu của placeholder
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    met:{
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 14,
        marginLeft: '27%',
        marginTop: '-5%',
    },
    button:{
        marginTop: '5%',
        marginLeft: '10%',
        width: '80%',
        size: 20,
        backgroundColor:'#1511EB',
    }
});

export default FeedbackScreen;
