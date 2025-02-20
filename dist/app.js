"use strict";
var _a;
var competencies = [
    {
        category: "Fraud Prevention",
        skills: ['Splunk', 'LogRhythm', '3DS2', 'Microsoft Dynamics 365 Fraud Protection']
    },
    {
        category: "Security Monitoring & Logging",
        skills: ['Grafana', 'Kibana', 'Datadog']
    },
    {
        category: "Cloud & Database Management",
        skills: ['AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'BigQuery']
    },
    {
        category: "Development Language Knowledge",
        skills: ['HTML', 'CSS', 'Python', 'JavaScript', 'Java']
    },
    {
        category: "Collaboration & Support Tools",
        skills: ['Slack', 'JIRA', 'Zendesk', 'ServiceCloud', 'Zoom']
    }
];
var experiences = [
    {
      title: "Senior IAM Engineer II, Identity Access Management",
      company: "Ping Identity",
      dates: "November 2024—Present",
      location: "Washington Metropolitan Area",
      responsibilities: [
        "Designed and implemented IAM solutions to enhance security, ensuring robust authentication and authorization mechanisms across cloud and on-prem environments.",
        "Developed and enforced role-based access control (RBAC) policies, reducing excessive privilege risks and improving compliance with regulatory standards such as FedRAMP, PCI-DSS, and SOC 2.",
        "Contributed to Python scripts for automating certificate renewals and API integrations, reducing manual intervention by 30%.",
        "Developed API-based authentication workflows using OAuth, OpenID Connect (OIDC), and SAML to streamline secure user authentication across applications."
      ]
    },
    {
      title: "Privacy & Compliance Support Engineer, Trust & Safety",
      company: "Twilio",
      dates: "August 2021—August 2024",
      location: "Washington Metropolitan Area",
      responsibilities: [
        "Collaborated with Legal and Data Platform engineering teams to ensure privacy compliance.",
        "Led projects to automate workflow, increasing productivity by 40%.",
        "Processed data access and deletion requests for EU and US customers.",
        "Handled GDPR compliance for Kafka Java schemas.",
        "Worked with engineering to leverage OpenAI’s API to automate security documentation.",
        "Presented analysis of malicious patterns for strategic mitigation plans."
    ]
  },
  {
      title: "Support Engineer Tech Lead, Payment Security",
      company: "Zuora",
      dates: "May 2020—August 2021",
      location: "Washington Metropolitan Area",
      responsibilities: [
        "Led payment security onboarding for enterprise clients.",
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
