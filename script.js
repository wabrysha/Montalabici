document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the NEXT button
    document.getElementById('nextBtn').addEventListener('click', function() {
        const blockquote = document.querySelector('blockquote');
        const paragraph = document.querySelector('.hero p');

        blockquote.textContent = '"La bicicleta es el medio perfecto para redescubrir la libertad. ¡Explora nuevos horizontes y siente la brisa en tu rostro!"';
        paragraph.textContent = '¡Nunca dejes de pedalear y de descubrir nuevas rutas llenas de aventuras!';
    });

    // Event listener for the menu icon
    document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

    // Function to toggle the menu panel
    function toggleMenu() {
        const menuPanel = document.getElementById('menuPanel');
        menuPanel.classList.toggle('show');
    }

    // Function to hide the menu panel
    function hideMenu() {
        const menuPanel = document.getElementById('menuPanel');
        menuPanel.classList.remove('show');
    }

    // Event listener for mouse leaving the menu panel
    document.getElementById('menuPanel').addEventListener('mouseleave', hideMenu);

    // Dropdown menu functionality for "Consejos"
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function() {
        const dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('show');
    });

    // Function to hide dropdown menu when clicking outside
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(function(dropdown) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    };
});
