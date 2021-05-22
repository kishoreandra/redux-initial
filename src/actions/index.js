export const selectSong = (song) => {
  return {
    type: "SONG-SELECTED",
    payload: song,
  };
};
