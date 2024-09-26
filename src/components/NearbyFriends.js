import { View, Text } from 'react-native'
import React from 'react'

// Components
import DescriptiveAvatarList from './DescriptiveAvatarList'

export default function NearbyFriends() {
  return (
    <View className="flex h-40 px-4 py-5 mt-5 w-full border border-[#292526] rounded-2xl">
      <View className="flex flex-row items-center justify-between">
        <Text className="text-[#e4e2e3] text-lg font-semibold">Nearby Friends</Text>
        <Text className="text-[#565253] text-sm font-semibold">See All</Text>
      </View>
      <DescriptiveAvatarList />
    </View>
  )
}

