function showContent(selectedOption) {
  var responseMap = {
    "请您把手伸出来": "这就是传说中的中医把脉",
    "你这个失眠应该有挺长时间了吧，主要什么症状，做梦多不多？": "挺长时间了，睡不着，梦有点多",
    "这属于中医中的心肝火旺，趴下来吧，躺好": "谢谢医生"
  };
  
  var response = responseMap[selectedOption];

  if (response) {
    var conversation = document.getElementById("conversation");

    // 创建用户气泡元素
    var userBubble = document.createElement("div");
    userBubble.className = "bubble left-bubble";
    userBubble.innerHTML = `
      <p>中医:</p>
      <p></p>
    `;
    conversation.appendChild(userBubble);

    // 将用户回答逐字显示
    var j = 0;
    var showUserResponse = setInterval(function() {
      if (j < selectedOption.length) {
        userBubble.getElementsByTagName("p")[1].innerText += selectedOption.charAt(j);
        j++;
      } else {
        clearInterval(showUserResponse);

        // 创建机器人气泡元素  
        var botBubble = document.createElement("div");
        botBubble.className = "bubble right-bubble";
        botBubble.innerHTML = `
          <p>我:</p>
        `;
        conversation.appendChild(botBubble);

        // 将回答逐字显示
        var i = 0;
        var showResponse = setInterval(function() {
          if (i < response.length) {
            botBubble.innerHTML += response.charAt(i);
            i++;
          } else {
            clearInterval(showResponse);
           
            // 将页面滚动到底部
            conversation.scrollTop = conversation.scrollHeight;

            // 30秒后跳转到下一页
            setTimeout(function() {
              window.location.href = "zhenjiu.html"; // 将"next_page.html"替换为您要跳转的页面URL
            }, 11000);
          }
        }, 90);
      }
    }, 90);

    // 禁用已选择的按钮
    var selectedButton = document.querySelector(".option-button[data-option='" + selectedOption + "']");
    selectedButton.disabled = true;
    selectedButton.classList.add("disabled");
  }
}