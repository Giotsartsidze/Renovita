<template>
  <div class="app">
    <!-- ნავიგაცია -->
    <nav class="nav">
      <div class="container">
        <div class="nav-content">
          <div class="logo">
            <img src="@/assets/logo.svg" alt="რენოვიტა" class="logo-img" />
            <div class="rv-logo">RV</div>
          </div>

          <!-- ბურგერის ღილაკი მობილურისთვის -->
          <div class="burger-menu" @click="toggleMenu">
            <div class="burger-line" :class="{ 'active': isMenuOpen }"></div>
            <div class="burger-line" :class="{ 'active': isMenuOpen }"></div>
            <div class="burger-line" :class="{ 'active': isMenuOpen }"></div>
          </div>

          <!-- ნავიგაციის ლინკები -->
          <div class="nav-links" :class="{ 'active': isMenuOpen }">
            <a href="#about" class="nav-link" @click="closeMenu">ჩვენ შესახებ</a>
            <a href="#services" class="nav-link" @click="closeMenu">სერვისები</a>
            <a href="#specialists" class="nav-link" @click="closeMenu">სპეციალისტები</a>
            <a href="#contact" class="nav-link" @click="closeMenu">კონტაქტი</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- მთავარი სექცია -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">რენოვიტა</h1>
          <h2 class="hero-subtitle">ფიზიოთერაპიისა და რეაბილიტაციის ცენტრი</h2>
          <p class="hero-text">ჯანმრთელობის აღდგენის თანამედროვე მეთოდები პროფესიონალების დახმარებით</p>
          <a href="#contact" class="btn-primary">დაგვიკავშირდით</a>
        </div>
      </div>
    </section>

    <!-- ჩვენ შესახებ -->
    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title">ჩვენ შესახებ</h2>
        <div class="about-content">
          <div class="about-text">
            <p>"რენოვიტა" არის ფიზიოთერაპიისა და რეაბილიტაციის თანამედროვე ცენტრი, რომელიც გთავაზობთ მაღალი ხარისხის სამედიცინო მომსახურებას.</p>
            <p>ჩვენი მიზანია დაგეხმაროთ ჯანმრთელობის აღდგენასა და ფიზიკური მდგომარეობის გაუმჯობესებაში.</p>
            <p>ცენტრი აღჭურვილია უახლესი აპარატურით და გუნდში გვყავს გამოცდილი სპეციალისტები.</p>
          </div>
          <div class="about-image">
            <div class="image-placeholder"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- სერვისები -->
    <section id="services" class="services">
      <div class="container">
        <h2 class="section-title">ჩვენი სერვისები</h2>
        <div class="services-grid">
          <div
              v-for="service in services"
              :key="service.id"
              class="service-card"
              @click="openServicePopup(service)"
          >
            <div class="service-icon">
              <component :is="`icon-${service.type}`" />
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-text">{{ service.shortDescription }}</p>
            <button class="read-more-btn">მეტის ნახვა</button>
          </div>
        </div>
      </div>
    </section>

    <!-- სპეციალისტები -->
    <section id="specialists" class="specialists">
      <div class="container">
        <h2 class="section-title">ჩვენი სპეციალისტები</h2>
        <div class="specialists-grid">
          <div class="specialist-card">
            <div class="specialist-image">
              <div class="image-placeholder">
                <img class="image-placeholder" src="@/assets/გვანცა.jpeg" alt="გვანცა ჩუტკერაშვილი" />
              </div>
            </div>
            <h3 class="specialist-name">გვანცა ჩუტკერაშვილი</h3>
            <p class="specialist-position">რეაბილიტოლოგი</p>
            <p class="specialist-info">+995 551 32 55 52</p>
          </div>

          <div class="specialist-card">
            <div class="specialist-image">
              <div class="image-placeholder">
                <img class="image-placeholder" src="@/assets/ლაშა.jpeg" alt="ლაშა ცარციძე" />
              </div>
            </div>
            <h3 class="specialist-name">ლაშა ცარციძე</h3>
            <p class="specialist-position">რეაბილიტოლოგი</p>
            <p class="specialist-info">+995 551 52 72 70</p>
          </div>

          <!-- აქ შეგიძლიათ დაამატოთ სხვა სპეციალისტები -->
        </div>
      </div>
    </section>

    <!-- კონტაქტი -->
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title">დაგვიკავშირდით</h2>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">
                <icon-location />
              </div>
              <div class="contact-text">
                <h3>მისამართი</h3>
                <p>შალვა ნუცუბიძის ქუჩა N65</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <icon-phone />
              </div>
              <div class="contact-text">
                <h3>ტელეფონი</h3>
                <p>გვანცა: +995 551 32 55 52</p>
                <p>ლაშა: +995 551 52 72 70</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <icon-email />
              </div>
              <div class="contact-text">
                <h3>ელ-ფოსტა</h3>
                <p>Renovita04@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.94695721911!2d44.74272517569589!3d41.72902287125847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473035bffdbd7%3A0xb86509011ae9f215!2s65%20Shalva%20Nutsubidze%20St%2C%20T&#39;bilisi%200186!5e1!3m2!1sen!2sge!4v1755545287712!5m2!1sen!2sge" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- ფუტერი -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="@/assets/logo.svg" alt="რენოვიტა" class="logo-img" />
            <div class="rv-logo">RV</div>
          </div>
          <div class="footer-info">
            <p>რენოვიტა - ფიზიოთერაპიისა და რეაბილიტაციის ცენტრი</p>
            <p>შალვა ნუცუბიძის ქუჩა N65</p>
            <p>Renovita04@gmail.com</p>
          </div>
          <div class="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61579193110147&mibextid=wwXIfr&rdid=jHQpRgoFFmtddBHc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19CqqJp9BK%2F%3Fmibextid%3DwwXIfr#" target="_blank" class="social-link"><icon-facebook /></a>
            <a href="https://www.instagram.com/renovita04/?igsh=bDY4NG5qa3V6aTJj&utm_source=qr#" target="_blank" class="social-link"><icon-instagram /></a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} რენოვიტა - ყველა უფლება დაცულია</p>
        </div>
      </div>
    </footer>

    <!-- სერვისის პოპაპი -->
    <ServicePopup
        :is-open="isPopupOpen"
        :service="selectedService"
        @close="closeServicePopup"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import { services } from './data/service.js'
