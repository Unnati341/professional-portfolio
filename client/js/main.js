// MAIN JAVASCRIPT

document.addEventListener("DOMContentLoaded", () => {
  // MOBILE MENU

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");

      const isOpen = navLinks.classList.contains("active");

      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu after clicking a navigation link
    const links = navLinks.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // CURRENT YEAR

  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // LOAD PORTFOLIO DATA

  loadPortfolioData();

  // CONTACT FORM

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", handleContactForm);
  }
});

// LOAD ALL PORTFOLIO DATA

async function loadPortfolioData() {
  await Promise.all([
    loadProfile(),
    loadSkills(),
    loadProjects(),
    loadEducation(),
  ]);
}

// LOAD PROFILE

async function loadProfile() {
  try {
    const response = await getProfile();

    const profile = response.data || response;

    console.log("Profile loaded:", profile);

    // NAME
    const profileName = document.getElementById("profileName");

    if (profileName) {
      profileName.textContent = profile.name || "";
    }

    // TITLE
    const profileTitle = document.getElementById("profileTitle");

    if (profileTitle) {
      profileTitle.textContent = profile.title || "";
    }

    // OBJECTIVE
    const profileObjective = document.getElementById("profileObjective");

    if (profileObjective) {
      profileObjective.textContent = profile.objective || "";
    }

    // ABOUT
    const profileAbout = document.getElementById("profileAbout");

    if (profileAbout) {
      profileAbout.textContent = profile.about || "";
    }

    // GITHUB
    const githubLink = document.getElementById("githubLink");

    if (githubLink && profile.github) {
      githubLink.href = profile.github;
    }

    // LINKEDIN
    const linkedinLink = document.getElementById("linkedinLink");

    if (linkedinLink && profile.linkedin) {
      linkedinLink.href = profile.linkedin;
      console.log("Profile loaded:", profile);
      console.log("LinkedIn URL from MongoDB:", profile.linkedin);
    }

    // RESUME
    const resumeLink = document.getElementById("resumeLink");

    if (resumeLink && profile.resumeUrl) {
      resumeLink.href = profile.resumeUrl;
    }

    // PROFILE IMAGE
    const profileImage = document.getElementById("profileImage");

    if (profileImage && profile.profileImage) {
      profileImage.src = profile.profileImage;
    }
  } catch (error) {
    console.error("Failed to load profile:", error);
  }
}

// LOAD SKILLS

async function loadSkills() {
  showLoading("skillsContainer", "Loading skills...");

  try {
    const response = await getSkills();

    const skills = response.data || response;

    renderSkills(skills);
  } catch (error) {
    console.error("Failed to load skills:", error);

    showError("skillsContainer", "Unable to load skills.");
  }
}

// LOAD PROJECTS

async function loadProjects() {
  showLoading("projectsContainer", "Loading projects...");

  try {
    const response = await getProjects();

    const projects = response.data || response;

    renderProjects(projects);
  } catch (error) {
    console.error("Failed to load projects:", error);

    showError("projectsContainer", "Unable to load projects.");
  }
}

// LOAD EDUCATION

async function loadEducation() {
  showLoading("educationContainer", "Loading education...");

  try {
    const response = await getEducation();

    const education = response.data || response;

    renderEducation(education);
  } catch (error) {
    console.error("Failed to load education:", error);

    showError("educationContainer", "Unable to load education.");
  }
}
// CONTACT FORM

async function handleContactForm(event) {
  event.preventDefault();

  const form = event.target;

  const formStatus = document.getElementById("formStatus");

  const submitButton = form.querySelector("button[type='submit']");

  // GET FORM VALUES

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const subject = document.getElementById("subject").value.trim();

  const message = document.getElementById("message").value.trim();

  // CLEAR PREVIOUS ERRORS

  clearFormErrors();

  // CLIENT-SIDE VALIDATION

  let isValid = true;

  if (name.length < 2) {
    showFieldError("nameError", "Please enter your name.");

    isValid = false;
  }

  if (!isValidEmail(email)) {
    showFieldError("emailError", "Please enter a valid email address.");

    isValid = false;
  }

  if (subject.length < 3) {
    showFieldError("subjectError", "Please enter a subject.");

    isValid = false;
  }

  if (message.length < 10) {
    showFieldError(
      "messageError",
      "Message must contain at least 10 characters.",
    );

    isValid = false;
  }

  if (!isValid) {
    return;
  }

  // DISABLE BUTTON

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
  }

  if (formStatus) {
    formStatus.textContent = "";
    formStatus.className = "form-status";
  }

  // SEND DATA TO BACKEND

  try {
    const response = await sendContactMessage({
      name,
      email,
      subject,
      message,
    });

    console.log("Contact response:", response);

    if (formStatus) {
      formStatus.textContent =
        "Thank you! Your message has been sent successfully.";

      formStatus.classList.add("success");
    }

    form.reset();
  } catch (error) {
    console.error("Contact form error:", error);

    if (formStatus) {
      formStatus.textContent =
        error.message || "Unable to send your message. Please try again.";

      formStatus.classList.add("error");
    }
  } finally {
    if (submitButton) {
      submitButton.disabled = false;

      submitButton.textContent = "Send Message";
    }
  }
}

// EMAIL VALIDATION

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

// SHOW FIELD ERROR

function showFieldError(elementId, message) {
  const element = document.getElementById(elementId);

  if (element) {
    element.textContent = message;
  }
}

// CLEAR FORM ERRORS

function clearFormErrors() {
  const errorElements = document.querySelectorAll(".error-message");

  errorElements.forEach((element) => {
    element.textContent = "";
  });

  const formStatus = document.getElementById("formStatus");

  if (formStatus) {
    formStatus.textContent = "";

    formStatus.className = "form-status";
  }
}
