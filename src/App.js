import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
import { scryRenderedDOMComponentsWithTag } from "react-dom/test-utils";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    //code...

    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      });

      spotify.setAccessToken(_token); //Give your access key to spotify to allow all acess
      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user
        });
      });

      spotify.getMyTopArtists().then(response => {
        dispatch({
          type: "SET_TOP_ARTIST",
          top_artists: response
        });
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify
      });

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });

      spotify.getPlaylist("0GB9chRwz1EI9MkT3BjfbO").then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        });
      });
    }
  }, [token, dispatch]);

  //Discover Weekly :0GB9chRwz1EI9MkT3BjfbO

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

//ff3cc8e3c4184180894b469f09e46447;ClientId;
