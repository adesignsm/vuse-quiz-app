import { View, Text, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import styles from "./styles";

import HeaderBar from "../../Components/HeaderBar";

import devicesImage from "../../../assets/flavours/devices.png";
import flavourList from "../../../assets/flavours/flavourList.png";

import productBgGradient from "../../../assets/product/product-background-gradient.png";
import yapLogo from "../../../assets/footer/yap-logo.png";

const BoldFlavoursTwo = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        "Gotham-Bold": require("../../../assets/fonts/Gotham-Font/Gotham-Bold.otf"),
        "Gotham-Light": require("../../../assets/fonts/Gotham-Font/Gotham-Light.otf"),
        "Gotham-Black": require("../../../assets/fonts/Gotham-Font/Gotham-Black.otf"),
    });

    if (!fontsLoaded) return null;

    const handleButtonClick = () => {
        navigation.navigate("Quiz One");
    };

    return (
        <>
            <HeaderBar />
            <View style={styles.boldflavoursContainer}>
                <Image source={productBgGradient} style={styles.productBgGradient}/>
                <View style={styles.headingContainer}>
                    <Text style={[styles.textStyles, styles.headingOne]}>More</Text>
                    <Text style={[styles.textStyles, styles.headingTwo]}>Bold Flavours</Text>
                    <Text style={[styles.textStyles, styles.headingThree]}>Coming Soon</Text>
                </View>
                <View>
                    <Image source={devicesImage} style={styles.devicesImage}/>
                    <Image source={flavourList} style={styles.flavourList}/>
                </View>
                <View style={styles.subTextContainer}>
                    <TouchableOpacity style={[styles.flavoursButton]} onPress={() => handleButtonClick()}>
                        <Text style={{fontFamily: "Gotham-Bold", textTransform: "uppercase"}}>Try your luck</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerContainer}>
                    <View>
                        <Image source={yapLogo} /> 
                    </View>
                    <View style={styles.footerColumnTwo}>
                        <Text style={[styles.footerText]}>
                            Flavour availability varies by channel
                            {'\n'}
                            {'\n'}
                            *Based on laboratory testing of newly manufactured product and may vary depending on an individual's usage behaviour.
                            †Compared to Vuse Go 2.0 mL and Vuse Go XL 4.8 mL devices. *Based on laboratory testing of newly manufactured product and may 
                            vary depending on an individual's usage behaviour.
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

export default BoldFlavoursTwo;