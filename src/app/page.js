import Search from '@/components/main/Search';

export const metadata = {
  title: '팰월드 정보를 검색을 통해서 쉽게 확인하세요. | 8World',
  description: '팰의 이름을 검색해서 정보를 확인할 수 있습니다.',
};

export default function Home() {
  return (
    <>
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