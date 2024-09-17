import { View, Text, TextInput } from 'react-native'
import React,{useState} from 'react'

import {MaterialIcons} from '@expo/vector-icons'

export default function SearchBar() {
    const [text, setText] = useState('')

    // right we have a search icon and a text input
  return (
    <View className="bg-gray-100 rounded-lg p-2 flex flex-row items-center"> 
      <MaterialIcons name="search" size={24} color="gray" />
        <TextInput
          placeholder="Search for friends..."
          value={text}
          onChangeText={setText}
          style={{flex: 1, marginLeft: 5}}/>
    </View>
  )
}