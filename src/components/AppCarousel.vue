<template>
  <a-carousel>
    <div
      v-for="{
        imgUrl,
        id,
        title,
        text
      } in carouselData"
      :key="id"
    >
      <div :style="{background: `no-repeat center url(${imgUrl})`}">
        <p>{{ title }}</p>
        <p>{{ text }}</p>
      </div>
    </div>
  </a-carousel>
</template>

<script>
export default {
  name: 'AppCarousel',
  data() {
    return {
      carouselData: [
        {
          imgUrl: 'src/assets/background.png',
          id: 0,
          name: 'Some Great View',
          title: 'IT-инфраструктура для бизнеса',
          text: 'Мы предлагаем комплексные решения для всех уровней бизнеса: от индивидуальных предпринимателей до крупных международных компаний. Более 20 000 клиентов по всему миру доверяют Selectel.',
        },
        {
          imgUrl: 'src/assets/background.png',
          id: 1,
          name: 'Some Great View',
          title: 'IT-инфраструктура для бизнеса',
          text: 'Мы предлагаем комплексные решения для всех уровней бизнеса: от индивидуальных предпринимателей до крупных международных компаний. Более 20 000 клиентов по всему миру доверяют Selectel.',
        },
        {
          imgUrl: 'src/assets/background.png',
          id: 2,
          name: 'Some Great View',
          title: 'IT-инфраструктура для бизнеса',
          text: 'Мы предлагаем комплексные решения для всех уровней бизнеса: от индивидуальных предпринимателей до крупных международных компаний. Более 20 000 клиентов по всему миру доверяют Selectel.',
        },
      ]
    }
  }
}
</script>
