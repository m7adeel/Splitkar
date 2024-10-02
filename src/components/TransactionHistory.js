import { View, Text } from 'react-native'
import React from 'react'

// Components
import TransactionList from './General/TransactionList'


export default function TransactionHistory() {
  return (
    <View className="p-2 mt-2">
      <TransactionList title="Recent Transaction"/>
    </View>
  )
}