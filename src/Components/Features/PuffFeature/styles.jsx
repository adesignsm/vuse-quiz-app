import { StyleSheet } from "react-native";

const puffFeatureStyles = StyleSheet.create({
    puffFeatureContainer: {
        position: "absolute",
        top: 120,
        left: -170,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    puffFeatureTextContainer: {
        paddingRight: 10,
    },
    puffFeatureText: {
        color: "#fff",
        textAlign: "right",
    },
    puffFeatureImagesContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    puffLine: {
        marginLeft: -35,
    }
});

export default puffFeatureStyles;