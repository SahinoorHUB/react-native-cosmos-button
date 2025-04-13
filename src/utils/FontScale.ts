import { PixelRatio } from 'react-native';
import ScreenSize from './ScreenSize';
const FontScale = (size: number) => {
    const scale = (ScreenSize.width / ScreenSize.height) * 2;
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export default FontScale;