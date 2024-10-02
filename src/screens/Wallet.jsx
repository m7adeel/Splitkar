import { View, Text } from 'react-native'
import React from 'react'

// Components
import TransactionsListDisplay from '../components/Wallet/TransactionsListDisplay'

export default function Wallet() {
  return (
    <View className="bg-[#090506] p-2 h-full">
        <View>
            {/* Summary */}
        </View>
        <View>
            {/* Transaction List */}
            <TransactionsListDisplay />
        </View>
    </View>
  )
}