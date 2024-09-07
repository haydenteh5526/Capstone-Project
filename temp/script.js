document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const courseForm = document.getElementById('courseForm');
    const lecturerSelect = document.getElementById('lecturer');
    const subjectCodeSelect = document.getElementById('subjectCode');
    const logoutButtons = document.querySelectorAll('.logout');
    const downloadExcelButton = document.getElementById('downloadExcel');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            console.log('Login attempted with:', email, password);
            // Here you would typically send a request to your server to authenticate
            window.location.href = 'main.html';
        });
    }

    if (courseForm) {
        lecturerSelect.addEventListener('change', function() {
            // Simulated data - in a real application, this would come from a server
            const lecturerData = {
                'lecturer1': { level: 'Senior Lecturer', email: 'lecturer1@example.com', hourlyRate: '$50' },
                'lecturer2': { level: 'Associate Professor', email: 'lecturer2@example.com', hourlyRate: '$60' }
            };

            const selectedLecturer = lecturerData[this.value] || { level: '', email: '', hourlyRate: '' };

            document.getElementById('level').value = selectedLecturer.level;
            document.getElementById('email').value = selectedLecturer.email;
            document.getElementById('hourlyRate').value = selectedLecturer.hourlyRate;
        });

        subjectCodeSelect.addEventListener('change', function() {
            // Simulated data - in a real application, this would come from a server
            const subjectData = {
                'code1': { title: 'Introduction to Computer Science', startDate: '2024-01-15', endDate: '2024-05-15' },
                'code2': { title: 'Advanced Web Development', startDate: '2024-02-01', endDate: '2024-06-01' }
            };

            const selectedSubject = subjectData[this.value] || { title: '', startDate: '', endDate: '' };

            document.getElementById('subjectTitle').value = selectedSubject.title;
            document.getElementById('startDate').value = selectedSubject.startDate;
            document.getElementById('endDate').value = selectedSubject.endDate;
        });

        courseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            // Here you would handle the form submission, including file upload
            // After processing, you would typically redirect to the result page
            window.location.href = 'result.html';
        });
    }

    // Logout functionality
    logoutButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Here you would typically clear any session data
            window.location.href = 'login.html';
        });
    });

    // Download Excel functionality
    if (downloadExcelButton) {
        downloadExcelButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Downloading Excel file...');
            // Here you would typically trigger the download of the converted Excel file
            // For now, we'll just log a message
            alert('Excel file download started!');
        });
    }
});