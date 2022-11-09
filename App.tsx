
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {MotiView} from "moti";
import {Easing} from "react-native-reanimated";

const _color = '#64eb82'
const _size = 100

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(4).keys()].map(index =>{
          return (
              <MotiView
                  from={{opacity: 0.5, scale: 1}}
                  animate={{opacity: 0, scale: 4}}
                  transition={{
                    type: 'timing',
                    duration: 2000,
                    easing: Easing.out(Easing.ease),
                    delay: index * 400,
                    repeatReverse: false,
                    loop: true,
                  }}
                  key={index}
                  style={[
                      StyleSheet.absoluteFillObject,
                      styles.dot
                  ]}
              />)
        })}
        <Feather name='phone-outgoing' size={32} color='#fff'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color
  }
});
