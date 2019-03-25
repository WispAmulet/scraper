import { useEffect, useState } from 'react';
import { ScrapeProvider } from './ScrapeContext';

// Custom Hook!
function useScrapes() {
  // initial state inside our hook
  const [scrapes, setScrapes] = useState({
    online: [],
    members: [],
    visitors: [],
  });
  // fetch function
  async function fetchScrapes() {
    // console.log('Mounting or Updating!');
    const res = await fetch('http://localhost:2093/data');
    const data = await res.json();
    // console.log(data);
    setScrapes(data);
  }
  // didMount/didUpdate
  useEffect(() => {
    fetchScrapes();
  }, []);

  return { scrapes, fetchScrapes };
}

export default function Page({ children }) {
  const hook = useScrapes();
  return (
    <ScrapeProvider value={hook}>
      <div className="page">{children}</div>
    </ScrapeProvider>
  );
}
