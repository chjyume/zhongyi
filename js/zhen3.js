function showContent(selectedOption) {
    var responseMap = {
      "请您把手伸出来": "不是音乐治疗吗？怎么也要把脉",
      "音乐治疗也需要辩证，只有把中医的辩证论治和音乐治疗结合起来，才能取得更好的效果": "原来是这样啊",
      "从脉象来讲你是心肝火旺啊，所以建议一下你做音乐治疗，接下来去隔壁音乐治疗室，音乐治疗师会根据评估，给你做出一个专属的音乐治疗方案": "谢谢医生"
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