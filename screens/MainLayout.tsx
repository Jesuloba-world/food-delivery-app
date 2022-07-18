import React, { FC, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp, ParamListBase } from "@react-navigation/native";
import { useDrawerProgress, useDrawerStatus } from "@react-navigation/drawer";
import Animated, {
	Adaptable,
	interpolate,
	Extrapolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";

interface props {
	route: RouteProp<ParamListBase, "MainLayout">;
	navigation: any;
}

const MainLayout: FC<props> = () => {
	const isDrawerOpen = useDrawerStatus();
	const progress = useSharedValue(0);

	useEffect(() => {
		if (isDrawerOpen === "open") {
			progress.value = withTiming(0);
		} else {
			progress.value = withTiming(1);
		}
	}, [isDrawerOpen]);

	const scale = interpolate(progress.value, [0, 1], [1, 0.8]);
	const borderRadius = interpolate(progress.value, [0, 1], [1, 26]);

	const animatedStyle = {
		borderRadius,
		transform: [{ scale }],
	};

	return (
		<View style={[styles.mainStyle, animatedStyle]}>
			<Text>MainLayout</Text>
		</View>
	);
};

export default MainLayout;

const styles = StyleSheet.create({
	mainStyle: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
});
