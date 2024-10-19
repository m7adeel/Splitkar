import { View, Text } from 'react-native'
import React from 'react'

// Components
import BillForm from '../components/Bill/BillForm'
import BarHeader from '../components/General/BarHeader'

export default function AddBill({ navigation }) {
  return (
    <View className="bg-[#090506] p-2 h-full">
      <BarHeader title="Add Bill" navigation={navigation} />
      <BillForm />
    </View>
  )
}