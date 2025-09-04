// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Matrix background effect
    function createMatrix() {
        const matrix = document.getElementById('matrix');
        if (!matrix) return;
        
        // Clear existing content
        matrix.innerHTML = '';
        
        // Use simpler characters that are more compatible
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        
        for (let i = 0; i < 20; i++) {
            const column = document.createElement('div');
            column.className = 'matrix-column';
            column.style.left = Math.random() * 100 + '%';
            column.style.animationDelay = Math.random() * 3 + 's';
            column.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            let text = '';
            for (let j = 0; j < 20; j++) {
                text += chars[Math.floor(Math.random() * chars.length)] + '\n';
            }
            column.textContent = text;
            
            matrix.appendChild(column);
        }
    }
    
    // Initialize matrix effect
    createMatrix();
    
    // Refresh matrix periodically
    setInterval(function() {
        createMatrix();
    }, 6000);
});
