document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('show');
  });
}); 

// Hent alle produktboksene
const productBoxes = document.querySelectorAll('.product-box');
const overlay = document.getElementById('product-overlay');
const closeBtn = document.querySelector('.close-btn');

const mainOverlayImage = document.getElementById('main-overlay-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayDescription = document.getElementById('overlay-description');
    const overlayExtraDescription = document.getElementById('overlay-extra-description');

    function resetActiveThumbnail() {
        thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
    }

    function showProductDetails(productId) {
      if (productId === '1') {
          mainOverlayImage.src = 'pics/skjærebrett/product1.jpeg';
          thumbnails[0].src = 'pics/skjærebrett/product1.jpeg';
          thumbnails[1].src = 'pics/skjærebrett/product1-2.jpeg';
          thumbnails[2].src = 'pics/skjærebrett/product1-3.jpeg';
          overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
          overlayDescription.textContent = 'Dette er et vakkert skjærebrett laget av eukalyptus og akasie.';
          overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 1" og ønsket leveringsadresse.';
      } else if (productId === '2') {
        mainOverlayImage.src = 'pics/skjærebrett/product2.JPG';
        thumbnails[0].src = 'pics/skjærebrett/product2.JPG';
        thumbnails[1].src = 'pics/skjærebrett/product2-2.JPG';
        thumbnails[2].src = 'pics/skjærebrett/product2-3.JPG';
        overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
        overlayDescription.textContent = 'Et skjærebrett laget av eukalyptus og akasie.';
        overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 2" og ønsket leveringsadresse.';
    } else if (productId === '3') {
        mainOverlayImage.src= 'pics/skjærebrett/product3.jpeg';
        thumbnails[0].src = 'pics/skjærebrett/product3.jpeg';
        thumbnails[1].src = 'pics/skjærebrett/product3-2.jpeg';
        thumbnails[2].src = 'pics/skjærebrett/product3-3.jpeg';
        overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
        overlayDescription.textContent = 'Et skjærebrett laget av eukalyptus og akasie.';
        overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 3" og ønsket leveringsadresse.';
    } else if (productId === '4') {
      mainOverlayImage.src= 'pics/skjærebrett/product4.jpeg';
      thumbnails[0].src = 'pics/skjærebrett/product4.jpeg';
      thumbnails[1].src = 'pics/skjærebrett/product4-2.jpeg';
      thumbnails[2].src = 'pics/skjærebrett/product4-3.jpeg';
      overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
      overlayDescription.textContent = 'Et skjærebrett laget av eukalyptus og akasie.';
      overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 4" og ønsket leveringsadresse.';
    } else if (productId === '5') {
      mainOverlayImage.src= 'pics/skjærebrett/product5.jpeg';
      thumbnails[0].src = 'pics/skjærebrett/product5.jpeg';
      thumbnails[1].src = 'pics/skjærebrett/product5-2.jpeg';
      thumbnails[2].src = 'pics/skjærebrett/product5-3.jpeg';
      overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
      overlayDescription.textContent = 'Et skjærebrett laget av eukalyptus og akasie.';
      overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 5" og ønsket leveringsadresse.';
    } else if (productId === '6') {
      mainOverlayImage.src= 'pics/skjærebrett/product6.jpeg';
      thumbnails[0].src = 'pics/skjærebrett/product6.jpeg';
      thumbnails[1].src = 'pics/skjærebrett/product6-2.jpeg';
      thumbnails[2].src = 'pics/skjærebrett/product6-3.jpeg';
      overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
      overlayDescription.textContent = 'Et skjærebrett laget av eukalyptus og akasie.';
      overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 6" og ønsket leveringsadresse.';
    } else if (productId === '7') {
      mainOverlayImage.src= 'pics/skjærebrett/product7.jpeg';
      thumbnails[0].src = 'pics/skjærebrett/product7.jpeg';
      thumbnails[1].src = 'pics/skjærebrett/product7-2.jpeg';
      thumbnails[2].src = 'pics/skjærebrett/product7-3.jpeg';
      overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
      overlayDescription.textContent = 'Et skjærebrett laget av eukalyptus og akasie.';
      overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 7" og ønsket leveringsadresse.';
    } else if (productId === '8') {
      mainOverlayImage.src= 'pics/skjærebrett/product8.jpeg';
      thumbnails[0].src = 'pics/skjærebrett/product8.jpeg';
      thumbnails[1].src = 'pics/skjærebrett/product8-2.jpeg';
      thumbnails[2].src = 'pics/skjærebrett/product8-3.jpeg';
      overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
      overlayDescription.textContent = 'Et skjærebrett laget av eukalyptus og akasie.';
      overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 8" og ønsket leveringsadresse.';
    } else if (productId === '9') {
      mainOverlayImage.src= 'pics/skjærebrett/product9.jpeg';
      thumbnails[0].src = 'pics/skjærebrett/product9.jpeg';
      thumbnails[1].src = 'pics/skjærebrett/product9-2.jpeg';
      thumbnails[2].src = 'pics/skjærebrett/product9-3.jpeg';
      overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
      overlayDescription.textContent = 'Et skjærebrett laget av eukalyptus og akasie.';
      overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 9" og ønsket leveringsadresse.';
    } else if (productId === '21') {
      mainOverlayImage.src= 'pics/kniver/kniv1.jpeg';
      thumbnails[0].src = 'pics/kniver/kniv1-2.jpeg';
      thumbnails[1].src 
      thumbnails[2].src = 'picser/kniver/kniv1-3.jpeg';
      overlayTitle.textContent = 'kniv i eukalyptus og akasie';
      overlayDescription.textContent = 'En kniv laget av eukalyptus og akasie.';
      overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "KNIV 1" og ønsket leveringsadresse.';
    } else if (productId === '22') {
      mainOverlayImage.src= 'pics/kniver/kniv2.jpeg';
      thumbnails[0].src = 'pics/kniver/knv2-2.jpeg';
      thumbnails[1].src 
      thumbnails[2].src = 'pics/kniver/knv2-3.jpeg';
      overlayTitle.textContent = 'kniv i eukalyptus og akasie';
      overlayDescription.textContent = 'En kniv laget av eukalyptus og akasie.';
      overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "KNIV 2" og ønsket leveringsadresse.';
    } else if (productId === '23') {
      mainOverlayImage.src= 'pics/kniver/kniv3.jpeg';
      thumbnails[0].src = 'pics/kniver/kniv3-2.jpeg';
      thumbnails[1].src 
      thumbnails[2].src = 'pics/kniver/kniv3-3.jpeg';
      overlayTitle.textContent = 'kniv i eukalyptus og akasie';
      overlayDescription.textContent = 'En kniv laget av eukalyptus og akasie.';
      overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "KNIV 3" og ønsket leveringsadresse.';
    } else if (productId === '43') {
      mainOverlayImage.src= 'pics/kniver/kniv4.jpeg';
      thumbnails[0].src = 'pics/kniver/kniv4.jpeg';
      thumbnails[1].src = 'pics/kniver/kniv4-2.jpeg';
      thumbnails[2].src = 'pics/kniver/kniv4-3.jpeg';
      overlayTitle.textContent = 'kniv i eukalyptus og akasie';
      overlayDescription.textContent = 'En kniv laget av eukalyptus og akasie.';
      overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "KNIV 4" og ønsket leveringsadresse.';
    } else if (productId === '25') {
      mainOverlayImage.src= 'pics/kniver/kniv5.jpeg';
      thumbnails[0].src = 'pics/kniver/kniv5.jpeg';
      thumbnails[1].src = 'pics/kniver/kniv5-2.jpeg';
      thumbnails[2].src = 'pics/kniver/kniv5-3.jpeg';
      overlayTitle.textContent = 'kniv i eukalyptus og akasie';
      overlayDescription.textContent = 'En kniv laget av eukalyptus og akasie.';
      overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "KNIV 5" og ønsket leveringsadresse.';
    } 

  }

  productBoxes.forEach(function(box) {
      box.addEventListener('click', function() {
          const productId = this.getAttribute('data-product');
          showProductDetails(productId);
          resetActiveThumbnail();
          thumbnails[0].classList.add('active');
          overlay.style.display = 'block';
      });
  });

  thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', function() {
          mainOverlayImage.src = this.src;
          resetActiveThumbnail();
          this.classList.add('active');
      });
  });

  closeBtn.addEventListener('click', function() {
      overlay.style.display = 'none';
  });

  // Lukker overlayet hvis du klikker utenfor innholdet
window.addEventListener('click', function(e) {
  if (e.target === overlay) {
      overlay.style.display = 'none';
  }

});




