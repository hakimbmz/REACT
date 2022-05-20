import { Chart as ChartJS } from "chart.js/auto";
import { useEffect ,useState} from "react";
import { Bar } from "react-chartjs-2";


function GenderStats() {
    const [male, setMale] = useState('')
    const [female, setfemale] = useState('')
    useEffect(()=>{
        getGender();
      
      },[])
      async function getGender(){
        const response =await fetch('http://localhost:8080/api/stats/male');
        const male =await response.json(); 
        setMale(male);
        const response2 =await fetch('http://localhost:8080/api/stats/female');
        const  female =await response2.json(); 
        setfemale(female);
     
        }
      
    return (  
        <Bar
        data={{
          labels: ["Male", "Female"],
          datasets: [
            {
              label: "stats about gender ",
              data: [male, female],
              backgroundColor: [
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 99, 132, 0.2)"
              
              ],
              borderWidth: 5 ,
            },
          
          ],
        }}
        height={300}
        width={1000}
        options={{
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

export default GenderStats;