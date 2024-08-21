const images = document.querySelectorAll('img');

const searchImg = (entries, observer) => {
    entries.forEach((entry) => {
       if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src

            observer.unobserve(entry.target)
       }         
    });
}

const optionsForImage = {
    threshold: 1,
}

const imgObserver = new IntersectionObserver(searchImg, optionsForImage)
images.forEach(image => imgObserver.observe(image))