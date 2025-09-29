"use strict";
var _a;
var competencies = [
    {
      category: "Security Monitoring & Logging",
      skills: ['Splunk', 'Grafana', 'Kibana', 'Datadog']
    },
    {
      category: "Cloud & Database Management",
      skills: ['AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'BigQuery']
    },
    {
      category: "Development Language Knowledge",
      skills: ['HTML', 'CSS', 'Python', 'JavaScript', 'Java', 'TypeScript']
    },
    {
      category: "Collaboration & Support Tools",
      skills: ['Slack', 'JIRA', 'Zendesk', 'Salesforce', 'Zoom']
    }
];
var experiences = [
    {
      title: "Senior Support Engineer II, FedRamp",
      company: "Ping Identity",
      dates: "October 2024—Present",
      location: "Washington Metropolitan Area",
      responsibilities: [
        "Designed and implemented IAM solutions to enhance security, ensuring robust authentication and authorization mechanisms across cloud and on-prem environments.",
        "Developed and enforced role-based access control (RBAC) policies, reducing excessive privilege risks and improving compliance with regulatory standards such as FedRAMP, PCI-DSS, and SOC 2.",
        "Contributed to Python scripts for automating certificate renewals and API integrations, reducing manual intervention by 30%.",
        "Efficiently manage and respond to client inquiries regarding CVEs, conducting thorough assessments to determine the applicability and impact of vulnerabilities on their systems."
      ]
    },
    {
      title: "Threat Intelligence Analyst",
      company: "Twilio",
      dates: "August 2021—August 2024",
      location: "Washington Metropolitan Area",
      responsibilities: [
        "Developed SQL runbooks to detect attack patterns and TTPs, introducing workflows that reduced security threats through data-driven countermeasures.",
        "Used SIEM tools to block 1,000+ bad sign-ups and prevent 200+ account takeovers from GitHub.",
        "Processed DSR requests for EU and US customers.",
        "Handled GDPR compliance for Kafka Java schemas.",
        "Worked with engineering to leverage OpenAI’s API to automate security documentation.",
        "Partnered with cross-functional teams to address incidents involving child exploitation, paraphernalia, and political disinformation."
    ]
  },
  {
      title: "Support Engineer Tech Lead, Payment Security",
      company: "Zuora",
      dates: "May 2020—August 2021",
      location: "Washington Metropolitan Area",
      responsibilities: [
        "Led payment security incident management.",
        "Collaborated with Sales and Customer Success Managers in bi-weekly meetings.",
        "Resolved critical payment issues and delivered postmortem reports.",
        "Managed the release of Zuora's Hosted Payment Pages v3 with enhanced security measures."
    ]
  }
];
function loadCompetencies() {
    var competenciesList = document.getElementById("competencies-list");
    if (competenciesList) {
        competencies.forEach(function (comp) {
            var li = document.createElement("li");
            li.innerHTML = "<strong>".concat(comp.category, ":</strong> ").concat(comp.skills.join(", "));
            competenciesList.appendChild(li);
        });
    }
}
function loadExperience() {
    var experienceList = document.getElementById("experience-list");
    if (experienceList) {
        experiences.forEach(function (exp) {
            var expDiv = document.createElement("div");
            expDiv.innerHTML = "\n        <h3>".concat(exp.title, "</h3>\n        <p><strong>").concat(exp.company, "</strong> - ").concat(exp.dates, "</p>\n        <p><em>").concat(exp.location, "</em></p>\n        <ul>\n          ").concat(exp.responsibilities.map(function (res) { return "<li>".concat(res, "</li>"); }).join(""), "\n        </ul>\n      ");
            experienceList.appendChild(expDiv);
        });
    }
}
function generatePassword(length) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    var password = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
(_a = document.getElementById('generate-password-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var lengthInput = document.getElementById('length');
    var length = parseInt(lengthInput.value, 10);
    var password = generatePassword(length);
    var output = document.getElementById('password-output');
    if (output) {
        output.textContent = password;
    }
});
var currentInput = '';
var currentOperator = null;
var previousInput = '';
function updateCalculatorDisplay(value) {
    var display = document.getElementById('calculator-output');
    if (display) {
        display.textContent = value;
    }
}
document.querySelectorAll('#calculator button').forEach(function (button) {
    button.addEventListener('click', function () {
        var value = button.textContent;
        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            currentOperator = null;
            updateCalculatorDisplay('0');
        }
        else if (value === '=') {
            if (currentOperator && previousInput !== '' && currentInput !== '') {
                var result = eval("".concat(previousInput, " ").concat(currentOperator, " ").concat(currentInput));
                updateCalculatorDisplay(result.toString());
                currentInput = result.toString();
                previousInput = '';
                currentOperator = null;
            }
        }
        else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                previousInput = currentInput;
                currentInput = '';
                currentOperator = value;
            }
        }
        else {
            currentInput += value;
            updateCalculatorDisplay(currentInput);
        }
    });
});
var choices = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice() {
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a draw!";
    }
    if ((playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')) {
        return 'You win!';
    }
    return 'You lose!';
}
document.querySelectorAll('.rps-btn').forEach(function (button) {
    button.addEventListener('click', function () {
        var playerChoice = button.textContent;
        var computerChoice = getComputerChoice();
        var result = getWinner(playerChoice, computerChoice);
        var resultDisplay = document.getElementById('rps-result');
        if (resultDisplay) {
            resultDisplay.textContent = "You chose ".concat(playerChoice, ", computer chose ").concat(computerChoice, ". ").concat(result);
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    loadCompetencies();
    loadExperience();
});
//# sourceMappingURL=app.js.map
