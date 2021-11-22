import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

type DinnerIconProps = SvgProps & {
    color: string;
};

export default function SvgComponent({ color, ...props }: DinnerIconProps): React.ReactElement {
    return (
        <Svg width={24} height={24} fill="none" {...props}>
            <Path
                d="M19 12H4c-.552 0-1.007.45-.943.998.337 2.903 2.135 5.038 4.443 6.11v.392a1 1 0 001 1h6a1 1 0 001-1v-.392c2.323-1.003 4.13-3.02 4.45-6.11.056-.549-.398-.998-.95-.998z"
                stroke={color}
                strokeWidth={1.5}
            />
            <Path
                d="M7.995 9.555a.75.75 0 101.01-1.11l-1.01 1.11zm1.01-6.11a.75.75 0 10-1.01 1.11l1.01-1.11zm2.49 6.11a.75.75 0 001.01-1.11l-1.01 1.11zm1.01-6.11a.75.75 0 00-1.01 1.11l1.01-1.11zm2.49 6.11a.75.75 0 001.01-1.11l-1.01 1.11zm1.01-6.11a.75.75 0 00-1.01 1.11l1.01-1.11zM8.5 9l.505-.554h.002l.001.003a.603.603 0 01.008.007l.003.003a.915.915 0 01-.112-.16 1.354 1.354 0 01-.157-.663h-1.5c0 .598.166 1.062.343 1.385a2.41 2.41 0 00.345.478 1.406 1.406 0 00.053.052l.002.002h.001l.001.001L8.5 9zm.25-1.364c0-.172.082-.32.355-.692.227-.31.645-.843.645-1.58h-1.5c0 .172-.082.32-.355.692-.227.31-.645.843-.645 1.58h1.5zm1-2.272a2.85 2.85 0 00-.343-1.385 2.41 2.41 0 00-.345-.478 1.406 1.406 0 00-.053-.052l-.002-.002-.001-.001c-.001 0-.002-.001-.506.554l-.505.554h-.002l-.001-.003a.603.603 0 01-.008-.007L7.98 4.54a.915.915 0 01.112.16c.073.134.157.351.157.663h1.5zM12 9a81.27 81.27 0 01.506-.554l.002.003c.002 0 .003.002.004.003l.005.004.002.003a.914.914 0 01-.112-.16 1.354 1.354 0 01-.157-.663h-1.5c0 .598.166 1.062.343 1.385a2.416 2.416 0 00.345.478l.034.034.013.013.006.005.002.002h.001v.001c.001 0 .002.001.506-.554zm.25-1.364c0-.172.082-.32.355-.692.227-.31.645-.843.645-1.58h-1.5c0 .172-.082.32-.355.692-.227.31-.645.843-.645 1.58h1.5zm1-2.272a2.85 2.85 0 00-.343-1.385 2.416 2.416 0 00-.345-.478 1.279 1.279 0 00-.034-.034l-.013-.013-.006-.005-.002-.002-.001-.001h-.001L12 4l-.505.554h-.002c0-.002 0-.002-.002-.003l-.003-.003-.005-.004-.002-.003.019.022a.914.914 0 01.093.14c.073.132.157.35.157.66h1.5zM15.5 9l.505-.554h.002c0 .002 0 .002.002.003l.003.003.005.004.002.003L16 8.437a.914.914 0 01-.093-.14 1.354 1.354 0 01-.157-.66h-1.5c0 .597.166 1.061.343 1.384a2.416 2.416 0 00.345.478l.034.034.013.013.006.005.002.002h.001l.001.001L15.5 9zm.25-1.364c0-.172.082-.32.355-.692.227-.31.645-.843.645-1.58h-1.5c0 .172-.082.32-.355.692-.227.31-.645.843-.645 1.58h1.5zm1-2.272a2.85 2.85 0 00-.343-1.385 2.416 2.416 0 00-.345-.478 1.431 1.431 0 00-.034-.034l-.013-.013-.006-.005-.002-.002-.001-.001c-.001 0-.002-.001-.506.554a81.27 81.27 0 01-.505.554h-.002c0-.002 0-.002-.002-.003l-.003-.003-.005-.004-.002-.003a.914.914 0 01.112.16c.073.134.157.351.157.663h1.5z"
                fill={color}
            />
        </Svg>
    );
}
