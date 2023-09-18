import { View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import styles from "./styles";

import puffLine from "../../../../assets/product/puffFeature/line.png";
import puffIcon from "../../../../assets/product/puffFeature/icon.png";

const PuffFeature = () => {
    const [fontsLoaded] = useFonts({
        "Gotham-Bold": require("../../../../assets/fonts/Gotham-Font/Gotham-Bold.otf"),
        "Gotham-Light": require("../../../../assets/fonts/Gotham-Font/Gotham-Light.otf"),
    });

    if (!fontsLoaded) return null;

    return (
        <>
            <View style={styles.puffFeatureContainer}>
                <View style={styles.puffFeatureTextContainer}>
                    <Text style={[styles.puffFeatureText, {fontFamily: "Gotham-Bold"}]}>Up to 5000 puffs*</Text>
                    <Text style={[styles.puffFeatureText, {fontFamily: "Gotham-Light"}]}>Puff activated</Text>
                </View>
                <View style={styles.puffFeatureImagesContainer}>
                    <Image source={puffIcon} />
                    <Image style={styles.puffLine} source={puffLine} />
                </View>
            </View>
        </>
    )
}

export default PuffFeature;