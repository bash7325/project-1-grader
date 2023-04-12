function getRadioButtonValue(form, radioButtonGroupName) {
    const radioButtons = form.elements[radioButtonGroupName];
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return parseInt(radioButtons[i].value);
        }
    }
    return 0;
}

document.getElementById("calculate-grade").addEventListener("click", function () {
    const form = document.getElementById("grading-form");
    let totalScore = 0;
    let metCriteria = [];

    const criteriaList = [
        'serverSideAPIs', 'clientSideStorage', 'noJSAlerts', 'nonBootstrapCSS', 'interactiveApp',
        'uniqueIdea', 'clearIdea',
        'liveURL', 'githubURL',
        'uniqueRepoName', 'fileStructure', 'namingConventions', 'commitMessages', 'qualityReadme',
        'uiDesign', 'designAesthetics',
    ];

    for (const criterion of criteriaList) {
        const score = getRadioButtonValue(form, criterion);
        totalScore += score;
        if (score > 0) {
            metCriteria.push(criterion);
        }
    }

    const metCriteriaTextarea = document.getElementById("met-criteria");
    metCriteriaTextarea.value = metCriteria.join("\n");

    // Calculate the percentage score
    const percentageScore = (totalScore / 100) * 100;

    // Display the result in the "grade-result" div
    const gradeResult = document.getElementById("grade-result");
    gradeResult.textContent = `Total Score: ${totalScore} | Percentage: ${percentageScore.toFixed(2)}%`;
});