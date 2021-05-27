import React, { useEffect, useState } from 'react';

import firebase from '../connection/firebase';

function Simulation() {
  const [db, setDb] = useState({});

  const handleGetDb = () => {
    firebase
      .firestore()
      .collection('finance')
      .get()
      .then((res) => res.forEach((value) => setDb(() => (value.data()))))
      .catch((error) => error);
  };

  useEffect(() => {
    handleGetDb();
  }, []);

  console.log(db);

  return (
    <>
      <h1>{db.entrada}</h1>
    </>
  );
}

export default Simulation;
