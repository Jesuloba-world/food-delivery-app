import { FC } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

interface props {
	label: string;
	icon: any;
}

export const CustomDrawerItem: FC<props> = ({ label, icon }) => {
	return (
		<TouchableOpacity
			style={{
				flexDirection: "row",
				height: 40,
				marginBottom: SIZES.base,
				alignItems: "center",
				paddingLeft: SIZES.radius,
				borderRadius: SIZES.base,
				// backgroundColor
			}}
			// onPress
		>
			<Image
				source={icon}
				style={{
					width: 20,
					height: 20,
					tintColor: COLORS.white,
				}}
			/>
			<Text
				style={{
					marginLeft: 15,
					color: COLORS.white,
					...FONTS.h3,
				}}
			>
				{label}
			</Text>
		</TouchableOpacity>
	);
};
