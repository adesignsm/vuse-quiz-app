import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import HeaderBar from "../../Components/HeaderBar";

import styles from "./styles";

import appleSour from "../../../assets/flavours/appleSour.png";
import banana from "../../../assets/flavours/banana.png";
import berryBlend from "../../../assets/flavours/berryBlend.png";
import blueRaspberry from "../../../assets/flavours/blueRaspberry.png";
import creamyTobacco from "../../../assets/flavours/creamyTobacco.png";
import grapeIce from "../../../assets/flavours/grapeIce.png";
import mintIce from "../../../assets/flavours/mint.png";
import strawBerry from "../../../assets/flavours/strawBerry.png";

import productBgGradient from "../../../assets/product/product-background-gradient.png";
import yapLogo from "../../../assets/footer/yap-logo.png";

const BoldFlavours = ({ navigation }) => {
    const flavourImages = [appleSour, banana, berryBlend, blueRaspberry, creamyTobacco, grapeIce, mintIce, strawBerry];

    const [fontsLoaded] = useFonts({
        "Gotham-Bold": require("../../../assets/fonts/Gotham-Font/Gotham-Bold.otf"),
        "Gotham-Light": require("../../../assets/fonts/Gotham-Font/Gotham-Light.otf"),
        "Gotham-Black": require("../../../assets/fonts/Gotham-Font/Gotham-Black.otf"),
    });

    if (!fontsLoaded) return null;


    const handleButtonClick = () => {
        navigation.navigate("Bold Flavours Two");
    }

    return (
        <>
            <HeaderBar />
            <View style={styles.boldflavoursContainer}>
                <Image source={productBgGradient} style={styles.productBgGradient}/>
                <View style={styles.headingContainer}>
                    <Text style={[styles.textStyles, styles.headingOne]}>Discover</Text>
                    <Text style={[styles.textStyles, styles.headingTwo]}>Bold Flavours</Text>
                    <Text style={[styles.textStyles, styles.headingThree]}>For More Taste Sensations</Text>
                </View>
                <ScrollView horizontal style={styles.flavourContainer}>
                    {flavourImages.map((flavour, index) => (
                        <Image source={flavour} key={index} style={styles.flavourImage} />
                    ))}
                </ScrollView>
                <View style={styles.subTextContainer}>
                    <Text style={styles.subTextStyles}>Simulated flavours.</Text>
                    <Text style={styles.subTextStyles}>Flavour availability varies by channel</Text>
                    <TouchableOpacity style={[styles.flavoursButton]} onPress={() => handleButtonClick()}>
                        <Text style={{textTransform: "uppercase", fontFamily: "Gotham-Bold"}}>Next</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerContainer}>
                    <View>
                        <Image source={yapLogo} /> 
                    </View>
                    <View style={styles.footerColumnTwo}>
                        <Text style={[styles.footerText]}>
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

export default BoldFlavours;