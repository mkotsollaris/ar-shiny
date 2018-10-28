import React from "react";
import { Text, View } from "react-native";
import Expo from "expo";
import ExpoTHREE, { THREE } from "expo-three";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  onContextCreate = async ({ gl, scale, width, height, arSession }) => {};

  onRender = delta => {};

  render() {
    return <ExpoGraphics.View style={{ flex: 1 }} 
      onContextCreate={this.onContextCreate}
      onRender={this.onRender}
      arEnabled={true}
    />;
  }
}
