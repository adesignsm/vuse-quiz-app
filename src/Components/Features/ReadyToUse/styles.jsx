import { StyleSheet } from "react-native";

const readytouseStyles = StyleSheet.create({
    readytouseContainer: {
        position: "absolute",
        top: 50,
        right: -130,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    readytouseTextContainer: {
        paddingRight: 10,
        paddingLeft: 10,
        marginTop: -100,
    },
    readytouseText: {
        color: "#fff",
        textAlign: "left",
    },
    readytouseImagesContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    readytouseLine: {
        marginLeft: -35,
        marginRight: -40,
    },
    readytouseIcon: {
        marginTop: -100,
    }
});

export default readytouseStyles;