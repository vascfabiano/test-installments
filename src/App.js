import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";

const installments = [
  {
    id: "012",
    dueDate: "2020-02-05",
    status: "paid",
    parentId: null,
    value: 123.34
  },
  {
    id: "123",
    dueDate: "2020-05-05",
    status: "renegotiated",
    parentId: null,
    value: 123.34
  },
  {
    id: "456",
    dueDate: "2020-06-05",
    status: "open",
    parentId: "123",
    value: 123.34
  },
  {
    id: "789",
    dueDate: "2020-07-05",
    status: "paid",
    parentId: "123",
    value: 123.34
  },
  {
    id: "345",
    dueDate: "2020-01-05",
    status: "paid",
    parentId: null,
    value: 123.34
  }
];

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            paddingVertical: 10,
            textAlign: "center"
          }}
        >
          Installments
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            paddingVertical: 10,
            textAlign: "center",
            paddingHorizontal: 32
          }}
        >
          Here you can see all your installments (open, paid and renegotiated)
        </Text>
        <FlatList
          style={{ flex: 1 }}
          containerStyle={{ flex: 1, justifyContent: "space-between" }}
          data={installments}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontSize: 16,
                  padding: 5
                }}
              >
                {item.value}
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontSize: 16,
                  padding: 5
                }}
              >
                {item.status}
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontSize: 16,
                  padding: 5
                }}
              >
                {item.dueDate}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default App;
