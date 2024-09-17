import { View, Text } from 'react-native'
import React from 'react'

// Components
import Avatar from './Avatar'


/**
 * This Component will show a list of Avatars overlapped on each other
 * Maximum number of avatars to show is maxAvatarsToShow
 * Other will be shown as a +{remaining} text
 * 
 * @param {[]string} list - List of people 
 * @param {number} maxAvatarsToShow - Maximum number of avatars to show
 * 
 * @returns AvatarList component
 */
export default function AvatarList({list, maxAvatarsToShow=2}) {
  const avatars = [
    {source: null},
    {source: null},
    {source: null},
    {source: null},
    {source: null},
    {source: null},
  ]

  const remainingAvatars = avatars.length - maxAvatarsToShow;
  return (
    <View className="flex flex-row-reverse">
      {remainingAvatars > 0 && (
        <View style={{  }}>
          <Avatar>
            <View className="flex h-full w-full items-center justify-center">
            <Text className="font-bold ml-3 text-xs">+{remainingAvatars}</Text>
            </View>
          </Avatar>
        </View>
      )}
      {avatars.slice(0, maxAvatarsToShow).map((avatar, index) => (
        <View key={index} style={[{ marginRight: -19 }]}>
          <Avatar />
        </View>
      ))}

      
    </View>
  )
}