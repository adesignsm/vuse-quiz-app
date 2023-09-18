import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    sloganContainer: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#08070D",
        height: "100%",
        width: "100%",
    },
    sloganImage: {
        width: 490,
        height: 290,
        marginTop: 120,
    },
    topGradientImage: {
        position: "absolute",
        zIndex: 0,
    },
    mainBgImage: {
        position: "absolute",
        top: 180,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        resizeMode: "contain",
    },
    discoverButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: 391,
        height: 58,
        borderRadius: 100,
        marginTop: "5%",
    },
    verticalLeftGradientImage: {
        position: "absolute",
        top: 120,
        left: -120,
        width: "90%",
        height: "90%",
        resizeMode: "contain",
    },
    threeDevicesImage: {
        position: "absolute",
        top: 620,
        left: 0,
        width: "45%",
        height: "45%",
        resizeMode: "contain",
    },
    threeDevicesCaption: {
        position: "absolute",
        bottom: 115,
        left: 57,
        color: "#fff",
        textTransform: "uppercase",
        fontSize: 13,
        fontWeight: 700,
        fontFamily: "Gotham-Bold",
    },
    footerContainer: {
       position: "absolute",
       display: "flex",
       flexDirection: "row",
       alignItems: "flex-end",
       bottom: 30,
       left: 0,
       height: "auto",
       width: "100%",
       paddingLeft: 20,
    },
    footerText: {
        color: "#fff",
    },
    footerColumnTwo: {
        paddingRight: 15,
        paddingLeft: 15,
    },
    footerColumnTwoHeading: {
        marginBottom: 5,
        fontFamily: "Gotham-Bold",
    },
    footerColumnTwoText: {
        width: 225,
        fontSize: 6,
        fontFamily: "Gotham-Bold",
    },
    footerColumnThreeText: {
        width: 490,
        fontSize: 10,
        fontWeight: 300,
        paddingRight: 60,
        paddingLeft: 60,
        fontFamily: "Gotham-Light",
    }
});

export default styles;