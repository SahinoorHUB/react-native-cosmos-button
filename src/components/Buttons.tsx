import React, { FC, memo } from 'react';
import {
    Text,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
    View,
    GestureResponderEvent,
} from 'react-native';
import RNVectorIcon from '../utils/RNVectorIcon';

interface ButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    type: 'Raised' | 'Stroked' | 'Flat';
    radius?: number;
    paddingVertical?: number;
    paddingHorizontal?: number;
    fontSize?: number;
    disabled?: boolean;
    isAPICall?: boolean;
    margin?: number;
    bgColor: string;
    fontFamily?: string;
    iconName?: string;
    iconFamily?:
    | 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather'
    | 'FontAwesome' | 'FontAwesome5' | 'FontAwesome5Pro'
    | 'Fontisto' | 'Foundation' | 'Ionicons'
    | 'MaterialCommunityIcons' | 'MaterialIcons'
    | 'Octicons';
    iconPosition?: 'left' | 'right';
    children?: React.ReactNode;
    childrenPosition?: 'left' | 'right';
}

const CosmosButton: FC<ButtonProps> = ({
    title,
    onPress,
    type,
    radius = 8,
    paddingVertical = 10,
    paddingHorizontal = 10,
    fontSize = 16,
    disabled = false,
    isAPICall = false,
    margin = 0,
    bgColor = '#555555',
    fontFamily,
    iconName,
    iconFamily,
    iconPosition = 'left',
    children,
    childrenPosition
}) => {
    const buttonStyles = [
        styles.button,
        {
            backgroundColor: type === 'Flat' ? bgColor : 'white',
            borderColor: bgColor,
            margin,
            opacity: disabled || isAPICall ? 0.5 : 1,
            paddingHorizontal,
            paddingVertical,
            borderRadius: radius,
        },
        type === 'Raised' && styles.shadow,
    ];

    const textColor = type === 'Flat' ? '#fff' : bgColor;

    const renderIcon = (position: 'left' | 'right') =>
        iconPosition === position && iconName && iconFamily ? (
            <View style={position === 'left' ? styles.iconLeft : styles.iconRight}>
                <RNVectorIcon iconName={iconName} iconSize={fontSize} iconColor={textColor} iconFamily={iconFamily} />
            </View>
        ) : null;

    const renderChildren = (position: 'left' | 'right') => childrenPosition === position && children ? <View style={position === 'left' ? styles.iconLeft : styles.iconRight}>{children}</View> : null;



    return (
        <TouchableOpacity onPress={onPress} disabled={disabled || isAPICall} style={buttonStyles}>
            <View style={styles.content}>
                {isAPICall ? (
                    <React.Fragment>
                        <ActivityIndicator size="small" color={textColor} />
                        <Text style={[styles.buttonText, { color: textColor, fontSize: fontSize, fontFamily, marginLeft: 10 }]}>
                            Please wait...
                        </Text>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {renderChildren('left')}
                        {renderIcon('left')}
                        <Text style={[styles.buttonText, { color: textColor, fontSize, fontFamily }]}>
                            {title}
                        </Text>
                        {renderIcon('right')}
                        {renderChildren('right')}
                    </React.Fragment>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
    },
    iconLeft: {
        marginRight: 10,
    },
    iconRight: {
        marginLeft: 10,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default memo(CosmosButton);
