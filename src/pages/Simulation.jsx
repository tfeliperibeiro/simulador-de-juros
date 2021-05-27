import React from 'react';

import firebase from '../connection/firebase';

class Simulation extends React.Component {
  componentDidMount() {
    firebase
      .firestore()
      .collection('finance')
      .get()
      .then((res) => {
        res.forEach((value) => {
          console.log(value.data());
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return <h1>Ola</h1>;
  }
}

export default Simulation;
