//逐句加载
var textDiv = document.getElementById('textDiv');
var texts = ['晚上好，中医问诊AI小助手——灵灵。',
  '晚上好，这么晚了，主人怎么还没有休息？',
  '我又失眠了，我的安眠药也吃完了，怎么都睡不着。不是你说可以帮助我的吗？',
  '我通过全网查询得到以下诸多方法治疗失眠，你可以诉说你的需求进行筛选',
  '我不想吃药了！',
  '好的，已为你进行筛选。',
  '我怕麻烦！',
  '好的，已为你再次筛选。',
  '我怕痛',
  '好的，其中的针灸并不痛',
  '那我可以尝试一下'
]; 
var dynamicTextDiv = document.getElementById('dynamicTextDiv');
var dynamicText = document.getElementById('dynamicText');
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
    dynamicText.textContent = currentTextIndex % 2 === 0 ? '男主' : '灵灵';
    var typing = setInterval(function() {
      if (i < currentText.length) {
        var span = document.createElement("span");
        span.textContent = currentText.charAt(i);
        if (currentTextIndex % 2 === 0 ) {
          span.style.color = "white"; //改变字体颜色
          textDiv.style.backgroundColor = "#122648"; // 改变背景颜色
          textDiv.style.color = originalColor; // 设置字体颜色
          dynamicText.style.color="white";
          dynamicTextDiv.style.backgroundColor = "#122648"; // 改变背景颜色
          dynamicTextDiv.style.color = originalColor; // 设置字体颜色
        } else {
          span.style.color = originalColor; // 恢复字体颜色
          textDiv.style.backgroundColor = originalBackgroundColor; // 恢复背景颜色
          dynamicTextDiv.style.backgroundColor = originalBackgroundColor;
           dynamicText.style.color = originalColor;
        }
        
        textDiv.appendChild(span);
        i++;

        //选项消除
        if (currentTextIndex === 3) {
          var chosenDiv = document.getElementById('chosenDiv');
          chosenDiv.style.display = 'block';
        }
          if (currentTextIndex === 5) {
          var text1 = document.getElementById('text1');
          text1.style.display = 'none';
        }
          if (currentTextIndex === 7) {
          var text2 = document.getElementById('text2');
          text2.style.display = 'none';
        }
      } else {
        clearInterval(typing);
      }
    }, 100);
  } else {
    return;
  }
  //遮罩层
        
        if (currentTextIndex === texts.length-1) {
          const overlay = document.querySelector('#overlay');
          textDiv.addEventListener('click', () => {
            overlay.style.display = 'flex';
            endMarker.style.display = 'none';
            textDiv.style.display = 'none'; // 隐藏textDiv
            dynamicTextDiv.style.display = 'none';
            chosenDiv.style.display = 'none';
          });  
          
        }else {
          return;
          }

}
textDiv.addEventListener('click', showNextText);

showNextText();

//按钮点击效果

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

 
var btn1 = document.getElementById("b1"); 
var jieshao1 = document.getElementById("jieshao1");
          var btn2 = document.getElementById("b2");
          var jieshao2 = document.getElementById("jieshao2");
          var btn3 = document.getElementById("b3");
          var jieshao3 = document.getElementById("jieshao3");

          // 当鼠标悬停在按钮上时显示div
          btn1.addEventListener("mouseover", function() {
            jieshao1.style.display = "block";
          });
          btn2.addEventListener("mouseover", function() {
            jieshao2.style.display = "block";
          });
          btn3.addEventListener("mouseover", function() {
            jieshao3.style.display = "block";
          });

          // 当鼠标离开按钮时隐藏div
          btn1.addEventListener("mouseout", function() {
            jieshao1.style.display = "none";
          });
          btn2.addEventListener("mouseout", function() {
            jieshao2.style.display = "none";
          });
          btn3.addEventListener("mouseout", function() {
            jieshao3.style.display = "none";
          });
