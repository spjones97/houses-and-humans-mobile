import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WelcomeScreen;
