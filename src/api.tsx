// API를 fetch하기 위해 적었던 모든 함수들을 가져온다.
// fetch코드를 컴포넌트에 적지 않기 위함
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});

export const getRooms = () =>
  instance.get("rooms/").then((response) => response.data);
