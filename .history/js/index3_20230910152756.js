var textDiv = document.getElementById('textDiv');
var texts = ['晚上好，中医问诊AI小助手——灵灵。',
  '晚上好，这么晚了，主人怎么还没有休息？',
  '我又失眠了，我的安眠药也吃完了，怎么都睡不着。不是你说可以帮助我的吗？',
  '我通过全网查询得到以下诸多方法治疗失眠，你可以诉说你的需求进行筛选',
  '好的，已为你进行筛选',
  '好的，已为你再次筛选',
  '好的，其中的针灸并不痛']; 
var currentTextIndex = -1;
var currentText = "";
var originalBackgroundColor = "lightblue";
var originalColor = "black";

function showNextText() {
  document.body.style.overflow = 'hidden';
  if (currentTextIndex < texts.length - 1) {
    var endMarker = document.getElementById('endMarker');
    endMarker.style.display = 'none';
    currentTextIndex++;
    currentText = texts[currentTextIndex];
    var i = 0;
    textDiv.innerHTML = ""; // 清空文字内容

    var typing = setInterval(function() {
      if (i < currentText.length) {
        var span = document.createElement("span");
        span.textContent = currentText.charAt(i);
        if (currentTextIndex % 2 === 0 && currentTextIndex <= texts.length -5) {
          span.style.color = "white"; //改变字体颜色
          textDiv.style.backgroundColor = "#122648"; // 改变背景颜色
          textDiv.style.color = originalColor; // 设置字体颜色
        } else {
          span.style.color = originalColor; // 恢复字体颜色
          textDiv.style.backgroundColor = originalBackgroundColor; // 恢复背景颜色
        }
        
        textDiv.appendChild(span);
        i++;
        if (currentTextIndex === 3) {
          var chosenDiv = document.getElementById('chosenDiv');
          chosenDiv.style.display = 'block';
        }

//遮罩层
        
        if (currentTextIndex === texts.length) {
          const overlay = document.querySelector('#overlay');
          textDiv.addEventListener('click', () => {
            overlay.style.display = 'flex';
            textDiv.style.display = 'none'; // 隐藏textDiv
            endMarker.style.display = 'none';
          });  
        }else {
          return;
          }

//句末三角
         if (i === currentText.length) {
          var endMarker = document.getElementById('endMarker');
          endMarker.style.display = 'block';
        }
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


 $(function () {
            $('.btn').on('click', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('.bgsqr1').css({
                    top: relY,
                    left: relX
                });
            });
        });