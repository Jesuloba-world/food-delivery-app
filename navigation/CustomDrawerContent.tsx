import { FC } from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../constants";

interface props {
	navigation: DrawerNavigationHelpers;
}

export const CustomDrawerContent: FC<props> = ({ navigation }) => {
	return (
		<DrawerContentScrollView
			scrollEnabled={true}
			contentContainerStyle={{
				flex: 1,
			}}
		>
			<View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>
				{/* Close Button */}
				<View
					style={{
						alignItems: "flex-start",
						justifyContent: "center",
					}}
				>
					<TouchableOpacity
						style={{
							alignItems: "center",
							justifyContent: "center",
						}}
						onPress={() => navigation.closeDrawer()}
					>
						<Image
							source={icons.cross}
							style={{
								height: 35,
								width: 35,
								tintColor: "white",
							}}
						/>
					</TouchableOpacity>
				</View>
				{/* Profile */}
				<TouchableOpacity
					style={{
						flexDirection: "row",
						marginTop: SIZES.radius,
						alignItems: "center",
					}}
					onPress={() => console.log("Profile")}
				>
					<Image
						source={dummyData.myProfile.profile_image}
						style={{
							width: 50,
							height: 50,
							borderRadius: SIZES.radius,
						}}
					/>
					<View style={{ marginLeft: SIZES.radius }}>
						<Text style={{ color: COLORS.white, ...FONTS.h3 }}>
							{dummyData.myProfile.name}
						</Text>
						<Text style={{ color: COLORS.white, ...FONTS.body4 }}>
							View your profile
						</Text>
					</View>
				</TouchableOpacity>

				{/* Drawer Items */}
			</View>
		</DrawerContentScrollView>
	);
};
