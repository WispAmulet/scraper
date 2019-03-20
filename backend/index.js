import express from 'express';
import cors from 'cors';
import { getCount } from './lib/scraper';
import db from './lib/db';
import './lib/cron';

const app = express();
app.use(cors());

app.get('/scrape', async (req, res, next) => {
  console.log('Scraping!!!');
  const count = await getCount();
  res.json(count);
});

app.get('/data', async (req, res, next) => {
  const count = db.value();
  res.json(count);
});

const listener = app.listen(2093, () => {
  console.log(
    `App is running on PORT http://localhost:${listener.address().port}`
  );
});
