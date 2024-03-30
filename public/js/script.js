document.addEventListener('DOMContentLoaded', function() {
    const genreData = {};
    const frequencyData = {};
    const table = document.getElementById('surveyTable');
    const rows = table.getElementsByTagName('tr');
    for (let i = 1; i < rows.length; i++) {
        const genreCell = rows[i].getElementsByTagName('td')[2];
        const genres = genreCell.textContent.trim().split(',');
        genres.forEach(genre => {
            genreData[genre] = (genreData[genre] || 0) + 1;
        });
    }
    for (let i = 1; i < rows.length; i++) {
        const frequencyCell = rows[i].getElementsByTagName('td')[3];
        const frequencies = frequencyCell.textContent.trim().split(',');
        frequencies.forEach(frequency => {
            frequencyData[frequency] = (frequencyData[frequency] || 0) + 1;
        });
    }
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
                hoverOffset: 100
            }]
        },
    });
    const ctx2 = document.getElementById('frequencyChart').getContext('2d');
    const frequencyChart = new Chart(ctx2, {
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
                hoverOffset: 100

            }]
            
        },
    });
});

