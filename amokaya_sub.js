/* (c) amokaya LLC 2016 */

      var pubnub = PUBNUB.init({
        publish_key: 'pub-c-b9c4a1f2-884f-4792-86ea-9734aa3cec52',
        subscribe_key: 'sub-c-a0d2df6c-0360-11e5-bc83-0619f8945a4f'
      });

      var channel1 = "combo-risk" + Math.random();
      var channel2 = "operations-risk" + Math.random();
      var channel3 = "markets-risk" + Math.random();
      var channel4 = "firmwide-risk" + Math.random();

      eon.chart({
        pubnub: pubnub,
        channel: channel1,
        history: true,
        debug: true,
        generate: {
          bindto: '#combo',
          data: {
      	    colors: {"Fixed Income":"#F9BF3B","Equities":"#1E824C","Equities derivatives":"#65C6BB","FX":"#F62459"},
      	    type: "area-spline",
            labels: true
          },
	  grid: {
      	    x: {
            	show: false 
      		},
      	    y: {
        	show: true 
      		}
    	   },
        }
      });

      eon.chart({
        pubnub: pubnub,
        channel: channel1,
        history: false,
        debug: true,
        generate: {
          bindto: '#combo-donut',
          data: {
      	    colors: {"Fixed Income":"#F9BF3B","Equities":"#1E824C","Equities derivatives":"#65C6BB","FX":"#F62459"},
      	    type: "donut",
            labels: false
          },
        }
      });


      eon.chart({
        pubnub: pubnub,
        channel: channel2,
        history: false,
        debug: true,
	limit: 3,
        generate: {
          bindto: '#operations',
          data: {
      	    colors: {"Operational Risk":"#f64747"},
            labels: true,
            type: 'area'
          },
	  grid: {
      	    x: {
            	show: false 
      		},
      	    y: {
        	show: true 
      		}
    	   },
          bar: {
            width: {
              ratio: 0.7
            }
          }
        }
      });

      eon.chart({
        pubnub: pubnub,
        channel: channel3,
        history: true,
        debug: true,
	rate: 1000,
	limit: 4,
        generate: {
          bindto: '#markets',
          data: {
      	    colors: {"Credit Risk":"#D70060","Market Risk":"#E54028"},
            labels: true,
            type: 'area-step'
          },
	  grid: {
      	    x: {
            	show: false 
      		},
      	    y: {
        	show: true 
      		}
    	   },
          bar: {
            width: {
              ratio: 0.7
            }
          },
	}
      });

      eon.chart({
    	pubnub: pubnub,
    	channel: channel4,
        history: false,
        debug: true,
    	generate: {
      	  bindto: '#speedo',
      	  data: {
        	type:'gauge'
      	  },
	  color: {
      		pattern: ['#00ff00', '#f89406', '#ff0000'],
      		threshold: {
        	values: [30, 60, 90]
      		}
    	  }
    	}
  });
