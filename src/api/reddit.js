// Dependencies
import { v4 as uuid } from "uuid";

/////////////////////////////////////////////////////////////////////////////////

// Variables for Reddit API
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const TYPE = "code";
let STATE = localStorage.getItem("STATE");
const URI = "http://localhost:5173";
const DURATION = "temporary";
const SCOPE = "identity";

/////////////////////////////////////////////////////////////////////////////////

// Variables from returned URL
const URL = window.location.href;
//
let CODE = URL.match(/code=([^&]*)/);
if (CODE) {
  CODE = CODE[1].slice(0, -2);
}
//
let RETURNED_STATE = URL.match(/state=([^&]*)/);
if (RETURNED_STATE) {
  RETURNED_STATE = RETURNED_STATE[1];
}
//
let ERROR = URL.match(/error=([^&]*)/);
if (ERROR) {
  ERROR = ERROR[1];
}
//

/////////////////////////////////////////////////////////////////////////////////

// Variables
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

/////////////////////////////////////////////////////////////////////////////////

// Auth URL
export const auth_URL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${TYPE}&state=${STATE}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE}`;

if (!STATE) {
  localStorage.setItem("STATE", uuid());
} else {
  localStorage.getItem("STATE");
}

/////////////////////////////////////////////////////////////////////////////////

// Reddit methods
export const Reddit = {
  async getAccessToken() {
    const url = "https://www.reddit.com/api/v1/access_token/";
    const params = `grant_type=authorization_code&code=${CODE}&redirect_uri=${URI}`;
    const headers = {
      Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
      "content-type": "application/x-www-form-urlencoded",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: params,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      console.log(error);
    }

    history.replaceState("", "", "/");
  },

  async getMe() {
    const url = "https://oauth.reddit.com/api/v1/me";
    const token = await this.getAccessToken();
    const headers = {
      Authorization: `bearer ${token.access_token}`,
    };

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: headers,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  },
};
