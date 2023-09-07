function showContent(selectedOption) {
  var responseMap = {
      option1: "选项1的回答",
      option2: "选项2的回答",
      option3: "选项3的回答"
  };

  var response = responseMap[selectedOption];

  if (response) {
      var conversation = document.getElementById("conversation");

      var userBubble = document.createElement("div");
      userBubble.className = "bubble left-bubble";
      userBubble.innerHTML = "<p>" + selectedOption + "</p>";
      conversation.appendChild(userBubble);

      var botBubble = document.createElement("div");
      botBubble.className = "bubble right-bubble";
      conversation.appendChild(botBubble);

      // 将回答逐字显示
      var i = 0;
      var showResponse = setInterval(function() {
          if (i < response.length) {
              botBubble.innerHTML += response.charAt(i);
              i++;
          } else {
              clearInterval(showResponse);
          }
      }, 50);
  }
}