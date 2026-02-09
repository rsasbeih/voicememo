import { Pressable, Text, View } from "react-native";
import { useEffect } from "react";
import { webSocketClient } from "./services/websocketService";
export default function Index() {
  useEffect(() => {
    webSocketClient.connect();
    return () => {
      webSocketClient.disconnect();
    };
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        onPress={() => {
          console.log("Pressed!");
          webSocketClient.sendMessage("Hello from the client!");
        }}
        style={({ pressed }) => ({
          padding: 10,
          backgroundColor: "lightblue",
          borderRadius: 5,
          transform: [{ scale: pressed ? 0.9 : 1 }],
        })}
      >
        <Text>Press Me</Text>
      </Pressable>
    </View>
  );
}
