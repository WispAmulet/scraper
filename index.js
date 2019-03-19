import express from 'express';
import { getCount } from './lib/scraper';
import './lib/cron';

const app = express();

app.get('/scrape', async (req, res, next) => {
  console.log('Scraping!!!');
  const count = await getCount();

  res.json(count);
});

const listener = app.listen(2093, () => {
  console.log(`App is running on PORT ${listener.address().port}`);
});
