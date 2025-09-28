// Initialize particles background
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#00f3ff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#9d00ff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        }
    }
});

// Script data
const scripts = [
    {
        title: "Fling Player",
        code: 'loadstring(game:HttpGet("https://pastebin.com/raw/ZuxLUdkM"))()',
        password: null,
        risk: "HIGH"
    },
    {
        title: "Hapus Objek",
        code: 'loadstring(game:HttpGet("https://rawscripts.net/raw/Universal-Script-Unanchored-Parts-Controller-Gui-47141"))()',
        password: null,
        risk: "MEDIUM"
    },
    {
        title: "Tarik/Geser Objek",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/FayintXhub/Bring-Parts/refs/heads/main/BringParts"))()',
        password: null,
        risk: "MEDIUM"
    },
    {
        title: "Invisible Hack",
        code: 'loadstring(game:HttpGet("https://rawscripts.net/raw/Universal-Script-Invisible-script-20557"))()',
        password: null,
        risk: "HIGH"
    },
    {
        title: "Fly to High",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/XNEOFF/FlyGuiV3/main/FlyGuiV3.txt"))()',
        password: null,
        risk: "HIGH"
    },
    {
        title: "All Mount V2",
        code: 'loadstring(game:HttpGet(\'https://raw.githubusercontent.com/eryxaryxa/All-Mount-Indonesia/refs/heads/main/eryxhuballmountautowalkuniversal.lua\'))()',
        password: null,
        risk: "EXTREME"
    },
    {
        title: "Animasi No Visual",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/FayintXhub/Animasi-Emote/refs/heads/main/No-Visual"))()',
        password: null,
        risk: "LOW"
    },
    {
        title: "All Mount V3",
        code: 'loadstring(game:HttpGet(\'https://raw.githubusercontent.com/eryxaryxa/All-Mount-Indonesia/refs/heads/main/eryxhuballmountindonesianew.lua\'))()',
        password: null,
        risk: "EXTREME"
    },
    {
        title: "All Mount Noir",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/noirexe/pree/refs/heads/main/mainmap.lua"))()',
        password: "NOIR_PW8SYRDIM",
        risk: "EXTREME"
    },
    {
        title: "Infinity Yield",
        code: 'loadstring(game:HttpGet(\'https://raw.githubusercontent.com/EdgeIY/infiniteyield/master/source\'))()',
        password: null,
        risk: "HIGH"
    }
];

// DOM Elements
const warningModal = document.getElementById('warningModal');
const acceptRiskBtn = document.getElementById('acceptRisk');
const leaveSiteBtn = document.getElementById('leaveSite');
const scriptsContainer = document.getElementById('scriptsContainer');
const searchInput = document.getElementById('searchInput');
const scriptCount = document.getElementById('scriptCount');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');

// Show warning modal on load
document.addEventListener('DOMContentLoaded', function() {
    warningModal.style.display = 'flex';
});

// Modal button events
acceptRiskBtn.addEventListener('click', function() {
    warningModal.style.display = 'none';
    document.querySelector('.container').style.opacity = '1';
    renderScripts(scripts);
});

leaveSiteBtn.addEventListener('click', function() {
    window.location.href = 'https://www.roblox.com';
});

// Render scripts function
function renderScripts(scriptsArray) {
    scriptsContainer.innerHTML = '';
    scriptCount.textContent = scriptsArray.length;
    
    scriptsArray.forEach(script => {
        const scriptCard = document.createElement('div');
        scriptCard.className = 'script-card';
        
        scriptCard.innerHTML = `
            <div class="script-header">
                <div class="script-title">${script.title}</div>
                <div class="script-risk">${script.risk} RISK</div>
            </div>
            <div class="script-code">${script.code}</div>
            ${script.password ? `
                <div class="script-password">
                    <div class="password-label">get key here:</div>
                    <div class="password-value">${script.password}</div>
                </div>
            ` : ''}
            <button class="copy-btn" data-code="${script.code}">
                <i class="fas fa-copy"></i> COPY CHEAT SCRIPT
            </button>
        `;
        
        scriptsContainer.appendChild(scriptCard);
    });
    
    // Add event listeners to copy buttons
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', function() {
            const code = this.getAttribute('data-code');
            copyToClipboard(code);
            showNotification('CHEAT SCRIPT COPIED TO CLIPBOARD!');
            
            // Visual feedback
            this.innerHTML = '<i class="fas fa-check"></i> COPIED!';
            this.classList.add('copied');
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-copy"></i> COPY CHEAT SCRIPT';
                this.classList.remove('copied');
            }, 2000);
        });
    });
}

// Copy to clipboard function
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Show notification
function showNotification(message) {
    notificationText.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Search functionality
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredScripts = scripts.filter(script => 
        script.title.toLowerCase().includes(searchTerm) || 
        script.code.toLowerCase().includes(searchTerm) ||
        (script.password && script.password.toLowerCase().includes(searchTerm))
    );
    
    renderScripts(filteredScripts);
});

// Initial render (after accepting risk)
renderScripts(scripts);