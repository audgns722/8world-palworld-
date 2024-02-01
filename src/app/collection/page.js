import Collection from '@/components/collection/Collection';

export const metadata = {
  title: '도감 | 8World',
  description: '팰의 이름이나 번호를 검색해서 정보를 확인할 수 있습니다.',
};


export default function Page() {
  return (
    <>
      <main id='main'>
        <Collection />
      </main>
    </>
  );
}
