<template>
  <div class="action">
    <div class="action__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/app";

.action {
  display: flex;
  align-items: center;

  padding: 0 12px;
  min-height: 72px;
  border: 1px solid #F3F3F3;
  background-color: #FFFFFF;
  border-radius: 20px;

  cursor: pointer;
  transition: .3s all ease;

  &:focus, &:hover, &:active {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);
  }

  &__content {
    display: flex;
    gap: 8px;
    align-items: center;
    width: 100%;
  }
}
</style>