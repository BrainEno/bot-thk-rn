import React from "react";
import { ScrollView } from "react-native";

import { Box } from "./theme";

import chats from "./data/chats.json";
import { Header } from "./Header";
import { Chat } from "./Chat";

export const Conversations = () => {
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Header />
      <ScrollView>
        {chats.map((chat, index) => (
          <Chat chat={chat} key={index} />
        ))}
      </ScrollView>
    </Box>
  );
};
