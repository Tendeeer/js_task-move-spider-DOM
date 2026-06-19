'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const x = e.clientX - wallRect.left;
  const y = e.clientY - wallRect.top;

  if (x < 0 || y < 0 || x > wallRect.width || y > wallRect.height) {
    return;
  }

  let newTop =
    e.clientY - wallRect.top - wall.clientTop - spiderRect.height / 2;
  let newLeft =
    e.clientX - wallRect.left - wall.clientLeft - spiderRect.width / 2;

  const maxTop = wall.clientHeight - spider.clientHeight;
  const maxLeft = wall.clientWidth - spider.clientWidth;

  newTop = Math.max(0, Math.min(newTop, maxTop));
  newLeft = Math.max(0, Math.min(newLeft, maxLeft));

  spider.style.top = `${newTop}px`;
  spider.style.left = `${newLeft}px`;
});
