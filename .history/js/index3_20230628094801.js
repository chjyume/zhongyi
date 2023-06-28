var textDiv = document.getElementById('textDiv');
var texts = ['晚上好，这么晚了，你还不睡吗？','我是中医问诊AI小助手，我可以帮你找寻治疗失眠的方法', '通过全网查询得到以下诸多方法，你可以诉说你的需求进行筛选']; // 替换成你想显示的文字内容
var currentTextIndex = -1;
var currentText = "";

function showNextText() {
  if (currentTextIndex < texts.length - 1) {
    currentTextIndex++;
    currentText = texts[currentTextIndex];
    var i = 0;
    textDiv.innerHTML = ""; // 清空文字内容
    if (currentTextIndex % 2 === 0) {
      textDiv.classList.add("even"); // 添加 even 类名
    } else {
      textDiv.classList.remove("even"); // 移除 even 类名
    }
    var typing = setInterval(function() {
      if (i < currentText.length) {
        textDiv.innerHTML += currentText.charAt(i);
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