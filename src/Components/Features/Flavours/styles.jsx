import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    flavoursContainer: {
        position: "absolute",
        top: 340,
        left: -150,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    flavoursTextContainer: {
        paddingRight: 10,
    },
    flavoursText: {
        color: "#fff",
        textAlign: "right",
    },
    flavoursImagesContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    flavoursLine: {
        marginLeft: -35,
    }
});

export default styles;