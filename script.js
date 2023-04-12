document.getElementById("calculate-grade").addEventListener("click", function () {
    const form = document.getElementById("grading-form");
    let totalScore = 0;
    let metCriteria = [];

    // Technical Acceptance Criteria
    totalScore += form.serverSideAPIs.checked ? 5 : 0;
    totalScore += form.clientSideStorage.checked ? 5 : 0;
    totalScore += form.noJSAlerts.checked ? 5 : 0;
    totalScore += form.nonBootstrapCSS.checked ? 5 : 0;
    totalScore += form.interactiveApp.checked ? 5 : 0;

    // Concept
    totalScore += form.uniqueIdea.checked ? 5 : 0;
    totalScore += form.clearIdea.checked ? 5 : 0;

    // Deployment
    totalScore += form.liveURL.checked ? 10 : 0;
    totalScore += form.githubURL.checked ? 10 : 0;

    // Repository Quality
    totalScore += form.uniqueRepoName.checked ? 2 : 0;
    totalScore += form.fileStructure.checked ? 2 : 0;
    totalScore += form.namingConventions.checked ? 2 : 0;
    totalScore += form.commitMessages.checked ? 2 : 0;
    totalScore += form.qualityReadme.checked ? 2 : 0;

    // Application Quality
    totalScore += form.intuitiveUX.checked ? 5 : 0;
    totalScore += form.polishedUI.checked ? 5 : 0;
    totalScore += form.responsiveApp.checked ? 5 : 0;

    // Presentation
    totalScore += form.slideDeck.checked ? 3 : 0;
    totalScore += form.groupMembersSpeak.checked ? 4 : 0;
    totalScore += form.followsTemplate.checked ? 3 : 0;

    // Collaboration
    totalScore += form.noDisparities.checked ? 10 : 0;


    if (form.serverSideAPIs.checked) {
        totalScore += 5;
        metCriteria.push("Uses at least two server-side APIs");
    }

    const metCriteriaTextarea = document.getElementById("met-criteria");
    metCriteriaTextarea.value = metCriteria.join("\n");
    
    // Calculate the percentage score
    const percentageScore = (totalScore / 100) * 100;

    // Display the result in the "grade-result" div
    const gradeResult = document.getElementById("grade-result");
    gradeResult.textContent = `Total Score: ${totalScore} | Percentage: ${percentageScore.toFixed(2)}%`;
});