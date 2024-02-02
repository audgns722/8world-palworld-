import Breeding from "@/components/breeding/Breeding";

export const metadata = {
  title: '교배 - 8World',
  description: '팰의 교배 결과를 미리 확인할 수 있습니다.',
};

export default function page() {
  return (
    <main id='main' className='breeding container'>
      <div className="breeding__inner">
        <div className="breeding__title">
          <h2>8Worl:D</h2>
        </div>
        <Breeding />
      </div>
    </main>
  )
}
