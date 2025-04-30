<!-- src/components/ServicePopup.vue -->
<template>
  <div v-if="isOpen" class="popup-overlay" @click="closePopup">
    <div class="popup-container" @click.stop>
      <button class="close-btn" @click="closePopup">&times;</button>

      <div v-if="service" class="popup-content">
        <h2 class="popup-title">{{ service.title }}</h2>

        <div class="popup-description">
          <p v-for="(paragraph, index) in service.description" :key="`desc-${index}`">
            {{ paragraph }}
          </p>
        </div>

        <div class="popup-benefits">
          <h3>სარგებელი</h3>
          <ul>
            <li v-for="(benefit, index) in service.benefits" :key="`benefit-${index}`">
              {{ benefit }}
            </li>
          </ul>
        </div>

        <div class="popup-treatments">
          <h3>პროცედურები</h3>
          <div class="treatments-grid">
            <div v-for="(treatment, index) in service.treatments" :key="`treatment-${index}`" class="treatment-item">
              <h4>{{ treatment.name }}</h4>
              <p>{{ treatment.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicePopup',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    service: {
      type: Object,
      default: null
    }
  },
  methods: {
    closePopup() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.popup-container {
  background-color: var(--secondary-bg);
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  color: var(--secondary-color);
  cursor: pointer;
  z-index: 10;
}

.popup-content {
  padding: 30px;
}

.popup-title {
  font-size: 2rem;
  color: var(--secondary-color);
  margin-bottom: 20px;
  position: relative;
}

.popup-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: var(--accent-color);
  margin-top: 10px;
}

.popup-description {
  margin-bottom: 25px;
}

.popup-description p {
  margin-bottom: 15px;
  line-height: 1.7;
}

.popup-benefits, .popup-treatments {
  margin-bottom: 25px;
}

.popup-benefits h3, .popup-treatments h3 {
  font-size: 1.4rem;
  color: var(--secondary-color);
  margin-bottom: 15px;
}

.popup-benefits ul {
  list-style-type: none;
  padding-left: 0;
}

.popup-benefits li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
}

.popup-benefits li::before {
  content: '✓';
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

.treatments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.treatment-item {
  background-color: rgba(213, 188, 141, 0.1);
  border-radius: 8px;
  padding: 20px;
}

.treatment-item h4 {
  color: var(--primary-color);
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .treatments-grid {
    grid-template-columns: 1fr;
  }
}
</style>