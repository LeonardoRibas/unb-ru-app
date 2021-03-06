import styles from "./styles";
import { Text } from "react-native";
import Modal from "react-native-modal";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { IconButton, Icon } from "native-base";
import CalendarPicker from "../CalendarPicker";
import { getFormatedDate } from "../../utils/date";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeneralContext } from "../../context/GeneralContext";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export default function Header({ navigation }: NativeStackHeaderProps): React.ReactElement {
    const { menu, dayIndex, isCalendarModalOpen, setIsCalendarModalOpen } =
        useContext(GeneralContext);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" translucent={true} />
            <IconButton
                borderRadius="full"
                onPress={() => navigation.navigate("Settings")}
                icon={<Icon as={Feather} name="settings" size={6} color="white" />}
            />
            {menu && <Text style={styles.title}>{getFormatedDate(dayIndex)}</Text>}
            <IconButton
                borderRadius="full"
                onPress={() => setIsCalendarModalOpen(true)}
                icon={<Icon as={Feather} name="calendar" size={6} color="white" />}
            />
            <Modal
                isVisible={isCalendarModalOpen}
                onBackdropPress={() => setIsCalendarModalOpen(false)}
                onSwipeComplete={() => setIsCalendarModalOpen(false)}
                swipeDirection="down"
                hideModalContentWhileAnimating
                useNativeDriverForBackdrop
                statusBarTranslucent
                scrollHorizontal
                propagateSwipe
                backdropOpacity={0.5}
                style={{ justifyContent: "flex-end", margin: 0 }}
            >
                <CalendarPicker />
            </Modal>
        </SafeAreaView>
    );
}
