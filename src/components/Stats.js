import { View, Text } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'

const Tile = ({ title, value, icon }) => {
    return (
        <View className='m-2 border border-gray-100 py-5 rounded-xl h-28 flex items-center justify-evenly'>
            <View className="flex flex-row items-end">
                <Text className={`text-3xl font-semibold `}>{value}</Text>
                {icon && icon()}
            </View>
            <Text className='text-gray-500'>{title}</Text>
        </View>
    )
}

export default function Stats() {
    // Amount to be paid
    // Amount to be received

    const amountToBePaid = 100
    const amountToBeReceived = 200

    return (
        <View className="mt-4 flex flex-row">
            <View className="w-1/2">
                <Tile title='Amount to be paid' value={amountToBePaid} icon={() => {
                    return <MaterialCommunityIcons name="arrow-top-right-thick" size={30} color="red" />
                }} />
            </View>
            <View className="w-1/2">
                <Tile title='Amount to be received' value={amountToBeReceived} icon={() => {
                    return <MaterialCommunityIcons name="arrow-bottom-left-thick" size={30} color="green" />
                }} />
            </View>
        </View>
    )
}