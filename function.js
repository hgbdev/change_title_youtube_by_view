const axios = require("axios");
const ID_VIDEO = "5PWDJMHwsD0";
const API_KEY = "API Key";
const URL_GET_VIEW =
  "https://www.googleapis.com/youtube/v3/videos?part=statistics";
const URL_PUT_TITLE =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatus%2Clocalizations";

const getView = (access_token) => {
  return axios({
    method: "GET",
    url: `${URL_GET_VIEW}&id=${ID_VIDEO}&key=${API_KEY}`,
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
    },
  });
};

const putTitle = (access_token, view) => {
  if (view)
    return axios({
      method: "PUT",
      url: `${URL_PUT_TITLE}&id=${ID_VIDEO}&key=${API_KEY}`,
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: "application/json",
      },
      data: {
        id: `${ID_VIDEO}`,
        snippet: {
          categoryId: 22,
          title: `Video này có ${view} lượt xem | HuynhGiaBoi`,
        },
      },
    });
  return "View ERR!";
};

exports.getView = getView;
exports.putTitle = putTitle;
