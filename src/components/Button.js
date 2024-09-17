import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({onClick, bgStyle, textStyle, text}) {
  return (
    <TouchableOpacity onPress={onClick}>
        <View className={bgStyle}>
            <Text className={textStyle}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}