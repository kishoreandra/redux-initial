import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    {
      title: "Dhimaak kharab",
      duration: "4:30",
    },
    {
      title: "Mind block",
      duration: "3:35",
    },
    {
      title: "Satyamevajayathe",
      duration: "4:12",
    },
    {
      title: "Emo emo",
      duration: "4:00",
    },
    {
      title: "Maguva maguva",
      duration: "4:47",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG-SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  selectedSong: selectedSongReducer,
  songs: songsReducer,
});
