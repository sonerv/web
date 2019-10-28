let ws = new WebSocket("ws://localhost:590")

tinyMCE.init({
  selector: "div",
  plugins: ["fullscreen"],
  setup: function(editor) {
    editor.on("init", function() {
      setTimeout(function() {
          editor.execCommand("mceFullScreen")
      }, 0);
    });
    ws.onmessage = function(message) {
      document.activeElement.blur();
      editor.setContent(message.data);
    }
    function sendDocument() {
      ws.send(editor.getContent());
    }
    editor.on("keyup", sendDocument);
    editor.on("change", sendDocument);
  }
});
