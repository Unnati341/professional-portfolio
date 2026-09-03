// PORTFOLIO COMPONENTS

// SKILLS COMPONENT

function renderSkills(skills) {
  const container = document.getElementById("skillsContainer");

  if (!container) return;

  if (!skills || skills.length === 0) {
    container.innerHTML = `
            <p class="empty-message">No skills available.</p>
        `;
    return;
  }

  container.innerHTML = skills
    .map(
      (skill) => `
        <div class="skill-card">
            <div class="skill-icon">
                ${skill.icon || "💻"}
            </div>

            <div class="skill-content">
                <h3>${skill.category || "Skills"}</h3>

                <div class="skill-list">
                    ${
                      Array.isArray(skill.skills)
                        ? skill.skills
                            .map(
                              (item) => `
                                <span class="skill-item">${item}</span>
                            `,
                            )
                            .join("")
                        : ""
                    }
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

// PROJECTS COMPONENT

function renderProjects(projects) {
  const container = document.getElementById("projectsContainer");

  if (!container) return;

  if (!projects || projects.length === 0) {
    container.innerHTML = `
            <p class="empty-message">No projects available.</p>
        `;
    return;
  }

  container.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">

            <div class="project-image">
                ${
                  project.image
                    ? `<img src="${project.image}" alt="${project.title}">`
                    : `<div class="project-placeholder">💻</div>`
                }
            </div>

            <div class="project-content">

                <h3>${project.title || "Project"}</h3>

                <p>
                    ${project.description || "Project description coming soon."}
                </p>

                <div class="project-tech">
                    ${
                      Array.isArray(project.technologies)
                        ? project.technologies
                            .map(
                              (technology) => `
                                <span>${technology}</span>
                            `,
                            )
                            .join("")
                        : ""
                    }
                </div>

                <div class="project-links">

                    ${
                      project.liveUrl
                        ? `
                                <a
                                    href="${project.liveUrl}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                            `
                        : ""
                    }

                    ${
                      project.githubUrl
                        ? `
                                <a
                                    href="${project.githubUrl}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            `
                        : ""
                    }

                </div>

            </div>
        </article>
    `,
    )
    .join("");
}

// EDUCATION COMPONENT

function renderEducation(education) {
  const container = document.getElementById("educationContainer");

  if (!container) return;

  if (!education || education.length === 0) {
    container.innerHTML = `
            <p class="empty-message">No education details available.</p>
        `;
    return;
  }

  container.innerHTML = education
    .map(
      (item) => `
        <div class="education-card">

            <div class="education-year">
                ${item.year || ""}
            </div>

            <div class="education-content">

                <h3>${item.degree || "Degree"}</h3>

                <h4>${item.institute || "Institute"}</h4>

                ${item.cgpa ? `<p><strong>CGPA:</strong> ${item.cgpa}</p>` : ""}

                ${item.description ? `<p>${item.description}</p>` : ""}

            </div>

        </div>
    `,
    )
    .join("");
}

// LOADING COMPONENT

function showLoading(containerId, message = "Loading...") {
  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = `
        <div class="loading-message">
            ${message}
        </div>
    `;
}

// ERROR COMPONENT

function showError(containerId, message = "Unable to load data.") {
  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = `
        <div class="error-message">
            ${message}
        </div>
    `;
}
