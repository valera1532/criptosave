


document.querySelector('.live__chat-preview').addEventListener('click', function () {
  document.querySelector('.live__chat-content').classList.add('active');
document.querySelector('.live__chat-preview').classList.add('none');
})
document.querySelector('.live__chat-close').addEventListener('click', function () {
  document.querySelector('.live__chat-content').classList.remove('active');
document.querySelector('.live__chat-preview').classList.remove('none');
})




