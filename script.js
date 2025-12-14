// SMK Data with Referral Codes - Daftar Sekolah Undangan Kab. Bekasi & Kota Bekasi
const smkData = [
    // Kab. Bekasi
    { id: 1, name: "SMKS 10 November Cibitung", location: "Kab. Bekasi", referralCode: "SMKS10NOV" },
    { id: 2, name: "SMKS 10 November Tambun Selatan", location: "Kab. Bekasi", referralCode: "SMKS10NOVTS" },
    { id: 3, name: "SMKS 11 Maret Cikarang Barat", location: "Kab. Bekasi", referralCode: "SMKS11MART" },
    { id: 4, name: "SMKS Attaqwa 05 Kebalen", location: "Kab. Bekasi", referralCode: "SMKSATQ05" },
    { id: 5, name: "SMKS Bina Mitra", location: "Kab. Bekasi", referralCode: "SMKSBINMIT" },
    { id: 6, name: "SMKS Bina Nasional Informatika", location: "Kab. Bekasi", referralCode: "SMKSBNI" },
    { id: 7, name: "SMKS Bina Nusa", location: "Kab. Bekasi", referralCode: "SMKSBINUS" },
    { id: 8, name: "SMKS Bina Patriot", location: "Kab. Bekasi", referralCode: "SMKSBINPAT" },
    { id: 9, name: "SMKS Bina Prestasi", location: "Kab. Bekasi", referralCode: "SMKSBINPRE" },
    { id: 10, name: "SMKS Boedi Luhur", location: "Kab. Bekasi", referralCode: "SMKSBOEDI" },
    { id: 11, name: "SMKS Budi Perkasa Bekasi", location: "Kab. Bekasi", referralCode: "SMKSBDPRKS" },
    { id: 12, name: "SMKS Cibitung 1", location: "Kab. Bekasi", referralCode: "SMKSCIBI1" },
    { id: 13, name: "SMKS Dewantara 2", location: "Kab. Bekasi", referralCode: "SMKSDEWA2" },
    { id: 14, name: "SMKS Farmasi Bintang Harapan", location: "Kab. Bekasi", referralCode: "SMKSFARBH" },
    { id: 15, name: "SMKS Garuda Nusantara", location: "Kab. Bekasi", referralCode: "SMKSGARNUS" },
    { id: 16, name: "SMKS Global Mulia", location: "Kab. Bekasi", referralCode: "SMKSGLOBAL" },
    { id: 17, name: "SMKS Hasanah Fathimiyah", location: "Kab. Bekasi", referralCode: "SMKSHASFA" },
    { id: 18, name: "SMKS HS AGUNG", location: "Kab. Bekasi", referralCode: "SMKSHSAG" },
    { id: 19, name: "SMKS ISLAM AL AMIN", location: "Kab. Bekasi", referralCode: "SMKSISLAM" },
    { id: 20, name: "SMKS IT NURUL QOLBI", location: "Kab. Bekasi", referralCode: "SMKSITNQ" },
    { id: 21, name: "SMKS KARYA BANGSA", location: "Kab. Bekasi", referralCode: "SMKSKARBG" },
    { id: 22, name: "SMKS KARYA BHAKTI 2", location: "Kab. Bekasi", referralCode: "SMKSKARBH2" },
    { id: 23, name: "SMKS Talenta Bangsa", location: "Kab. Bekasi", referralCode: "SMKSTALENT" },
    { id: 24, name: "SMKS Taruna Bhakti", location: "Kab. Bekasi", referralCode: "SMKSTARBH" },
    { id: 25, name: "SMKS Teknikom Cikarang", location: "Kab. Bekasi", referralCode: "SMKSTEKNIK" },
    { id: 26, name: "SMKS Telekomunikasi Telesandi", location: "Kab. Bekasi", referralCode: "SMKSTELES" },
    { id: 27, name: "SMKS TRIDAYA", location: "Kab. Bekasi", referralCode: "SMKSTRIDY" },
    { id: 28, name: "SMKS TUNAS TEKNOLOGI", location: "Kab. Bekasi", referralCode: "SMKSTUTEK" },
    { id: 29, name: "SMKS YADIKA 13", location: "Kab. Bekasi", referralCode: "SMKSYDK13" },
    { id: 30, name: "SMKS YAPIN 02 SETU", location: "Kab. Bekasi", referralCode: "SMKSYAPIN" },
    // Kota Bekasi
    { id: 31, name: "SMK Teratai Putih Global 4", location: "Kota Bekasi", referralCode: "SMKTPG4" },
    { id: 32, name: "SMK Sumber Daya", location: "Kota Bekasi", referralCode: "SMKSMBDY" },
    { id: 33, name: "SMK Daya Utama", location: "Kota Bekasi", referralCode: "SMKDAYUT" },
    { id: 34, name: "SMK Al-Muhtadin", location: "Kota Bekasi", referralCode: "SMKALMUH" },
    { id: 35, name: "SMK Teratai Putih Global 3", location: "Kota Bekasi", referralCode: "SMKTPG3" },
    { id: 36, name: "SMK Widya Nusantara", location: "Kota Bekasi", referralCode: "SMKWIDNUS" },
    { id: 37, name: "SMK Bhakti Kartini", location: "Kota Bekasi", referralCode: "SMKBHKART" },
    { id: 38, name: "SMK Panjatek", location: "Kota Bekasi", referralCode: "SMKPANJAT" },
    { id: 39, name: "SMK Taruna Bangsa", location: "Kota Bekasi", referralCode: "SMKTARBGS" },
    { id: 40, name: "SMK Karya Bhakti 3", location: "Kota Bekasi", referralCode: "SMKKARBH3" },
    { id: 41, name: "SMK Harapan Baru", location: "Kota Bekasi", referralCode: "SMKHARBAR" },
    { id: 42, name: "SMK Travina", location: "Kota Bekasi", referralCode: "SMKTRAVIN" },
    { id: 43, name: "SMK Strada Budi Luhur", location: "Kota Bekasi", referralCode: "SMKSTRADA" },
    { id: 44, name: "SMK Karya Guna Bhakti 1", location: "Kota Bekasi", referralCode: "SMKKGB1" },
    { id: 45, name: "SMK Karya Guna Bhakti 2", location: "Kota Bekasi", referralCode: "SMKKGB2" },
    { id: 46, name: "SMK Mitra Bhakti Husada", location: "Kota Bekasi", referralCode: "SMKMBH" },
    { id: 47, name: "SMK Bhineka Nusantara", location: "Kota Bekasi", referralCode: "SMKBHINEK" },
    { id: 48, name: "SMK Bangun Persada", location: "Kota Bekasi", referralCode: "SMKBANGPR" },
    { id: 49, name: "SMK Sandikta", location: "Kota Bekasi", referralCode: "SMKSANDIK" },
    { id: 50, name: "SMK Merah Putih", location: "Kota Bekasi", referralCode: "SMKMERPUT" },
    { id: 51, name: "SMK Guna Bangsa", location: "Kota Bekasi", referralCode: "SMKGUNBGS" },
    { id: 52, name: "SMK Mitra Nusantara", location: "Kota Bekasi", referralCode: "SMKMITNUS" },
    { id: 53, name: "SMK Pelita Alam", location: "Kota Bekasi", referralCode: "SMKPELITA" },
    { id: 54, name: "SMK PATRIOT 1", location: "Kota Bekasi", referralCode: "SMKPATR1" },
    { id: 55, name: "SMK PATRIOT 3", location: "Kota Bekasi", referralCode: "SMKPATR3" },
    { id: 56, name: "SMK Catur Global", location: "Kota Bekasi", referralCode: "SMKCATGLB" },
    { id: 57, name: "SMK Nurjamilah", location: "Kota Bekasi", referralCode: "SMKNURJAM" },
    { id: 58, name: "SMK Flora", location: "Kota Bekasi", referralCode: "SMKFLORA" },
    { id: 59, name: "SMK Bina siswa utama", location: "Kota Bekasi", referralCode: "SMKBINSIS" },
    { id: 60, name: "SMK BPS K", location: "Kota Bekasi", referralCode: "SMKBPSK" },
    { id: 61, name: "SMK Teratai Putih 1", location: "Kota Bekasi", referralCode: "SMKTP1" },
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
    const animatedElements = document.querySelectorAll('.benefit-card, .step');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});
