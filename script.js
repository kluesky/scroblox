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

// Script data dengan kategori dan status
const scripts = [
    // Mount Scripts
    {
        title: "Mount - HTS",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/FayintXhub/Mount-HTS/refs/heads/main/MountHTS"))()',
        password: null,
        risk: "MEDIUM",
        category: "mount",
        status: "🟢",
        description: "(Fast + No Delay)"
    },
    {
        title: "ESP and More",
        code: 'loadstring(game:HttpGet("https://pastefy.app/5AqReOmv/raw"))()',
        password: null,
        risk: "Not Detected",
        category: "Universal",
        status: "🟢",
        description: ""
    },
    {
        title: "Mount - Parvata",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/FayintXhub/Mount-Parvata/refs/heads/main/MountPARVATA"))()',
        password: null,
        risk: "MEDIUM",
        category: "mount",
        status: "🟢",
        description: "(Free Private Server)"
    },
    {
        title: "Mount - Kawah Terjun",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/FayintXhub/Mount-KawahTerjun/refs/heads/main/MountKawahTerjun"))()',
        password: null,
        risk: "MEDIUM",
        category: "mount",
        status: "🟢",
        description: "Mode hard per Summit x300 | Delay 3 menit per Summit"
    },
    {
        title: "Mount - Labirin",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/FayintXhub/Mount-Labirin/refs/heads/main/MountLabirin"))()',
        password: null,
        risk: "HIGH",
        category: "mount",
        status: "🟡",
        description: "(Free Private Server) | (Anticheat)"
    },
    {
        title: "Mount - Lembayana",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/FayintXhub/Mount-Lembayana/refs/heads/main/MountLembayana"))()',
        password: null,
        risk: "MEDIUM",
        category: "mount",
        status: "🟢",
        description: "(Free Private Server) | Note : wajib pake Fly di menu Cheat"
    },
    {
        title: "Mount - Ckptw",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/FayintXhub/Mount-Ckptw/refs/heads/main/MountCkptw"))()',
        password: null,
        risk: "HIGH",
        category: "mount",
        status: "🟡",
        description: "(Anticheat)"
    },
    {
        title: "Hell - Expedition",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/FayintXhub/Hell-Expedition/refs/heads/main/HellExpedition"))()',
        password: null,
        risk: "MEDIUM",
        category: "mount",
        status: "🟢",
        description: "(Free Private Server)"
    },
    {
        title: "Mount - Sumbing",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/FayintXhub/Mount-Sumbing/refs/heads/main/MountSumbing"))()',
        password: null,
        risk: "MEDIUM",
        category: "mount",
        status: "🟢",
        description: ""
    },
    {
        title: "Mount - Gampil",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/FayintXhub/Mount-Gampil/refs/heads/main/MountGampil"))()',
        password: null,
        risk: "MEDIUM",
        category: "mount",
        status: "🟢",
        description: "(Fast + No Delay)"
    },
    {
        title: "Neraka - Journey",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/FayintXhub/Neraka-Journey/refs/heads/main/NerakaJourney"))()',
        password: null,
        risk: "MEDIUM",
        category: "mount",
        status: "🟢",
        description: "(Free Private Server) | Delay 10 menit per Summit"
    },
    {
        title: "Gunung Basahan by Tinoooo",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/FayintXhub/Mount-Basahan/refs/heads/main/MountBasahan"))()',
        password: null,
        risk: "MEDIUM",
        category: "mount",
        status: "🟡",
        description: "[ VIP REQUEST ]",
        vip: true
    },

    // Other Scripts (script sebelumnya)
    {
        title: "Teleport Player [ Modern ]",
        code: 'loadstring(game:HttpGet("https://pastefy.app/iJBoShEK/raw"))()',
        password: null,
        risk: "Not Detected",
        category: "other",
        status: "🟢"
    },
    {
        title: "Hapus Objek",
        code: 'loadstring(game:HttpGet("https://rawscripts.net/raw/Universal-Script-Unanchored-Parts-Controller-Gui-47141"))()',
        password: null,
        risk: "MEDIUM",
        category: "other",
        status: "🟢"
    },
    {
        title: "Tarik/Geser Objek",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/FayintXhub/Bring-Parts/refs/heads/main/BringParts"))()',
        password: null,
        risk: "MEDIUM",
        category: "other",
        status: "🟢"
    },
    {
        title: "Invisible Hack",
        code: 'loadstring(game:HttpGet("https://rawscripts.net/raw/Universal-Script-Invisible-script-20557"))()',
        password: null,
        risk: "HIGH",
        category: "other",
        status: "🟢"
    },
    {
        title: "Fly to High",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/XNEOFF/FlyGuiV3/main/FlyGuiV3.txt"))()',
        password: null,
        risk: "HIGH",
        category: "other",
        status: "🟢"
    },
    {
        title: "All Mount V2",
        code: 'loadstring(game:HttpGet(\'https://raw.githubusercontent.com/eryxaryxa/All-Mount-Indonesia/refs/heads/main/eryxhuballmountautowalkuniversal.lua\'))()',
        password: "donotscreenshot",
        risk: "EXTREME",
        category: "other",
        status: "🟢"
    },
    {
        title: "Animasi No Visual",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/FayintXhub/Animasi-Emote/refs/heads/main/No-Visual"))()',
        password: null,
        risk: "LOW",
        category: "other",
        status: "🟢"
    },
    {
        title: "All Mount V3",
        code: 'loadstring(game:HttpGet(\'https://raw.githubusercontent.com/eryxaryxa/All-Mount-Indonesia/refs/heads/main/eryxhuballmountindonesianew.lua\'))()',
        password: "jangandisebarkocak",
        risk: "EXTREME",
        category: "other",
        status: "🟢"
    },
    {
        title: "All Mount Noir",
        code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/noirexe/pree/refs/heads/main/mainmap.lua"))()',
        password: "NOIR_PW8SYRDIM",
        risk: "EXTREME",
        category: "other",
        status: "🟢"
    },
    {
        title: "Infinity Yield",
        code: 'loadstring(game:HttpGet(\'https://raw.githubusercontent.com/EdgeIY/infiniteyield/master/source\'))()',
        password: null,
        risk: "HIGH",
        category: "other",
        status: "🟢"
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
const tabButtons = document.querySelectorAll('.tab-btn');

let currentCategory = 'all';
let currentScripts = [...scripts];

// Show warning modal on load
document.addEventListener('DOMContentLoaded', function() {
    warningModal.style.display = 'flex';
});

// Modal button events
acceptRiskBtn.addEventListener('click', function() {
    warningModal.style.display = 'none';
    document.querySelector('.container').style.opacity = '1';
    renderScripts(currentScripts);
});

leaveSiteBtn.addEventListener('click', function() {
    window.location.href = 'https://www.roblox.com';
});

// Tab functionality
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        currentCategory = this.getAttribute('data-category');
        filterScripts();
    });
});

