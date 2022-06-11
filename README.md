# React로 나만의 사전 만들기
![5](https://user-images.githubusercontent.com/55455103/173186721-f24bb07f-85de-42d2-a4b1-0458b82620bd.gif)


## 게시글 CRUD
- Redux Tool kit의 createAsyncThunk를 이용해서 firestore와 비동기로 통신하며 조작했다
## CSS 프레임워크
- Utility-First 컨셉의 CSS 프레임워크를 경험해보기 위해 tailwindcss 사용
## infinite scroll
- 무한 스크롤을 구현하는 방법은 여러가지만 useInview 훅을 이용해 페이지의 마지막 요소가 보이면 API call을 하게 해서 state에 데이터를 이어 붙여나가는 방식으로 구현
## CI/CD
- Github Acition을 사용해서 프로젝트를 깃허브에 push 할 때마다 trigger가 동작해서 S3에 자동으로 빌드 파일이 배포되도록 설정

## trouble shooting
- 사실 문제라고 할 것 까지는 아니지만 firestore가 nosql이기 때문에 데이터를 정렬할 키가 존재하지 않아서 새로 추가한 데이터가 맨 뒤로 갈때도 있고 중간에 나타날 때도 있다
- 데이터를 넣을 때마다 firestore에 저장되어 있는 전체 데이터 수 +1만큼 id 값을 주면 되지만 이러한 방식은 매우 비효율적이다
- 그냥 Rest API를 작성해서 프로젝트를 진행했으면 훨씬 깔끔했을 것 같다!


