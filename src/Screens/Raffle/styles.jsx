import { StyleSheet,  } from "react-native";

const styles = StyleSheet.create({
    raffleContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: "#08070D",
    },
    backgroundGradient: {
        position: "absolute",
    },
    headingContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 90,
        marginBottom: 50,
    },
    headingText: {
        fontSize: 25,
        color: "#fff",
        textAlign: "center",
        width: 480,
        fontFamily: "Gotham-Bold",
    },
    headingTextSpan: {
        color: "#AEDD1D",
        textTransform: "uppercase",
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 10,
        padding: 15,
        width: 520,
        color: "#fff",
        marginBottom: 20,
        fontFamily: "Gotham-Bold",
    },
    agreementContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        width: 510,
        marginTop: 20,
        marginBottom: 110,
    },
    checkBox: {
        height: 20,
        width: 20,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5,
    },
    check: {
        width: "100%",
        height: "100%",
        transform: [{scale: 1.2}]
    },
    submitButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: 391,
        height: 58,
        borderRadius: 100,
        marginBottom: 100,
        marginLeft: "auto",
        marginRight: "auto",
    },
    footerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        marginLeft: 15,
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
})

export default styles;