import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import styles from "./styles";

import HeaderBar from "../../Components/HeaderBar";

import logo from "../../../assets/quiz/logo.png";
import productBgGradient from "../../../assets/product/product-background-gradient.png";
import yapLogo from "../../../assets/footer/yap-logo.png";

const QuizOne = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isSelected, setIsSelected] = useState(false);
    const correctOption = 1;

    const [fontsLoaded] = useFonts({
        "Gotham-Bold": require("../../../assets/fonts/Gotham-Font/Gotham-Bold.otf"),
        "Gotham-Light": require("../../../assets/fonts/Gotham-Font/Gotham-Light.otf"),
        "Gotham-Black": require("../../../assets/fonts/Gotham-Font/Gotham-Black.otf"),
    });

    if (!fontsLoaded) return null;

    const options = [
      { id: 1, text: 'Ceramic heating coil' },
      { id: 2, text: 'Speaker' },
      { id: 3, text: 'Glow in the dark finish' },
    ];

    const handleOptionSelect = (optionId) => {
        setSelectedOption(optionId);
        setIsDisabled(false);
        setIsSelected(true);
    };

    const handleButtonPress = () => {
        navigation.navigate("Quiz Two");
    }

    const isCorrectOption = (optionId) => {
        return optionId === correctOption;
    };
    
    const getOptionStyle = (optionId) => {
        const isCorrect = isCorrectOption(optionId);
    
        if (isSelected) {
          if (isCorrect) {
            return [styles.option, styles.correctOption]; // Green outline for correct option
          } else if (!isCorrect) {
            return [styles.option, styles.wrongOption]; // Red outline for wrong options
          }
        } else {
          return styles.option; // Default style
        }
    };

    return (
        <>
            <HeaderBar />
            <View style={styles.quizContainer}>
                <Image source={productBgGradient} style={styles.productBgGradient}/>
                <View style={styles.headingContainer}>
                    <Text style={[styles.textStyles, styles.headingText]}>Let's test your knowledge</Text>
                    <Text style={[styles.textStyles, styles.subText]}>
                        Answer these 3 following multiple choice questions by tapping
                        on the right answer and get a chance to win a $5000 travel voucher.
                    </Text>
                </View>
                <View style={{marginTop: 50, marginBottom: 30}}>
                    <Text style={{color: "#fff", fontSize: 38, fontFamily: "Gotham-Bold"}}>
                        Question 1/<Text style={{opacity: 0.5}}>3</Text>
                    </Text>
                </View>
                <View style={{marginBottom: 40}}>
                    <Text style={{fontSize: 22, color: "#fff", textAlign: "center", fontFamily: "Gotham-Light"}}>Our <Image source={logo} /> </Text>
                    <Text style={{fontSize: 22, color: "#fff", textAlign: "center", fontFamily: "Gotham-Light"}}>uses the world's first __________ in a disposable vape.</Text>
                </View>
                <View style={styles.container}>
                {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={getOptionStyle(option.id)}
          onPress={() => handleOptionSelect(option.id)}
        >
          <Text style={styles.optionText}>{option.text}</Text>
          <View style={styles.circle}>
            {selectedOption === option.id && <View style={styles.innerCircle}></View>}
          </View>
        </TouchableOpacity>
      ))}
                </View>
                <View>
                    <TouchableOpacity style={[styles.quizOneButton, isDisabled && styles.disabledButton]} onPress={isDisabled ? null : handleButtonPress} disabled={isDisabled}>
                        <Text style={{fontFamily: "Gotham-Bold", textTransform: "uppercase"}}>{isDisabled ? "please select an answer" : "Next"}</Text>
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

export default QuizOne;