import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import CustomDrawer from "./navigation/CustomDrawer";

const Stack = createStackNavigator();

export default function App() {
	let [fontsLoaded] = useFonts(customFont);

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName={"Home"}
			>
				<Stack.Screen name="Home" component={CustomDrawer} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const customFont = {
	"Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
	"Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
	"Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
	"Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
};
