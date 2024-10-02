import { View, Text } from 'react-native'
import React from 'react'

// Components
import TransactionsListDisplay from '../components/Wallet/TransactionsListDisplay'
import Stats from '../components/Wallet/Stats'

export default function Wallet() {
  return (
    <View className="bg-[#090506] p-2 h-full">
        <View className="mt-10 p-2">
            {/* Summary */}
            <Stats />
        </View>
        <View>
            {/* Transaction List */}
            <TransactionsListDisplay />
        </View>
    </View>
  )
}