// API CONFIGURATION

const API_BASE_URL = "http://localhost:5000/api";

// GENERIC API REQUEST

async function apiRequest(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

// PROFILE API

async function getProfile() {
  return await apiRequest("/profile");
}

// SKILLS API

async function getSkills() {
  return await apiRequest("/skills");
}

// PROJECTS API

async function getProjects() {
  return await apiRequest("/projects");
}

// EDUCATION API

async function getEducation() {
  return await apiRequest("/education");
}

// CONTACT API

async function sendContactMessage(contactData) {
  return await apiRequest("/contact", {
    method: "POST",
    body: JSON.stringify(contactData),
  });
}
