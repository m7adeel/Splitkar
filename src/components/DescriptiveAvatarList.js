import { View, Text } from 'react-native'
import React from 'react'

// Components
import DescriptiveAvatar from './Avatars/DescriptiveAvatar'

export default function DescriptiveAvatarList() {
  return (
    <View className="flex flex-row items-center justify-between w-full">
      <DescriptiveAvatar />
      <DescriptiveAvatar />
      <DescriptiveAvatar />
      <DescriptiveAvatar />
    </View>
  )
}