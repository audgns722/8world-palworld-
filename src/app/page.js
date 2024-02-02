
import Search from '@/components/main/Search';

export default function Home() {
  return (
    <>
      <main id="main" className="home container" role="main">
        <div className="home__inner">
          <div className="home__title">
            <h2>8Worl:D</h2>
          </div>
          <Search />
        </div>
      </main>
    </>
  );
}
