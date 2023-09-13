import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  FlatList,
  Image,
} from "react-native";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";
import { Card, TextInput } from "react-native-paper";

import { Header as HeaderYolo } from "../components/Header";

import { useStarships } from "~/hooks/useStarships";

interface ShipProps {
  name: string;
  model: string;
  crew: string;
  hyperdrive_rating: string;
}

interface RenderItemProps {
  item: ShipProps;
}

export const StarshipFeedScreen = () => {
  const [search, setSearch] = useState("");
  const [ships, setShips] = useState([]);
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

  const handleSearch = () => {
    setSearch(search);
    refetch();
  };

  const renderItem = (props: RenderItemProps) => {
    const { item } = props;

    return (
      <Card style={styles.card}>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Modèle : </Text>
          {item.model}
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>CREW : </Text>
          {item.crew}
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Hyper Drive : </Text>
          {item.hyperdrive_rating}
        </Text>
      </Card>
    );
  };
  //debugger

  return (
    <View style={styles.container}>
      <HeaderYolo title="Recherche" />
      <View>
        <TextInput
          value={search}
          label="Chercher"
          onChangeText={() => handleSearch(search)}
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
        <FlatList data={data.results} renderItem={renderItem} />
      </View>
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

  card: {
    padding: 15,
    marginBottom: 10,
  },
});
