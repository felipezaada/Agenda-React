import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';


interface ClockProps {
  x?: number;
  y?: number;
}

const defaultProps: ClockProps = {
  x: 0,
  y: 0,
};


const Clock: React.FC<ClockProps> = (props) => {

  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  // altura e largura
  const { height, width } = Dimensions.get('window');


  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { hours, minutes, seconds } = time;
  const coeficienteClockSize = 400;
  const clockSize = (width / height) * coeficienteClockSize;


  const styles = StyleSheet.create({
    container: {
      minHeight: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      bottom: props.y,
      left: props.x
    },

    clock: {
      minWidth: clockSize,
      minHeight: clockSize,
      borderRadius: clockSize / 2,
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      borderWidth: clockSize / 60,
      borderColor: '#333',
      borderStyle: 'solid'

    },

    number: {
      fontSize: clockSize / 25,
      fontWeight: '600',
      position: 'absolute',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      color: '#000000'
    },
    number1: {
      transform: [
        { rotate: '30deg' }
      ]
    },
    number2: {
      transform: [
        { rotate: '60deg' }
      ]
    },
    number3: {
      transform: [
        { rotate: '90deg' }
      ]
    },
    number4: {
      transform: [
        { rotate: '120deg' }
      ]
    },
    number5: {
      transform: [
        { rotate: '150deg' }
      ]
    },
    number6: {
      transform: [
        { rotate: '180deg' }
      ]
    },
    number7: {
      transform: [
        { rotate: '210deg' }
      ]
    },
    number8: {
      transform: [
        { rotate: '240deg' }
      ]
    },
    number9: {
      transform: [
        { rotate: '270deg' }
      ]
    },
    number10: {
      transform: [
        { rotate: '300deg' }
      ]
    },
    number11: {
      transform: [
        { rotate: '330deg' }
      ]
    },
    number12: {
      transform: [
        { rotate: '360deg' }
      ]
    },
    center: {
      width: clockSize / 30,
      height: clockSize / 30,
      borderRadius: clockSize,
      backgroundColor: '#a52a2a',
      position: 'absolute',

      zIndex: 2
    },
    secondHand: {
      width: clockSize / 200,
      height: clockSize / 2.5,
      backgroundColor: '#FF0000',
      borderRadius: clockSize,
      transformOrigin: `50% 100%`,
      transform: `translate(0px, -${clockSize / 5}px) rotate(${seconds * 6}deg)`,
      position: 'absolute',
    },
    minuteHand: {
      width: clockSize / 100,
      height: clockSize / 3,
      backgroundColor: '#333333',
      borderRadius: clockSize,
      transformOrigin: `50% 100%`,
      transform: `translate(0px, -${clockSize / 6}px) rotate(${minutes * 6}deg)`,
      position: 'absolute'
    },
    hourHand: {
      width: clockSize / 100,
      height: clockSize / 5,
      backgroundColor: '#333333',
      borderRadius: clockSize,
      transformOrigin: `50% 100%`,
      transform: `translate(0px, -${clockSize / 10}px) rotate(${minutes * 0.5 + (hours * 30)}deg)`,
      position: 'absolute'
    },

  });

  return (
    <View style={styles.container}>
      <View style={styles.clock}>
        <View style={styles.number}>
          <Text style={[styles.number, styles.number1]}>1</Text>
          <Text style={[styles.number, styles.number2]}>2</Text>
          <Text style={[styles.number, styles.number3]}>3</Text>
          <Text style={[styles.number, styles.number4]}>4</Text>
          <Text style={[styles.number, styles.number5]}>5</Text>
          <Text style={[styles.number, styles.number6]}>6</Text>
          <Text style={[styles.number, styles.number7]}>7</Text>
          <Text style={[styles.number, styles.number8]}>8</Text>
          <Text style={[styles.number, styles.number9]}>9</Text>
          <Text style={[styles.number, styles.number10]}>10</Text>
          <Text style={[styles.number, styles.number11]}>11</Text>
          <Text style={[styles.number, styles.number12]}>12</Text>
        </View>

        <View style={[styles.center]} />

        <View style={[styles.secondHand]} />
        <View style={[styles.minuteHand]} />
        <View style={[styles.hourHand]} />
      </View>
    </View>
  );

}

export default Clock;