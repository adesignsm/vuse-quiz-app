import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useFonts } from "expo-font";
import styles from "./styles";

import HeaderBar from '../../Components/HeaderBar';

import entrySlogan from "../../../assets/entry/entry-slogan.png";
import topGradient from "../../../assets/entry/top-gradient.png";
import mainBg from "../../../assets/entry/main-background.png";
import verticalLeftGradient from "../../../assets/entry/vertical-left-gradient.png";
import yapLogo from "../../../assets/footer/yap-logo.png";
import threeDevices from "../../../assets/entry/three-devices.png";

const Entry = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        "Gotham-Bold": require("../../../assets/fonts/Gotham-Font/Gotham-Bold.otf"),
        "Gotham-Light": require("../../../assets/fonts/Gotham-Font/Gotham-Light.otf"),
    });

    if (!fontsLoaded) return null;

    const handleButtonPress = () => {
        console.log("test");
        navigation.navigate("Product");
    }

    return (
        <>
            <HeaderBar />
            <View style={styles.sloganContainer}>
                <Image source={topGradient} style={styles.topGradientImage}/>
                <Image source={entrySlogan} style={styles.sloganImage}/>
                <Image source={mainBg} style={styles.mainBgImage}/>
                <Image source={verticalLeftGradient} style={styles.verticalLeftGradientImage}/>
                <Image source={threeDevices} style={styles.threeDevicesImage}/>
                <Text style={styles.threeDevicesCaption}> Longer lasting up to 5000 Puffs*†</Text>
                <TouchableOpacity onPress={handleButtonPress} style={styles.discoverButton}>
                    <Text style={{fontFamily: "Gotham-Bold", textTransform: "uppercase"}}>discover more</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.footerContainer}>
                <Image source={yapLogo} />
                <View style={styles.footerColumnTwo}>
                    <Text style={[styles.footerText, styles.footerColumnTwoHeading]}>VUSE.COM</Text>
                    <Text style={[styles.footerText, styles.footerColumnTwoText]}>
                        †Compared to Vuse Go 2.0mL and Vuse Go XL 4.8mL devices.
                        *Based on laboratory testing of newly manufactured product and may vary depending on an individual’s usage behaviour.
                    </Text>
                </View>
                <Text style={[styles.footerText, styles.footerColumnThreeText]}>
                    *Based on laboratory testing of newly manufactured product and may vary 
                    depending on an individual's usage behaviour.
                    †Compared to Vuse Go 2.0 mL and Vuse Go XL 4.8 mL devices. *Based on 
                    laboratory testing of newly manufactured product and may vary depending 
                    on an individual's usage behaviour.
                </Text>
            </View>
        </>
    )
}

export default Entry;