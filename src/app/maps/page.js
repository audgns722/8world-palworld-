import Maps from "@/components/maps/Maps";

export const metadata = {
  title: '맵 | 8World',
  description: '팰월드 정보를 확인할 수 있습니다.',
};

export default function Page() {
 
  return (
    <main id="main" role="main">
      <Maps />
    </main>
  );
}
