import { distanceInWords } from 'date-fns';

export default function Table({ scrapes }) {
  const scrapedReversed = [...scrapes].reverse();
  return (
    <table>
      <thead>
        <tr>
          <td>Count</td>
          <td>Time</td>
        </tr>
      </thead>
      <tbody>
        {scrapedReversed.map(scrape => (
          <tr key={scrape.date}>
            <td>{scrape.count}</td>
            <td>{distanceInWords(new Date(), new Date(scrape.date))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
