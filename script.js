// SMK Data with Referral Codes
const smkData = [
    { id: 1, name: "SMKN 1 Jakarta", location: "Jakarta Pusat", referralCode: "SMK1JKT" },
    { id: 2, name: "SMKN 2 Bandung", location: "Bandung, Jawa Barat", referralCode: "SMK2BDG" },
    { id: 3, name: "SMKN 3 Surabaya", location: "Surabaya, Jawa Timur", referralCode: "SMK3SBY" },
    { id: 4, name: "SMKN 4 Semarang", location: "Semarang, Jawa Tengah", referralCode: "SMK4SMG" },
    { id: 5, name: "SMKN 5 Yogyakarta", location: "Yogyakarta", referralCode: "SMK5YGY" },
    { id: 6, name: "SMKN 1 Malang", location: "Malang, Jawa Timur", referralCode: "SMK1MLG" },
    { id: 7, name: "SMKN 2 Bekasi", location: "Bekasi, Jawa Barat", referralCode: "SMK2BKS" },
    { id: 8, name: "SMKN 1 Tangerang", location: "Tangerang, Banten", referralCode: "SMK1TNG" },
    { id: 9, name: "SMKN 3 Depok", location: "Depok, Jawa Barat", referralCode: "SMK3DPK" },
    { id: 10, name: "SMKN 1 Bogor", location: "Bogor, Jawa Barat", referralCode: "SMK1BGR" },
    { id: 11, name: "SMKN 2 Cirebon", location: "Cirebon, Jawa Barat", referralCode: "SMK2CRB" },
    { id: 12, name: "SMKN 1 Solo", location: "Solo, Jawa Tengah", referralCode: "SMK1SLO" },
    { id: 13, name: "SMKN 4 Makassar", location: "Makassar, Sulawesi Selatan", referralCode: "SMK4MKS" },
    { id: 14, name: "SMKN 1 Denpasar", location: "Denpasar, Bali", referralCode: "SMK1DPS" },
    { id: 15, name: "SMKN 2 Medan", location: "Medan, Sumatera Utara", referralCode: "SMK2MDN" },
    { id: 16, name: "SMKN 1 Palembang", location: "Palembang, Sumatera Selatan", referralCode: "SMK1PLB" },
    { id: 17, name: "SMKN 3 Padang", location: "Padang, Sumatera Barat", referralCode: "SMK3PDG" },
    { id: 18, name: "SMKN 1 Pekanbaru", location: "Pekanbaru, Riau", referralCode: "SMK1PKU" },
    { id: 19, name: "SMKN 2 Banjarmasin", location: "Banjarmasin, Kalimantan Selatan", referralCode: "SMK2BJM" },
    { id: 20, name: "SMKN 1 Samarinda", location: "Samarinda, Kalimantan Timur", referralCode: "SMK1SMD" },
];

let selectedSMK = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSMKList(smkData);
    setupSearch();
});

// Render SMK List
function renderSMKList(data) {
    const smkList = document.getElementById('smkList');
    smkList.innerHTML = '';

    if (data.length === 0) {
        smkList.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 15px; opacity: 0.5;"></i>
                <p>Tidak ada SMK yang ditemukan</p>
            </div>
        `;
        return;
    }

    data.forEach(smk => {
        const card = document.createElement('div');
        card.className = `smk-card ${selectedSMK?.id === smk.id ? 'selected' : ''}`;
        card.innerHTML = `
            <h4><i class="fas fa-school" style="margin-right: 8px; color: #667eea;"></i>${smk.name}</h4>
            <p><i class="fas fa-map-marker-alt" style="margin-right: 5px;"></i>${smk.location}</p>
        `;
        card.addEventListener('click', () => selectSMK(smk));
        smkList.appendChild(card);
    });
}

// Select SMK
function selectSMK(smk) {
    selectedSMK = smk;
    
    // Update UI
    document.querySelectorAll('.smk-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');

    // Show referral code
    const referralDisplay = document.getElementById('referralDisplay');
    const referralCode = document.getElementById('referralCode');
    
    referralCode.textContent = smk.referralCode;
    referralDisplay.classList.add('show');

    // Reset copy button
    const copyBtn = document.getElementById('copyBtn');
    copyBtn.classList.remove('copied');
    copyBtn.innerHTML = '<i class="fas fa-copy"></i> Salin';

    // Scroll to referral display
    referralDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Copy Referral Code
function copyReferralCode() {
    if (!selectedSMK) return;

    const referralCode = selectedSMK.referralCode;
    navigator.clipboard.writeText(referralCode).then(() => {
        const copyBtn = document.getElementById('copyBtn');
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Tersalin!';

        // Reset after 2 seconds
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = '<i class="fas fa-copy"></i> Salin';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Gagal menyalin kode. Silakan salin manual: ' + referralCode);
    });
}

// Setup Search
function setupSearch() {
    const searchInput = document.getElementById('smkSearch');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query === '') {
            renderSMKList(smkData);
            return;
        }

        const filtered = smkData.filter(smk => 
            smk.name.toLowerCase().includes(query) || 
            smk.location.toLowerCase().includes(query) ||
            smk.referralCode.toLowerCase().includes(query)
        );

        renderSMKList(filtered);
    });
}

// Add smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.benefit-card, .step, .smk-card');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});
