import React, { FC } from 'react';
import { View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import FontScale from './FontScale';

interface IconProps {
    iconName?: string;
    iconSize?: number;
    iconColor?: string;
    iconFamily?: string;
}

// Mapping of icon family to its component
const IconMap: { [key: string]: any } = {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    FontAwesome5Pro,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
};

const RNVectorIcon: FC<IconProps> = ({
    iconName = 'alert-circle-outline',
    iconSize = 20,
    iconColor = '#000',
    iconFamily = 'Ionicons',
}) => {
    const IconComponent = IconMap[iconFamily] || Ionicons;

    return (
        <View style={{ marginTop: -2 }}>
            <IconComponent
                name={iconName}
                size={FontScale(iconSize)}
                color={iconColor}
            />
        </View>
    );
};

export default RNVectorIcon;
