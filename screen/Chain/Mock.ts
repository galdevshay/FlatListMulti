import { All, Chain, Datum } from "./types";
export const getData = async () => {
    const response = await fetch("https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest");
    const jsonData = await response.json() as All;

    return jsonData.data as Datum[]
}
