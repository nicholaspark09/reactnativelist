import * as React from "react";
import { FlatList } from "react-native";
import ApiImpl from "./network/ApiImpl"
import { createStore } from 'redux'

export default class HomeScreen extends React.Component {
  private _api: Api;

  constructor () {
    super();
    this.api = new ApiImpl("https://jsonplaceholder.typicode.com/users");
  }

  componentDidMount() {
    this.loadUsers()
  }

  loadUsers() {
    let response = this.api.getUsers();
    console.log(response.data);
    console.log("I am here");
  }

  render() {
    return (
      <FlatList />
    )
  }
}
