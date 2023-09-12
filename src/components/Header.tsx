import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

type HeaderProps = {
    title: string;
};

export default function Header({ title }: HeaderProps) {

      return (
                  <View style={styles.header}>
                    <Text variant={"headlineLarge"} style={styles.headerText}>{title}</Text>
                </View>

    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "black",
        width: '100%',
        paddingVertical: 100,
        color: 'white',
        alignItems: 'center'
    },
    headerText: {
        color: 'white'
    },
});
