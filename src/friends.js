import React, {Component} from "react"
import ReactDOM from "react-dom"

const friends = [
  {
    name: "Daria",
    age: 26,
    friends: [
      {
        name: "Petya",
        age: 60
      },
      {
        name: "Vasya",
        age: 14
      }
    ]
  },
  {
    name: "Vitya",
    age: 27
  },
  {
    name: "Kate",
    age: 23
  }];

const targetEl = document.querySelector("#friends-list");

ReactDOM.render(
  <div>Friends list:
    {friends.map((friend) => <p>{friend.name}</p>)}
  </div>,
  targetEl
);

const targetElAdvanced = document.querySelector("#advanced-friends-list");

const Friend = (props) => (
  <div>
    <p>{props.name}, {props.age}</p>
    {props.friends ?
      <div>Friends list: {props.friends.map((friend) => <Friend name={friend.name}
                                                                age={friend.age}
                                                                friends={friend.friends}/>)}</div>
      :
      <p>There is no friends</p>}
  </div>);

ReactDOM.render(
  <div>Friends list:
    {friends.map((friend) =>
      <Friend name={friend.name}
              age={friend.age}
              friends={friend.friends}/>)}</div>,
  targetElAdvanced
);