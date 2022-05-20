import { Chart as ChartJS } from "chart.js/auto";
import { useEffect ,useState} from "react";
import { Bar } from "react-chartjs-2";

function AgeStats() {
const [firstAge, setFirstAge] = useState('')
const [secondAge, setSecondAge] = useState('')
const [thirdAge, setThirdAge] = useState('')
const [finalAge, setFinalAge] = useState('')

useEffect(()=>{
  getAge();

},[])
async function getAge(){
  const response =await fetch('http://localhost:8080/api/stats/young');
  const first =await response.json(); 
  setFirstAge(first);
  const response2 =await fetch('http://localhost:8080/api/stats/Middle');
  const second =await response2.json(); 
  setSecondAge(second);
  const response3 =await fetch('http://localhost:8080/api/stats/old');
  const third =await response3.json(); 
  setThirdAge(third);
  const response4 =await fetch('http://localhost:8080/api/stats/oldest');
  const final =await response4.json(); 
  setFinalAge(final);
  }

  return (
    
      <Bar
        data={{
          labels: ["18-20", "21-40", "41-60", ">60"],
          datasets: [
            {
              label: "stats about age ",
              data: [firstAge, secondAge, thirdAge, finalAge],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(3, 252, 7, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderWidth: 5 ,
            },
          
          ],
        }}
        height={300}
        width={1000}
        options={{
          // maintainAspectRatio:true ,
          scales: {
            y: {
              beginAtZero: true,
              max:100,
            },
          },
        }}
      />
  );
}

export default AgeStats;
