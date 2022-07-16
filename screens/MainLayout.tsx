import React, { FC } from "react";
import { View, Text } from "react-native";
import { RouteProp, ParamListBase } from "@react-navigation/native";

interface props {
	route: RouteProp<ParamListBase, "MainLayout">;
	navigation: any;
}

const MainLayout: FC<props> = () => {
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Text>MainLayout</Text>
		</View>
	);
};

export default MainLayout;
