import { View, Text } from 'react-native'
import React, { useState } from 'react'

// Components
import { Onboarding } from './AddBillForm/screens/Onboarding'

export default function BillForm() {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [peopleInvoled, setPeopleInvoled] = useState([])  // TODO: Current user will always be involved
    const [items, setItems] = useState([])

    return (
        <View className="h-[90%]">
            <Onboarding />
        </View>
    )
}