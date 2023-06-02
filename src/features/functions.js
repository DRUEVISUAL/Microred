//Extracting the code from the returned url, used for requesting access token
export function extractCodeFromURL() {
  if (window.location.search.indexOf("code=") > -1) {
    const url = window.location.search;
    const code = url.match(/code=([^&]*)/);
    return code[1];
  }
}

export function extractErrorFromURL() {
  if (window.location.search.indexOf("error=") > -1) {
    const url = window.location.search;
    const error = url.match(/error=([^&]*)/);
    return error[1];
  }
}

//Used for verify the authorization process
export function extractStateFromURL() {
  if (window.location.search.indexOf("state=") > -1) {
    const url = window.location.search;
    const state = url.match(/state=([^&]*)/);
    return state[1];
  }
}

//Checking if the state is the same as of the beginning of the authorization process
export function checkStateMatch(sent_state, returned_state) {
  if (sent_state === returned_state) {
    return true;
  } else {
    return false;
  }
}

//Removing the parameters from the url and leaving just the origin host path
export function removeParamsFromURL() {
  window.history.pushState(null, "", window.location.origin);
}
