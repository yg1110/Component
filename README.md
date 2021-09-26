# Component
FrontEnd
1. 개발환경 구축
   - Webpack, Babel, Polifill
   - 프론트엔드 코드를 webpack으로 빌드하여 Production Code 생성
   - webpack에 Babel 적용
   - webpack에 Polifill 적용
   - webpack에 scss 적용

2. typescript
   - typescript 사용
 
3. 컴포넌트 기반 설계
   - Core를 만든후 이를 사용하는 형태
   - 상태(State)를 기반으로 랜더링 하는 형태로 설계

4. Router
   - 페이지간 이동시 새로고침이 발생하지 않도록
   - Router만들어서 사용하기

5. Store
   - 상태관리 프레임워크 만들어서 사용하기

6. Event
   - 불필요한 이벤트 해제하기
   - 이벤트 위임 사용하기

7. api
   - fetch사용
   - timeout 5초 사용
   - 요청전 / 요청중 / 요청후 / 실패에 대한 UI 처리

8. localstorage
   - 즐겨찾기 데이터는 localstorage에 저장

9. 가상돔
   - 가상돔 직접 구현해서 사용(Babel JSX같은 형태)
   - Observer Patton을 이용해서 상태가 변경될때 랜더링되도록 설계

10. 성능
      - 이미지는 Lazy Loading 사용
      - 불필요한 API 요청은 취소(Abort)하기

BackEnd
1. 크롤링
   - puppeteer /  playwright / cheerio 라이브러리 사용
   - 10분단위로 스크랩핑
   - 스크랩핑후에 json저장하고 다음요청부턴 해당 json사용

2. 캐싱
   - 이미 조회한 데이터는 캐싱을 사용하여 사용(최대한 간단하게 로컬캐싱 사용)