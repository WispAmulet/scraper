import axios from 'axios';
import cheerio from 'cheerio';

export async function getHTML(url) {
  console.log('run!');
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
