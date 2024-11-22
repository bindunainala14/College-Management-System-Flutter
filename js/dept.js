document.addEventListener("DOMContentLoaded", function () {
    const bachelorsLink = document.querySelector('.bachelors-link');
    const mastersLink = document.querySelector('.masters-link');
    const doctoralLink = document.querySelector('.doctoral-link');
    const bachelorsDropdown = document.querySelector('.bachelors-dropdown');
    const mastersDropdown = document.querySelector('.masters-dropdown');
    const doctoralDropdown = document.querySelector('.doctoral-dropdown');

    const bachelorsCoursesContainer = document.getElementById('bachelors-courses');
    const mastersCoursesContainer = document.getElementById('masters-courses');
    const doctoralCoursesContainer = document.getElementById('doctoral-courses');

    bachelorsLink.addEventListener('click', function () {
        showDropdown(bachelorsDropdown);
        hideDropdown(mastersDropdown);
        hideDropdown(doctoralDropdown);
        updateCourseContent(bachelorsCoursesContainer, ["Chemical Engineering", "Civil Engineering", "Computer Science", "Industrial Engineering", "Mechanical Engineering", "Psychology"]);
    });

    mastersLink.addEventListener('click', function () {
        showDropdown(mastersDropdown);
        hideDropdown(bachelorsDropdown);
        hideDropdown(doctoralDropdown);
        updateCourseContent(mastersCoursesContainer, ["Accounting (Professional)", "Administration (Educational)", "Chemical Engineering", "Computer Science", "Criminal Justice", "Electrical Engineering"]);
    });

    doctoralLink.addEventListener('click', function () {
        showDropdown(doctoralDropdown);
        hideDropdown(bachelorsDropdown);
        hideDropdown(mastersDropdown);
        updateCourseContent(doctoralCoursesContainer, ["Chemical Engineering", "Civil Engineering", "Educational Leadership", "Electrical Engineering", "Industrial Engineering", "Mechanical Engineering"]);
    });

    function showDropdown(dropdown) {
        dropdown.style.display = 'block';
    }

    function hideDropdown(dropdown) {
        dropdown.style.display = 'none';
    }

    function updateCourseContent(container, courses) {
        container.innerHTML = "";
        courses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.textContent = course;
            container.appendChild(courseDiv);
        });
    }
});
