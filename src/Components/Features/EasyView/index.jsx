import { View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import styles from "./styles";

import easyviewLine from "../../../../assets/product/easyviewFeature/line.png";
import easyviewIcon from "../../../../assets/product/easyviewFeature/icon.png";

const EasyView = () => {
    const [fontsLoaded] = useFonts({
        "Gotham-Bold": require("../../../../assets/fonts/Gotham-Font/Gotham-Bold.otf"),
        "Gotham-Light": require("../../../../assets/fonts/Gotham-Font/Gotham-Light.otf"),
    });

    if (!fontsLoaded) return null;

    return (
        <>
            <View style={styles.easyviewContainer}>
                <View style={styles.easyviewImagesContainer}>
                    <Image style={styles.easyviewLine} source={easyviewLine} />
                    <Image style={styles.easyviewIcon} source={easyviewIcon} />
                </View>
                <View style={styles.easyviewTextContainer}>
                    <Text style={[styles.easyviewText, {fontFamily: "Gotham-Bold"}]}>Easy-view liquid</Text>
                    <Text style={[styles.easyviewText, {fontFamily: "Gotham-Light"}]}>See your flavour</Text>
                </View>
            </View>
        </>
    )
}

export default EasyView;