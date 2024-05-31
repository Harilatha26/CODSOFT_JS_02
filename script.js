function calculateResults() {
    const Mathematics = parseFloat(document.getElementById('Mathematics').value) || 0;
    const Physics = parseFloat(document.getElementById('Physics').value) || 0;
    const Chemistry = parseFloat(document.getElementById('Chemistry').value) || 0;
    const Botany = parseFloat(document.getElementById('Botany').value) || 0;
    const Zoology = parseFloat(document.getElementById('Zoology').value) || 0;

    const totalMarks = Mathematics + Physics + Chemistry + Botany + Zoology;
    const averagePercentage = (totalMarks / 500) * 100;

    let grade;
    if (averagePercentage >= 90) {
        grade = 'A';
    } else if (averagePercentage >= 80) {
        grade = 'B';
    } else if (averagePercentage >= 70) {
        grade = 'C';
    } else if (averagePercentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('result').innerHTML = `
        <p>Total Marks: ${totalMarks}</p>
        <p>Average Percentage: ${averagePercentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
    `;
}
