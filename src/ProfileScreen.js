import React, { useState, useEffect } from 'react';
import { Text, Linking, View, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProfileScreen({ route, navigation }) {
    const [githubData, setGithubData] = useState({});

    const getGithubData = async () => {
        const response = await fetch("https://api.github.com/users/erinadv");
        const data = await response.json();
        setGithubData(data);
    };

    useEffect(() => {
        getGithubData();
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
                source={require("../assets/profile.jpg")}
                style={{ borderRadius: 150, width: 200, height: 200 }}
            />
            <View style={{ margin: 10, alignItems: 'center' }}>
                <Text style={styles.txtP}>Satria Adi Pratama</Text>
                <Text style={styles.txtP}>21120121140154</Text>
                <Text style={styles.txtP}>Teknik Komputer - 2021</Text>
            </View>
            <View style={{flex:1, flexDirection: 'row', alignItems: 'flex-start', alignContent:'center', marginTop:50}}>
            <Ionicons name="logo-github" size={30} color="#e15f41" style={{ marginRight: 5 }}/>
                <Text style={{ marginRight: 20}} onPress={() => {Linking.openURL('https://github.com/satriaadipratama');
            }}>Github</Text>
            <Ionicons name="logo-instagram" size={30} color="#e15f41" style={{ marginRight: 5 }} />
                <Text onPress={() => {Linking.openURL('https://www.instagram.com/satriaadiip');
            }}>Instagram</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    txtP: {
        color: '#e15f41',
        fontSize: 18,
        fontWeight: '700',
    }
})