import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
const App = () => {
  return (
    <div>
      <SongList />
      <hr />
      <SongDetail />
    </div>
  );
};

export default App;
