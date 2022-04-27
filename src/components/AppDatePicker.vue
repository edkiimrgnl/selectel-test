<template>
  <a-range-picker
    class="date-picker"
    :locale="locale"
    @change="onChange"
  />
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
    },
    onChange(e) {
      if (!e) {
        this.$emit('date-set', null);
        return;
      }

      const startDate = e[0].$d.getTime();
      const endDate = e[1].$d.getTime();

      this.$emit('date-set', {
        startDate,
        endDate
      })
    }
  }
}
</script>
