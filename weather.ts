// weather.ts
interface Weather {
    day: string;
    temp: number;
    condition: string;
}

const weeklyForecast: Weather[] = [
    { day: "Mon", temp: 32, condition: "Sunny" },
    { day: "Tue", temp: 28, condition: "Cloudy" },
    { day: "Wed", temp: 35, condition: "Heatwave" },
    { day: "Thu", temp: 24, condition: "Rainy" }
];

const hotDays = weeklyForecast.filter(w => w.temp > 30);

console.log("Hot Days this week:");
console.table(hotDays);