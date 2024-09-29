import { View, Text } from "react-native";
import React from "react";

import NearbyFriends from "../components/NearbyFriends";
import AllFriends from "../components/AllFriends";

export default function Friends() {
  return (
    <View className="bg-[#090506] p-2 h-full">
        <Text>Friends</Text>
        <NearbyFriends />
        <AllFriends />
    </View>
  );
}
