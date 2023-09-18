import { View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import styles from "./styles";

import flavoursLine from "../../../../assets/product/flavoursFeature/line.png";
import flavoursIcon from "../../../../assets/product/flavoursFeature/icon.png";

const Flavours = () => {
    const [fontsLoaded] = useFonts({
        "Gotham-Bold": require("../../../../assets/fonts/Gotham-Font/Gotham-Bold.otf"),
        "Gotham-Light": require("../../../../assets/fonts/Gotham-Font/Gotham-Light.otf"),
    });

    if (!fontsLoaded) return null;

    return (
        <>
            <View style={styles.flavoursContainer}>
                <View style={styles.flavoursTextContainer}>
                    <Text style={[styles.flavoursText, {fontFamily: "Gotham-Bold"}]}>Bold flavours</Text>
                    <Text style={[styles.flavoursText, {fontFamily: "Gotham-Light"}]}>More taste sensations</Text>
                </View>
                <View style={styles.flavoursImagesContainer}>
                    <Image source={flavoursIcon} />
                    <Image style={styles.flavoursLine} source={flavoursLine} />
                </View>
            </View>
        </>
    )
}

export default Flavours;