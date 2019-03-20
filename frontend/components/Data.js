import { useContext } from 'react';
import { distanceInWords } from 'date-fns';
import { ScrapeContext } from './ScrapeContext';

export default function Data() {
  const { scrapes } = useContext(ScrapeContext);
  console.log(scrapes);
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ flex: '1' }}>
        <h2>Online Data:</h2>
        <ul>
          {scrapes.online.map(scrape => (
            <li key={scrape.date}>
              {scrape.count} -{' '}
              {distanceInWords(new Date(), new Date(scrape.date))}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: '1' }}>
        <h2>Members Data:</h2>
        <ul>
          {scrapes.members.map(scrape => (
            <li key={scrape.date}>
              {scrape.count} -{' '}
              {distanceInWords(new Date(), new Date(scrape.date))}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: '1' }}>
        <h2>Visitors Data:</h2>
        <ul>
          {scrapes.visitors.map(scrape => (
            <li key={scrape.date}>
              {scrape.count} -{' '}
              {distanceInWords(new Date(), new Date(scrape.date))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
