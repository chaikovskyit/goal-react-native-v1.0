import { StyleSheet, View, Text, Pressable, Button } from "react-native";

const GoalItem = ({ itemData, onDeleteItem }) => {
  function deleteGoal() {
    onDeleteItem(itemData.item.id)
  }

  return (
    <Pressable onPress={deleteGoal} style={({pressed}) => pressed && styles.pressItem}>
      <View style={styles.goalItem}>
        <Text style={styles.itemText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    margin: 8,
    backgroundColor: "tomato",
    borderRadius: 8,
  },
  pressItem: {
    opacity: 0.5
  },
  itemText: {
    color: "white",
    fontSize: 17
  },
});
