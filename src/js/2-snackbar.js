let formData = { email: "", message: "" };

const feedbackForm = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

function loadFormData() {
  try {
    const formDataSave = localStorage.getItem(localStorageKey);
    if (formDataSave) {
      formData = JSON.parse(formDataSave);
      feedbackForm.elements.email.value = formData.email || "";
      feedbackForm.elements.message.value = formData.message || "";
    }
  } catch (error) {
    console.log("Error parsing saved data local storage:", error);
  }
}
loadFormData();

feedbackForm.addEventListener("input", (event) => {
  formData = { ...formData, [event.target.name]: event.target.value.trim() }
  
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
  
});

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault(); 
    if (!formData.email.trim()|| !formData.message.trim()) {
    alert("Fill please all fields");
    return;

    }
    else {
        console.log('Form submitted:', formData);
  }
  
  localStorage.removeItem(localStorageKey);
  
  feedbackForm.reset();

formData = { email: "", message: "" }; 
});
