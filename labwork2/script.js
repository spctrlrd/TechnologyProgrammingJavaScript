document.getElementById('categorizeButton').addEventListener('click', function() {
    const rows = document.querySelectorAll('#priceTable tbody tr');
    let lowCount = 0;
    let mediumCount = 0;
    let highCount = 0;

    rows.forEach(row => {
        const price = parseFloat(row.cells[1].textContent);
        row.classList.remove('low', 'medium', 'high');

        if (price < 30) {
            row.classList.add('low');
            lowCount++;
        } else if (price < 70) {
            row.classList.add('medium');
            mediumCount++;
        } else {
            row.classList.add('high');
            highCount++;
        }
    });

    document.getElementById('lowCount').textContent = `Low: ${lowCount}`;
    document.getElementById('mediumCount').textContent = `Medium: ${mediumCount}`;
    document.getElementById('highCount').textContent = `High: ${highCount}`;
});
