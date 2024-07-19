document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.hidden[data-animate]');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationClasses = entry.target.getAttribute('data-animate').split(' ');
          entry.target.classList.remove('hidden');
          animationClasses.forEach(animationClass => entry.target.classList.add(animationClass));
          observer.unobserve(entry.target); // Optional: Stop observing once the animation is applied
        }
      });
    }, { threshold: 0.1 }); // 0.1 means the callback will be called when 10% of the element is visible

    elements.forEach(element => {
      observer.observe(element);
    });
  });