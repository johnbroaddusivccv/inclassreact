import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card"
import friends from "./friends.json"
function App() {

  console.log(friends)
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friends.map((friend, i) => <Card key={i} name={friend.name} occupation={friend.occupation} location={friend.location} src={friend.image} />)}
    </Wrapper>
  );
}

export default App;
