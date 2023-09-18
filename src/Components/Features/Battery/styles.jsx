import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    batteryContainer: {
        position: "absolute",
        top: 440,
        left: 135,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    batteryTextContainer: {
        paddingRight: 10,
        marginTop: -25,
        marginLeft: -10,
        display: "flex",
        flexDirection: "row-reverse",
    },
    batteryText: {
        color: "#fff",
        textAlign: "left",
        marginLeft: 10,
    },
    batteryTextHeading: {
        fontFamily: "Gotham-Bold"
    },
    batteryTextSubHeading: {
        fontFamily: "Gotham-Light",
    },
    batteryLine: {
        marginRight: 0,
    },
    batteryIcon: {
        resizeMode: "contain",
        marginTop: -20,
        marginLeft: 175,
    }
});

export default styles;