/** 날씨 API 현재 온도 등 가져오기 */
export const useFetchWeather = fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.561848720348216&lon=127.00253916950932&appid=31197cd39c46e58ea768fb1c8ea4a1b7')
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.error("데이터 조회 중 오류가 발생했습니다." + error);
    })