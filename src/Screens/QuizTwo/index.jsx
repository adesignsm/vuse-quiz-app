import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

import HeaderBar from "../../Components/HeaderBar";

import logo from "../../../assets/quiz/logo.png";
import productBgGradient from "../../../assets/product/product-background-gradient.png";
import yapLogo from "../../../assets/footer/yap-logo.png";

const QuizTwo = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isSelected, setIsSelected] = useState(false);
    const correctOption = 2;

    const options = [
      { id: 1, text: '500 puffs, mesh heating, app controlled' },
      { id: 2, text: 'Easy-vew liquid, rechargeable, up to 5000 puffs' },
      { id: 3, text: '1000 puffs, uses pods, refillable' },
    ];

    const handleOptionSelect = (optionId) => {
        setSelectedOption(optionId);
        setIsDisabled(false);
        setIsSelected(true);
    };

    const handleButtonPress = () => {
        navigation.navigate("Quiz Three");
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
                        Question 2/<Text style={{opacity: 0.5}}>3</Text>
                    </Text>
                </View>
                <View style={{marginBottom: 40}}>
                    <Text style={{fontSize: 19, color: "#fff", textAlign: "center", fontFamily: "Gotham-Light"}}>What are the 3 new features of <Image source={logo} />?</Text>
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
                        <Text style={{textTransform: "uppercase", fontFamily: "Gotham-Bold"}}>{isDisabled ? "please select an answer" : "Next"}</Text>
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

export default QuizTwo;