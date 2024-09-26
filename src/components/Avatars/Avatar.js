import { View, Text } from 'react-native'
import React from 'react'

export default function Avatar({url, children}) {
  if(children) {
    return (
      <View className="rounded-full h-10 w-10 bg-yellow-300 border border-black overflow-hidden">
        {children}
      </View>
    )
  }

  return (
    <View className="rounded-full h-10 w-10 bg-yellow-300 border border-black overflow-hidden">
    </View>
  )
}