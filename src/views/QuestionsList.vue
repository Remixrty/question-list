<template>
  <base-header title="Learning" :is-back="true" />
  <base-tabs :tab-list="tabList" :active-tab="activeTab" @update:active-tab="updateActiveTab">
    <template #default>
      <div class="questions-grid" v-if="activeTab === 'Tests'">
        <question-item
          v-for="(question, index) in questionList"
          :id="question.id"
          :question-number="index + 1"
          :is_passed="question.is_passed"
          :key="`${question.id}_${question.name}`"
          @trigger:checkQuestion="checkQuestion"
        />
      </div>
    </template>
  </base-tabs>


</template>

<script setup lang="ts">
import {useQuestionStore} from "@/stores/questionStore";
import {storeToRefs} from "pinia";
import BaseSvg from "@/components/base/BaseSvg.vue";
import BaseHeader from "@/components/base/BaseHeader.vue";
import BaseTabs from "@/components/base/BaseTabs.vue";
import {ref} from "vue";
import QuestionItem from "@/components/ui/QuestionItem.vue";

const store = useQuestionStore()
const { questionList } = storeToRefs(store)

const tabList = ['Tests']
const activeTab = ref(tabList[0])

const checkQuestion = (id: number) => {
  if (!id || !questionList.value.length) return

  const idx = questionList.value.findIndex(item => item.id === id)

  if (idx === -1 || !questionList.value[idx]) return

  questionList.value[idx].is_passed = !questionList.value[idx].is_passed
}

const updateActiveTab = (val: string) => {
  activeTab.value = val
}
</script>

<style scoped lang="scss">
@import "@/assets/style/app";

.questions-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}
</style>