import React from 'react';
import { View, Text, Image , Button, Linking} from 'react-native';

export default function AboutScreen({navigation}) {
    return (

        <View style={{ flex: 1, }}>
            <View style={{ height: 900, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#fff' }}>
                <Image source={require('../assets/logo.png')} 
                style={{ height: 160, width: 400, marginTop: 15}}/>
                <Text style={{ color: '#e15f41', marginVertical: 15, marginHorizontal: 30, textAlign: 'justify' }}>
                    Get to know the hundreds of characters, episodes, running gags, and images from the show Bob's Burgers.
                </Text>
                
                <View style={{ margin: 10 }}>
                    {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
                    <Button title="Go to My Profile" onPress={() => navigation.navigate('Profile')} color='#e15f41' />
                </View>
                <Text style={{ color: '#e15f41', margin: 15 }}>©Copyright 2023</Text>
                <Text style={{ color: '#e15f41'}} >Developed by Satria Adi Pratama</Text>
                <Text style={{ color: '#e15f41' }} 
                onPress={() => {Linking.openURL('https://bobsburgers-api.herokuapp.com/');
                }} >Bob's Burgers API by Zachary </Text>
            </View>

        </View>

    );
}