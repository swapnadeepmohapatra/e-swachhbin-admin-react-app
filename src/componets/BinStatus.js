// #09D3AC
import React from "react";
import "../App.css";
import redBin from "../images/delete_bin_red.png";
import yellowBin from "../images/delete_bin_yellow.png";
import greenBin from "../images/delete-bin.png";
import * as firebase from "firebase";

class BinStatus extends React.Component {
  render() {
    function getBinStatus(garbage) {
      if (garbage >= 91) {
        // return"The Dustbin is Full";
        return redBin;
      } else if ((garbage >= 80) & (garbage <= 90)) {
        // return"Clean the Dustbin right now";
        return yellowBin;
      } else if ((garbage >= 0) & (garbage <= 10)) {
        // return"The Dustbin is Empty";
        return greenBin;
      } else if ((garbage >= 11) & (garbage <= 50)) {
        // return"The Dustbin has some Garbage";
        return greenBin;
      } else if ((garbage >= 51) & (garbage <= 79)) {
        // return"Clean the dustbin if possible";
        return yellowBin;
      }
    }
    function getBinStatusText(garbage) {
      if (garbage >= 91) {
        return "The Dustbin is Full";
        // return redBin;
      } else if ((garbage >= 80) & (garbage <= 90)) {
        return "Clean the Dustbin right now";
        // return yellowBin;
      } else if ((garbage >= 0) & (garbage <= 10)) {
        return "The Dustbin is Empty";
        // return greenBin;
      } else if ((garbage >= 11) & (garbage <= 50)) {
        return "The Dustbin has some Garbage";
        // return greenBin;
      } else if ((garbage >= 51) & (garbage <= 79)) {
        return "Clean the dustbin if possible";
        // return yellowBin;
      }
    }
    return (
      <div className="App">
        <div className="App-body">
          <img
            src={getBinStatus(this.props.perc)}
            style={{ marginBottom: 50 }}
            alt="Bin Image"
          />
          <h2>{this.props.perc}</h2>
          <h2>{getBinStatusText(this.props.perc)}</h2>
        </div>
      </div>
    );
  }
}
export default BinStatus;
