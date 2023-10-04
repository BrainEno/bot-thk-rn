import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, useTheme, Text } from "./theme";
import { useNavigation } from "@react-navigation/native";
import type {
  DrawerActionHelpers,
  ParamListBase,
} from "@react-navigation/native";
import { TextInput, View } from "react-native";
import { Avatar } from "./Avatar";
import { IconButton } from "./IconButton";
import { useState } from "react";

export const Header = () => {
  const theme = useTheme();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation() as DrawerActionHelpers<ParamListBase>;

  return (
    <View
      style={{
        height: 100,
        marginTop: insets.top,
        padding: theme.spacing.m,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <IconButton
        noBackground
        icon="menu"
        onPress={() => navigation.openDrawer()}
      />
      {showSearchBar && (
        <Box paddingHorizontal="m" paddingVertical="s" flex={1}>
          <TextInput
            placeholderTextColor="#8e8e93"
            style={{
              backgroundColor: theme.colors.secondaryBackground,
              borderRadius: 10,
              fontSize: 17,
              padding: theme.spacing.s,
              fontFamily: "SFProTextRegular",
              color: "#8E8E93",
            }}
            placeholder="Search"
          />
        </Box>
      )}
      <Box flexDirection="row">
        <IconButton
          icon="search"
          onPress={() => setShowSearchBar(!showSearchBar)}
        />
        <Box marginLeft="m" />
        <Avatar id="derek.russel" />
      </Box>
    </View>
  );
};
