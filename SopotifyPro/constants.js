// constants.js
export const SCOPES = [
    'user-read-email',
    'user-library-read',
    'user-read-recently-played',
    'user-top-read',
    'playlist-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
  ];
  
  export const SPACE_DELIMITER = '%20';
  export const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);
  