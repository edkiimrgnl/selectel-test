<template>
  <a-layout-footer class="footer">
    <div class="logo-container">
      <img class="footer_logo" src="@/assets/selectel-logo-white.svg" alt="Selectel">
    </div>
    <div class="footer_social">
      <a href="#" class="on-hover-color">
        <img src="@/assets/telegram.svg" alt="telegram">
      </a>
      <a href="#" class="on-hover-color">
        <img src="@/assets/vk.svg" alt="vkontakte">
      </a>
      <a href="#" class="on-hover-color">
        <img src="@/assets/twitter.svg" alt="twitter">
      </a>
      <a href="#" class="on-hover-color">
        <img class=" on-hover-color" src="@/assets/h.svg" alt="h">
      </a>
    </div>
    <div class="nav-container">
      <ul class="footer_nav">
        <li class="footer_nav-item" v-for="{name, link} in navItems" :key="name">
          <a :href="link" class="on-hover-color">
            {{ name }}
          </a>
        </li>
      </ul>
    </div>
    <div class="footer_info">
      <p>
        {{ copyright }}
      </p>
      <p>
        {{ license }}
      </p>
    </div>
  </a-layout-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      copyright: '© ООО «Селектел», 2008—2022',
      license: 'Лицензия на телематические услуги №176267',
      navItems: [
        {
          name: 'Серверы',
          link: '#'
        },
        {
          name: 'Обородувание',
          link: '#'
        },
        {
          name: 'Облако',
          link: '#'
        },
        {
          name: 'Решения',
          link: '#'
        },
        {
          name: 'Дата-центры',
          link: '#'
        },
        {
          name: 'Блог',
          link: '#'
        },
        {
          name: 'О компании',
          link: '#'
        },
        {
          name: 'Офисы',
          link: '#'
        },
      ]
    }
  }
}
</script>
