import { Pressable, Text, View } from "react-native";
import { useEffect } from "react";
import { webSocketClient } from "./services/websocketService";
import { micService } from "./services/micService";

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
        onPress={async () => {
          console.log("Pressed!");
          //only need to ask for mic access once
          //after that, we reuse the same stream objects
          //the browser and device remember which permission option we allowed last time
          const stream = await micService.requestMicAccess();
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
