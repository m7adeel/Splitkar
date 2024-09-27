import { View, ScrollView } from 'react-native'
import React from 'react'

// Components
import SearchBar from '../components/SearchBar'
import Stats from '../components/Stats'
import TransactionHistory from '../components/TransactionHistory'
import NearbyFriends from '../components/NearbyFriends'
import NewSplitCard from '../components/NewSplitCard'
import Header from '../components/Header'

export default function LandingPage() {
  const endBlack = "#151821"
  return (
    <View className="bg-[#090506] p-2 h-full">
      <ScrollView>
        <Header />
        <NewSplitCard />
        <NearbyFriends />
        <TransactionHistory />
      </ScrollView>
    </View>
  )
}