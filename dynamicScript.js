function print(){
  console.log('i am added dynamically');
}

function addToDataLayer(event){
  window.dataLayer.push({
    localTime: (new Date()).toISOString(),
    activityUri: window.location.href,
    event: 'watch-it',
    eventType: event.type
  });
}

function attachListenersForGTM(){
  var htmlCollectionList = document.getElementsByTagName('video');
  for (var i = 0; i < htmlCollectionList.length ; i++){
    var videoElement = htmlCollectionList[i];
    videoElement.addEventListener("playing", addToDataLayer);
    videoElement.addEventListener("play", addToDataLayer);
    videoElement.addEventListener("pause", addToDataLayer);
  }
}

print();
attachListenersForGTM();

