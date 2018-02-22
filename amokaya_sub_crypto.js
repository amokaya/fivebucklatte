/* (c) amokaya LLC 2016 */

var pubnub = new PubNub({
/*        publish_key: 'pub-c-b9c4a1f2-884f-4792-86ea-9734aa3cec52',*/
        subscribe_key: 'sub-c-a0d2df6c-0360-11e5-bc83-0619f8945a4f'
      });

// EON Charts configuration
		var pointLimit = 15;
		var topPadding = 100;
		var bottomPadding = 100;
		var eonData = {labels: true,type: 'line'};
		var eonAxis = {y: {padding: {top:topPadding, bottom:bottomPadding}},
									 x: {type: 'timeseries',tick: {format: '%H:%M:%S'}}};
		// Create the EON Chart for BitCoin and bind its div
		eon.chart({
		  channels: ['bitcoin-feed'],
		  history: true,
		  flow: true,
		  limit: pointLimit,
		  pubnub: pubnub,
		  generate: {
		    bindto: '#bitcoinChart',
		    data: eonData,
		    axis: eonAxis
		  }
		});
		// Create the Ether Chart for BitCoin and bind its div
		eon.chart({
		  channels: ['ether-feed'],
		  history: true,
		  flow: true,
		  limit: pointLimit,
		  pubnub: pubnub,
		  generate: {
		    bindto: '#etherChart',
		    data: eonData,
		    axis: eonAxis
			}
		});
 		// Create the LiteCoin Chart for BitCoin and bind its div
		eon.chart({
		  channels: ['litecoin-feed'],
		  history: true,
		  flow: true,
		  limit: pointLimit,
		  pubnub: pubnub,
		  generate: {
		    bindto: '#liteCoinChart',
		    data: eonData,
		    axis: eonAxis
		  }
});
