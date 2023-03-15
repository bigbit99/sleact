import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url, {
      withCredentials: true, //쿠키공유하기
    })
    .then((response) => response.data); //swr에서 넘겨준 api가 오면 axios.get요청을 보낸다
//fetcher에서 넣은 주소를 매개변수로 넣어주고, 응답값에서 data꺼내 줌
export default fetcher;
