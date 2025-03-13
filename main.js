document.getElementById('click-btn').onclick = () => {
    const clickBtn = document.getElementById('click-btn');
    const nextBtn = document.getElementById('next-btn');
    const textElement = document.getElementById('textElement');
    const imageContainer = document.getElementById('img');
    const images = document.querySelectorAll('#img > div'); // Select all direct children of #img

    document.body.classList.remove('container');
    clickBtn.style.display = 'none';
    imageContainer.style.display = 'block';

    // Add 'show' class to trigger transition
    setTimeout(() => {
        images.forEach(image => image.classList.add('show'));
    }, 500);

    // Show text element with animation after image transition
    setTimeout(() => {
        textElement.style.display = 'block';
        textElement.style.animation = 'textAnimate 0.5s forwards';
    }, 1000);

    setTimeout(() => {
        nextBtn.style.display = 'block';
    }, 3000);
};

document.getElementById('next-btn').onclick = () => {
    const nextBtn = document.getElementById('next-btn');
    const textElement = document.getElementById('textElement');
    const images = document.querySelectorAll('#img > div'); // Updated selector
    const card = document.querySelector('.card');
    const btnHadiah = document.querySelector('.btn-hadiah');

    nextBtn.style.display = 'none';
    textElement.style.display = 'none';

    // Hide all images properly
    images.forEach(image => {
        image.style.display = 'none'; // Properly hide each image
        image.classList.remove('show'); // Remove transition class if needed
    });

    card.style.display = 'block';

    // Add typing animation class dynamically
    const typingText = document.querySelector('.typing-text');
    const typingText2 = document.querySelector('.typing-text-2');
    const typingText3 = document.querySelector('.typing-text-3');
    const typingText4 = document.querySelector('.typing-text-4');
    
    // Start typing effect for the first text
    typingText.style.width = '0';
    typingText.classList.add('typing-effect');
    
    // Show the second text after the first animation completes
    setTimeout(() => {
        typingText.style.display = 'none'; // Hide the first text
    
        typingText2.style.display = 'inline-block'; // Show the second text
        typingText2.style.width = '0';
        typingText2.classList.add('typing-effect'); // Start typing effect for the second text
    
    }, 5500);
    
    // Show the third text after the second animation completes
    setTimeout(() => {
        typingText2.style.display = 'none'; // Hide the second text
    
        typingText3.style.display = 'inline-block'; // Show the third text
        typingText3.style.width = '0';
        typingText3.classList.add('typing-effect-2'); // Start typing effect for the third text
    
    }, 11000);

    setTimeout(() => {
        typingText3.style.display = 'none'; // Hide the second text
    
        typingText4.style.display = 'inline-block'; // Show the third text
        typingText4.style.width = '0';
        typingText4.classList.add('typing-effect-2'); // Start typing effect for the third text
    
    }, 14150);

    setTimeout(() => { 
    btnHadiah.style.display = 'block';
    }, 18000);
   
};

document.getElementById('btn-hadiah').onclick = () => { 
    const card = document.querySelector('.card');
    const cake = document.querySelector('.cake');
    const textShow = document.querySelector('.text-show');


    card.style.display = 'none';
    cake.style.display = 'block';
    
    setTimeout(() =>  { 
        
        textShow.style.display = 'block';
    }, 2000);

}

