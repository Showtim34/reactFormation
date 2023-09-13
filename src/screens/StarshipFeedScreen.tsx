import React, { useState } from "react";
import { StyleSheet, StatusBar, View, Text, FlatList } from "react-native";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";
import { TextInput } from "react-native-paper";

import { Header as HeaderYolo } from "../components/Header";

import { useStarships } from "~/hooks/useStarships";
import { StarshipCard } from "~/components/StarshipCard";
import type { StarshipCardProps } from "~/types";

interface RenderItemProps {
  item: StarshipCardProps;
}

export const StarshipFeedScreen = () => {
  const [search, setSearch] = useState("");
  const { isLoading, isError, data, refetch, isRefetching } =
    useStarships(search);

  if (isLoading) {
    return <Text>Loading…</Text>;
  }
  if (isError) {
    return <Text>Something bad happened…</Text>;
  }

  /*if (isRefetching)
    {
        return <Text>poolieeng</Text>
    }*/

  const handleSearch = (s: string) => {
    setSearch(s);
    refetch();
  };

  const renderItem = (props: RenderItemProps) => {
    const { item } = props;

    return (
      <StarshipCard
        name={item.name}
        model={item.model}
        manufacturer={item.manufacturer}
        cost_in_credits={item.cost_in_credits}
      />
    );
  };

  return (
    <View style={styles.container}>
      <HeaderYolo title="Recherchez votre ship " />
      <View style={{ borderRadius: 0, backgroundColor: "#eee" }}>
        <TextInput
          value={search}
          label="Chercher"
          onChangeText={(s) => handleSearch(s)}
          style={{
            backgroundColor: "#eee",
            borderRadius: 0,
            color: "#444",
          }}
        />
      </View>
      <View style={styles.headerContainer}>
        {isRefetching && (
          <Placeholder
            Animation={Fade}
            Left={PlaceholderMedia}
            Right={PlaceholderMedia}
          >
            <PlaceholderLine width={80} />
            <PlaceholderLine />
            <PlaceholderLine width={30} />
          </Placeholder>
        )}
      </View>
      <FlatList
        data={data.results}
        renderItem={renderItem}
        contentContainerStyle={{ gap: 15 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  headerContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
