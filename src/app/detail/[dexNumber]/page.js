import Detail from "@/components/detail/Detail";

export const metadata = {
  title: '팰 | 8World',
  description: '팰의 정보를 확인할 수 있습니다.',
};

export default function Page({ params }) {
  const { dexNumber } = params;
 
  return (
    <main>
      <Detail dexNumber={dexNumber} />
    </main>
  );
}
