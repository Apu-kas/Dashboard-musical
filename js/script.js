        // Dados dos artistas
        const artistsData = {
            labels: [
                'The Beatles', 'Engenheiros do Hawaii', 'Lana Del Rey', 'Yung Lixo',
                'Stray Kids', 'Sabrina Carpenter', 'Djavan', 'Bo Burnham',
                'Skylab', 'Natazin', 'BTS', 'Leo Santana', 'Bon Jovi', 'Bruno Mars'
            ],
            votes: [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        };

        // Dados dos gêneros musicais
        const genreData = {
            labels: ['Pop', 'Rock', 'K-Pop', 'MPB', 'Hip-Hop/Brasil', 'Axé/Pagode', 'Comédia/Músical', 'Eletrônica'],
            votes: [4, 3, 2, 1, 1, 1, 1, 1],
            colors: [
                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
                '#9966FF', '#FF9F40', '#C9CBCF', '#4BC0C0'
            ]
        };

        // Gráfico de Artistas
        const artistsCtx = document.getElementById('artistsChart').getContext('2d');
        new Chart(artistsCtx, {
            type: 'bar',
            data: {
                labels: artistsData.labels,
                datasets: [{
                    label: 'Número de Votos',
                    data: artistsData.votes,
                    backgroundColor: 'rgba(102, 126, 234, 0.7)',
                    borderColor: 'rgba(102, 126, 234, 1)',
                    borderWidth: 2,
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        },
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45
                        },
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Distribuição de Votos por Artista',
                        font: {
                            size: 16
                        }
                    }
                }
            }
        });

        // Gráfico de Gêneros (Pizza)
        const genreCtx = document.getElementById('genreChart').getContext('2d');
        new Chart(genreCtx, {
            type: 'doughnut',
            data: {
                labels: genreData.labels,
                datasets: [{
                    data: genreData.votes,
                    backgroundColor: genreData.colors,
                    borderWidth: 2,
                    borderColor: 'white'
                }]
            },
            options: {
                responsive: true,
                cutout: '50%',
                plugins: {
                    legend: {
                        position: 'right'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const value = context.raw;
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${context.label}: ${value} votos (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });