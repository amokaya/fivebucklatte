/* (c) amokaya LLC 2018 */
var pubnub = new PubNub({
 	publish_key: 'pub-c-b9c4a1f2-884f-4792-86ea-9734aa3cec52',
        subscribe_key: 'sub-c-a0d2df6c-0360-11e5-bc83-0619f8945a4f'
  });
var xhr = new XMLHttpRequest();

function processRequest(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var response = JSON.parse(xhr.responseText);
        pubnub.publish({
          channel: 'bitcoin-feed',
          message: {
            eon: {
              'BitCoin': response.BTC.USD.toFixed(2)
            }
          }
        });
        pubnub.publish({
          channel: 'ether-feed',
          message: {
            eon: {
              'Ether': response.ETH.USD.toFixed(2)
            }
          }
        });
        pubnub.publish({
          channel: 'litecoin-feed',
          message: {
            eon: {
              'LiteCoin': response.LTC.USD.toFixed(2)
            }
          }
        });
    }
}

function mainApp() {
  setInterval(function(){
    xhr.open('GET', 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD', true)
    xhr.send();
    xhr.onreadystatechange = processRequest;
  }, 10000)
};
mainApp();
