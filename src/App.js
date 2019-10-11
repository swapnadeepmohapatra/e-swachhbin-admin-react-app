import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./componets/MainHeader";
import MainBody from "./componets/MainBody";
import BinStatus from "./componets/BinStatus";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBG510i9aGXHr7s3B_4JRIlqFj_CCYRc_8",
  authDomain: "iottest-89b28.firebaseapp.com",
  databaseURL: "https://iottest-89b28.firebaseio.com",
  projectId: "iottest-89b28",
  storageBucket: "iottest-89b28.appspot.com",
  messagingSenderId: "798965384427",
  appId: "1:798965384427:web:9a525e3c7ea1866757eaae"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binStatus: "empty",
      binPercent: 0,
      message: "Bin Status",
      latitude: "",
      longitude: "",
      error: null
    };
  }

  componentWillMount() {
    firebase
      .database()
      .ref()
      .on("value", dataSnapshot => {
        var binPercent = dataSnapshot.child("garbage").val();
        this.setState({ binPercent: binPercent });
        // console.log(binPercent);
        // this.getBinMessage();
        this.forceUpdate();
      });
  }

  render() {
    return (
      <div className="App">
        <MainHeader />
        <MainBody />
        <BinStatus perc={this.state.binPercent} />
      </div>
    );
  }
}
export default App;
