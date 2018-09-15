function getContent() {
  return getContentData().then(data => {
    return data.map(item => {
      return createCard(item);
    });
  });
}

function getContentData() {
  var roomIds = ["74960", "9999"];
  return getFromDouyu(roomIds);
}

function createCard(item) {
  return `<div class="card">
            <div class="container">
              <p>
                <b>${item.roomName}</b>
              </p>
              <p class="streamerName">
                ${item.streamerName}
                <span class="viewer">${item.viewer}</span>
              </p>
            </div>
          </div>`;
}
