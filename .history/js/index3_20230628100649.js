var textDiv = document.getElementById('textDiv');
var texts = ['晚上好，中医问诊AI小助手——灵灵。','晚上好，这么晚了，你怎么还不睡吗？','我又失眠了，我睡不着，我的安眠药也吃完了。', '通过全网查询得到以下诸多方法，你可以诉说你的需求进行筛选']; // 替换成你想显示的文字内容
var currentTextIndex = -1;
var currentText = "";

function showNextText() {
    if (currentTextIndex < texts.length - 1) {
      currentTextIndex++;
      currentText = texts[currentTextIndex];
      var i = 0;
      textDiv.innerHTML = ""; // 清空文字内容
  
      var typing = setInterval(function() {
        if (i < currentText.length) {
          var span = document.createElement("span");
          span.textContent = currentText.charAt(i);
          if (currentTextIndex % 2 === 0) {
            span.style.color = "#122648"; // 设置字体颜色为黑色
            textDiv.style.backgroundColor = "#122648"; // 设置背景颜色
            textDiv.style.color = "#c0e3ff"; // 设置字体颜色为白色
          }
          textDiv.appendChild(span);
          i++;
        } else {
          clearInterval(typing);
        }
      }, 100);
    } else {
      return;
    }
  }
  
  textDiv.addEventListener('click', showNextText);
  
  showNextText();