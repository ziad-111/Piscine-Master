import * as React from "react";
import { List } from "react-native-paper";

const data = [
  { prenom: "Devin" },
  { prenom: "Dan" },
  { prenom: "Dominic" },
  { prenom: "Jackson" },
  { prenom: "James" },
  { prenom: "Joel" },
  { prenom: "John" },
  { prenom: "Jillian" },
  { prenom: "Jimmy" },
  { prenom: "Julie" },
];
const MyComponent = () => {
  return (
    <List.Section title="data">
      {data.map((item, index) => {
        return (
          <List.Accordion
            key={index}
            title={item.prenom}
            left={(props) => <List.Icon {...props} icon="folder" />}
            expanded={false}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        );
      })}
    </List.Section>
  );
};

export default MyComponent;
