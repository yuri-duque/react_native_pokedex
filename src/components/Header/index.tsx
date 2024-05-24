import React from "react";
import { HeaderContainer } from "./styles";
import { HeaderProps } from "./types";
import { Text, TouchableOpacity } from "react-native";
import { Icon } from "../Icon";
import { useNavigation } from "@react-navigation/core";
import { useTheme } from "styled-components/native";

export const Header = ({title, isBack}: HeaderProps) => {
    const theme = useTheme();
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    }

    return <HeaderContainer>
        {title && <Text>{title}</Text>}
        {isBack && <TouchableOpacity onPress={handleBack}>
            <Icon name="arrow-back" size={24} color={theme.colors.white}/>
        </TouchableOpacity>}       
    </HeaderContainer>
};