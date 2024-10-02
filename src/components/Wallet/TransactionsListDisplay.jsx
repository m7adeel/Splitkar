import { View, Text } from "react-native";
import React, { useState } from "react";

// Components
import TransactionList from "../General/TransactionList";

// Icons
import { Ionicons } from '@expo/vector-icons'

export default function TransactionsListDisplay() {
  /**
   * Filters :- all, active, inactive, pending
   */
  const filters = ["All", "Active", "Inactive", "Pending"];
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <View className="p-2">
      <View className="flex flex-row justify-between">
        <View className="flex flex-row items-center justify-evenly border border-white rounded-lg h-10 w-4/5">
          {filters.map((filter, index) => {
            const background = index === selectedFilter ? 'bg-[#d4b855]' : 'bg-[#090506]'
            return (
              <View className={`w-1/4 h-full rounded-lg ${background} flex items-center justify-center`}>
                <Text className="text-white text-center tracking-wider font-semibold" key={index} onPress={() => setSelectedFilter(index)}>
                  {filter}
                </Text>
              </View>

            );
          })}
        </View>
        <View className="w-1/5 flex items-end justify-center">
          <View className="p-2 w-10 h-10 rounded-full bg-[#393625] ml-1">
            <Ionicons name="search" size={22} color="#ffdd62" />
          </View>
        </View>
      </View>
      <View className="mt-4">
        <TransactionList title={`${filters[selectedFilter]} Transaction`} />
      </View>
    </View>
  );
}
