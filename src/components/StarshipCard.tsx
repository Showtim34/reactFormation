import React from "react";
import { Card, Text } from "react-native-paper";

import type { StarshipCardProps } from "~/types";

export function StarshipCard({
  name,
  model,
  manufacturer,
  // eslint-disable-next-line camelcase
  cost_in_credits,
}: StarshipCardProps) {
  const id = Math.floor(Math.random() * 500);

  return (
    <Card
      style={{
        borderRadius: 0,
        marginBottom: 50,
        backgroundColor: "#444",
      }}
    >
      <Card.Cover
        source={{
          uri: "https://picsum.photos/id/" + id + "/200/300?grayscale",
        }}
        style={{ borderRadius: 0 }}
      />
      <Card.Title
        title={name}
        titleStyle={{ color: "#eee", fontWeight: "bold" }}
      />
      <Card.Content>
        <Text style={{ color: "#eee" }}>
          <Text style={{ fontWeight: "bold", color: "#aaa" }}>Modèle : </Text>
          {model}
        </Text>
        <Text style={{ color: "#eee" }}>
          <Text style={{ fontWeight: "bold", color: "#aaa" }}>
            manufacturer :{" "}
          </Text>
          {manufacturer}
        </Text>
        <Text style={{ color: "#eee", fontSize: 20, textAlign: "right" }}>
          {/* eslint-disable-next-line camelcase */}
          {cost_in_credits} Euros
        </Text>
      </Card.Content>
    </Card>
  );
}
