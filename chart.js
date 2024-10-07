
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'doughnut',
       data: data = {
        labels: [
          'Visualizações',
          'Vendas',
          'Lucros'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [9750, 2500, 12600],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }
     
         
  });


  const ct = document.getElementById('myChartt');

  new Chart(ct, {
    type: 'line',
    data: data = {
        labels: [
          'Primeiro Semestre',
          'Segundo Semestre',
          'Terceiro Semestre'
        ],
        datasets: [{
          label: 'Lucros Quantitativos %',
          data: [30, 50 , 90],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }  
  });



