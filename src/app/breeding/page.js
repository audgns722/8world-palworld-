import Breeding from "@/components/breeding/Breeding";

export const metadata = {
  title: '팰월드 교배 계산기 - 8World',
  description: '팰 교배 계산기(교배표)로 결과를 미리 확인할 수 있습니다.',
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
