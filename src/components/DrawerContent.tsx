import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Avatar } from "./Avatar";
import { ColorSchemeButton } from "./ColorSchemeButton";
import { DrawerItem } from "./DrawerItem";
import { Box, Text } from "./theme";

export const DrawerContent = () => {
  const insets = useSafeAreaInsets();

  return (
    <Box flex={1} pl="m" backgroundColor="mainBackground">
      <Box padding="m" style={{ paddingTop: insets.top }}>
        <Box
          flexDirection="row"
          marginVertical="m"
          justifyContent="space-between"
        >
          <Box>
            <Avatar id="derek.russel" />
            <Text marginVertical="s" variant="header">
              Derek Russel
            </Text>
            <Box flexDirection="row" alignItems="center">
              <Text variant="info" marginRight="s">
                28
              </Text>
              <Text variant="info" mr="m">
                正在关注
              </Text>
              <Text variant="info" mr="s">
                28
              </Text>
              <Text variant="info">关注者</Text>
            </Box>
          </Box>
          <Box>
            <ColorSchemeButton />
          </Box>
        </Box>
      </Box>
      <DrawerItem label="回到首页" icon="home" />
      <DrawerItem label="关注列表" icon="users" />
      <DrawerItem label="我的聊天" icon="message-square" />
      <DrawerItem label="个人资料" icon="user" />
      <DrawerItem label="我的收藏" icon="bookmark" />
      <DrawerItem label="账号设置" icon="settings" />
      <Box>
        <DrawerItem label="用户登录" icon="log-in" />
        <DrawerItem label="退出登录" icon="log-out" />
      </Box>
    </Box>
  );
};
