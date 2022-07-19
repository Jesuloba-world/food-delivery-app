import { FC } from "react";
import { View, Text, Image } from "react-native";
import { FONTS } from "../constants";

interface props {
	containerStyle: any;
	title: string;
	leftComponent: React.ReactNode;
	rightComponent: React.ReactNode;
}

export const Header: FC<props> = ({
	containerStyle,
	title,
	leftComponent,
	rightComponent,
}) => {
	return (
		<View
			style={{
				flexDirection: "row",
				...containerStyle,
			}}
		>
			{/* Left */}
			{leftComponent}

			{/* Title */}
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text
					style={{
						...FONTS.h3,
					}}
				>
					{title}
				</Text>
			</View>

			{/* Right */}
			{rightComponent}
		</View>
	);
};
