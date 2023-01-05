import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ addGoalHandler, show, hide }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoal() {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
    hide();
  }

  return (
    <Modal visible={show} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/2.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          placeholderTextColor="white"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttoContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal} color="white" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="white" onPress={() => hide()} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "white",
    backgroundColor: "tomato",
  },
  textInput: {
    fontSize: 17,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "white",
    padding: 16,
    width: "100%",
    height: 50,
    color: "white",
    marginBottom: 20,
    marginTop: 30,
  },

  buttoContainer: {
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
