const footerHTML = `
  <footer class="section-footer">
    <div class="footer-container container">
      <div class="content_1">
        <p>
          Welcome to Quikpick EcomStore, <br />
          your ultimate destination for
          <br />
          cutting-edge gadgets!
        </p>
        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
      </div>
      <div class="content_2">
        <h4>SHOPPING</h4>
        <a href="#">Computer Store</a>
        <a href="#">Laptop Store</a>
        <a href="#">Accessories</a>
        <a href="#">Sales & Discount</a>
      </div>
      <div class="content_3">
        <h4>Experience</h4>
        <a href="./contact.html">Contact Us</a>
        <a href="" target="_blank"> Payment Method </a>
        <a href="" target="_blank"> Delivery </a>
        <a href="" target="_blank"> Return and Exchange </a>
      </div>
      <div class="content_4">
        <h4>NEWSLETTER</h4>
        <p>
          Be the first to know about new
          <br />
          arrivals, sales & promos!
        </p>
        
      </div>
    </div>
    <div class="seperation"></div>
      <div class="copyright">
        <p>
          Copyright © 2024 | All rights reserved | Made with
          <i class="fa-solid fa-heart" style="color: red"></i> by Priyatosh
          Kumar
        </p>
      </div>
  </footer>`;

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);
