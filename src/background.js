window.addEventListener('scroll', function () {
  const bg = document.querySelector('.bg');
  const body = document.body;
  const html = document.documentElement;
  const windowHeight = window.innerHeight;
  const docHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  if (window.pageYOffset + windowHeight >= docHeight) {
    body.style.overflow = 'visible'; // Allow scrolling beyond the end
    bg.style.animationIterationCount = 'infinite'; // Set animation to infinite
  } else {
    body.style.overflow = 'hidden'; // Hide scrolling beyond the end
    bg.style.animationIterationCount = '1'; // Set animation to run once
  }
});
