import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    quizContainer: {
        height: "100%",
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
        justifyContent: "center",
        paddingLeft: 60,
        paddingRight: 60,
        marginTop: 100,
    }, 
    textStyles: {
        color: "#fff",
        fontSize: 15,
        textAlign: "center",
    },
    headingText: {
        color: "#AEDD1D",
        fontSize: 35,
        textTransform: "uppercase",
        fontFamily: "Gotham-Black",
    },
    subText: {
        width: 690,
        fontSize: 20,
        fontFamily: "Gotham-Light",
        transform: [{scale: 0.9}]
    },
    productBgGradient: {
        position: "absolute",
        top: 0,
    },
    container: {
        padding: 20,
    },
    question: {
        fontSize: 18,
        marginBottom: 10,
    },
    option: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 30,
        width: 700,
        borderWidth: 0,
        borderRadius: 10,
        marginBottom: 25,
        backgroundColor: "linear-gradient(116deg, rgba(0, 0, 0, 0.35) -29.94%, rgba(138, 138, 138, 0.40) -29.93%, rgba(82, 82, 82, 0.30) 101.76%), rgba(0, 0, 0, 0.20)",
        boxShadow: "0px 4.28408px 42.84082px 8.56816px rgba(0, 0, 0, 0.15)", 
    },
    selectedOption: {
        backgroundColor: "linear-gradient(116deg, #BABABA -29.94%, rgba(138, 138, 138, 0.40) -29.93%, rgba(153, 153, 153, 0.30) 101.76%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(137deg, rgba(255, 255, 255, 0.57) -5.62%, rgba(190, 227, 196, 0.88) 7.25%, rgba(128, 142, 88, 0.13) 101.88%)",
        boxShadow: "0px 4.28408px 42.84082px 8.56816px rgba(0, 0, 0, 0.15)",
    },
    correctOption: {
        borderColor: "green",
        borderWidth: 1,
    },
    wrongOption: {
        borderColor: "#FF7A7E",
        borderWidth: 1
    },
    optionText: {
        fontSize: 16,
        color: "#fff",
        fontFamily: "Gotham-Bold"
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'transparent',
        borderColor: "#fff",
        borderWidth: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    innerCircle: {
        width: 10,
        height: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    quizOneButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: 391,
        height: 58,
        borderRadius: 100,
        marginTop: 100,
        marginBottom: 80,
        marginLeft: "auto",
        marginRight: "auto",
    },
    disabledButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: 391,
        height: 58,
        borderRadius: 100,
        marginTop: 100,
        marginBottom: 80,
        marginLeft: "auto",
        marginRight: "auto",
        opacity: 0.5,
    },
    footerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
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