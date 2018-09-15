const axios = require("axios");

// TODO: add methods to different streaming websites
// Right now, we only set up some static room name for information

const douyuUrlPrefix = "http://open.douyucdn.cn/api/RoomApi/room/";

function getDouyuEndpoints(roomIds) {
  return roomIds.map(id => douyuUrlPrefix + id);
}

function parseDouyuData(item) {
  return {
    roomName: item.room_name,
    streamerName: item.owner_name,
    viewer: item.online
  };
}

function getFromDouyu(roomId) {
  var endpoints = getDouyuEndpoints(roomId);
  return axios.all(endpoints.map(endpoint => axios.get(endpoint)))
      .then(results => getResponseData(results))
      .then(data => data.map(item => parseDouyuData(item)));  
}

function getResponseData(results) {
  return results.map(result => result.data.data);
}