import { Feather } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { Box, Text, useTheme } from "./theme";

interface DrawerItemProps {
  label: string;
  icon: ComponentProps<typeof Feather>["name"];
}

export const DrawerItem = ({ label, icon }: DrawerItemProps) => {
  const theme = useTheme();
  return (
    <Box flexDirection="row" padding="m" alignItems="center">
      <Feather
        name={icon}
        size={24}
        style={{ paddingRight: 16, color: theme.colors.mainForeground }}
      />
      <Text letterSpacing={1.2} variant="item">
        {label}
      </Text>
    </Box>
  );
};
