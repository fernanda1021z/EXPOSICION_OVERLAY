function showTab(n) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById('tab' + n).style.display = 'block';

    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab')[n].classList.add('active');
}

function toggleFullOverlay() {
    const overlay = document.getElementById('fullOverlay');
    overlay.style.display = (overlay.style.display === 'flex') ? 'none' : 'flex';
}

// Slider interactivo
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('opacitySlider');
    const valueSpan = document.getElementById('opacityValue');
    const dynamicOverlay = document.getElementById('dynamicOverlay');

    if (slider) {
        slider.addEventListener('input', function() {
            const value = this.value;
            valueSpan.textContent = value;
            dynamicOverlay.style.opacity = value / 100;
        });
    }

    document.getElementById('tab0').style.display = 'block';
});