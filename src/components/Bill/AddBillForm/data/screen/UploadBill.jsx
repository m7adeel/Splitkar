import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

// Icons
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import Sparkle from '../../../../../../assets/sparkle.png'

export default function UploadBill() {
  const [image, setImage] = useState(null);

  const uploadPicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  return (
    <View className="h-full w-[90%]">
      <View className="mt-10">
        <Text className="text-2xl text-white font-bold">Upload Your Bill</Text>
        <Text className="text-base text-gray-400 mt-1">Take a picture or upload your bill to proceed</Text>
      </View>

      <View className="flex h-96 items-center justify-center mt-5 w-full border border-[#292526] rounded-2xl">
        {
          image ? (
            <View className="h-full w-full border flex items-center justify-center">
              <Image source={{ uri: image }} style={{ width: '50%', height: '100%' }} />
              <View className="absolute top-2 right-2">
                <TouchableOpacity
                  onPress={uploadPicture}
                  className="flex items-center py-1 px-1 rounded-full">
                  <MaterialCommunityIcons name='circle-edit-outline' size={25} color="#fff" />
                  <Text className="text-gray-400 text-xs">Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) :
            (
              <TouchableOpacity
                onPress={uploadPicture}
                className="flex items-center justify-center">
                <Feather name="upload" size={30} color="#fff" />
                <Text className="text-white mt-2">Upload Picture</Text>
              </TouchableOpacity>
            )
        }

      </View>

      <View className="flex flex-row items-center justify-end">
        <TouchableOpacity className="flex flex-row items-center mt-4 py-1 px-3 border border-[#ffdc64] rounded-xl">
          <Image source={Sparkle} style={{ height: 25, width: 25 }} />
          <Text className="text-white text-lg mx-4">Use AI</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
} 