import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

// Components
import AvatarList from "./AvatarList";

// Icons
import { Ionicons } from "@expo/vector-icons";

export default function NewSplitCard() {
  return (
    <View className="bg-[#1e151a] border border-[#51414b] rounded-2xl h-48 mt-5 p-4 px-6 flex flex-row">
      <View className="w-2/3 pr-5">
        <Text className="text-white text-xl mb-2">Split With</Text>
        <AvatarList />
        <TouchableOpacity className="bg-[#ffdc64] rounded-full px-7 py-5 mt-2">
          <Text className="text-[#392c16] text-md font-semibold">
            Split Now
          </Text>
        </TouchableOpacity>
      </View>
      <View className="bg-[#1a1416] border border-[#3f353d] rounded-xl w-1/3 p-4 flex items-center justify-between">
        <View className="flex items-center mb-2">
          <Text className="text-white text-xs">Total Bill</Text>
          <Text className="text-[#ffdc64] text-xl font-semibold">$120</Text>
        </View>
        <View className="flex items-center justify-center rounded-full bg-[#393625] h-12 w-12">
          <Ionicons name="fast-food" size={22} color="#ffdc64" />
        </View>
        <Text className="text-white text-xs">Design Tour</Text>
      </View>
    </View>
  );
}
