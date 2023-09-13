function allowDrop(event) {
    event.preventDefault();
    event.target.classList.add("dragging-over"); /* 添加拖放过程中的样式 */
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    event.target.classList.remove("dragging-over"); /* 移除拖放过程中的样式 */

    var data = event.dataTransfer.getData("text");

    // 隐藏原位置的图片
    var originalImage = document.getElementById(data);
    originalImage.classList.add("hidden");

    // 在目标区域创建一个新的图片元素，并设置其属性
    var img = document.createElement("img");
    img.src = originalImage.src;

    // 将新的图片元素添加到目标区域中
    event.target.appendChild(img);
    
    // 显示中医图案
    var zhongyiImg = document.getElementById("zhongyi");
    zhongyiImg.style.display = "block";
}

function showBubbleAndImage() {
    var bubble1 = document.getElementById("bubble1"); // 获取第一个气泡
    var zhongyiImg = document.getElementById("zhongyi"); // 获取中医图案的img元素

    bubble1.classList.remove("hidden"); // 移除隐藏类名，显示第一个气泡
    zhongyiImg.style.display = "block"; // 显示"zhongyi.png"
}

function showSecondBubble() {
    var bubble1 = document.getElementById("bubble1"); // 获取第一个气泡
    var bubble2 = document.getElementById("bubble2"); // 获取第二个气泡

    bubble1.classList.add("hidden"); // 添加隐藏类名，隐藏第一个气泡
    bubble2.classList.remove("hidden"); // 移除隐藏类名，显示第二个气泡
}

function showThirdBubble() {
    var bubble2 = document.getElementById("bubble2"); // 获取第二个气泡
    var bubble3 = document.getElementById("bubble3"); // 获取第三个气泡

    bubble2.classList.add("hidden"); // 添加隐藏类名，隐藏第二个气泡
    bubble3.classList.remove("hidden"); // 移除隐藏类名，显示第三个气泡
}

function showFourthBubble() {
    var bubble3 = document.getElementById("bubble3"); // 获取第三个气泡
    var bubble4 = document.getElementById("bubble4"); // 获取第四个气泡

    bubble3.classList.add("hidden"); // 添加隐藏类名，隐藏第三个气泡
    bubble4.classList.remove("hidden"); // 移除隐藏类名，显示第四个气泡
}
        function goToNextPage() {
    window.location.href = "下一个页面的URL";
}