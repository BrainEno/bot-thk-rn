import React from "react";
import { ScrollView } from "react-native";
import { Box, useTheme } from "../theme";
import { BlogCardData, Post } from "./Post";
import { useGetCatBlogsQuery } from "../../gql/types-and-hooks";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "../Header";

export const Blogs = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { data, error, loading } = useGetCatBlogsQuery({
    variables: { getCatBlogsSlug: "featured" },
  });

  const blogs = data?.getCatBlogs || [];

  return (
    <Box flex={1} backgroundColor="mainBackground" paddingVertical="xl">
      <Header />
      <ScrollView style={{ marginTop: insets.top }}>
        {blogs.map((blog: BlogCardData) => (
          <Post blog={blog} key={blog._id} onPress={() => {}} />
        ))}
      </ScrollView>
    </Box>
  );
};
