import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../components/DrawerContent";
import { Conversations } from "../components/Conversations";
import { Blogs } from "../components/blog/Blogs";

const LeftDrawer = createDrawerNavigator();

const ConversationView = () => {
  return (
    <LeftDrawer.Navigator
      screenOptions={{ drawerPosition: "left" }}
      drawerContent={DrawerContent}
    >
      <LeftDrawer.Screen
        name="Main"
        component={Blogs}
        options={{
          headerShown: false,
        }}
      />
    </LeftDrawer.Navigator>
  );
};

export default ConversationView;
