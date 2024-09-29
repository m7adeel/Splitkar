import { View, Text } from 'react-native'
import React from 'react'

/**
 * 
 * @usage This component will use up the entire space of its parent container.
 *        If you provide a child component, it will be rendered inside the avatar.
 *        If you want to control the size of the avatar, you can do so by setting the width and height of the parent container.
 * 
 * @returns 
 */
export default function Avatar({url, children}) {
  if(children) {
    return (
      <View className="rounded-full h-full w-full bg-yellow-300 border border-black overflow-hidden">
        {children}
      </View>
    )
  }

  return (
    <View className="rounded-full h-full w-full bg-yellow-300 border border-black overflow-hidden">
    </View>
  )
}