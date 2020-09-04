export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  top_artists: null,
  spotify: null
  //token:
  //"BQDg42lO10DPmOSLDC-iBdISpNgbvc0AFpCYXZGb6YxY5_XTwZ34IXAw-i60872JM21fgvPBWZZeRT9rILe2MjX0o_DUfDN612N2FsaWy6jkHoo-P1BffkTEqrSLCLx44eOKY9euYK-mGsBdyWkKYZZ8V1ZBI1MQNH5vcKaI8VbOmrER"
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly
      };

    default:
      return state;
  }
};

export default reducer;
