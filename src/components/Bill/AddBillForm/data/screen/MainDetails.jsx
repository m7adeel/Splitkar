import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function MainDetails() {
  // Title, Total Amount, Description, Split Type (Equal, Unequal)
  const [title, setTitle] = useState('')
  const [totalAmount, setTotalAmount] = useState('')
  const [description, setDescription] = useState('')
  const [splitType, setSplitType] = useState('equal')

  return (
    <View className="h-full w-[90%]">
      <View className="mt-10">
        <Text className="text-2xl text-white font-bold">Enter Bill Details</Text>
        <Text className="text-base text-gray-400 mt-1">From the bill select what you want to do</Text>
      </View>

      {/* Title Input */}
      <View className="mt-5">
        <Text className="text-white text-sm">Title</Text>
        <TextInput
          className="w-full h-10 px-3 mt-1 rounded-lg bg-[#292526] text-white"
          placeholder="Enter Title"
          value={title}
          onChangeText={setTitle}
        />
      </View>

      {/* Total Amount Input */}
      <View className="mt-5">
        <Text className="text-white text-sm">Total Amount</Text>
        <TextInput
          className="w-full h-10 px-3 mt-1 rounded-lg bg-[#292526] text-white"
          placeholder="Enter Total Amount"
          value={totalAmount}
          onChangeText={setTotalAmount}
        />
      </View>

      {/* Description Input */}
      <View className="mt-5">
        <Text className="text-white text-sm">Description</Text>
        <TextInput
          className="w-full h-10 px-3 mt-1 rounded-lg bg-[#292526] text-white"
          placeholder="Enter Description"
          value={description}
          onChangeText={setDescription}
        />
      </View>

      {/* Split Type Input */}
      <View className="mt-5">
        <Text className="text-white text-sm">Split Type</Text>
        <TextInput
          className="w-full h-10 px-3 mt-1 rounded-lg bg-[#292526] text-white"
          placeholder="Enter Split Type"
          value={splitType}
          onChangeText={setSplitType}
        />
      </View>
    </View>
  )
}