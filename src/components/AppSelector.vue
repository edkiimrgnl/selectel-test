<template>
  <a-select
    class="selector"
    placeholder="Выберите автора"
    mode="multiple"
    :options="users"
    @change="onChange"
  >
    <template #suffixIcon>
      <user-outlined />
    </template>
  </a-select>
</template>

<script>
import {UserOutlined} from "@ant-design/icons-vue";

export default {
  name: 'AppSelector',
  props: {
    users: Array,
  },
  components: {
    UserOutlined,
  },
  methods: {
    onChange(value) {
      this.$emit('user-selected', value);
    }
  }
}
</script>
