import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Text } from '@rneui/themed';
import Button from '../components/Button';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'user' && password === 'password') {
            navigation.navigate('Home');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <View className='flex-1 justify-center px-6'>
            <Text h3 className='text-center mb-6'>
                Login
            </Text>
            <Input
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button text="Log in" onClick={handleLogin} bgStyle='bg-blue-500 py-2 rounded-lg' textStyle='text-white text-center text-lg tracking-widest font-semibold' />
            {/* Singup secondary button */}
            <Button text="Sign up" onClick={() => navigation.navigate('Signup')} bgStyle='bg-transparent py-3 rounded-lg' textStyle='text-blue-500 text-center tracking-widest underline' />
        </View>
    );
};

export default LoginScreen;
