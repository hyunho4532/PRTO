/** 켈빈 온도에서 섭씨 온도로 변환하는 공식 */
export const calculateCelsiusFromKelvin = (kelvin: any) => {
    const result = kelvin - 273.15;

    return result.toFixed(2) + '°C';
}