<template>
  <div class="main-menu">
    <base-header title="Ray Driving Theory">
      <template #right>
        <div class="main-menu__header-action">
          <base-svg name="crown" :width="24" :height="24" />
        </div>
        <div class="main-menu__header-action">
          <base-svg name="fire" :width="24" :height="24" />
          {{ fireCount }}
        </div>
      </template>
    </base-header>

    <div class="main-menu__actions">
      <router-link to="/list">
        <base-action title="learning" class="main-action">
          <template #default>
            <div class="main-action__info">
              <div class="main-action__about">
                <div class="svg-round bigger orange">
                  <base-svg name="graduation-cap" :width="32" :height="32" />
                </div>
                <div class="main-action__title">
                  <p>
                    Learning
                  </p>
                  <p>
                    Category В
                  </p>
                </div>
              </div>

              <span class="main-action__arrow-button">
                <base-svg name="chevron-circle-right" :width="24" :height="24" />
              </span>
            </div>

            <div class="main-action__progress-bar">
              <progress-bar :total="questionCount" :current="passedQuestionCount">
                <template #description>
                  {{ passedQuestionCount }} questions out of {{ questionCount }} passed
                </template>
              </progress-bar>
            </div>
          </template>
        </base-action>
      </router-link>

      <div class="main-menu__grid">
        <router-link to="/" v-for="(item, index) in actions" :key="`${item.title}_${index}`" class="main-menu__action-item">
          <base-action
              :title="item.title"
          >
            <template #default>
              <div class="svg-round" :class="item.color">
                <base-svg :name="item.icon" :width="24" :height="24" />
              </div>
              <p class="main-menu__action-text">
                {{item.title}}
              </p>
            </template>
          </base-action>
        </router-link>
      </div>
    </div>

    <div class="main-menu__subactions">
      <div class="main-menu__subactions">
        <router-link to="/" v-for="(item, index) in subActions?.slice(0, subActions.length / 2)" :key="`${item.title}_${index}_sub`">
          <div class="subaction">
          <span class="subaction__icon-wrapper">
            <base-svg :name="item.icon" :width="28" :height="28" />
          </span>
            <p class="subaction__title">
              {{ item.title }}
            </p>
          </div>
        </router-link>
      </div>
      <div class="main-menu__subactions">
        <router-link to="/" v-for="(item, index) in subActions?.slice(subActions.length / 2, subActions.length)" :key="`${item.title}_${index}_sub`">
          <div class="subaction">
          <span class="subaction__icon-wrapper">
            <base-svg :name="item.icon" :width="28" :height="28" />
          </span>
            <p class="subaction__title">
              {{ item.title }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import BaseAction from "@/components/base/BaseAction.vue";
import BaseHeader from "@/components/base/BaseHeader.vue";
import BaseSvg from "@/components/base/BaseSvg.vue";
import {computed, ref, shallowRef} from "vue";
import type {IActionList} from "@/common/types";
import ProgressBar from "@/components/ui/ProgressBar.vue";
import {useQuestionStore} from "@/stores/questionStore";
import {storeToRefs} from "pinia";

const questionStore = useQuestionStore()
const { questionList } = storeToRefs(questionStore)

const fireCount = ref<number>(13)

const questionCount = computed(() => {
  return questionList.value?.length ?? 0
})

const passedQuestionCount = computed(() => {
  return questionList.value?.filter(item => item.is_passed).length ?? 0
})

const actions = shallowRef<IActionList[]>([
  {
    icon: 'l-exam',
    title: 'DVSA Exam',
    color: 'red',
  },
  {
    icon: 'rocket-launch',
    title: 'Express mode',
    color: 'purple',
  },
  {
    icon: 'tv-play',
    title: 'Hazard perception',
    color: 'purple',
  },
  {
    icon: 'road-sign',
    title: 'Road signs',
    color: 'purple',
  },
  {
    icon: 'game-controller',
    title: 'Multiplayer learning',
    color: 'purple',
  },
])

const subActions = shallowRef([
  {
    title: 'Mistakes',
    icon: 'pen',
  },
  {
    title: 'Statistics',
    icon: 'chart-bar',
  },
  {
    title: 'Highway Code',
    icon: 'book-text',
  },
  {
    title: 'Favorites',
    icon: 'bookmarks-user',
  },
])
</script>

<style scoped lang="scss">
@import "@/assets/style/app";

.main-menu {
  display: flex;
  flex-direction: column;
  gap: 8px;


  &__header-action {
    display: flex;
    align-items: center;
    gap: 4px;
    width: fit-content;
    height: 32px;
    padding: 0 8px;

    background-color: $light--background--color-background-content;
    border-radius: 8px;

    cursor: pointer;
    transition: .3s all ease;

    &:focus, &:hover, &:active {
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);
    }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__subactions {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    gap: 16px;
    flex: 1;
    flex-wrap: wrap;

    .main-menu__subactions {
      flex-wrap: nowrap;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  &__action-item {
    &:last-child:nth-child(odd) {
      grid-column: 1 / span 2;
    }
  }

  &__action-text {
    @include fz-16-500;
    word-break: break-word;
  }

  .main-action {
    padding: 24px;

    :deep(.action__content) {
      flex-direction: column;
    }

    &__info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__about {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    &__progress-bar {
      width: 100%;
    }

    &__title {
      display: flex;
      flex-direction: column;
      gap: 0;

      p:first-child {
        @include fz-20-600;
      }

      p:last-child {
        @include fz-14-400;
        color: $light--text--color-text-secondary;
      }
    }
  }

  .subaction {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 62px;
    margin-top: 16px;

    &__icon-wrapper {
      width: 58px;
      height: 58px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 100%;
      overflow: hidden;
      background-color: $color--contrast;
    }

    &__title {
      text-align: center;
      @include fz-14-400;
    }
  }

  .svg-round {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100%;
    overflow: hidden;
    background-color: rgba($colorPurple, 0.1);

    &.bigger {
      width: 58px;
      height: 58px;
    }

    &.orange {
      background-color: rgba($color--contrast--secondary, 0.5);
    }

    &.purple {
      background-color: rgba($colorPurple, 0.1);
    }

    &.red {
      background-color: rgba($colorRed, 0.1);
    }

    svg {
      width: 40px;
      height: 40px;
    }
  }
}
</style>