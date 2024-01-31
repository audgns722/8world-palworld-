import Collection from '@/components/collection/Collection';
import MetaHead from '@/components/layout/MetaHead';

export default function Page() {
  return (
    <>
      <MetaHead title='도감' />
      <main id='main'>
        <Collection />
      </main>
    </>
  );
}
