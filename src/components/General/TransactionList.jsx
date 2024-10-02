import { View, Text } from 'react-native'
import React from 'react'

// Components
import Transaction from '../Items/Transaction'


export default function TransactionList({title, list}) {
  return (
    <View>
      <Text className="text-lg text-white font-bold tracking-wider mb-1 ml-1">{title}</Text>
      <Transaction />
      <Transaction />
      <Transaction />
    </View>
  )
}