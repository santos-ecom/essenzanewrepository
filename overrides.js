// Hijacking logic removed since motoserra/index.html exists and is complete.


// Original Essenza Theme Logic
document.addEventListener('DOMContentLoaded', () => {
    applyEssenzaTheme();
});

function applyEssenzaTheme() {
    const logoImgs = document.querySelectorAll('header img');
    logoImgs.forEach(img => {
        // Enforce Nova Goods logo to prevent it from reverting to anything else
        if (!img.src.includes('novagoods_logo_shopify.png')) {
            img.src = '/assets/novagoods_logo_shopify.png';
            img.style.maxHeight = '65px';
            img.style.width = 'auto';
        }
    });
}
