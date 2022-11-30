import { StatusBar } from 'expo-status-bar';
import { Text,View,TouchableOpacity,Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import Logo from './assets/image/logo.jpg'
import styles from './styles/styles';

export default function App() {
  return (

    <LinearGradient 
    style={styles.container}
    colors={["#d6423f","#143a8e"]}
    start={{x:0, y:0}}
    end={{x:1 , y:1.43}}
    > 
      <Image 
      style={styles.logo}
      source={Logo}/>
      <View style={{
        marginTop: 150
      }}>
      <Text style={styles.texts}>“지인 탐색”을 누르면 개인정보 취급방침(을)를 읽었음을 인정하고
서비스 약관에 동의하시게 됩니다.</Text></View>
      <StatusBar style="auto" />
<TouchableOpacity>
   <Button 
   title = "지인탐색"
   />
</TouchableOpacity>
   </LinearGradient>

  
  );
}


