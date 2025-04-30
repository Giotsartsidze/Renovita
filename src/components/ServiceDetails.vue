// src/components/ServiceDetails.vue
<template>
  <div class="service-details">
    <div class="container">
      <div class="service-header">
        <div class="service-icon">
          <component :is="getServiceIcon(service.type)" />
        </div>
        <h2 class="service-title">{{ service.title }}</h2>
      </div>

      <div class="service-content">
        <div class="service-description">
          <p v-for="(paragraph, index) in service.description" :key="index">{{ paragraph }}</p>

          <div v-if="service.benefits" class="service-benefits">
            <h3>სარგებელი:</h3>
            <ul>
              <li v-for="(benefit, index) in service.benefits" :key="index">{{ benefit }}</li>
            </ul>
          </div>
        </div>

        <div class="service-image">
          <div class="image-placeholder"></div>
        </div>
      </div>

      <div v-if="service.treatments" class="service-treatments">
        <h3>მკურნალობის მეთოდები:</h3>
        <div class="treatments-grid">
          <div v-for="(treatment, index) in service.treatments" :key="index" class="treatment-item">
            <h4>{{ treatment.name }}</h4>
            <p>{{ treatment.description }}</p>
          </div>
        </div>
      </div>

      <div class="service-cta">
        <p>დაინტერესებული ხართ ამ სერვისით?</p>
        <a href="#contact" class="btn-primary">დაგვიკავშირდით</a>
      </div>
    </div>
  </div>
</template>

<script>
import IconPhysicalTherapy from './icons/IconPhysicalTherapy.vue'
import IconRehabilitation from './icons/IconRehabilitation.vue'
import IconMassage from './icons/IconMassage.vue'
import IconExercise from './icons/IconExercise.vue'
import IconElectrotherapy from './icons/IconElectrotherapy.vue'
import IconConsultation from './icons/IconConsultation.vue'

export default {
  name: 'ServiceDetails',
  components: {
    IconPhysicalTherapy,
    IconRehabilitation,
    IconMassage,
    IconExercise,
    IconElectrotherapy,
    IconConsultation
  },
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  methods: {
    getServiceIcon(type) {
      const iconMap = {
        'physical-therapy': 'IconPhysicalTherapy',
        'rehabilitation': 'IconRehabilitation',
        'massage': 'IconMassage',
        'exercise': 'IconExercise',
        'electrotherapy': 'IconElectrotherapy',
        'consultation': 'IconConsultation'
      }

      return iconMap[type] || 'IconPhysicalTherapy'
    }
  }
}
</script>

<style scoped>
.service-details {
  padding: 80px 0;
  background-color: var(--primary-bg);
}

.service-header {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.service-icon {
  width: 60px;
  height: 60px;
  color: var(--primary-color);
  margin-right: 20px;
}

.service-title {
  font-size: 2rem;
  color: var(--secondary-color);
}

.service-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.service-description p {
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.service-benefits {
  margin-top: 30px;
}

.service-benefits h3 {
  font-size: 1.3rem;
  color: var(--secondary-color);
  margin-bottom: 15px;
}

.service-benefits ul {
  padding-left: 20px;
}

.service-benefits li {
  margin-bottom: 10px;
}

.service-image .image-placeholder {
  width: 100%;
  height: 350px;
  background-color: var(--border-color);
  border-radius: 8px;
}

.service-treatments {
  margin-bottom: 40px;
}

.service-treatments h3 {
  font-size: 1.3rem;
  color: var(--secondary-color);
  margin-bottom: 20px;
}

.treatments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.treatment-item {
  background-color: var(--secondary-bg);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.treatment-item h4 {
  color: var(--primary-color);
  margin-bottom: 10px;
}

.service-cta {
  text-align: center;
  background-color: var(--secondary-bg);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.service-cta p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .service-content {
    grid-template-columns: 1fr;
  }

  .service-image {
    order: -1;
  }
}
</style>