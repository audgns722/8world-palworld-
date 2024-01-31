import MetaHead from '@/components/layout/MetaHead';
import Search from '@/components/main/Search';

export default function Home() {

  return (
    <>
      <MetaHead title='홈' />
      <main id='main' className='home container'>
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