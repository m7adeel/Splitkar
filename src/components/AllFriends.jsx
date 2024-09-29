import { View, Text } from "react-native";
import React from "react";

// Components
import Friend from './Items/Friend'

export default function AllFriends() {
  return (
    <View className="p-2">
      <Text className="text-lg text-white font-bold tracking-wider">
        All Friends
      </Text>
        <Friend />
        <Friend />
        <Friend />
        <Friend />
    </View>
  );
}
