import { View, Text } from 'react-native'
import React from 'react'

export default function PersonSplit() {
  return (
    <View className="h-full w-[90%]">
    <View className="mt-10">
      <Text className="text-2xl text-white font-bold">Upload Your Bill</Text>
      <Text className="text-base text-gray-400 mt-2">Take a picture or upload your bill to proceed</Text>
    </View>
  </View>
  )
}