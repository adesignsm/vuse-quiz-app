import { View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import styles from "./styles";

import batteryLine from "../../../../assets/product/batteryFeature/line.png";
import batteryIcon from "../../../../assets/product/batteryFeature/icon.png";

const Battery = () => {
    const [fontsLoaded] = useFonts({
        "Gotham-Bold": require("../../../../assets/fonts/Gotham-Font/Gotham-Bold.otf"),
        "Gotham-Light": require("../../../../assets/fonts/Gotham-Font/Gotham-Light.otf"),
    });

    if (!fontsLoaded) return null;

    return (
        <>   
            <View style={styles.batteryContainer}>
                <View>
                    <Image style={styles.batteryLine} source={batteryLine} />
                </View>
                <View style={styles.batteryTextContainer}>
                    <View>
                        <Text style={[styles.batteryText, styles.batteryTextHeading]}>560 mAh capacity</Text>
                        <Text style={[styles.batteryText, styles.batteryTextSubHeading]}>Rechargable battery</Text>
                    </View>
                    <Image style={styles.batteryIcon} source={batteryIcon} />
                </View>
            </View>
        </>
    )
}

export default Battery;