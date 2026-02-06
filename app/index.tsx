import { Pressable, Text, View } from "react-native";

export default function Index() {
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
