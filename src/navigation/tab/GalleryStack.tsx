import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GalleryScreen from "../../screens/gallery/GalleryScreen";


const GalleryStackScreens = createNativeStackNavigator();


const GalleryStack = () => {
    return (
        <GalleryStackScreens.Navigator>
            <GalleryStackScreens.Screen
                name='GalleryStack'
                component={GalleryScreen}
            />
        </GalleryStackScreens.Navigator>
    )
}

export default GalleryStack;