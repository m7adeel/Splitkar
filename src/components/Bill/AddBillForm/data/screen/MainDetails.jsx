import { View, Text } from 'react-native'
import React from 'react'

export default function MainDetails() {
  return (
    <View className="h-full w-[90%]">
      <View className="mt-10">
        <Text className="text-2xl text-white font-bold">Enter Bill Details</Text>
        <Text className="text-base text-gray-400 mt-1">From the bill select what you want to do</Text>
      </View>
    </View>
  )
}