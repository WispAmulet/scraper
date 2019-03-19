import axios from 'axios';
import cheerio from 'cheerio';
import db from './db';

// const test = 'https://wispamulet.github.io/js30-practice/';
// const twUrl = 'https://twitter.com/wesbos';
// const igUrl = 'https://instagram.com/wesbos';
const ngaUrl = 'http://nga.178.com/';

export async function getHTML(url) {
  try {
    const { data: html } = await axios.get(url);
    return html;
  } catch (error) {
    console.log(error);
  }
}

export async function getData(html) {
  const $ = cheerio.load(html);
  const info = $('.bbsinfo').find('.xtxt');
  const { '0': online, '1': members, '2': visitors } = info;
  const { data: onlineCount } = online.children[0];
  const { data: membersCount } = members.children[0];
  const { data: visitorsCount } = visitors.children[0];
  return {
    onlineCount,
    membersCount,
    visitorsCount,
  };
}

export async function getCount() {
  const html = await getHTML(ngaUrl);
  const data = await getData(html);
  return data;
}

export async function runCron() {
  const count = await getCount();
  db.get('online')
    .push({
      date: Date.now(),
      count: count.onlineCount,
    })
    .write();
  db.get('members')
    .push({
      date: Date.now(),
      count: count.membersCount,
    })
    .write();
  db.get('visitors')
    .push({
      date: Date.now(),
      count: count.visitorsCount,
    })
    .write();
}
