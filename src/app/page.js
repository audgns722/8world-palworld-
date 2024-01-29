"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");
  const [selectedPal, setSelectedPal] = useState(null);
  const name = {
    Lamball: "도로롱",
    Cattiva: "까부냥",
    Chikipi: "꼬꼬닭",
    Lifmunk: "큐룰리스",
    Foxparks: "파이호",
    Fuack: "청부리",
    Sparkit: "번개냥",
    Tanzee: "몽지",
    Rooby: "불꽃밤비",
    Pengullet: "펭키",
    Penking: "펭킹",
    Jolthog: "찌릿도치",
    "Jolthog Cryst": "코치도치",
    Gumoss: "초롱이",
    "Gumoss (Special)": "초롱이",
    Vixy: "미호",
    Hoocrates: "아테노울",
    Teafant: "차코리",
    Depresso: "뚱코알라",
    Cremis: "밀피",
    Daedream: "몽마둥이",
    Rushoar: "돌진돼지",
    Nox: "루나티",
    Fuddler: "두더비",
    Killamari: "고스문",
    Mau: "냐옹테트",
    "Mau Cryst": "칠테트",
    Celaray: "루미카이트",
    Direhowl: "다크울프",
    Tocotoco: "알록새",
    Flopie: "토푸리",
    Mozzarina: "밀카우",
    Bristla: "가시공주",
    Gobfin: "샤키드",
    "Gobfin Ignis": "샤맨더",
    Hangyu: "건다리",
    "Hangyu Cryst": "유령건다리",
    Mossanda: "초판다",
    "Mossanda Lux": "썬더판다",
    Woolipop: "캔디쉽",
    Caprity: "베리고트",
    Melpaca: "멜파카",
    Eikthyrdeer: "신령사슴",
    "Eikthyrdeer Terra": "산령사슴",
    Nitewing: "나이트윙",
    Ribunny: "핑토",
    Incineram: "헬고트",
    "Incineram Noct": "어비스고트",
    Cinnamoth: "귀요비",
    Arsox: "불페르노",
    Dumud: "도도롱",
    Cawgnito: "마스크로우",
    Leezpunk: "도마맨",
    "Leezpunk Ignis": "칠리자드",
    Loupmoon: "달서니",
    Galeclaw: "질풍수리",
    Robinquill: "로빈몽",
    "Robinquill Terra": "산도로",
    Gorirat: "고릴레이지",
    Beegarde: "비나이트",
    Elizabee: "퀸비나",
    Grintale: "소름냥이",
    Swee: "모프링",
    Sweepa: "모프킹",
    Chillet: "베비뇽",
    Univolt: "썬더콘",
    Foxcicle: "빙호",
    Pyrin: "파이린",
    "Pyrin Noct": "사라블랙",
    Reindrix: "마호",
    Rayhound: "썬도그",
    Kitsun: "불이리",
    Dazzi: "썬더키드",
    Lunaris: "루나리스",
    Dinossom: "플로라디노",
    "Dinossom Lux": "찌르르디노",
    Surfent: "씨무기",
    "Surfent Terra": "스너펜트",
    Maraith: "고스호스",
    Digtoise: "드릴북이",
    Tombat: "냥뱃",
    Lovander: "핑크뇽",
    Flambelle: "라비",
    Vanwyrm: "버드래곤",
    "Vanwyrm Cryst": "시로카바네",
    Bushi: "불무사",
    Beakon: "라이버드",
    Ragnahawk: "적토조",
    Katress: "캐티메이지",
    Wixen: "마호",
    Verdash: "초토리",
    Vaelet: "비오레타",
    Sibelyx: "실키누",
    Elphidran: "실피아",
    "Elphidran Aqua": "실티아",
    Kelpsea: "켈시",
    "Kelpsea Ignis": "마그피스",
    Azurobe: "아주리비",
    Cryolinx: "백랑이",
    Blazehowl: "만티파이어",
    "Blazehowl Noct": "시니에노",
    Relaxaurus: "헤로롱",
    "Relaxaurus Lux": "핑피롱",
    Broncherry: "라브라돈",
    "Broncherry Aqua": "스프라돈",
    Petallia: "플로리나",
    Reptyro: "불카노",
    "Ice Reptyro": "프로스카노",
    Kingpaca: "킹파카",
    "Ice Kingpaca": "블루파카",
    Mammorest: "그린모스",
    "Mammorest Cryst": "블리자모스",
    Wumpo: "움포",
    "Wumpo Botan": "트로피티",
    Warsect: "장수벌레",
    Fenglope: "윈드디어",
    Felbat: "블러드캐티",
    Quivern: "페스키",
    Blazamut: "마그마카이저",
    Helzephyr: "헬가루다",
    Astegon: "라바드래곤",
    Menasting: "데스스팅",
    Anubis: "아누비스",
    Jormuntide: "레비드라",
    "Jormuntide Ignis": "아그니드라",
    Suzaku: "주작",
    "Suzaku Aqua": "시바",
    Grizzbolt: "일렉판다",
    Lyleen: "릴린",
    "Lyleen Noct": "루나퀸",
    Faleris: "호루스",
    Orserk: "전룡맨",
    Shadowbeak: "제노그리프",
    Paladius: "팔라디우스",
    Necromus: "켄타나이트",
    Frostallion: "빙천마",
    "Frostallion Noct": "그레이섀도우",
    Jetragon: "제트래곤",
  }

  useEffect(() => {
    // JSON 파일을 불러옵니다.
    fetch('/pals.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Failed to fetch data:', error);
      });
  }, [setSelectedPal]);

  // 팰을 필터링하는 함수
  const filteredData = data && data.filter((item) => {
    const koreanName = name[item.name];
    return item.name.includes(value) || (koreanName && koreanName.includes(value));
  });

  const handlePalClick = (pal) => {
    setSelectedPal(pal);
  };

  return (
    <main id='main' className='home'>
      <div className="container home__inner">
        <div className="home__title">
          <h1>Palworld</h1>
        </div>
        {data && (
          <>
            <div className="home__search">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='검색할 팰의 이름을 적어주세요.'
              />
              {value && (
                <ul className="home__searchDrop">
                  {filteredData.map((item) => (
                    <li key={item.name} onClick={() => handlePalClick(item)}>
                      <p>{item.name}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {selectedPal && (
              <div className="card">
                <div className="card__top">
                  <div className="card__left">
                    <div className="left__top">
                      <div className="key">
                        <i>No.</i>{selectedPal.key}
                      </div>
                      <p className="neutral">{selectedPal.types}</p>
                    </div>
                    <h3 className="name">
                      {selectedPal.name}
                    </h3>
                  </div>

                  <div className="card__right">
                    <Image src={selectedPal.imageWiki} width={100} height={100} alt={selectedPal.name} />
                  </div>
                </div>
                <div className="card__bottom">
                  <div className="skill">
                    <h4>파트너 스킬</h4>
                    <div className="aura">
                      <h3>
                        {selectedPal.aura.name}
                      </h3>
                      <p>
                        {selectedPal.aura.description}
                      </p>
                    </div>
                  </div>
                  <div className='item'>
                    <h4>드롭하는 아이템</h4>
                    <ul>
                      {selectedPal.drops.map((item, index) => (
                        <li key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
