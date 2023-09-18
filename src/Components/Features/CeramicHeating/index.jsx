import { View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import styles from "./styles";

import ceramicheatingLine from "../../../../assets/product/ceramicheatingFeature/line.png";
import ceramicheatingIcon from "../../../../assets/product/ceramicheatingFeature/icon.png";

const CeramicHeating = () => {
    const [fontsLoaded] = useFonts({
        "Gotham-Bold": require("../../../../assets/fonts/Gotham-Font/Gotham-Bold.otf"),
        "Gotham-Light": require("../../../../assets/fonts/Gotham-Font/Gotham-Light.otf"),
    });

    if (!fontsLoaded) return null;

    return (
        <>
            <View style={styles.ceramicheatingContainer}>
                <View>
                    <Image style={styles.ceramicheatingLine} source={ceramicheatingLine} />
                </View>
                <View style={styles.ceramicheatingTextContainer}>
                    <View>
                        <Text style={[styles.ceramicheatingText, {fontFamily: "Gotham-Bold"}]}>Ceramic heating</Text>
                        <Text style={[styles.ceramicheatingText, {fontFamily: "Gotham-Light"}]}>Technology</Text>
                    </View>
                    <Image style={styles.ceramicheatingIcon} source={ceramicheatingIcon} />
                </View>
            </View>
        </>
    )
}

export default CeramicHeating;