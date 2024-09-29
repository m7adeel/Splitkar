import { View, Text } from 'react-native'
import React from 'react'

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Components
import AvatarList from '../AvatarList'

/**
 * @param {string} title - Title of the transaction
 * @param {number} amount - Amount of the transaction
 * @param {string} date - Date of the transaction
 * @param {[]string} people - People involved in the transaction
 * 
 * @returns Transaction component
 */
export default function Transaction({title, amount, date, people}) {
  return (
    <View className="w-full border border-[#1D1D25] rounded-2xl bg-[#191c25] h-20 p-3 flex flex-row items-center justify-between my-1">
      <View className="bg-[#2e2b26] h-14 w-14 rounded-2xl border border-[#282423] flex items-center justify-center">
        <MaterialCommunityIcons name="account-group" size={25} color="#ffdd62"/>
      </View>
      <View className="flex flex-col mx-4 my-1 justify-between w-1/2">
        <Text className="text-[#f1f1f1] text-base">Team Dinner</Text>
        <Text className="text-[#6d6e73] text-xs">Total Payment ($300)</Text>
      </View>
      <View>
        <AvatarList />
      </View>
    </View>
  )
}