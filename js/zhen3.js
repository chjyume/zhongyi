function showContent(selectedOption) {
    var responseMap = {
      "啊，这是什么，好香啊": "你闻得香味是中药里的佩兰和藿香，我们又加了酸枣仁和石菖蒲，所以对睡眠很有帮助",
      "还有这种功效？": "是的",
      "没想到今时今日我竟然会对一包芍药念念不忘": "我就知道你会喜欢的"
    };
    
    var response = responseMap[selectedOption];
  
    if (response) {
      var conversation = document.getElementById("conversation");
  
      // 创建用户气泡元素
      var userBubble = document.createElement("div");
      userBubble.className = "bubble left-bubble";
      userBubble.innerHTML = `
        <p>我:</p>
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
            <p>中医:</p>
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
                window.location.href = "zhnjiu.html"; // 将"next_page.html"替换为您要跳转的页面URL
              }, 40000);
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