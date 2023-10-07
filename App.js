import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/component/LoginScreen';
import FeedbackScreen from './src/component/FeedbackScreen';
import PassWordScreen from './src/component/PassWordScreen';
import BuyScreen from './src/component/BuyScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen></LoginScreen> */}
      {/* <FeedbackScreen></FeedbackScreen> */}
      {/* <PassWordScreen></PassWordScreen> */}
      <BuyScreen></BuyScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
