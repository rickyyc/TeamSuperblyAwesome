var gradeDistributionData = {
    labels: ["0-24%", "25-49%", "50-59%", "60-69%", "70-79%", "80-89%", "90-99%", "100%"],
    datasets: [
        {
            label: "Quiz",
            fillColor: "rgba(192, 57, 43,0.2)",
            strokeColor: "rgba(192, 57, 43,1)",
            pointColor: "rgba(192, 57, 43,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(192, 57, 43,1)",
            data: [1, 1, 0, 3, 5, 9, 4, 2]
        }
    ]
}

$(document).ready(function(){
    var grades = document.getElementById('grades').getContext('2d');
    var gradeDistributionChart = new Chart(grades).Bar(gradeDistributionData);
});