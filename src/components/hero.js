const HeroSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>Timeless Elegance, Ultimate Comfort</h1>
          <p>
          Baju polo adalah pilihan yang serbaguna karena elegansi dan kenyamanannya. Dengan siluet klasik, warna elegan, dan bahan yang lembut, cocok untuk berbagai kesempatan, 
          dari santai hingga formal. Ini membuat baju polo menjadi pilihan favorit banyak orang.
          </p>
  
          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>
  
          <div className="shopping">
            <p>Also Available On</p>
  
            <div className="brand-icons">
              <img src="/images/tokopedia.png" alt="tokopedia-logo" />
              <img src="/images/shopee.png" alt="shopee-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img id="img2" src="/images/hero-image.png" alt="hero-image" />
        </div>
      </main>
    );
  };
  
  export default HeroSection;