/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

import HelloWorld from './src/components/HelloWorld';
import DashBoardScreen from "./src/components/DashBoardScreen";
import DashBoardNavigator from './src/navigators/DashBoardScreen/index';

const App = () => {
  return(
    <DashBoardNavigator />
  );
}

export default App;
