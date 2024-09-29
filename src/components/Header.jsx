import { View, Text } from 'react-native'
import React from 'react'

// Components
import Avatar from './Avatars/Avatar'

// Icons
import { Ionicons } from '@expo/vector-icons'

export default function Header() {
  return (
    <View className="flex flex-row items-center justify-between mt-5 px-5">
      <View>
        <Ionicons name="search" size={24} color="white" />
      </View>
      <View className="h-10 w-10">
        <Avatar />
      </View>
    </View>
  )
}