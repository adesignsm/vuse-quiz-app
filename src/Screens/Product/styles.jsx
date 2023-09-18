import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    productContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: "#08070D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    headingContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    headingLogo: {
        transform: [{ scale: 0.8 }],
    },
    textStyles: {
        color: "#fff",
        fontFamily: "Gotham-Light",
    },
    subTextOne: {
        marginTop: 40,
        fontSize: 30,
    },
    subTextTwo: {
        marginTop: 15,
        fontSize: 15
    },
    deviceContainer: {
        width: "50",
    },
    device: {
        transform: [{ scale: 0.8 }],
        resizeMode: "contain",
    },
    featureButton: {
        position: "absolute",
        zIndex: 2,
    },
    productBgGradient: {
        position: "absolute",
        top: 0,
    },
    footerContainer: {
        position: "absolute",
        bottom: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
    },
    footerText: {
        color: "#fff",
        fontSize: 10,
        fontFamily: "Gotham-Light"
    },
    footerColumnTwo: {
        paddingRight: 10,
        paddingLeft: 30,
        width: 625,
    }
});

export default styles;