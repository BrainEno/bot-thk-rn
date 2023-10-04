import { Feather } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";
import dayjs from "dayjs";
import React from "react";
import {
  GestureResponderEvent,
  ColorValue,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { GetCatBlogsQuery } from "../../gql/types-and-hooks";
import { Box, Text } from "../theme";

export type BlogCardData = GetCatBlogsQuery["getCatBlogs"][0];

interface PostProps {
  blog: BlogCardData;
  onPress: (event: GestureResponderEvent) => void;
  textColor?: ColorValue;
}

export const Post: React.FC<PostProps> = ({ blog, onPress }) => {
  const { slug, title, author, createdAt, imageUri } = blog;

  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        style={styles.container}
        padding="m"
        flexDirection="column"
        alignItems="center"
      >
        <View style={styles.blog}>
          <Text style={[styles.title]}>{title}</Text>
          <View style={styles.msgContainer}>
            <Text style={styles.author}>{author.name}</Text>
            <Text style={styles.author}>·</Text>
            <Text style={styles.time}>
              {dayjs(createdAt as Date, "zh", true).format("MMMM,DD,YYYY")}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Feather
              style={{ marginTop: 8, marginLeft: 3 }}
              name="star"
              size={22}
              color="#474747"
            />
            <Feather
              style={{ marginTop: 8, marginLeft: 8 }}
              name="more-horizontal"
              size={22}
              color="#474747"
            />
          </View>
        </View>
        <Link to={`/blogs/${slug}`}>
          {imageUri ? (
            <Image
              source={{
                uri: imageUri,
              }}
              style={styles.image}
            />
          ) : null}
        </Link>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "100%",
    height: 80,
    marginTop: 8,
  },
  blog: {
    marginRight: 20,
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.2,
    marginBottom: 8,
    marginLeft: 5,
  },
  msgContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  author: {
    fontSize: 13,
    fontWeight: "400",
    letterSpacing: 1,
    marginLeft: 5,
  },
  time: {
    fontSize: 13,
    fontWeight: "400",
    letterSpacing: 1,
    marginLeft: 5,
    marginRight: 20,
  },
  image: {
    width: 80,
    height: "100%",
  },
});
