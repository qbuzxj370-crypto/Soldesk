document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        const overlay = container.querySelector('.overlay');
        container.addEventListener('mousemove', function (e) {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = -1 / 5 * y + 20;
            const rotateY = 4 / 30 * x - 20;

            overlay.style.backgroundRepeat = 'no-repeat';
            overlay.style.backgroundPosition = `-${x / 5 + y / 5}px`;

            overlay.style.opacity = '1';
            container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        container.addEventListener('mouseleave', function () {
            overlay.style.opacity = '';
            overlay.style.backgroundPosition = `100%`;
            container.style.transform = 'perspective(350px) rotateY(0deg) rotateX(0deg)';
        });

        // Ensure initial state is controlled by CSS; don't forcibly hide overlay here.
        container.style.transform = 'perspective(350px) rotateY(0deg) rotateX(0deg)';
    });
});
