import { View, Text } from 'react-native'
import React from 'react'

export default function DescriptiveAvatar({
    url,
    children,
    name
}) {

    if (children) {
        return (
            <>
                <View className="rounded-full h-14 w-14 bg-yellow-300 border border-black overflow-hidden">
                    {children}
                </View>
            </>
        )
    }

    return (
        <View className="flex items-center justify-evenly h-full w-14">
            <View className="rounded-full h-14 w-14 bg-yellow-300 border border-black overflow-hidden">
            </View>
            <Text className="text-white text-xs font-semibold">Name</Text>
        </View>
    )
}