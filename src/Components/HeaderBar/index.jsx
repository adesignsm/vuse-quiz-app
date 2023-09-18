import { Image } from "react-native";
import styles from "./styles";

import vLogo from "../../../assets/headerBar/vuse-logo-v.png";

const HeaderBar = () => {
    return (
        <Image source={vLogo} style={styles.logo} />
    )
}

export default HeaderBar;