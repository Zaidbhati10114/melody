import React from "react";
import "./SongRow.css";
import { useDataLayerValue } from "./DataLayer";

function SongRow({ track, playSong }) {
  console.log(track);

  return (
    <div className="song__row" onClick={() => playSong(track.id)}>
      <img className="songrow__album" src={track.album.images[0].url} alt="" />
      <div className="song__row-info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map(artist => artist.name).join(",")} -{","}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
