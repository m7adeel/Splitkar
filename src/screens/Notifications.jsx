import { View, Text } from 'react-native'
import React from 'react'

// Components
import NotificationsList from '../components/General/NotificationsList'

export default function Notifications() {
  return (
    <View className="bg-[#090506] p-2 h-full">
      <Text className="text-white text-2xl mt-10 mb-3">Notifications</Text>
      <NotificationsList />
    </View>
  )
}