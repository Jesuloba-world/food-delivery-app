import { FC, useEffect } from "react";
import { Text, TouchableWithoutFeedback, Image } from "react-native";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
} from "react-native-reanimated";
import { COLORS, FONTS, SIZES } from "../constants";

interface props {
	label: string;
	icon: any;
	isFocused: boolean;
	onPress: () => {
		payload: string;
		type: string;
	};
}

export const TabButton: FC<props> = ({ label, icon, isFocused, onPress }) => {
	// Reanimated shared value

	const tabFlex = useSharedValue(1);
	const tabColor = useSharedValue(COLORS.primary);

	const flexStyle = useAnimatedStyle(() => {
		return {
			flex: tabFlex.value,
		};
	});

	const colorStyle = useAnimatedStyle(() => {
		return {
			backgroundColor: tabColor.value,
		};
	});

	useEffect(() => {
		if (isFocused) {
			tabFlex.value = withTiming(4, { duration: 500 });
			tabColor.value = withTiming(COLORS.primary, { duration: 500 });
		} else {
			tabFlex.value = withTiming(1, { duration: 500 });
			tabColor.value = withTiming(COLORS.white, { duration: 500 });
		}
	}, [isFocused]);

	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<Animated.View
				style={[
					{
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
					},
					flexStyle,
				]}
			>
				<Animated.View
					style={[
						{
							flexDirection: "row",
							width: "80%",
							height: 50,
							alignItems: "center",
							justifyContent: "center",
							borderRadius: 25,
						},
						colorStyle,
					]}
				>
					<Image
						source={icon}
						style={{
							width: 20,
							height: 20,
							tintColor: isFocused ? COLORS.white : COLORS.gray,
						}}
					/>
					{isFocused && (
						<Text
							numberOfLines={1}
							style={{
								marginLeft: SIZES.base,
								color: COLORS.white,
								...FONTS.h3,
							}}
						>
							{label}
						</Text>
					)}
				</Animated.View>
			</Animated.View>
		</TouchableWithoutFeedback>
	);
};
