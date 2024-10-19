import { View, Text } from 'react-native'
import React from 'react'

export default function PersonSplit() {
  return (
    <View className="h-full w-[90%]">
      <View className="mt-10">
        <Text className="text-2xl text-white font-bold">Enter Participants</Text>
        <Text className="text-base text-gray-400">Select the People you want to split bill with</Text>
      </View>
    </View>
  )
}