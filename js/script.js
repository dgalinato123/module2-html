const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

const toggleSkills = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skillsSection");

toggleSkills.addEventListener("click", function() {
    skillsSection.classList.toggle("hidden");
    if (skillsSection.classList.contains("hidden")) {
        toggleSkills.textContent = "Show Skills";
    } else {
        toggleSkills.textContent = "Hide Skills";
    }
});
submitBtn.addEventListener("click",function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (name===""||email===""){
    alert("Please fill in all required fields.");
    } else{
        alert("Thank you, " + name + "! Your message has been received.");
    }
    });
