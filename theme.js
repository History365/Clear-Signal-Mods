
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Toggle dark mode
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Add CSS variables for dark mode
const style = document.createElement('style');
style.textContent = `
    :root {
        --bg-color: #ffffff;
        --text-color: #333333;
    }
    
    .dark-mode {
        --bg-color: #1a1a1a;
        --text-color: #ffffff;
    }
    
    body {
        background-color: var(--bg-color);
        color: var(--text-color);
        transition: background-color 0.3s, color 0.3s;
    }
    
    .dark-mode a {
        color: #66b3ff;
    }
    
    .dark-mode input,
    .dark-mode textarea,
    .dark-mode select {
        background-color: #333;
        color: #fff;
        border-color: #666;
    }
    
    .dark-mode button {
        background-color: #444;
        color: #fff;
    }
`;

document.head.appendChild(style);
