import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import backgroundGradient from "../../../assets/product/product-background-gradient.png";
import logo from "../../../assets/raffle/logo.png";
import check from "../../../assets/raffle/check.png";
import yapLogo from "../../../assets/footer/yap-logo.png";

const Raffle = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isAgreementChecked, setIsAgreementChecked] = useState(false);

    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const toggleAgreement = () => {
        setIsAgreementChecked(!isAgreementChecked);
    };

    const handleFormSubmit = async () => {
        if (!name || !email) {
            alert("Please enter your name and email.");
        } else if (!isEmailValid(email)) {
            alert("Please enter a valid email.");
        } else if (!isAgreementChecked) {
            alert("Please check the agreement box to proceed.");
        } else {
            const formData = {
                name, email, phoneNumber
            };

            try {
                const timeStamp = new Date().getTime();
                const key = `formData_${timeStamp}`;
                const jsonFormData = JSON.stringify(formData);
                await AsyncStorage.setItem(key, jsonFormData);

                setName('');
                setEmail('');
                setPhoneNumber('');
                setIsAgreementChecked(false);

                navigation.navigate("Congrats")
            } catch (err) {
                console.error("error storing", err);
            }
        }
    };

    ////TO RETRIEVE ALL THE STORED DATA
    // const logAllStoredData = async () => {
    //     try {
    //       const keys = await AsyncStorage.getAllKeys(); // Get all storage keys
    //       const data = await AsyncStorage.multiGet(keys); // Get data for all keys
      
    //       data.forEach(([key, value]) => {
    //         console.log(`Key: ${key}, Value: ${value}`);
    //       });
    //     } catch (error) {
    //       console.error('Error retrieving and logging data:', error);
    //     }
    // };

    // const handleTestPress = () => {
    //     logAllStoredData();
    // }

    ////TO CLEAR ALL DATA
    // const clearAllData = async () => {
    //     try {
    //         await AsyncStorage.clear();
    //         console.log('All data cleared from AsyncStorage');
    //     } catch (error) {
    //         console.error('Error clearing data from AsyncStorage:', error);
    //     }
    // };
    
    // clearAllData(); 

    return (
        <>
            <View style={styles.raffleContainer}>
                <Image source={backgroundGradient} style={styles.backgroundGradient}/>
                <View style={styles.headingContainer}>
                    <Image source={logo} />
                    <Text style={styles.headingText}> 
                        Enter for a chance to win up to
                        <Text style={styles.headingTextSpan}> $5000</Text> in travel vouchers and
                        <Text style={styles.headingTextSpan}> go</Text> on a dream vacation
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput style={styles.input} placeholder="Enter your name*" placeholderTextColor="#fff" value={name} onChangeText={(text) => setName(text)}/>
                    <TextInput style={styles.input} placeholder="Enter your email*" placeholderTextColor="#fff" value={email} onChangeText={(text) => setEmail(text)}/>
                    <TextInput style={styles.input} placeholder="Enter your phone number (optional)" placeholderTextColor="#fff" value={phoneNumber} onChangeText={(text) => setPhoneNumber(text)}/>
                    <View style={styles.agreementContainer}>
                        <TouchableOpacity style={styles.checkBox} onPress={toggleAgreement}>
                            {isAgreementChecked && <Image source={check} style={styles.check} />}
                        </TouchableOpacity>
                        <Text style={{color: "#fff", marginLeft: 5, fontFamily: "Gotham-Light"}}> I have read and acknowledge the contest rules. </Text>
                    </View>
                    <TouchableOpacity title="Submit" onPress={handleFormSubmit} style={styles.submitButton}>
                        <Text style={{textTransform: "uppercase", fontFamily: "Gotham-Bold"}}> Submit </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerContainer}>
                    <View>
                        <Image source={yapLogo} /> 
                    </View>
                    <View style={styles.footerColumnTwo}>
                        <Text style={[styles.footerText]}>
                            *Ask your BA to see contest rules
                            {'\n'}
                            {'\n'}
                            Product information contained herein is intended to ensure that you, distributors and retailers of nicotine products, possess proper and 
                            correct information on the products you offer for sale.This information is not intended for use in promoting nicotine products to consumers 
                            and any such use is formally prohibited,Must not be posted within sight of consumers,
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Raffle;