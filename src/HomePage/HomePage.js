import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

function HomePage() {

  const [chartData, setChart] = useState({});
  useEffect (() => {
    axios.get("http://localhost:3000/budget").then(function (res){
      let data = [];
      let labels = [];
      for (let i = 0; i < res.data.myBudget.length; i++){
        data.push(res.data.myBudget[i].budget);
        labels.push(res.data.myBudget[i].title);
      }

    setChart({
    labels: labels,
    datasets: [
        {
            data: data,
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#49d63a',
                '#a94af7',
                '#46eaf0',
            ],
          },
        ],
       });
    });
  });

  return (
    <main id="main">
        <div className="page-area">

            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>

            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Chart</h1>
                <Doughnut data={chartData} width={100} height={100} />
            </div>

        </div>

    </main>

  );
}

export default HomePage;