import React, { FC, useEffect } from "react";
import {
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	FlatList,
	View,
} from "react-native";
import { RouteProp, ParamListBase } from "@react-navigation/native";
import { useDrawerProgress } from "@react-navigation/drawer";
import Animated, { Adaptable } from "react-native-reanimated";
import { useAppDispatch, useAppSelector } from "../stores/hook";
import { setSelectedTab } from "../stores/tab/tabSlice";
import { COLORS, SIZES, constants, dummyData, icons } from "../constants";
import { Header, TabButton } from "../components";
import { Shadow } from "react-native-shadow-2";

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
		<Animated.View
			style={[
				{
					flex: 1,
					backgroundColor: COLORS.white,
					overflow: "hidden",
				},
				animatedStyle,
			]}
		>
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
			<View
				style={{
					height: 100,
					justifyContent: "flex-end",
				}}
			>
				{/* Tab */}
				<Shadow
					startColor={COLORS.lightGray1}
					distance={15}
					sides={["top"]}
					corners={["topLeft", "topRight"]}
				>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							paddingHorizontal: SIZES.radius,
							paddingBottom: 10,
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
							backgroundColor: COLORS.white,
							width: "100%",
						}}
					>
						<TabButton
							label={constants.screens.home}
							icon={icons.home}
							isFocused={selectedTab == constants.screens.home}
							onPress={() => selectTab(constants.screens.home)}
						/>
						<TabButton
							label={constants.screens.search}
							icon={icons.search}
							isFocused={selectedTab == constants.screens.search}
							onPress={() => selectTab(constants.screens.search)}
						/>
						<TabButton
							label={constants.screens.cart}
							icon={icons.cart}
							isFocused={selectedTab == constants.screens.cart}
							onPress={() => selectTab(constants.screens.cart)}
						/>
						<TabButton
							label={constants.screens.favourite}
							icon={icons.favourite}
							isFocused={
								selectedTab == constants.screens.favourite
							}
							onPress={() =>
								selectTab(constants.screens.favourite)
							}
						/>
						<TabButton
							label={constants.screens.notification}
							icon={icons.notification}
							isFocused={
								selectedTab == constants.screens.notification
							}
							onPress={() =>
								selectTab(constants.screens.notification)
							}
						/>
					</View>
				</Shadow>
			</View>
		</Animated.View>
	);
};

export default MainLayout;

const styles = StyleSheet.create({});
