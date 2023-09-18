import { View, Text, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import styles from "./styles"; 

import yapLogo from "../../../assets/footer/yap-logo.png";
import backgroundGradient from "../../../assets/product/product-background-gradient.png";
import logo from "../../../assets/raffle/logo.png";
import secondLogo from "../../../assets/congrats/logo.png";

const Congrats = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        "Gotham-Bold": require("../../../assets/fonts/Gotham-Font/Gotham-Bold.otf"),
        "Gotham-Light": require("../../../assets/fonts/Gotham-Font/Gotham-Light.otf"),
        "Gotham-Black": require("../../../assets/fonts/Gotham-Font/Gotham-Black.otf"),
    });

    if (!fontsLoaded) return null;

    const handleOnPress = () => {
        navigation.navigate("Entry")
    }
    
    return (
        <>
            <View style={styles.congratsContainer}>
                <Image source={backgroundGradient} style={styles.backgroundGradient}/>
                <View style={styles.headingContainer}>
                    <Image source={logo} />
                    <Text style={styles.headingText}>Congratulations!</Text>
                    <Text style={styles.subText}> 
                        Thank you for learning about
                        <Image source={secondLogo} style={{transform: [{scale: 0.9}]}} />
                    </Text>
                    <Text style={{color: "#fff", fontSize: 20, textAlign: "center", width: 500, marginTop: 30, fontFamily: "Gotham-Light"}}>
                        Please speak to your Brand Ambassador
                        to recieve your demo product
                    </Text>
                </View>
                <TouchableOpacity style={styles.reloadButton} onPress={handleOnPress}>
                    <Text style={{textTransform: "uppercase", fontFamily: "Gotham-Bold"}}>Start Again</Text>
                </TouchableOpacity>
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

export default Congrats;