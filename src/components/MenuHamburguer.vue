<template>
  <div :class="props.showDrawer ? 'checked' : ''" class="hamburguer">
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  showDrawer: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="postcss" scoped>
#menu_checkbox {
  display: none;
}

.hamburguer {
  top: 50%;
  right: 0;
  left: 0;
  display: block;
  width: 40px;
  cursor: pointer;
}

.hamburguer:before {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  transition: 1.2s cubic-bezier(0, 0.96, 1, 0.02) background-color;
}

.hamburguer div {
  position: relative;
  top: 0;
  height: 12px;
  background-color: #fff;
  margin-bottom: 8px;
  transition: 0.3s ease transform, 0.3s ease top, 0.3s ease width,
    0.3s ease right;
  border-radius: 2px;
}

.hamburguer div:first-child {
  transform-origin: 0;
  height: 4px;
}

.hamburguer div:nth-child(2) {
  height: 4px;
  width: 40px;
}

.checked.hamburguer div:first-child {
  top: 0px;
  width: 35px;
  transform: rotateZ(45deg);
}

.checked.hamburguer div:nth-child(2) {
  width: 35px;
  top: 0px;
  right: 6px;
  transform: rotateZ(-45deg);
}
</style>
