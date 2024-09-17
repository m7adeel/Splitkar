import { View, Text } from 'react-native'
import React from 'react'

// Components
import Transaction from './Transaction'


export default function TransactionHistory() {
  return (
    <View className="p-2">
      <Text className="text-lg text-white font-bold tracking-wider">Recent Transactions</Text>
      <Transaction />
    </View>
  )
}