import React from "react";
import { IconProps } from "./types";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"

export const Icon = ({name, size, color}: IconProps) => {
    return <MaterialIcon name={name} size={size} color={color}/> 
}