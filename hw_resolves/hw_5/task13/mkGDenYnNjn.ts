// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(// 10000,// [{currency:'USD',value:25},{currency:'EUR',value:42}],// 'USD') // => 400
type CurrencyValue = { currency: string, value: number };

// @ts-ignore
const exchange =
    (sumUAH: number,
     currencyValues: CurrencyValue[],
     exchangeCurrency: string): number => {
        let chosenCurrency;
        for (const item of currencyValues) {
            if (item.currency === exchangeCurrency) {
                chosenCurrency = item;
            }
        }
        if (chosenCurrency) {
            return sumUAH / chosenCurrency.value;
        }
        return -1;

    }


console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));
