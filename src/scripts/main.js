'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const x = e.clientX - wallRect.left;
  const y = e.clientY - wallRect.top;

  if (x < 0 || y < 0 || x > wallRect.width || y > wallRect.height) {
    return;
  }

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  const newX = Math.max(
    0,
    Math.min(x - wall.clientLeft - spiderRect.width / 2, maxX),
  );
  const newY = Math.max(
    0,
    Math.min(y - wall.clientTop - spiderRect.height / 2, maxY),
  );

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