import ServicePopup from './components/ServicePopup.vue'
import IconPhysicalTherapy from './components/icons/IconPhysicalTherapy.vue'
import IconRehabilitation from './components/icons/IconRehabilitation.vue'
import IconMassage from './components/icons/IconMassage.vue'
import IconExercise from './components/icons/IconExercise.vue'
import IconElectrotherapy from './components/icons/IconElectrotherapy.vue'
import IconConsultation from './components/icons/IconConsultation.vue'
import IconLocation from './components/icons/IconLocation.vue'
import IconPhone from './components/icons/IconPhone.vue'
import IconEmail from './components/icons/IconEmail.vue'
import IconFacebook from './components/icons/IconFacebook.vue'
import IconInstagram from './components/icons/IconInstagram.vue'

export default {
  name: 'App',
  components: {
    ServicePopup,
    IconPhysicalTherapy,
    IconRehabilitation,
    IconMassage,
    IconExercise,
    IconElectrotherapy,
    IconConsultation,
    IconLocation,
    IconPhone,
    IconEmail,
    IconFacebook,
    IconInstagram
  },
  setup() {
    const form = ref({
      name: '',
      phone: '',
      message: ''
    })

    const isPopupOpen = ref(false)
    const selectedService = ref(null)
    const isMenuOpen = ref(false) // ბურგერ მენიუს მდგომარეობა


    const openServicePopup = (service) => {
      selectedService.value = service
      isPopupOpen.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeServicePopup = () => {
      isPopupOpen.value = false
      document.body.style.overflow = 'auto'
    }

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
      if (isMenuOpen.value) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }

    const closeMenu = () => {
      isMenuOpen.value = false
      document.body.style.overflow = 'auto'
    }

    return {
      form,
      services,
      isPopupOpen,
      selectedService,
      openServicePopup,
      closeServicePopup,
      isMenuOpen,
      toggleMenu,
      closeMenu
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@300;400;500;600;700&display=swap');

:root {
  --primary-bg: #f8f5ec;
  --secondary-bg: #ffffff;
  --primary-color: #4b7e95;
  --secondary-color: #5a4537;
  --accent-color: #d5bc8d;
  --text-color: #2c2c2c;
  --light-text: #6c6c6c;
  --border-color: #e0d9c5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans Georgian', sans-serif;
  background-color: var(--primary-bg);
  color: var(--text-color);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ნავიგაცია */
/* ნავიგაცია */
.nav {
  background-color: var(--secondary-bg);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}


.logo{
  display: flex;
  align-items: center;
  gap: 10px;
}


.logo-img {
  height: 40px;
}
.rv-logo {
  font-size: 1.5rem;
  color: var(--accent-color);
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: var(--primary-color);
}

/* ბურგერ მენიუ */
.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  cursor: pointer;
  z-index: 110;
}

.burger-line {
  width: 100%;
  height: 3px;
  background-color: var(--secondary-color);
  transition: all 0.3s ease-in-out;
}

/* ბურგერ მენიუს ანიმაცია */
.burger-line.active:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.burger-line.active:nth-child(2) {
  opacity: 0;
}

.burger-line.active:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* რესპონსიული დიზაინი */
@media (max-width: 768px) {
  .nav-content {
    padding: 15px 0;
  }

  .burger-menu {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--secondary-bg);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 100;
  }

  .nav-links.active {
    transform: translateY(0);
  }

  .nav-link {
    font-size: 1.3rem;
  }

  .about-content,
  .contact-content {
    grid-template-columns: 1fr;
  }

  .about-content {
    flex-direction: column;
  }

  .specialists-grid {
    flex-direction: column;
    align-items: center;
  }

  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
}

/* მთავარი სექცია */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url('@/assets/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(75, 126, 149, 0.85), rgba(90, 69, 55, 0.85));
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 600px;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 10px;
  color: white;
}

.hero-subtitle {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: var(--accent-color);
}

.hero-text {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.btn-primary {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #3a6275;
}

/* სექციების საერთო სტილი */
section {
  padding: 80px 0;
}

.section-title {
  font-size: 2.2rem;
  color: var(--secondary-color);
  text-align: center;
  margin-bottom: 50px;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: var(--accent-color);
  margin: 15px auto 0;
}

/* ჩვენ შესახებ სექცია */
.about {
  background-color: var(--secondary-bg);
}

.about-content {
  display: flex;
  gap: 40px;
  align-items: center;
}

.about-text {
  flex: 1;
}

.about-text p {
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.about-image {
  flex: 1;
}

.image-placeholder {
  width: 100%;
  height: 350px;
  background-color: var(--border-color);
  border-radius: 8px;
  object-fit: cover;
}

/* სერვისები */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.service-card {
  background-color: var(--secondary-bg);
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
  cursor: pointer;
  position: relative;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  width: 60px;
  height: 60px;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.service-title {
  font-size: 1.3rem;
  color: var(--secondary-color);
  margin-bottom: 15px;
}

.read-more-btn {
  display: inline-block;
  margin-top: 15px;
  background: none;
  border: none;
  color: var(--primary-color);
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  font-size: 0.95rem;
  text-decoration: underline;
}

/* სპეციალისტები */
.specialists {
  background-color: var(--secondary-bg);
}

.specialists-grid {
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 45px;
}

.specialist-card {
  text-align: center;
}

.specialist-image {
  margin-bottom: 15px;
}

.specialist-image .image-placeholder {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto;
}

.specialist-name {
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin-bottom: 5px;
}

.specialist-position {
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 10px;
}

.specialist-info {
  color: var(--light-text);
}

/* კონტაქტი */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.contact-item {
  display: flex;
  margin-bottom: 30px;
}

.contact-icon {
  width: 50px;
  height: 50px;
  color: var(--primary-color);
  margin-right: 15px;
}

.contact-text h3 {
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin-bottom: 5px;
}

.contact-form form {
  background-color: var(--secondary-bg);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.map-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.map-container iframe {
  display: block;
}

/* Updated contact section styling */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
/* ფუტერი */
.footer {
  background-color: var(--secondary-color);
  color: white;
  padding: 50px 0 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.footer-logo {
  display: flex;
  align-items: center;
}

.footer-logo .logo-img {
  height: 30px;
  margin-right: 10px;
}

.rv-logo {
  font-size: 1.5rem;
  color: var(--accent-color);
  font-weight: 700;
}

.footer-info p {
  margin-bottom: 5px;
  font-size: 0.9rem;
}

.footer-social {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  transition: background-color 0.3s;
}

.social-link:hover {
  background-color: var(--accent-color);
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
}

/* რესპონსიული დიზაინი */
@media (max-width: 768px) {
  .nav-content {
    //flex-direction: column;
    padding: 15px 0;
    align-content: center;
  }

  .logo {
    //margin-bottom: 15px;
  }

  .nav-links {
    //flex-wrap: wrap;
    //justify-content: center;
  }

  .about-content,
  .contact-content {
    grid-template-columns: 1fr;
  }

  .about-content {
    flex-direction: column;
  }

  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
}
</style>