import { View, Text } from "react-native";
import React from "react";

// Icons
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// Components
import Avatar from "../Avatars/Avatar";

/**
 * @param {string} name - Name of the friend
 * @param {string} location - Location of the friend
 * @param {string} imageUrl - Image of the friend
 * @param {number} id - ID of the friend
 *
 * @returns Friend component
 */
export default function Friend({ name, location, imageUrl, id }) {
  return (
    <View className="w-full border border-[#1D1D25] rounded-2xl bg-[#191c25] h-24 p-3 flex flex-row items-center justify-between my-1">
      <View className="w-1/5 ">
        <View className="h-14 w-14 rounded-full border border-white flex items-center justify-center">
          <Avatar imageUrl={imageUrl} />
        </View>
      </View>
      <View className="flex flex-col mx-4 my-1 justify-between w-2/5">
        <Text className="text-[#f1f1f1] text-lg font-bold tracking-widest">
          Maddy
        </Text>
        <Text className="text-[#6d6e73] text-md">Berkely, California</Text>
      </View>
      <View className="flex flex-row w-1/5 items-center justify-between">
        <View className="p-2 rounded-full bg-[#393625] ml-[-10px]">
          <Ionicons name="chatbubbles-sharp" size={22} color="#ffdd62" />
        </View>
        <View className="p-2 rounded-full bg-[#393625] ml-1">
          <Ionicons name="call" size={22} color="#ffdd62" />
        </View>
      </View>
    </View>
  );
}
