import React from "react";
import {StyleSheet, StatusBar, View, Text, FlatList, Image} from "react-native";

import {default as data} from "../../api/data.json";
import {Card} from "react-native-paper";
//import {useImage} from "../hooks/useImage";

interface ShipProps {
    name: string;
    model: string;
    crew: string;
    hyperdrive_rating: string;
}

interface RenderItemProps {
    item: ShipProps
}


export const StarshipFeedScreen = () => {
    let renderItem = (props: RenderItemProps) => {
        const {item} = props

        return (
            <Card style={styles.card}>
                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                <Text>
                    <Text style={{fontWeight: 'bold'}}>Modèle : </Text>
                    {item.model}
                </Text>
                <Text>
                    <Text style={{fontWeight: 'bold'}}>CREW : </Text>
                        {item.crew}</Text>
                <Text>
                    <Text style={{fontWeight: 'bold'}}>Hyper Drive : </Text>
                    {item.hyperdrive_rating}
                </Text>
            </Card>
        )
    }
    //debugger
    console.log("coucou")
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <FlatList
                    data={data.results}
                    renderItem={renderItem}
                />
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

    card : {
        padding: 15,
        marginBottom: 10
    }
});