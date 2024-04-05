document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/jsonresults');
    const data = await response.json();
    console.log(data);

    const genreData = {};
    const frequencyData = {};

    data.forEach(row => {
        const genres = row.answers.genres.split(',');
        genres.forEach(genre => {
            genreData[genre] = (genreData[genre] || 0) + 1;
        });

        const frequencies = row.answers.frequency.split(',');
        frequencies.forEach(frequency => {
            frequencyData[frequency] = (frequencyData[frequency] || 0) + 1;
        });
    });

    const genreLabels = Object.keys(genreData);
    const genreCounts = Object.values(genreData);
    const frequencyLabels = Object.keys(frequencyData);
    const frequencyCounts = Object.values(frequencyData);

    const ctx = document.getElementById('genreChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: genreLabels,
            datasets: [{
                data: genreCounts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                ],
                borderWidth: 3,
                hoverOffset: 100,
            }]
        },
    });

    const ctx2 = document.getElementById('frequencyChart').getContext('2d');
    new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: frequencyLabels,
            datasets: [{
                data: frequencyCounts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                ],
                borderWidth: 3,
                hoverOffset: 100,
            }]
        },
    });
});

document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/jsonresults');
    const data = await response.json();
    console.log(data);
    $('#example').DataTable({
        data: data,
        columns: [
            { data: "answers.name" },
            { data: "timestamp" },
            { data: "answers.genres" },
            { data: "answers.frequency" },
            { data: "answers.hours" },
            { data: "answers.instruments" },
        ]
    });
});
      