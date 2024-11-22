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
        toggleDropdown(bachelorsDropdown);
        hideDropdown(mastersDropdown);
        hideDropdown(doctoralDropdown);
        updateCourseContent(bachelorsCoursesContainer, "Bachelor Courses", ["Chemical Engineering", "Civil Engineering", "Computer Science", "Industrial Engineering", "Mechanical Engineering", "Psychology"]);
    });

    mastersLink.addEventListener('click', function () {
        toggleDropdown(mastersDropdown);
        hideDropdown(bachelorsDropdown);
        hideDropdown(doctoralDropdown);
        updateCourseContent(mastersCoursesContainer, "Master Courses", ["Accounting (Professional)", "Administration (Educational)", "Chemical Engineering", "Computer Science", "Criminal Justice", "Electrical Engineering"]);
    });

    doctoralLink.addEventListener('click', function () {
        toggleDropdown(doctoralDropdown);
        hideDropdown(bachelorsDropdown);
        hideDropdown(mastersDropdown);
        updateCourseContent(doctoralCoursesContainer, "Doctoral Courses", ["Chemical Engineering", "Civil Engineering", "Educational Leadership", "Electrical Engineering", "Industrial Engineering", "Mechanical Engineering"]);
    });

    function toggleDropdown(dropdown) {
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    }

    function hideDropdown(dropdown) {
        dropdown.style.display = 'none';
    }

    function updateCourseContent(container, heading, courses) {
        container.innerHTML = "";
        // Add heading above the courses
        const headingElement = document.createElement('h2');
        headingElement.textContent = heading;
        container.appendChild(headingElement);

        // Add individual courses
        courses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.textContent = course;
            container.appendChild(courseDiv);
        });
    }
});
