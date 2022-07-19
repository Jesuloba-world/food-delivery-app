import React, { FC, useEffect } from "react";
import {
	Text,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Image,
	FlatList,
	View,
} from "react-native";
import { RouteProp, ParamListBase } from "@react-navigation/native";
import { useDrawerProgress } from "@react-navigation/drawer";
import Animated, {
	Adaptable,
	useSharedValue,
	useAnimatedStyle,
	withTiming,
} from "react-native-reanimated";
import { useAppDispatch, useAppSelector } from "../stores/hook";
import { setSelectedTab } from "../stores/tab/tabSlice";
import { CartTab, Favourite, Home, Notification, Search } from "../screens";
import {
	COLORS,
	FONTS,
	SIZES,
	constants,
	dummyData,
	icons,
} from "../constants";
import { Header } from "../components";

interface props {
	route: RouteProp<ParamListBase, "MainLayout">;
	navigation: any;
}

const MainLayout: FC<props> = ({ navigation }) => {
	const selectedTab = useAppSelector((state) => state.tab.selectedTab);

	const dispatch = useAppDispatch();

	const selectTab = (selectedTab: string) => {
		return dispatch(setSelectedTab(selectedTab));
	};

	useEffect(() => {
		dispatch(selectTab(constants.screens.home));
	}, []);

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
			{/* Header */}
			<Header
				containerStyle={{
					height: 50,
					paddingHorizontal: SIZES.padding,
					marginTop: 40,
					alignItems: "center",
				}}
				title={selectedTab.toUpperCase()}
				leftComponent={
					<TouchableOpacity
						style={{
							width: 40,
							height: 40,
							alignItems: "center",
							justifyContent: "center",
							borderWidth: 1,
							borderColor: COLORS.gray2,
							borderRadius: SIZES.radius,
						}}
						onPress={() => navigation.openDrawer()}
					>
						<Image source={icons.menu} />
					</TouchableOpacity>
				}
				rightComponent={
					<TouchableOpacity
						style={{
							borderRadius: SIZES.radius,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Image
							source={dummyData.myProfile.profile_image}
							style={{
								width: 40,
								height: 40,
								borderRadius: SIZES.radius,
							}}
						/>
					</TouchableOpacity>
				}
			/>

			{/* Content */}
			<View style={{ flex: 1 }}>
				<Text>MainLayout</Text>
			</View>

			{/* Footer */}
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
