// Navigation bar
const hamburgerButton = document.getElementById('hamburger-button');
const sitelink = document.querySelector('.sitelink');
const navLinks = document.querySelectorAll('.sitelink a');

hamburgerButton.addEventListener('click', () => {
  sitelink.classList.toggle('show');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    sitelink.classList.remove('show');
  });
});
// Navigation bar
// Origin box

    // Learn More button click
document.querySelectorAll('.open').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('originbox').style.display = 'none';
    document.getElementById('new-elements').style.display = 'block';
    
    const targetId = button.getAttribute('data-target');
    document.getElementById(targetId).style.display = 'block';
  });
});

    // Close button click
document.querySelectorAll('.close').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.new').forEach(newElement => {
      newElement.style.display = 'none';
    });

    document.getElementById('new-elements').style.display = 'none';
    document.getElementById('originbox').style.display = 'flex';
  });
});
// Origin box
// Projects
document.addEventListener('DOMContentLoaded', () => {
  const backArrow = document.getElementById('backarrow');
  const forwardArrow = document.getElementById('forwardarrow');
  const portfolio = document.getElementById('portfolio');
  const underConstruction = document.getElementById('underconstruction');

  const toggleDisplay = () => {
    const isunderConstructionVisible = underConstruction.style.display === 'block';
    if (isunderConstructionVisible) {
      portfolio.style.display = 'block';
      underConstruction.style.display = 'none';
    } else {
      portfolio.style.display = 'none';
      underConstruction.style.display = 'block';
    }
  };

  backArrow.addEventListener('click', toggleDisplay);
  forwardArrow.addEventListener('click', toggleDisplay);
});
// Projects
// Feedback
document.addEventListener('DOMContentLoaded', function () {
  const starContainer = document.getElementById('star-container');
  const addProjectBtn = document.getElementById('add-project-btn');
  const additionalProject = document.getElementById('additional-project');
  const stars = document.querySelectorAll('.star');
  const feedbackForm = document.querySelector('form');
  let selectedStar = 0;

      // Star event click
  starContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('star')) {
          selectedStar = parseInt(event.target.getAttribute('data-value'), 10);

          stars.forEach(star => {
              const starValue = parseInt(star.getAttribute('data-value'), 10);
              if (starValue <= selectedStar) {
                  star.classList.add('selected');
              } else {
                  star.classList.remove('selected');
              }
          });
      }
  });

  // Show add project click
  addProjectBtn.addEventListener('click', function () {
      additionalProject.style.display = 'block';
  });

  // Form submit
  feedbackForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const displayName = document.getElementById("fname").value;
      const projectName = document.getElementById("addproject").value.trim() || "N/A";
      const message = document.getElementById("message").value;

      if (selectedStar === 0) {
          alert("Please select a star rating before posting.");
          return;
      }

      // Feedback object (JSON in future?)
      const feedback = {
          displayName: displayName,
          projectName: projectName,
          message: message,
          starRating: selectedStar,
      };

      // Append feedback to div under h3
      const feedbackDiv = document.querySelector("h3 + div");
      const feedbackHTML = `
          <div class="feedback-item">
              <p><strong>${feedback.displayName}</strong> (${feedback.starRating}★)</p>
              <p>${feedback.projectName !== "N/A" ? `<em style="font-size:1.75rem;">${feedback.projectName}</em>` : ""}</p>
              <p style="font-size:1.5rem;">${feedback.message}</p>
          </div>
      `;
      feedbackDiv.innerHTML += feedbackHTML;

      feedbackForm.reset();
      selectedStar = 0;
      stars.forEach(star => star.classList.remove('selected'));
      additionalProject.style.display = 'none';
  });
});
// Feedback
//Email submit
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const emailInput = document.getElementById('email').value.trim();
  const messageInput = document.getElementById('messageInput').value.trim();

  if (emailInput === "" || messageInput === "") {
    alert(`Please fill in your email and message before submitting.`);
  } else {
    alert(`Email sent!

    Thanks for your email, I will get back to as soon as possible!`);

    document.getElementById('contactfield').reset();
  }
});
//Email submit