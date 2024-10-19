import { View, Text } from 'react-native'
import React from 'react'

// Icons
import { Ionicons } from '@expo/vector-icons'

export default function BarHeader({ title, navigation }) {
    return (
        <View className="w-full rounded-b-lg h-16 pt-5 px-4 bg-[#ffdc64] flex flex-row items-center justify-between">
            <View>
                <Ionicons
                    name="close-circle-outline"
                    size={25}
                    color="#ffdc64"
                />
            </View>
            <Text className="text-[#090506] text-center text-2xl text-bold">
                {title}
            </Text>
            <View>
                <Ionicons
                    name="close-circle-sharp"
                    size={25}
                    color="#3c3f44"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View>
    )
}