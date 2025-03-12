// Dynamic Post Submission
document.getElementById('post-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const postContent = document.getElementById('post-content').value;

  if (postContent.trim() !== '') {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `<p>${postContent}</p>`;
    document.querySelector('.posts-container').appendChild(postElement);
    document.getElementById('post-content').value = '';
  }
});