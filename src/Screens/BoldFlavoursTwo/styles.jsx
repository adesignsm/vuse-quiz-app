import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boldflavoursContainer: {
        height: "auto",
        width: "100%",
        backgroundColor: "#08070D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    headingContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: 120,
    },  
    textStyles: {
        color: "#fff",
        textTransform: "uppercase",
        fontSize: 38,
    },
    headingOne: {
        fontFamily: "Gotham-Bold",
    },
    headingTwo: {
        fontSize: 60,
        color: "#AEDD1D",
        fontFamily: "Gotham-Black",
    },
    headingThree: {
        fontFamily: "Gotham-Bold",
    },
    productBgGradient: {
        position: "absolute",
        top: 0,
    },
    devicesImage: {
        height: 800,
        resizeMode: "contain",
        transform: [{scale: 1}],
        marginTop: -130,
    },
    flavourList: {
        transform: [{scale: 0.8}],
        marginTop: -240,
        marginLeft: 20,
    },
    subTextContainer: {
        height: 100,
        marginTop: -60,
        marginBottom: 100,
        width: "100%",
    },
    subTextStyles: {
        paddingLeft: 50,
        color: "#fff",
        fontSize: 10,
        lineHeight: 20,
    },
    flavoursButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: 391,
        height: 58,
        borderRadius: 100,
        marginTop: 90,
        marginLeft: "auto",
        marginRight: "auto",
    },  
    footerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        paddingBottom: 50,
        marginTop: 40,
    },
    footerText: {
        color: "#fff",
        fontSize: 10,
        fontFamily: "Gotham-Light",
    },
    footerColumnTwo: {
        paddingRight: 10,
        paddingLeft: 30,
        width: 625,
    }
});

export default styles;