import { View, Text } from 'react-native'
import React from 'react'

// Components
import Notification from '../Items/Notification'

export default function NotificationsList() {
  return (
    <View>
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </View>
  )
}