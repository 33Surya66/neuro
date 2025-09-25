// Neuro Platform - Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('startBtn');
    const featureCards = document.querySelectorAll('.feature-card');
    
    // Add click handler for start button
    startBtn.addEventListener('click', function() {
        // Add animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Show welcome message
        showWelcomeMessage();
    });
    
    // Add hover effects for feature cards
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // Initialize page
    initializePage();
});

function showWelcomeMessage() {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
        max-width: 400px;
        margin: 20px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    `;
    
    modal.innerHTML = `
        <h3 style="color: #4a5568; margin-bottom: 1rem;">Welcome to Neuro!</h3>
        <p style="color: #718096; margin-bottom: 1.5rem;">
            This is a basic template for your neural network visualization platform. 
            You can now customize and extend this foundation to build your AI application.
        </p>
        <button onclick="this.parentElement.parentElement.remove()" 
                style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                       color: white; border: none; padding: 10px 20px; 
                       border-radius: 20px; cursor: pointer;">
            Got it!
        </button>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

function initializePage() {
    // Add subtle animations on page load
    const elements = document.querySelectorAll('.feature-card');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    console.log('Neuro Platform initialized successfully!');
}