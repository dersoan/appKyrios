import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

import { Button, Label } from './styles';

export default function PayButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={
          focused
            ? ['#76B72A', '#76B72A']
            : ['#76B72A', '#76B72A']
        }
        start={[1, 0.2]}
      >
        <AntDesign
          name="hearto"
          size={28}
          color={focused ? '#53038E' : '#fff'}
        />
        <Label focused={focused}>Contribuir</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
      }