const chatBubbles = document.querySelectorAll('.chat-bubble');
const nextButton = document.getElementById('next-button');
let currentBubbleIndex = 0;

nextButton.addEventListener('click', () => {
  chatBubbles[currentBubbleIndex].classList.remove('show');
  currentBubbleIndex++;
  
  if (currentBubbleIndex >= chatBubbles.length) {
    currentBubbleIndex = 0; // 如果已经显示了所有气泡，则重新从第一个开始显示
  }
  
  chatBubbles[currentBubbleIndex].classList.add('show');
});
