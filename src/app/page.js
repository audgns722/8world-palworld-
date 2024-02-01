import Search from '@/components/main/Search';

export const metadata = {
  generator: 'Next.js',
  applicationName: '8World',
  title: '8World',
  description: '팰월드 정보를 검색을 통해서 쉽게 확인하세요.',
  siteName: '8World',
  keywords: ["팰월드", "팔월드", "palworld", "팰", "팔", "pal", "도로롱", "까부냥", "꼬꼬닭", "큐룰리스", "파이호", "청부리", "번개냥", "몽지", "불꽃밤비", "펭키", "펭킹", "찌릿도치", "코치도치", "초롱이", "초롱이", "미호", "아테노울", "차코리", "뚱코알라", "밀피", "몽마둥이", "돌진돼지", "루나티", "두더비", "고스문", "냐옹테트", "칠테트", "루미카이트", "다크울프", "알록새", "토푸리", "밀카우", "가시공주", "샤키드", "샤맨더", "건다리", "유령건다리", "초판다", "썬더판다", "캔디쉽", "베리고트", "멜파카", "신령사슴", "산령사슴", "나이트윙", "핑토", "헬고트", "아비스고트", "귀요비", "불페르노", "도도롱", "마스크로우", "도마맨", "칠리자드", "달서니", "질풍수리", "로빈몽", "산도로", "고릴레이지", "비나이트", "퀸비나", "소름냥이", "모프링", "모프킹", "베비뇽", "썬더콘", "빙호", "파이린", "사라블랙", "마호", "썬도그", "불이리", "썬더", "키드", "루나리스", "플로라디노", "찌르르디노", "씨무기", "스너펜트", "고스호스", "드릴북이", "냥뱃", "핑크뇽", "라비", "버드래곤", "시로카바네", "불무사", "라이버드", "적토조", "캐티메이지", "마호", "초토리", "비오레타", "실키누", "실피아", "실티아", "켈시", "마그피스", "아주리비", "백랑이", "만티파이어", "시니에노", "헤로롱", "핑피롱", "라브라돈", "스프라돈", "플로리나", "볼카노", "프로스카노", "킹파카", "블루파카", "그린모스", "블리자모스", "움포", "트로피티", "장수벌레", "윈드디어", "블러드캐티", "페스키", "마그마", "카이저", "헬가루다", "라바드래곤", "데스", "스팅", "아누비스", "레비드라", "아그니드라", "주작", "시바", "일렉판다", "릴린", "루나퀸", "호루스", "전룡맨", "제노그리프", "팔라디우스", "켄타나이트", "빙천마", "그레이섀도우", "제트래곤"],
  authors: [{ name: 'Yun' }, { name: 'Lee'}],
  creator: [{ name: 'Yun'}, { name: 'Lee'}],
  publisher: [{ name: 'Yun'}, { name: 'Lee'}],
  formatDetection: {
    email: 'yunyoungsik91@gmail.com',
  },
  icons: {
    icon: 'favicon.svg',
  },
  metadataBase: new URL('https://8world.co.kr'),
  images: 'https://github.com/yunyoungsik/palworld/blob/main/public/image/thmbnail/8world.co.kr.png?raw=true',
  openGraph: {
    title: '8World',
    description: '팰월드 정보를 검색을 통해서 쉽게 확인하세요.',
    url: 'https://8world.co.kr',
    siteName: '8World',
    images: 'https://github.com/yunyoungsik/palworld/blob/main/public/image/thmbnail/8world.co.kr.png?raw=true',
    locale: 'ko_KR',
    type: 'website',
    type: 'article',
    publishedTime: '2024-01-31T00:00:00.000Z',
    authors: ['Yun', 'Lee'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: '8World',
    description: '팰월드 정보를 검색을 통해서 쉽게 확인하세요.',
    images: ['https://github.com/yunyoungsik/palworld/blob/main/public/image/thmbnail/8world.co.kr.png?raw=true'],
  },
  name: 'google-adsense-account',
  content: 'ca-pub-4313698984582740',
  name: 'naver-site-verification',
  content: 'fcd614bd3ce90c103241a9e028543a6294b80625',
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