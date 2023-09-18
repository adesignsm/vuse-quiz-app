import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, Text } from 'react-native';

import HeaderBar from "../../Components/HeaderBar";

import styles from "./styles";

import headingLogo from "../../../assets/product/heading-logo.png";
import device from "../../../assets/product/device.png";
import featureButton from "../../../assets/product/feature-button.png";
import productBgGradient from "../../../assets/product/product-background-gradient.png";
import yapLogo from "../../../assets/footer/yap-logo.png";

/*feature components */
import PuffFeature from "../../Components/Features/PuffFeature";
import ReadyToUse from '../../Components/Features/ReadyToUse';
import EasyView from '../../Components/Features/EasyView';
import Flavours from '../../Components/Features/Flavours';
import CeramicHeating from '../../Components/Features/CeramicHeating';
import Battery from '../../Components/Features/Battery';

const buttonData = [
    {top: 100, left: 80}, //first
    {top: 160, left: 180}, //second
    {top: 230, left: 135}, //third
    {top: 320, left: 130}, //fourth
    {top: 400, left: 70}, //fifth
    {top: 420, left: 200} //sixth
];

const Product = ({ navigation }) => {
    const [showPuff, setShowPuff] = useState(false);
    const [showReadyToUse, setShowReadyToUse] = useState(false);
    const [showEasyToView, setShowEasyToView] = useState(false);
    const [showFlavours, setShowFlavours] = useState(false);
    const [showCeramicHeating, setShowCeramicHeating] = useState(false);
    const [showBattery, setShowBattery] = useState(false);

    const checkStates = () => {
        return showPuff && showReadyToUse && showEasyToView && showFlavours && showCeramicHeating && showBattery;
    };

    const handleButtonClick = (index) => {
        if (index + 1 === 1) {
            setShowPuff(true);
        } else if (index + 1 === 2) {
            setShowReadyToUse(true);
        } else if (index + 1 === 3) {
            setShowEasyToView(true);
        } else if (index + 1 === 4) {
            setShowFlavours(true);
        } else if (index + 1 === 5) {
            setShowCeramicHeating(true);
        } else if (index + 1 === 6) {
            setShowBattery(true);
        }
    };

    useEffect(() => {
        const allStatesAreTrue = checkStates();
        if (allStatesAreTrue) {
            setTimeout(() => {
                navigation.navigate("Bold Flavours");
            }, 1000);
        }
    }, [showPuff, showReadyToUse, showEasyToView, showFlavours, showCeramicHeating, showBattery]);

    return (
        <>
            <HeaderBar />
            <View style={styles.productContainer}>
                <Image source={productBgGradient} style={styles.productBgGradient}/>
                <View style={styles.headingContainer}>
                    <Image source={headingLogo} style={styles.headingLogo}/>
                    <Text style={[styles.textStyles, styles.subTextOne]}>Device Features</Text>
                    <Text style={[styles.textStyles, styles.subTextTwo]}>TAP the buttons to explore</Text>
                </View>
                <View style={styles.deviceContainer}>
                    <Image source={device} style={styles.device}/>
                    {buttonData.map((buttonStyle, index) => (
                        <TouchableOpacity key={index} style={[styles.featureButton, buttonStyle]} onPress={() => handleButtonClick(index)}>
                            <Image source={featureButton} key={index}/>
                        </TouchableOpacity>
                    ))}
                    {showPuff && <PuffFeature />}
                    {showReadyToUse && <ReadyToUse />}
                    {showEasyToView && <EasyView />}
                    {showFlavours && <Flavours />}
                    {showCeramicHeating && <CeramicHeating />}
                    {showBattery && <Battery />} 
                </View>
                <View style={styles.footerContainer}>
                    <View>
                        <Image source={yapLogo} /> 
                    </View>
                    <View style={styles.footerColumnTwo}>
                        <Text style={[styles.footerText]}>
                            *Based on laboratory testing of newly manufactured product and may vary depending on an individual's usage behaviour.
                            †Compared to Vuse Go 2.0 mL and Vuse Go XL 4.8 mL devices. *Based on laboratory testing of newly manufactured product and may 
                            vary depending on an individual's usage behaviour.
                            {'\n'}
                            {'\n'}
                            Product information contained herein is intended to ensure that you, distributors and retailers of nicotine products, possess proper and 
                            correct information on the products you offer for sale.This information is not intended for use in promoting nicotine products to consumers 
                            and any such use is formally prohibited,Must not be posted within sight of consumers,
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Product;