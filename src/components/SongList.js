import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

import "./SongList.css";

const SongList = ({ songs, selectSong }) => {
  const handleClick = (song) => {
    selectSong(song);
  };
  const renderedList = songs.map((song) => {
    return (
      <div key={song.title} className="songlist-main">
        <h2 className="songlist-title">Name : {song.title}</h2>
        <button onClick={() => handleClick(song)} className="songlist-btn">
          Select Song
        </button>
        <p>duration : {song.duration}</p>
      </div>
    );
  });
  return <div> {renderedList}</div>;
};

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};
export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);
