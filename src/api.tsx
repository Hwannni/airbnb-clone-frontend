// API를 fetch하기 위해 적었던 모든 함수들을 가져온다.
// fetch코드를 컴포넌트에 적지 않기 위함

const BASE_URL = "http://127.0.0.1:8000/api/v1";

export async function getRooms() {
  const response = await fetch(`${BASE_URL}/rooms/`);
  const json = await response.json();
  return json;
}
