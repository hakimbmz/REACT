import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
function RegionStats() {
  const [firstCountry, setFirstCountry] = useState("");
  const [secondCountry, setSecondCountry] = useState("");
  const [thirdCountry, setThirdCountry] = useState("");
  const [firstCountryValue, setFirstCountryValue] = useState("");
  const [secondCountryValue, setSecondCountryValue] = useState("");
  const [thirdCountryValue, setThirdCountryValue] = useState("");
  useEffect(() => {
    getRegion();
  }, []);
  async function getRegion() {
    const response = await fetch("http://localhost:8080/api/stats/region");
    const data = await response.json();
    setFirstCountry(data[0].region);
    setSecondCountry(data[1].region);
    setThirdCountry(data[2].region);
    setFirstCountryValue(data[0].regionStats);
    setSecondCountryValue(data[1].regionStats);
    setThirdCountryValue(data[2].regionStats);
  }
  return (
    <div>
      <Bar
        data={{
          labels: [firstCountry, secondCountry, thirdCountry],
          datasets: [
            {
              label: "stats about region ",
              data: [firstCountryValue, secondCountryValue, thirdCountryValue],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(3, 252, 7, 0.2)",
              ],
              borderWidth: 5,
            },
          ],
        }}
        height={300}
        width={1000}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
            },
          },
        }}
      />
    </div>
  );
}

export default RegionStats;
