import { View, Text } from "react-native";
import React, { useState } from "react";

export default function TransactionsListDisplay() {
  /**
   * Filters :- all, active, inactive, pending
   */
  const filters = ["All", "Active", "Inactive", "Pending"];
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <View className="p-2">
      <View className="flex flex-row items-center justify-evenly border border-white rounded-lg h-10 w-4/5 mt-10">
        {filters.map((filter, index) => {
            const background = index === selectedFilter ? 'bg-[#ffdc64]' : 'bg-[#090506]'
          return (
            <Text className={`text-white border w-1/4 h-full text-center rounded-lg ${background}`} key={index} onPress={() => setSelectedFilter(index)}>
              {filter}
            </Text>
          );
        })}
      </View>
    </View>
  );
}
