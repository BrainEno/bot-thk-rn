import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../components/DrawerContent";
import { Conversations } from "../components/Conversations";

const LeftDrawer = createDrawerNavigator();

const ConversationView = () => {
  return (
    <LeftDrawer.Navigator
      screenOptions={{ drawerPosition: "left" }}
      drawerContent={DrawerContent}
    >
      <LeftDrawer.Screen
        name="Main"
        component={Conversations}
        options={{
          headerShown: false,
        }}
      />
    </LeftDrawer.Navigator>
  );
};

export default ConversationView;
