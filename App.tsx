import * as Font from "expo-font";
import { useState, useCallback, useEffect } from "react";
// import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./navigation/CustomDrawer";
import { View } from "react-native";

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync(customFont);
			} catch (e) {
				console.warn(e);
			} finally {
				setAppIsReady(true);
			}
		}
		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
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
		</View>
	);
}

const customFont = {
	"Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
	"Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
	"Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
	"Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
};
