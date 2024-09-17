import { View, Text } from 'react-native'
import React from 'react'

import SearchBar from '../components/SearchBar'
import Stats from '../components/Stats'
import TransactionHistory from '../components/TransactionHistory'

import NearbyFriends from '../components/NearbyFriends'

export default function LandingPage() {
  const endBlack = "#151821"
  return (
    <View className="bg-[#090506] p-2 h-full">
      {/* Search bar */}
      <NearbyFriends />
      <TransactionHistory />
    </View>
  )
}