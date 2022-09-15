import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{width:150}}
source={require('C:\Users\AYUSH\Desktop\Native\login\logo.jpg')}

      />
      {/* <StatusBar style="auto" /> */}
      <Text>Hello g kkrh aaj kal </Text>
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
