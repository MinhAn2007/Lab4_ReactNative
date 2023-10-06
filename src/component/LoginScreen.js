import  React from  'react';

import { StyleSheet, View ,Text, Pressable,TextInput, Linking} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";


const LoginScreen = () => {


  return(
    <View style={styles.container}>
        <Text style={styles.logoText}>LOGIN</Text>
        <View style={styles.inputView}>
        <View style={styles.passwordView}>
         <TextInput style={styles.text} placeholder="Name" />    
         <Icon
            name={"user"}
            size={30}
            color="#000"
            style={styles.iconUser}
          /> {`\n`}   
          <TextInput style={styles.text} placeholder="Password" />
          <Icon
            name={"lock"}
            size={30}
            color="#000"
            style={styles.iconLock}

          />
          <Pressable
          style={styles.eyeIcon}
        >
          <Icon
            name={"eye-slash"}
            size={30}
            color="#000"
          />

        </Pressable>
          </View>
                  </View>
                  <Pressable style={styles.button} >
        <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <View>
             <Text style={styles.textContner}>
             CREATE AN ACCOUNT</Text>
            </View>
    </View>
   );
 }
 const styles = StyleSheet.create({
    container: {
        display: 'flex', // Đặt hiển thị thành flex
        flex: 1, // Đặt flex thành 1
        backgroundColor: "#FBCB00",
        width: '100%', // Đặt chiều rộng thành 100%
        height: '100%', // Đặt chiều cao thành 100%
    },
  logoText: {
    marginTop: 80,
    fontSize: 40,
    fontWeight: "bold",
    borderColor: "#55DAF7",
    marginLeft: 30,
    marginBottom: 20,
  },
  inputView:{
    marginTop: 40,
    width:"90%",
    marginLeft: 30,
  },
  text:{
    width: "96%",
    height: 60,
    borderColor: "white",
    marginTop: 20,
    paddingLeft: 60,
    borderWidth:2,
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: -10,
  },
  eyeIcon: {
    position: "absolute",
    marginTop: 120,
    marginLeft: "80%",
  },
  button: {
    marginTop: 80,
    marginLeft: 20,
    width: "88%",
    height: 60,
    backgroundColor: "black",
  },
  buttonText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  textContner: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  iconLock: {
    position: "absolute",
    marginLeft: 10,
    marginTop: 120,
  },
  iconUser: {
    position: "absolute",
    marginLeft: 10,
    marginTop: 35,
  },
 });
export default LoginScreen;
