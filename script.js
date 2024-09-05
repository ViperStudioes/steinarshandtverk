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

const overlayImage1 = document.getElementById('overlay-image1');
const overlayImage2 = document.getElementById('overlay-image2');
const overlayImage3 = document.getElementById('overlay-image3');
const overlayTitle = document.getElementById('overlay-title');
const overlayDescription = document.getElementById('overlay-description');
const overlayExtraDescription = document.getElementById('overlay-extra-description');

// Funksjon for å åpne overlayet med innhold fra produktboksen
productBoxes.forEach(function (box) {
  box.addEventListener('click', function() {
      const productId = this.getAttribute('data-product');

      // Her setter du inn produktspesifikk informasjon
      if (productId === '1') {
          overlayImage1.src = 'pics/skjærebrett/product1.jpeg';
          overlayImage2.src = 'pics/skjærebrett/product1-2.jpeg';
          overlayImage3.src = 'pics/skjærebrett/product1-3.jpeg';
          overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
          overlayDescription.textContent = 'Dette er et vakkert skjærebrett laget av eukalyptus og akasie.';
          overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 1" og ønsket leveringsadresse.';
      } else if (productId === '2') {
          overlayImage1.src = 'pics/skjærebrett/product2.jpeg';
          overlayImage2.src = 'pics/skjærebrett/product2-2.jpeg';
          overlayImage3.src = 'pics/skjærebrett/product2-3.jpeg';
          overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
          overlayDescription.textContent = 'Et skjærebrett laget av eukalyptus og akasie.';
          overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 2" og ønsket leveringsadresse.';
      } else if (productId === '3') {
          overlayImage1.src = 'pics/skjærebrett/product3.jpeg';
          overlayImage2.src = 'pics/skjærebrett/product3-2.jpeg';
          overlayImage3.src = 'pics/skjærebrett/product3-3.jpeg';
          overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
          overlayDescription.textContent = 'Et skjærebrett laget av eukalyptus og akasie.';
          overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 3" og ønsket leveringsadresse.';
      } else if (productId === '4') {
        overlayImage1.src = 'pics/skjærebrett/product4.jpeg';
        overlayImage2.src = 'pics/skjærebrett/product4-2.jpeg';
        overlayImage3.src = 'pics/skjærebrett/product4-3.jpeg';
        overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
        overlayDescription.textContent = 'Et skjærebrett laget av eukalyptus og akasie.';
        overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 4" og ønsket leveringsadresse.';
      } else if (productId === '5') {
        overlayImage1.src = 'pics/skjærebrett/product5.jpeg';
        overlayImage2.src = 'pics/skjærebrett/product5-2.jpeg';
        overlayImage3.src = 'pics/skjærebrett/product5-3.jpeg';
        overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
        overlayDescription.textContent = 'Et skjærebrett laget av eukalyptus og akasie.';
        overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 5" og ønsket leveringsadresse.';
      } else if (productId === '6') {
        overlayImage1.src = 'pics/skjærebrett/product6.jpeg';
        overlayImage2.src = 'pics/skjærebrett/product6-2.jpeg';
        overlayImage3.src = 'pics/skjærebrett/product6-3.jpeg';
        overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
        overlayDescription.textContent = 'Et skjærebrett laget av eukalyptus og akasie.';
        overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 6" og ønsket leveringsadresse.';
      } else if (productId === '7') {
        overlayImage1.src = 'pics/skjærebrett/product7.jpeg';
        overlayImage2.src = 'pics/skjærebrett/product7-2.jpeg';
        overlayImage3.src = 'pics/skjærebrett/product7-3.jpeg';
        overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
        overlayDescription.textContent = 'Et skjærebrett laget av eukalyptus og akasie.';
        overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 7" og ønsket leveringsadresse.';
      } else if (productId === '8') {
        overlayImage1.src = 'pics/skjærebrett/product8.jpeg';
        overlayImage2.src = 'pics/skjærebrett/product8-2.jpeg';
        overlayImage3.src = 'pics/skjærebrett/product8-3.jpeg';
        overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
        overlayDescription.textContent = 'Et skjærebrett laget av eukalyptus og akasie.';
        overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 8" og ønsket leveringsadresse.';
      } else if (productId === '9') {
        overlayImage1.src = 'pics/skjærebrett/product9.jpeg';
        overlayImage2.src = 'pics/skjærebrett/product9-2.jpeg';
        overlayImage3.src = 'pics/skjærebrett/product9-3.jpeg';
        overlayTitle.textContent = 'Skjærebrett i eukalyptus og akasie';
        overlayDescription.textContent = 'Et skjærebrett laget av eukalyptus og akasie.';
        overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "produkt 9" og ønsket leveringsadresse.';
      } else if (productId === '21') {
        overlayImage1.src = 'pics/kniver/kniv1.jpeg';
        overlayImage2.src = 'pics/kniver/kniv1-2.jpeg';
        overlayImage3.src = 'picser/kniver/kniv1-3.jpeg';
        overlayTitle.textContent = 'kniv i eukalyptus og akasie';
        overlayDescription.textContent = 'En kniv laget av eukalyptus og akasie.';
        overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "KNIV 1" og ønsket leveringsadresse.';
      } else if (productId === '22') {
        overlayImage1.src = 'pics/kniver/kniv2.jpeg';
        overlayImage2.src = 'pics/kniver/knv2-2.jpeg';
        overlayImage3.src = 'pics/kniver/knv2-3.jpeg';
        overlayTitle.textContent = 'kniv i eukalyptus og akasie';
        overlayDescription.textContent = 'En kniv laget av eukalyptus og akasie.';
        overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "KNIV 2" og ønsket leveringsadresse.';
      } else if (productId === '23') {
        overlayImage1.src = 'pics/kniver/kniv3.jpeg';
        overlayImage2.src = 'pics/kniver/kniv3-2.jpeg';
        overlayImage3.src = 'pics/kniver/kniv3-3.jpeg';
        overlayTitle.textContent = 'kniv i eukalyptus og akasie';
        overlayDescription.textContent = 'En kniv laget av eukalyptus og akasie.';
        overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "KNIV 3" og ønsket leveringsadresse.';
      } else if (productId === '43') {
        overlayImage1.src = 'pics/kniver/kniv4.jpeg';
        overlayImage2.src = 'pics/kniver/kniv4-2.jpeg';
        overlayImage3.src = 'pics/kniver/kniv4-3.jpeg';
        overlayTitle.textContent = 'kniv i eukalyptus og akasie';
        overlayDescription.textContent = 'En kniv laget av eukalyptus og akasie.';
        overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "KNIV 4" og ønsket leveringsadresse.';
      } else if (productId === '25') {
        overlayImage1.src = 'pics/kniver/kniv5.jpeg';
        overlayImage2.src = 'pics/kniver/kniv5-2.jpeg';
        overlayImage3.src = 'pics/kniver/kniv5-3.jpeg';
        overlayTitle.textContent = 'kniv i eukalyptus og akasie';
        overlayDescription.textContent = 'En kniv laget av eukalyptus og akasie.';
        overlayExtraDescription.textContent = 'Bestille? Send 300kr på vipps til 909 17 933. Merk med "KNIV 5" og ønsket leveringsadresse.';
      } 

      overlay.style.display = 'flex';
  });
});

// Funksjon for å lukke overlayet
closeBtn.addEventListener('click', function() {
  overlay.style.display = 'none';
});

// Lukker overlayet hvis du klikker utenfor innholdet
window.addEventListener('click', function(e) {
  if (e.target === overlay) {
      overlay.style.display = 'none';
  }
});


