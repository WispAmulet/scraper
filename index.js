import { getHTML, getData } from './lib/scraper';

// const test = 'https://wispamulet.github.io/js30-practice/';
const twUrl = 'https://twitter.com/wesbos';
const igUrl = 'https://instagram.com/wesbos';
const ngaUrl = 'http://nga.178.com/';

async function go() {
  const html = await getHTML(ngaUrl);
  const { onlineCount, membersCount, visitorsCount } = await getData(html);
  console.log(
    `There are ${onlineCount} users online, ${membersCount} members and ${visitorsCount} visitors.`
  );
}

go();
