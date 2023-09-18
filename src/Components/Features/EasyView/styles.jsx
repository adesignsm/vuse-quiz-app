import { StyleSheet } from "react-native";

const easyviewStyles = StyleSheet.create({
    easyviewContainer: {
        position: "absolute",
        top: 252,
        right: -150,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    easyviewTextContainer: {
        paddingRight: 10,
        paddingLeft: 10,

    },
    easyviewText: {
        color: "#fff",
        textAlign: "left",
    },
    easyviewImagesContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    easyviewLine: {
        marginLeft: -35,
        marginRight: -40,
    },
    easyviewIcon: {
        
    }
});

export default easyviewStyles;