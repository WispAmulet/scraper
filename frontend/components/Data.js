import { useContext } from 'react';
import { ScrapeContext } from './ScrapeContext';
import Chart from './Chart';
// import Table from './Table';

export default function Data() {
  const { scrapes, fetchScrapes } = useContext(ScrapeContext);
  // console.log(scrapes);

  return (
    <div>
      <button type="button" onClick={fetchScrapes}>
        Refresh
      </button>
      <h2>Online Data:</h2>
      <Chart data={scrapes.online} />
      <h2>Members Data:</h2>
      <Chart data={scrapes.members} />
      <h2>Visitors Data:</h2>
      <Chart data={scrapes.visitors} />
    </div>
  );
}
