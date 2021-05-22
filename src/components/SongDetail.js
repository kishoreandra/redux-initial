import React from "react";
import { connect } from "react-redux";

const styles = {
  color: "#E00212",
};

const SongDetail = ({ song }) => {
  if (!song) {
    return "Please select a song";
  }
  return (
    <div>
      Current Playing :<em style={styles}> {song.title}</em>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};
export default connect(mapStateToProps)(SongDetail);
