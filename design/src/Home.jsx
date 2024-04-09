import React, { useEffect } from 'react';
import axios from 'axios';

function Home() {
  useEffect(() => {
    axios.get('http://localhost:8800/')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []); // Empty array means no dependencies

  return (
    <></>
  );
}

export default Home;
