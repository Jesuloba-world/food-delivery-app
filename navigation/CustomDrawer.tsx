import { useState } from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainLayout } from "../screens";
import { COLORS } from "../constants";
import { CustomDrawerContent } from "./CustomDrawerContent";
import { useAppDispatch, useAppSelector } from "../stores/hook";
import { setSelectedTab } from "../stores/tab/tabSlice";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
	const selectedTab = useAppSelector((state) => state.tab.selectedTab);

	const dispatch = useAppDispatch();

	const selectTab = (selectedTab: string) => {
		return dispatch(setSelectedTab(selectedTab));
	};

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: COLORS.primary,
			}}
		>
			<Drawer.Navigator
				useLegacyImplementation
				screenOptions={{
					drawerType: "slide",
					overlayColor: "transparent",
					drawerStyle: {
						flex: 1,
						width: "65%",
						paddingRight: 20,
						backgroundColor: "transparent",
					},
					sceneContainerStyle: {
						backgroundColor: "transparent",
					},
					headerShown: false,
					swipeEdgeWidth: 500,
				}}
				initialRouteName="MainLayout"
				drawerContent={(props) => {
					return (
						<CustomDrawerContent
							navigation={props.navigation}
							selectedTab={selectedTab}
							setSelectedTab={selectTab}
						/>
					);
				}}
			>
				<Drawer.Screen name="MainLayout">
					{(props) => <MainLayout {...props} />}
				</Drawer.Screen>
			</Drawer.Navigator>
		</View>
	);
};

export default CustomDrawer;
