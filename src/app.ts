interface Competency {
    category: string;
    skills: string[];
  }
  
  interface Experience {
    title: string;
    company: string;
    dates: string;
    location: string;
    responsibilities: string[];
  }
  
  const competencies: Competency[] = [
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
  
  const experiences: Experience[] = [
    {
      title: "Privacy & Compliance Lead, Trust & Safety",
      company: "Twilio",
      dates: "November 2022—August 2024",
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
      dates: "May 2020—October 2022",
      location: "Washington Metropolitan Area",
      responsibilities: [
        "Led payment security onboarding for enterprise clients.",
        "Collaborated with Sales and Customer Success Managers in bi-weekly meetings.",
        "Resolved critical payment issues and delivered postmortem reports.",
        "Managed the release of Zuora's Hosted Payment Pages v3 with enhanced security measures."
    ]
  },
  {
    title: "Technical Support Engineer",
    company: "CallRail",
    dates: "January 2018—April 2020",
    location: "Atlanta, GA",
    responsibilities: [
      "Handled escalated cases around front-end customer issues.",
      "Mentored new hires, increasing overall productivity by 30%.",
      "Developed internal documentation for troubleshooting with Postman."
    ]
  }
];

function loadCompetencies() {
  const competenciesList = document.getElementById("competencies-list");
  if (competenciesList) {
    competencies.forEach(comp => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${comp.category}:</strong> ${comp.skills.join(", ")}`;
      competenciesList.appendChild(li);
    });
  }
}

function loadExperience() {
  const experienceList = document.getElementById("experience-list");
  if (experienceList) {
    experiences.forEach(exp => {
      const expDiv = document.createElement("div");
      expDiv.innerHTML = `
        <h3>${exp.title}</h3>
        <p><strong>${exp.company}</strong> - ${exp.dates}</p>
        <p><em>${exp.location}</em></p>
        <ul>
          ${exp.responsibilities.map(res => `<li>${res}</li>`).join("")}
        </ul>
      `;
      experienceList.appendChild(expDiv);
    });
  }
}

function generatePassword(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

document.getElementById('generate-password-btn')?.addEventListener('click', () => {
  const lengthInput = document.getElementById('length') as HTMLInputElement;
  const length = parseInt(lengthInput.value, 10);
  const password = generatePassword(length);
  const output = document.getElementById('password-output');
  if (output) {
    output.textContent = password;
  }
});

let currentInput = '';
let currentOperator: string | null = null;
let previousInput = '';

function updateCalculatorDisplay(value: string) {
  const display = document.getElementById('calculator-output');
  if (display) {
    display.textContent = value;
  }
}

document.querySelectorAll('#calculator button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      previousInput = '';
      currentOperator = null;
      updateCalculatorDisplay('0');
    } else if (value === '=') {
      if (currentOperator && previousInput !== '' && currentInput !== '') {
        const result = eval(`${previousInput} ${currentOperator} ${currentInput}`);
        updateCalculatorDisplay(result.toString());
        currentInput = result.toString();
        previousInput = '';
        currentOperator = null;
      }
    } else if (['+', '-', '*', '/'].includes(value!)) {
      if (currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
        currentOperator = value!;
      }
    } else {
      currentInput += value;
      updateCalculatorDisplay(currentInput);
    }
  });
});

const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(): string {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(playerChoice: string, computerChoice: string): string {
  if (playerChoice === computerChoice) {
    return "It's a draw!";
  }

  if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    return 'You win!';
  }

  return 'You lose!';
}

document.querySelectorAll('.rps-btn').forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.textContent!;
    const computerChoice = getComputerChoice();
    const result = getWinner(playerChoice, computerChoice);

    const resultDisplay = document.getElementById('rps-result');
    if (resultDisplay) {
      resultDisplay.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  loadCompetencies();
  loadExperience();
});