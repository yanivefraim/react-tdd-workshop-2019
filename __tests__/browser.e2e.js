function navigate() {
  return page.goto('http://localhost:3000');
}

async function newGame(player1, player2) {
  await page.type('[data-hook="p1-input"]', player1);
  await page.type('[data-hook="p2-input"]', player2);
  await page.click('[data-hook="new-game"]');
}

function getPlayer1Title() {
  return page.$eval('[data-hook="p1-title"]', el => el.innerText);
}

function getPlayer2Title() {
  return page.$eval('[data-hook="p2-title"]', el => el.innerText);
}

test('should register players', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();
  await newGame(player1, player2);
  expect(await getPlayer1Title()).toBe(player1);
  expect(await getPlayer2Title()).toBe(player2);
});
