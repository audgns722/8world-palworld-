import Collection from '@/components/collection/Collection';

export const metadata = {
  title: '팰월드 도감 - 8World',
  description: '팰 이름이나 도감 번호를 검색해서 정보를 확인할 수 있습니다.',
};

export default function Page() {
  return (
    <main id="main" role='main'>
      <Collection />
    </main>
  );
}