// Filter scripts based on category and search
function filterScripts() {
    let filtered = scripts;
    
    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(script => script.category === currentCategory);
    }
    
    // Filter by search term
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(script => 
            script.title.toLowerCase().includes(searchTerm) || 
            script.code.toLowerCase().includes(searchTerm) ||
            (script.password && script.password.toLowerCase().includes(searchTerm)) ||
            (script.description && script.description.toLowerCase().includes(searchTerm))
        );
    }
    
    currentScripts = filtered;
    renderScripts(currentScripts);
}

// Render scripts function
function renderScripts(scriptsArray) {
    scriptsContainer.innerHTML = '';
    scriptCount.textContent = scriptsArray.length;
    
    scriptsArray.forEach(script => {
        const scriptCard = document.createElement('div');
        scriptCard.className = 'script-card';
        scriptCard.setAttribute('data-category', script.category);
        
        const statusClass = script.status === '🟢' ? 'stable' : 
                           script.status === '🟡' ? 'unstable' : 
                           script.status === '🛑' ? 'error' : 'stable';
        
        scriptCard.innerHTML = `
            <div class="script-header">
                <div class="script-title">${script.title}</div>
                <div class="script-status">
                    <span class="status-badge ${statusClass}">${script.status}</span>
                    ${script.vip ? '<span class="status-badge vip">💎</span>' : ''}
                </div>
            </div>
            ${script.description ? `
                <div class="script-description">${script.description}</div>
            ` : ''}
            <div class="script-code">${script.code}</div>
            ${script.password ? `
                <div class="script-password">
                    <div class="password-label">PASSWORD REQUIRED:</div>
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
    filterScripts();
});

// Initial render (after accepting risk)
renderScripts(scripts);
