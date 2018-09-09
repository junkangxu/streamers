function getContent() {
  return getContentData().map(item => createCard());
}

function getContentData() {
  return ["Saab", "Volvo", "BMW"];
}

function createCard() {
  var roomId = '123';
  var roomName = 'testRoomName';
  var streamerName = 'testStreamerName';
  var viewer = '10K';  
  return `<div class="card">
            <div class="container">
              <p>
                <b>${roomName}</b>
              </p>
              <p class="streamerName">
                ${streamerName}
                <span class="viewer">${viewer}</span>
              </p>
            </div>
          </div>`;
}
