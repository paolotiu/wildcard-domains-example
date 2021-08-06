import SubdomainSwitcher from '@/components/SubdomainSwitcher';
import { getPageData } from '@/lib/getPageData';
import { useEffect, useState } from 'react';

export default function Home() {
  const [pageData, setPageData] = useState<string | null>();

  useEffect(() => {
    getPageData().then((res) => {
      setPageData(res);
    });
  }, []);

  if (typeof pageData === 'undefined') {
    return <p>Loading...</p>;
  }

  if (pageData === null) {
    return (
      <div className="mx-5 my-8">
        <h1 className="text-3xl font-bold">Go to a subdomain!</h1>

        <SubdomainSwitcher />
      </div>
    );
  }

  return (
    <div className="mx-5 my-8 text-3xl">
      <p>
        We are currently on subdomain:
        <span className="font-bold"> {pageData}</span>
      </p>

      <SubdomainSwitcher />
    </div>
  );
}
