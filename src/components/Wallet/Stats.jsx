import { View, Text } from 'react-native'
import React from 'react'

// Icons
import { Ionicons } from '@expo/vector-icons'

const Card = ({ title, amount, icon }) => {
    return (
        <View className="w-1/3 p-1 h-full">
            <View className="bg-[#1a1416] border border-[#3f353d] rounded-xl p-3 h-full flex items-center justify-between">
                <View className="flex items-center mb-2">
                    <Text className="text-[#ffdc64] text-xl font-semibold">{amount}</Text>
                </View>
                <View className="flex items-center justify-center rounded-full bg-[#393625] h-12 w-12">
                    <Ionicons name={icon} size={22} color="#ffdc64" />
                </View>
                <Text className="text-white text-xs">{title}</Text>
            </View>
        </View>
    )
}

export default function Stats() {
    const incomingAmount = 1000
    const outgoingAmount = 5000

    return (
        <View>
            <Text className="text-white text-xl mb-2">Summary</Text>
            <View className="flex flex-row items-center justify-evenly h-40 py-1">
                <Card title="Total Balance" amount={incomingAmount - outgoingAmount} icon="cash" />
                <Card title="Total Incoming" amount={incomingAmount} icon="arrow-down" />
                <Card title="Total Outgoing" amount={outgoingAmount} icon="arrow-up" />
            </View>
        </View>
    )
}