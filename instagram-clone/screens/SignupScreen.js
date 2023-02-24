import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import SignupForm from "../components/signupScreen/SignupForm";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={{ width: 100, height: 100, backgroundColor: "white" }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/4923/4923005.png",
          }}
        />
        <SignupForm navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default SignupScreen;
