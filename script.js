document.getElementById("calculate-grade").addEventListener("click", function () {
    const form = document.getElementById("grading-form");
    let totalScore = 0;
    let metCriteria = [];

    const criteria = [
        { id: "serverSideAPIs", points: 5, description: "Uses at least two server-side APIs" },
        { id: "clientSideStorage", points: 5, description: "Uses client-side storage to store persistent data" },
        { id: "noJSAlerts", points: 5, description: "Does not use JS alerts, confirms, or prompts (use modals)" },
        { id: "nonBootstrapCSS", points: 5, description: "Uses a CSS framework other than Bootstrap" },
        { id: "interactiveApp", points: 5, description: "Application user experience is interactive (accepts and responds to user input)" },
        { id: "uniqueIdea", points: 5, description: "Application has a unique idea" },
        { id: "clearIdea", points: 5, description: "Application idea is clearly and concisely written" },
        { id: "liveURL", points: 10, description: "Application deployed at live URL" },
        { id: "githubURL", points: 10, description: "Application GitHub URL submitted" },
        { id: "uniqueRepoName", points: 2, description: "GitHub repository has a unique name" },
        { id: "fileStructure", points: 2, description: "GitHub repository follows best practices for file structure and naming conventions" },
        { id: "namingConventions", points: 2, description: "Application file names follow consistent naming conventions" },
        { id: "commitMessages", points: 2, description: "GitHub repository contains multiple descriptive commit messages" },
        { id: "qualityReadme", points: 2, description: "GitHub repository contains quality README file with description, screenshot, and link to deployed application" },
        { id: "intuitiveUX", points: 5, description: "Application user experience is intuitive and easy to navigate" },
        { id: "polishedUI", points: 5, description: "Application user interface style is clean and polished" },
        { id: "responsiveApp", points: 5, description: "Application is responsive" },
        { id: "slideDeck", points: 3, description: "Presentation includes a high-quality, professional slide deck" },
        { id: "groupMembersSpeak", points: 4, description: "Group members take turns speaking during presentation" },
        { id: "followsTemplate", points: 3, description: "Presentation follows the template" },
        { id: "noDisparities", points: 10, description: "No large discrepancies in commits/contributions between group members" },
    ];
    

    criteria.forEach(criterion => {
        if (form[criterion.id].checked) {
            totalScore += criterion.points;
            metCriteria.push(criterion.description);
        }
    });


    const metCriteriaTextarea = document.getElementById("met-criteria");
    metCriteriaTextarea.value = metCriteria.join("\n");

    // Calculate the percentage score
    const percentageScore = (totalScore / 100) * 100;

    // Display the result in the "grade-result" div
    const gradeResult = document.getElementById("grade-result");
    gradeResult.textContent = `Total Score: ${totalScore} | Percentage: ${percentageScore.toFixed(2)}%`;
});