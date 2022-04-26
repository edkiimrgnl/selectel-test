<template>
  <a-range-picker :locale="locale" />
</template>

<script>
import locale from 'ant-design-vue/es/date-picker/locale/ru_RU'

export default {
  name: 'AppDatePicker',
  beforeMount() {
    this.changeLocaleValues();
  },
  data() {
    return {
      locale,
    }
  },
  methods: {
    changeLocaleValues() {
      this.locale.lang.rangePlaceholder = ['От', 'До'];
    }
  }
}
</script>
