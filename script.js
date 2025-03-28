// YouTube API entegrasyonu için örnek (gerçek API key gerektirir)
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    
    // Logo animasyonu
    logo.addEventListener('click', () => {
        logo.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            logo.style.transform = 'rotate(0)';
        }, 1000);
    });
    
    // YouTube API için placeholder (gerçekte API key gerekli)
    console.log("YouTube API entegrasyonu buraya gelecek!");
});

// Gerçek uygulamada YouTube Data API v3 ile son videolar çekilebilir