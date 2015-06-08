var ws_ip = "169.254.240.191";
var ws_port = "8787";
var lURL = "ws://" + ws_ip + ":" + ws_port + "/jWebSocket/jWebSocket";
var lWSC = new jws.jWebSocketJSONClient();
console.log("websocket server is : " + lURL);

lWSC.logon( lURL, "LG_DTV", "LG_DTV", {
  OnOpen: function( aEvent ) {
    console.log("websocket server is connected");
  },
	OnMessage: function( aEvent, aToken ) {
	  if( aToken ) {
	    if( aToken.type == "response" ) {
	    }
	    else if( aToken.type == "event" ) {
	    }
	    else if( aToken.type == "goodBye" ) {
	    }
	    else if( aToken.type == "broadcast" ) {
	      if( aToken.sender == "LG_IDE") {
	        InspectorFrontendHost.sendMessageToBackend(aToken.data);
	      }
			}
		}
	},
	OnClose: function( aEvent ) {
	  lWSC.stopKeepAlive();
	}
});
