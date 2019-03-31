test('should register players', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await page.goto('http://localhost:3000');
  await page.type('[data-hook="p1-input"]', player1);
  await page.type('[data-hook="p2-input"]', player2);
  await page.click('[data-hook="new-game"]');
  expect(await page.$eval('[data-hook="p1-title"]', el => el.innerText)).toBe(
    player1
  );
  expect(await page.$eval('[data-hook="p2-title"]', el => el.innerText)).toBe(
    player2
  );
});
