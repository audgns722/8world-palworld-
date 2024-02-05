import Detail from "@/components/detail/Detail";

export const metadata = {
  title: '팰월드 정보 - 8World',
  description: '팰 정보를 확인할 수 있습니다.',
};

export default function Page({ params }) {
  const { dexNumber } = params;
 
  return (
    <main id="main" role="main">
      <Detail dexNumber={dexNumber} />
    </main>
  );
}
