// SMK Data with Referral Codes - Daftar Sekolah Undangan Provinsi Jawa Barat
const smkData = [
    // Kolom Kiri (1-50)
    { id: 1, name: "SMKS BISNIS INFORMATIKA BEKASI", location: "Jawa Barat", referralCode: "SMKSBISINFO" },
    { id: 2, name: "SMKS MUTIARA BARU BEKASI", location: "Jawa Barat", referralCode: "SMKSMUTBAR" },
    { id: 3, name: "SMKS BINA KARYA MANDIRI BEKASI", location: "Jawa Barat", referralCode: "SMKSBKM" },
    { id: 4, name: "SMKS AL BAHRI", location: "Jawa Barat", referralCode: "SMKSALBAHRI" },
    { id: 5, name: "SMKS TINTA EMAS INDONESIA", location: "Jawa Barat", referralCode: "SMKSTINTAEMAS" },
    { id: 6, name: "SMKS PERMATA BANGSA", location: "Jawa Barat", referralCode: "SMKSPERMATA" },
    { id: 7, name: "SMKS BINA KARYA MANDIRI 2", location: "Jawa Barat", referralCode: "SMKSBKM2" },
    { id: 8, name: "SMKS MAHANAIM", location: "Jawa Barat", referralCode: "SMKSMAHANAIM" },
    { id: 9, name: "SMKS KARYA BAHANA MANDIRI", location: "Jawa Barat", referralCode: "SMKSKBM" },
    { id: 10, name: "SMK KARYA BAHANA MANDIRI 2", location: "Jawa Barat", referralCode: "SMKKBM2" },
    { id: 11, name: "SMK GEMA KARYA BAHANA", location: "Jawa Barat", referralCode: "SMKGKB" },
    { id: 12, name: "SMK INDUSTRI KREATIF", location: "Jawa Barat", referralCode: "SMKINDKRE" },
    { id: 13, name: "SMK BINA SISWA UTAMA", location: "Jawa Barat", referralCode: "SMKBINSIS" },
    { id: 14, name: "SMK FLORA", location: "Jawa Barat", referralCode: "SMKFLORA" },
    { id: 15, name: "SMK BISNIS DAN TEKNOLOGI", location: "Jawa Barat", referralCode: "SMKBISTEK" },
    { id: 16, name: "SMK PATRIOT 2", location: "Jawa Barat", referralCode: "SMKPATR2" },
    { id: 17, name: "SMK MANDIRI", location: "Jawa Barat", referralCode: "SMKMANDIRI" },
    { id: 18, name: "SMK PONDOK UNGU PERMAI", location: "Jawa Barat", referralCode: "SMKPUP" },
    { id: 19, name: "SMK TERATAI PUTIH GLOBAL 2", location: "Jawa Barat", referralCode: "SMKTPG2" },
    { id: 20, name: "SMK EKUIN PANGJAY", location: "Jawa Barat", referralCode: "SMKEKUIN" },
    { id: 21, name: "SMK YADIKA 9", location: "Jawa Barat", referralCode: "SMKYADIKA9" },
    { id: 22, name: "SMK GLOBAL PERSADA", location: "Jawa Barat", referralCode: "SMKGLOBPER" },
    { id: 23, name: "SMK BINA MANDIRI", location: "Jawa Barat", referralCode: "SMKBINAMAND" },
    { id: 24, name: "SMK BHAKTI MANDIRI", location: "Jawa Barat", referralCode: "SMKBHKMAND" },
    { id: 25, name: "SMK DASTAMACO", location: "Jawa Barat", referralCode: "SMKDASTAM" },
    { id: 26, name: "SMK KARYA GUNA 1", location: "Jawa Barat", referralCode: "SMKKG1" },
    { id: 27, name: "SMK KARYA GUNA 2", location: "Jawa Barat", referralCode: "SMKKG2" },
    { id: 28, name: "SMK KARYA BHAKTI 1", location: "Jawa Barat", referralCode: "SMKKB1" },
    { id: 29, name: "SMK TEKNOLOGI NASIONAL", location: "Jawa Barat", referralCode: "SMKTEKNAS" },
    { id: 30, name: "SMK ANANDA", location: "Jawa Barat", referralCode: "SMKANANDA" },
    { id: 31, name: "SMK GLOBAL PERSADA MANDIRI", location: "Jawa Barat", referralCode: "SMKGPM" },
    { id: 32, name: "SMK BHAKTI BANGSA", location: "Jawa Barat", referralCode: "SMKBHKBGS" },
    { id: 33, name: "SMK AL MUHADJIRIN 1", location: "Jawa Barat", referralCode: "SMKALMUH1" },
    { id: 34, name: "SMK AL MUHADJIRIN 2", location: "Jawa Barat", referralCode: "SMKALMUH2" },
    { id: 35, name: "SMK MUTIARA 17 AGUSTUS", location: "Jawa Barat", referralCode: "SMKMUT17" },
    { id: 36, name: "SMK GLOBAL PRIMA IS", location: "Jawa Barat", referralCode: "SMKGLOBPRI" },
    { id: 37, name: "SMK BANI SALEH", location: "Jawa Barat", referralCode: "SMKBANSAL" },
    { id: 38, name: "SMK AL IKHLAS", location: "Jawa Barat", referralCode: "SMKALIKHLAS" },
    { id: 39, name: "SMK BANGUN PERSADA", location: "Jawa Barat", referralCode: "SMKBANGPR" },
    { id: 40, name: "SMK BHAKTI PERSADA", location: "Jawa Barat", referralCode: "SMKBHKPER" },
    { id: 41, name: "SMK BINA HUSADA MANDIRI", location: "Jawa Barat", referralCode: "SMKBHM" },
    { id: 42, name: "SMK BINA INSAN KAMIL", location: "Jawa Barat", referralCode: "SMKBIK" },
    { id: 43, name: "SMK BUNDA AUNI", location: "Jawa Barat", referralCode: "SMKBUNDAUNI" },
    { id: 44, name: "SMK GUNA BANGSA", location: "Jawa Barat", referralCode: "SMKGUNBGS" },
    { id: 45, name: "SMK HUTAMA", location: "Jawa Barat", referralCode: "SMKHUTAMA" },
    { id: 46, name: "SMK INSAN BHAKTI MULIA", location: "Jawa Barat", referralCode: "SMKIBM" },
    { id: 47, name: "SMK KARYA MANDIRI", location: "Jawa Barat", referralCode: "SMKKARMAND" },
    { id: 48, name: "SMK MITRA BHAKTI HUSADA", location: "Jawa Barat", referralCode: "SMKMBH" },
    { id: 49, name: "SMK NUSA BHAKTI", location: "Jawa Barat", referralCode: "SMKNUSBHK" },
    { id: 50, name: "SMK YADIKA 11", location: "Jawa Barat", referralCode: "SMKYADIKA11" },
    // Kolom Kanan (1-50)
    { id: 51, name: "SMKS AL AMIN CIBARUSAH", location: "Jawa Barat", referralCode: "SMKSALAMIN" },
    { id: 52, name: "SMKS AL ISHLAH", location: "Jawa Barat", referralCode: "SMKSALISHLAH" },
    { id: 53, name: "SMKS AL-FUDHOLA", location: "Jawa Barat", referralCode: "SMKSALFUD" },
    { id: 54, name: "SMKS AL-MANAR ISLAMIC SCHOOL", location: "Jawa Barat", referralCode: "SMKSALMANAR" },
    { id: 55, name: "SMKS ARMANIYAH", location: "Jawa Barat", referralCode: "SMKSARMAN" },
    { id: 56, name: "SMKS ATTAQWA 01 TARUMAJAYA", location: "Jawa Barat", referralCode: "SMKSATQ01" },
    { id: 57, name: "SMKS ATTAQWA CABANGBUNGIN", location: "Jawa Barat", referralCode: "SMKSATQCB" },
    { id: 58, name: "SMKS BANI ROSA INSANI", location: "Jawa Barat", referralCode: "SMKSBANIROSS" },
    { id: 59, name: "SMKS BHINEKA TUNGGAL IKA", location: "Jawa Barat", referralCode: "SMKSBHINEK" },
    { id: 60, name: "SMKS BINA ILMU MANDIRI", location: "Jawa Barat", referralCode: "SMKSBIM" },
    { id: 61, name: "SMKS BINA INDUSTRI", location: "Jawa Barat", referralCode: "SMKSBININD" },
    { id: 62, name: "SMKS BINATAMA", location: "Jawa Barat", referralCode: "SMKSBINATAMA" },
    { id: 63, name: "SMKS BM ABDI NEGARA 2 CIBARUSAH BM", location: "Jawa Barat", referralCode: "SMKSBMABDI" },
    { id: 64, name: "SMKS BRAHARI", location: "Jawa Barat", referralCode: "SMKSBRAHARI" },
    { id: 65, name: "SMKS CITRA KARYA", location: "Jawa Barat", referralCode: "SMKSCITRAKY" },
    { id: 66, name: "SMKS CITRA MUTIARA", location: "Jawa Barat", referralCode: "SMKSCITRAMUT" },
    { id: 67, name: "SMKS DEWANTARA", location: "Jawa Barat", referralCode: "SMKSDEWANT" },
    { id: 68, name: "SMKS EKUINTEK", location: "Jawa Barat", referralCode: "SMKSEKUINT" },
    { id: 69, name: "SMKS EL-AMIN", location: "Jawa Barat", referralCode: "SMKSELAMIN" },
    { id: 70, name: "SMKS GLOBAL TEKNOLOGI", location: "Jawa Barat", referralCode: "SMKSGLOBTEK" },
    { id: 71, name: "SMKS HIJAU MUDA", location: "Jawa Barat", referralCode: "SMKSHIJMUD" },
    { id: 72, name: "SMKS INDUSTRI NASIONAL 1", location: "Jawa Barat", referralCode: "SMKSINDNAS1" },
    { id: 73, name: "SMKS INDUSTRI NUSANTARA BABELAN", location: "Jawa Barat", referralCode: "SMKSINDNUSB" },
    { id: 74, name: "SMKS INFORMATIKA AMANAH BANGSA", location: "Jawa Barat", referralCode: "SMKSINFAB" },
    { id: 75, name: "SMKS INSAN MADANI", location: "Jawa Barat", referralCode: "SMKSINSMAD" },
    { id: 76, name: "SMKS ISLAM AL MUHAJIRIN BOARDING SCHOOL", location: "Jawa Barat", referralCode: "SMKSILAMBS" },
    { id: 77, name: "SMKS ISLAM AN NUUR", location: "Jawa Barat", referralCode: "SMKSISANNUR" },
    { id: 78, name: "SMKS ISLAM DARURROHMAN", location: "Jawa Barat", referralCode: "SMKSIDARROH" },
    { id: 79, name: "SMKS IT ATTAQWA 9", location: "Jawa Barat", referralCode: "SMKSITATQ9" },
    { id: 80, name: "SMKS IT ATTAQWA PUSAT", location: "Jawa Barat", referralCode: "SMKSITATQP" },
    { id: 81, name: "SMKS IT FITRAH HANNIAH", location: "Jawa Barat", referralCode: "SMKSITFH" },
    { id: 82, name: "SMKS KARYA BHAKTI 4 KEDUNGWARINGIN", location: "Jawa Barat", referralCode: "SMKSKB4KDW" },
    { id: 83, name: "SMKS KARYA PEMBAHARUAN", location: "Jawa Barat", referralCode: "SMKSKARPEM" },
    { id: 84, name: "SMKS KESEHATAN EL HURRIYAH", location: "Jawa Barat", referralCode: "SMKSKESELHUR" },
    { id: 85, name: "SMKS KESEHATAN FAHD ISLAMIC SCHOOL", location: "Jawa Barat", referralCode: "SMKSKESFAHD" },
    { id: 86, name: "SMKS MAGDA NUSANTARA", location: "Jawa Barat", referralCode: "SMKSMAGDANUS" },
    { id: 87, name: "SMKS MANTIYAH", location: "Jawa Barat", referralCode: "SMKSMANTIY" },
    { id: 88, name: "SMKS MEKAR MURNI", location: "Jawa Barat", referralCode: "SMKSMEKARM" },
    { id: 89, name: "SMKS MITRA INDUSTRI 03", location: "Jawa Barat", referralCode: "SMKSMITIND03" },
    { id: 90, name: "SMKS MITRA KARYA", location: "Jawa Barat", referralCode: "SMKSMITKAR" },
    { id: 91, name: "SMKS NURUL AZHAR", location: "Jawa Barat", referralCode: "SMKSNURULAZ" },
    { id: 92, name: "SMKS PUJA BANGSA BM", location: "Jawa Barat", referralCode: "SMKSPUJABM" },
    { id: 93, name: "SMKS SMART", location: "Jawa Barat", referralCode: "SMKSSMART" },
    { id: 94, name: "SMKS TEKNOLOGI INDUSTRI MANDIRI", location: "Jawa Barat", referralCode: "SMKSTEKINDM" },
    { id: 95, name: "SMKS TEKNOLOGI PELITA KARYA", location: "Jawa Barat", referralCode: "SMKSTEKPELK" },
    { id: 96, name: "SMKS TEKNOLOGI PEMBANGUNAN", location: "Jawa Barat", referralCode: "SMKSTEKPEMB" },
    { id: 97, name: "SMKS TONS", location: "Jawa Barat", referralCode: "SMKSTONS" },
    { id: 98, name: "SMKS TRISIMA", location: "Jawa Barat", referralCode: "SMKSTRISIMA" },
    { id: 99, name: "SMKS YADIKA 8 TAMBUN SELATAN", location: "Jawa Barat", referralCode: "SMKSYADIKA8" },
    { id: 100, name: "SMKS YAPIN BEKASI", location: "Jawa Barat", referralCode: "SMKSYAPINBEK" },
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
