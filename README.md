# 8World
<img style="width: 100%;" src="https://www.8world.co.kr/image/meta/8world.jpg" alt="8world.co.kr" />
8World는 Palworld API를 이용하여 Palworld 게임 이용자를 위한<br/>
팰 정보 및 도감, 교배 결과 예측, 맵 정보를 보여주는 웹사이트 입니다.
<br/>

- [www.8world.co.kr](https://www.8world.co.kr)
- [활용API](https://github.com/mlg404/palworld-paldex-api)
- [참고 사이트](https://paldex.io/)

## 팀원소개
|윤영식|이명훈|
|:---:|:---:|
|<img width="150px" src="https://avatars.githubusercontent.com/u/144635640?v=4" />|<img width="150px" src="https://avatars.githubusercontent.com/u/144664895?v=4">|

## 설치
<details>
<summary>Install</summary>
```
npm install papaparse
npm install @mui/material @emotion/react @emotion/styled
npm install @vercel/analytics
npm install csv-parser
npm install papaparse
npm install datatables.net-dt
npm install path
npm install sass
npm install @next/third-parties
npm install --save react-zoom-pan-pinch
```
</details>

## 기능소개
- 홈<br/>
  Palworld 게임의 팰 정보를 검색하고 표시합니다.<br/>
  1. 데이터 로딩 및 초기 설정: Palworld 게임 데이터를 JSON 파일에서 로드하여 상태에 저장합니다.
  2. 팰 필터링 및 검색 로직: 사용자가 입력한 검색어에 따라 팰을 필터링하고 검색 결과를 표시합니다.
  3. 이미지 경로 설정 함수: 속성 및 작업 적성에 따라 이미지 경로를 설정하는 함수를 정의합니다.
  4. 스킬 및 적성 클릭 처리: 사용자가 스킬 또는 작업 적성을 클릭하면 해당 항목의 활성화 상태를 변경합니다.
  5. 팰 정보 렌더링: 선택된 팰에 대한 상세 정보를 표시합니다. 이 정보에는 능력치, 스킬, 작업 적성, 드롭하는 아이템 등이 포함됩니다.
<br/>

- 도감<br/>
  Palworld 게임의 팰 정보를 표시합니다.<br/>
  1. 데이터 로딩 및 초기 설정: Palworld 게임의 캐릭터 정보를 API를 통해 가져와서 헤더와 데이터 상태를 설정합니다.
  2. 이미지 경로 및 렌더링 함수: 속성 및 이미지 경로를 설정하는 함수와 테이블 셀 내용을 렌더링하는 함수를 정의합니다.
  3. 정렬 기능 및 정렬된 데이터: 사용자가 열 머리글을 클릭하면 해당 열을 기준으로 데이터를 정렬합니다.
  4. 검색 기능: 사용자가 입력한 검색어에 따라 데이터를 필터링하여 표시합니다.
  5. 테이블 렌더링: 정렬 및 검색을 고려한 최종적인 데이터를 기반으로 테이블을 렌더링합니다.
<br/>

- 교배<br/>
  Palworld 게임에서 팰을 번식할 때 결과 값을 미리 확인할 수 있습니다. 주요 기능은 다음과 같습니다<br/>
  1. 초기에 /api/roadData 엔드포인트에서 데이터를 가져와 화면에 렌더링합니다.
  2. 사용자가 두 개의 팰을 선택하면, 선택된 팰들의 번식 결과를 계산하여 테이블에 표시합니다.
  3. 번식 결과에는 각 팰과 결과의 세부 정보 및 이미지가 포함되어 있습니다.
  4. 드롭다운 메뉴를 사용하여 팰을 선택하고, 번식 결과가 자동으로 업데이트됩니다.
<br/>

- 아이템<br/>
  Material-UI를 사용하여 Palworld 게임의 아이템 정보를 표시합니다. 주요 기능은 다음과 같습니다<br/>
  1. 데이터 로딩 및 초기 설정: 아이템 및 팰 데이터를 비동기적으로 로드하고, 로딩 중임을 나타내는 CircularProgress를 표시합니다.
  2. 타입 및 검색 필터링: 아이템을 타입에 따라 필터링하고, 검색어를 통해 아이템을 찾을 수 있도록 합니다.
  3. 타입 및 검색어에 따른 결과 렌더링: 선택된 타입 및 검색어에 따라 필터링된 아이템을 렌더링하여 화면에 표시합니다.
  4. Material-UI 스타일링: Material-UI의 Button 및 TextField 등을 사용하여 스타일링하고, 필요에 따라 테마를 커스터마이징합니다.
  5. 링크 및 이미지 표시: 각 아이템에 대한 세부 정보를 표시하는 페이지로의 링크를 추가하고, 아이템 이미지 및 팰 이미지를 표시합니다.
<br/>

- 맵<br/>
  react-zoom-pan-pinch 라이브러리를 사용하여 Palworld 게임의 팰의 지도 정보를 표시합니다. 주요 기능은 다음과 같습니다<br/>
  1. 데이터 로딩 및 초기 설정: 팰 데이터를 비동기적으로 로드하고, 선택된 팰의 야행성에 따라 해당하는 지도 이미지를 표시합니다.
  2. 팰 필터링 및 검색: 입력된 검색어에 따라 팰을 필터링하고, 검색 결과를 표시합니다.
  3. 야행성 선택: DAY 또는 NIGHT 중 선택할 수 있는 셀렉트 박스를 제공하고, 선택된 야행성에 따라 지도 이미지를 업데이트합니다.
  4. 지도 이미지 및 확대/축소: react-zoom-pan-pinch를 사용하여 지도 이미지를 확대 및 축소할 수 있도록 지원합니다.

## 트러블 슈팅
1. Next.js에서 robot.txt
2. SEO
3. Naver 서치어드바이저 Next.js에서 Html파일로 인증
