# React Native Cosmos Button

A customizable, reusable set of button components for React Native applications. This package provides beautifully styled buttons (primary, secondary, outline, icon-based, and more) designed to speed up development and maintain consistency across apps.

![React Native Cosmos Button](https://i.ibb.co/Y7HwhPkQ/Screenshot-20250409-165237.jpg)

## Installation

```sh
npm i react-native-cosmos-button

```

If you want to use icons install [react-native-vector-icons ](https://www.npmjs.com/package/react-native-vector-icons)

```sh
npm install react-native-vector-icons

```

## Buttons Component

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| title | string | Yes | - | The button title to render |
| onPress | function | Yes | - | The function to call when the button is pressed |
| type | `'Raised'`, `'Stroked'`, `'Flat'` | Yes | - | The type of button to render | 
| bgColor | string | Yes | #555555 | The background color of the button |
| radius | number | No | 8 | The radius of the button |
| paddingVertical | number | No | 10 | The vertical padding of the button |
| paddingHorizontal | number | No | 10 | The horizontal padding of the button |
| fontSize | number | No | 16 | The font size of the button text |
| disabled | boolean | No | false | Whether the button is disabled |
| isAPICall | boolean | No | false | Whether the button is an API call | 
| margin | number | No | 0 | The margin of the button |
| fontFamily | string | No | - | The font family of the button text |
| iconName | string | No | - | The name of the icon to render |
| iconFamily |  `'AntDesign'`, `'Entypo'`, `'EvilIcons'`, `'Feather'`, `'FontAwesome'`, `'FontAwesome5'`, `'FontAwesome5Pro'`, `'Fontisto'`, `'Foundation'`, `'Ionicons'`, `'MaterialCommunityIcons'`, `'MaterialIcons'`, `'Octicons'`, | No | - | The family of the icon to render |
| iconPosition | `'left'`, `'right'` | No | 'left' | The position of the icon |
| children | React.ReactNode | No | - | The children of the button |
| childrenPosition | `'left'`, `'right'` | No | - | The position of the children |

## Example Usage

### Basic Button

```jsx
import { Buttons } from 'react-native-cosmos-button';

<Buttons
    title={"Submit"}
    onPress={() => { console.log("Submit") }}
    type={'Flat'}
    paddingVertical={10}
    paddingHorizontal={10}
    fontSize={19}
    isAPICall={false}
    disabled={false}
    bgColor={Colors.ui_dark_bg}
    fontFamily={Fonts.poppins500Medium}
/>
```

### Icon Button
If you want to use icons install [react-native-vector-icons ](https://www.npmjs.com/package/react-native-vector-icons) and configer it in your project.
You can use iconName, iconFamily and iconPosition props.

```jsx
import { Buttons } from 'react-native-cosmos-button';

<Buttons
    title={"Submit"}
    onPress={() => { console.log("Submit") }}
    type={'Flat'}
    paddingVertical={10}
    paddingHorizontal={10}
    fontSize={19}
    isAPICall={false}
    disabled={false}
    bgColor={Colors.ui_dark_bg}
    fontFamily={Fonts.poppins500Medium}
    iconName="angle-double-right"
    iconFamily={'FontAwesome5'}
    iconPosition={'right'}
/>

```
### Render React Element as a child
You can render React Element as a child, then you want use childrenPosition prop and passing the React element as a child.

```jsx
import { Buttons } from 'react-native-cosmos-button';

<Buttons
    title={"Get Started"}
    onPress={() => { console.log("Get Started")}}
    type={'Flat'}
    radius={10}
    paddingVertical={10}
    paddingHorizontal={10}
    fontSize={19}
    isAPICall={false}
    disabled={false}
    bgColor={Colors.ui_dark_bg}
    fontFamily={Fonts.poppins500Medium}
    childrenPosition={'left'}
>
    <Image style={{ width: 20, height: 20 }} source={require("../../assets/images/image.png")} />
</Buttons>
```

