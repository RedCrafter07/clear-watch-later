function timeout(time) {
  return new Promise((resolve) => setTimeout(() => resolve(), time));
}

async function recClear() {
  while (true) {
    const items = document.querySelectorAll('ytd-playlist-video-renderer');
    if (items.length === 0) break;
    await clear(items);
  }
}

async function clear(items) {
  for await (const e of items) {
    await timeout(1000);
    clearOne(e);
  }
}

async function clearOne(e) {
  e.querySelector('#button').click();
  await timeout(100);

  document
    .querySelector(
      '#items > ytd-menu-service-item-renderer:nth-child(3) > tp-yt-paper-item',
    )
    .click();
}

recClear();
