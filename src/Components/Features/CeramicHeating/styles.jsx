import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    ceramicheatingContainer: {
        position: "absolute",
        top: 420,
        left: -145,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    ceramicheatingTextContainer: {
        paddingRight: 10,
        marginTop: -25,
        marginLeft: -10,
        display: "flex",
        flexDirection: "row",
    },
    ceramicheatingText: {
        color: "#fff",
        textAlign: "right",
    },
    ceramicheatingLine: {
        marginRight: -210,
    },
    ceramicheatingIcon: {
        resizeMode: "contain",
        width: 90,
        height: 90,
        marginTop: -20,
    }
});

export default styles;