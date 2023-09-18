import { StyleSheet,  } from "react-native";

const styles = StyleSheet.create({
    congratsContainer: {
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
        fontSize: 40,
        color: "#AEDD1D",
        textAlign: "center",
        textTransform: "uppercase",
        marginTop: 50,
        fontFamily: "Gotham-Black",
    },
    subText: {
        fontSize: 30,
        color: "#fff",
        lineHeight: 40,
        textAlign: "center",
        marginTop: 20,
        fontFamily: "Gotham-Bold",
    },
    reloadButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: 391,
        height: 58,
        borderRadius: 100,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 200,
        marginBottom: 100,
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