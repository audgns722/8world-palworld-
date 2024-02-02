import "../assets/sass/style.scss";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  generator: 'Next.js',
  applicationName: '8World',
  title: '팰월드 정보는 팔월드 - 8World',
  description: '팰월드, pallworld, 팔월드, 8world, 팰, pall, 교배, 도감, 정보, 지도를 검색을 통해서 쉽게 확인하세요.',
  siteName: '8World',
  keywords: ["팰월드", "팔월드", "palworld", "8world", "팰", "팔", "pal", "교배", "팰 교배", "팰 교배 계산기", "도감", "팰 도감", "지도", "팰월드 지도", "팰 지도", "정보", "팰월드 정보", "팰 정보", "팁", "공략", "도로롱", "까부냥", "꼬꼬닭", "큐룰리스", "파이호", "청부리", "번개냥", "몽지", "불꽃밤비", "펭키", "펭킹", "찌릿도치", "코치도치", "초롱이", "초롱이", "미호", "아테노울", "차코리", "뚱코알라", "밀피", "몽마둥이", "돌진돼지", "루나티", "두더비", "고스문", "냐옹테트", "칠테트", "루미카이트", "다크울프", "알록새", "토푸리", "밀카우", "가시공주", "샤키드", "샤맨더", "건다리", "유령건다리", "초판다", "썬더판다", "캔디쉽", "베리고트", "멜파카", "신령사슴", "산령사슴", "나이트윙", "핑토", "헬고트", "아비스고트", "귀요비", "불페르노", "도도롱", "마스크로우", "도마맨", "칠리자드", "달서니", "질풍수리", "로빈몽", "산도로", "고릴레이지", "비나이트", "퀸비나", "소름냥이", "모프링", "모프킹", "베비뇽", "썬더콘", "빙호", "파이린", "사라블랙", "마호", "썬도그", "불이리", "썬더", "키드", "루나리스", "플로라디노", "찌르르디노", "씨무기", "스너펜트", "고스호스", "드릴북이", "냥뱃", "핑크뇽", "라비", "버드래곤", "시로카바네", "불무사", "라이버드", "적토조", "캐티메이지", "마호", "초토리", "비오레타", "실키누", "실피아", "실티아", "켈시", "마그피스", "아주리비", "백랑이", "만티파이어", "시니에노", "헤로롱", "핑피롱", "라브라돈", "스프라돈", "플로리나", "볼카노", "프로스카노", "킹파카", "블루파카", "그린모스", "블리자모스", "움포", "트로피티", "장수벌레", "윈드디어", "블러드캐티", "페스키", "마그마", "카이저", "헬가루다", "라바드래곤", "데스", "스팅", "아누비스", "레비드라", "아그니드라", "주작", "시바", "일렉판다", "릴린", "루나퀸", "호루스", "전룡맨", "제노그리프", "팔라디우스", "켄타나이트", "빙천마", "그레이섀도우", "제트래곤"],
  authors: [{ name: 'Yun' }, { name: 'Lee' }],
  creator: [{ name: 'Yun' }, { name: 'Lee' }],
  publisher: [{ name: 'Yun' }, { name: 'Lee' }],
  formatDetection: {
    email: 'yunyoungsik91@gmail.com',
  },
  icons: {
    icon: 'favicon.svg',
  },
  metadataBase: new URL('https://8world.co.kr'),
  images: 'https://private-user-images.githubusercontent.com/144635640/301506173-1b60ec28-d99e-4d38-9356-c08e06bf02cd.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY3OTE0NDQsIm5iZiI6MTcwNjc5MTE0NCwicGF0aCI6Ii8xNDQ2MzU2NDAvMzAxNTA2MTczLTFiNjBlYzI4LWQ5OWUtNGQzOC05MzU2LWMwOGUwNmJmMDJjZC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwMVQxMjM5MDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMzY0NWFmODA5ZDZkMzhiMzQyMGU2NTdiMjQyYmQwZjE4MTA5MzkwMGZjYzlkNjVjY2JkYTAwMTZkYjkwNGY2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.nCUoL6xj1lEfh18ikO6U33EYeeVyE7yKHNm4nvudpMk',
  openGraph: {
    title: '팰월드 정보는 팔월드 - 8World',
    description: '팰월드, pallworld, 팔월드, 8world, 팰, pall, 교배, 도감, 정보, 지도를 검색을 통해서 쉽게 확인하세요.',
    url: 'https://8world.co.kr',
    siteName: '8World',
    images: 'https://private-user-images.githubusercontent.com/144635640/301506173-1b60ec28-d99e-4d38-9356-c08e06bf02cd.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY3OTE0NDQsIm5iZiI6MTcwNjc5MTE0NCwicGF0aCI6Ii8xNDQ2MzU2NDAvMzAxNTA2MTczLTFiNjBlYzI4LWQ5OWUtNGQzOC05MzU2LWMwOGUwNmJmMDJjZC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwMVQxMjM5MDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMzY0NWFmODA5ZDZkMzhiMzQyMGU2NTdiMjQyYmQwZjE4MTA5MzkwMGZjYzlkNjVjY2JkYTAwMTZkYjkwNGY2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.nCUoL6xj1lEfh18ikO6U33EYeeVyE7yKHNm4nvudpMk',
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
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    Yeti: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: '팰월드 정보는 팔월드 - 8World',
    description: '팰월드, pallworld, 팔월드, 8world, 팰, pall, 교배, 도감, 정보, 지도를 검색을 통해서 쉽게 확인하세요.',
    images: ['https://private-user-images.githubusercontent.com/144635640/301506173-1b60ec28-d99e-4d38-9356-c08e06bf02cd.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY3OTE0NDQsIm5iZiI6MTcwNjc5MTE0NCwicGF0aCI6Ii8xNDQ2MzU2NDAvMzAxNTA2MTczLTFiNjBlYzI4LWQ5OWUtNGQzOC05MzU2LWMwOGUwNmJmMDJjZC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwMVQxMjM5MDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMzY0NWFmODA5ZDZkMzhiMzQyMGU2NTdiMjQyYmQwZjE4MTA5MzkwMGZjYzlkNjVjY2JkYTAwMTZkYjkwNGY2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.nCUoL6xj1lEfh18ikO6U33EYeeVyE7yKHNm4nvudpMk'],
  },
  googleAdsenseAccount: "ca-pub-4313698984582740",
  naverSiteVerification: "fcd614bd3ce90c103241a9e028543a6294b80625",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html >
  );
}
