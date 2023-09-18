import { View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import styles from "./styles";

import readytouseLine from "../../../../assets/product/readytouseFeature/line.png";
import readytouseIcon from "../../../../assets/product/readytouseFeature/icon.png";

const ReadyToUse = () => {
    const [fontsLoaded] = useFonts({
        "Gotham-Bold": require("../../../../assets/fonts/Gotham-Font/Gotham-Bold.otf"),
        "Gotham-Light": require("../../../../assets/fonts/Gotham-Font/Gotham-Light.otf"),
    });

    if (!fontsLoaded) return null;

    return (
        <>
            <View style={styles.readytouseContainer}>
                <View style={styles.readytouseImagesContainer}>
                    <Image style={styles.readytouseLine} source={readytouseLine} />
                    <Image style={styles.readytouseIcon} source={readytouseIcon} />
                </View>
                <View style={styles.readytouseTextContainer}>
                    <Text style={[styles.readytouseText, {fontFamily: "Gotham-Bold"}]}>Ready to use*</Text>
                    <Text style={[styles.readytouseText, {fontFamily: "Gotham-Light"}]}>Open pack, vape & go</Text>
                </View>
            </View>
        </>
    )
}

export default ReadyToUse;