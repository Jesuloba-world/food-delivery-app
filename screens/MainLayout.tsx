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
	const progress = useDrawerProgress();

	const scale = Animated.interpolateNode(progress as Adaptable<number>, {
		inputRange: [0, 1],
		outputRange: [1, 0.8],
	});

	const borderRadius = Animated.interpolateNode(
		progress as Adaptable<number>,
		{
			inputRange: [0, 1],
			outputRange: [1, 26],
		}
	);

	const animatedStyle = {
		borderRadius,
		transform: [{ scale }],
	};

	return (
		<Animated.View style={[styles.mainStyle, animatedStyle]}>
			<Text>MainLayout</Text>
		</Animated.View>
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
