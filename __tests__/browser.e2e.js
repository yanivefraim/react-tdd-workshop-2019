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

function clickACellAt(index) {
  return page.$$eval('td', (tds, _index) => tds[_index].click(), index);
}

function getACellAt(index) {
  return page.$$eval('td', (tds, _index) => tds[0].innerText, index);
}

function getWinnerMessage() {
  return page.$eval('[data-hook="winner"]', el => el.innerText);
}

async function hasWinner() {
  return !!(await page.$('[data-hook="winner"]'));
}

test('should register players', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();
  await newGame(player1, player2);
  expect(await getPlayer1Title()).toBe(player1);
  expect(await getPlayer2Title()).toBe(player2);
});

test('should show "X" after first click', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();
  await newGame(player1, player2);
  await clickACellAt(0);
  expect(await getACellAt(0)).toBe('X');
});

test('should win the game', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();
  await newGame(player1, player2);
  await clickACellAt(0);
  await clickACellAt(3);
  expect(await hasWinner()).toBe(false);
  await clickACellAt(1);
  await clickACellAt(4);
  await clickACellAt(2);

  expect(await getWinnerMessage()).toBe(`${player1} won!!!`);
});
