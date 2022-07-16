import { View, Text, Image, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainLayout } from "../screens";
import {
	COLORS,
	FONTS,
	SIZES,
	constants,
	icons,
	dummyData,
} from "../constants";
import { CustomDrawerContent } from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: COLORS.primary,
			}}
		>
			<Drawer.Navigator
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
				}}
				initialRouteName="MainLayout"
				drawerContent={(props) => {
					return (
						<CustomDrawerContent navigation={props.navigation} />
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
