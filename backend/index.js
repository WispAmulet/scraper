import express from 'express';
import cors from 'cors';
import { getCount } from './lib/scraper';
import db from './lib/db';
import { uniqueCount } from './lib/utils';
import './lib/cron';

const app = express();
app.use(cors());

app.get('/scrape', async (req, res, next) => {
  console.log('Scraping!!!');
  const count = await getCount();
  res.json(count);
});

app.get('/data', async (req, res, next) => {
  // get scrape data from db
  const { online, members, visitors } = db.value();
  // filter for only unique values
  const uniqueOnline = uniqueCount(online);
  const uniqueMembers = uniqueCount(members);
  const uniqueVisitors = uniqueCount(visitors);
  // respond with json
  res.json({
    online: uniqueOnline,
    members: uniqueMembers,
    visitors: uniqueVisitors,
  });
});

const listener = app.listen(2093, () => {
  console.log(
    `App is running on PORT http://localhost:${listener.address().port}`
  );
});
