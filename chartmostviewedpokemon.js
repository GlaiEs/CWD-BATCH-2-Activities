window.onload = function () {

    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "dark2", // "light1", "light2", "dark1"
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Top 10 Most Popular Pokémon of All Time"
      },
      axisX: {
        margin: 10,
        labelPlacement: "inside",
        tickPlacement: "inside"
      },
      axisY2: {
        title: "Votes (in thousands)",
        titleFontSize: 14,
        includeZero: true,
        suffix: "th"
      },
      data: [{
        type: "bar",
        axisYType: "secondary",
        yValueFormatString: "#,###.##th",
        indexLabel: "{y}",
        dataPoints: [
          { label: "Mimikyu", y: 3.25 },
          { label: "Bulbasaur", y: 3.32 },
          { label: "Gardevoir", y: 3.63 },
          { label: "Gengar", y: 3.72 },
          { label: "Mewtwo", y: 3.90 },
          { label: "Eevee", y: 4.32 },
          { label: "Lucario", y: 4.66 },
          { label: "Greninja", y: 4.91 },
          { label: "Charizard", y: 6.13 },
          { label: "Pikachu", y: 6.88 }
        ]
      }]
    });

    setTimeout(() => {
      chart.render();
    }, 1000);   
    }