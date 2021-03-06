import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { Center, IconButton, Icon } from "native-base";
import { StatusBar } from "expo-status-bar";

type StackHeaderProps = {
    title: string;
};

export default function StackHeader({ title }: StackHeaderProps): React.ReactElement {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <StatusBar style="dark" backgroundColor="white" />
            <Center flexDirection="row" py={4} backgroundColor="white">
                <IconButton
                    position="absolute"
                    left="5"
                    borderRadius="full"
                    onPress={() => navigation.goBack()}
                    icon={<Icon as={Entypo} name="chevron-small-left" size={8} color="black" />}
                />
                <Text style={styles.title}>{title}</Text>
            </Center>
        </SafeAreaView>
    );
}
