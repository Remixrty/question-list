import {defineStore} from "pinia";
import {ref} from "vue";
import type {IQuestionList} from "@/common/types";

export const useQuestionStore = defineStore('question', () => {
    const questionList = ref<IQuestionList[]>([])

    const getQuestionList = async () => {
        await fetch('../../questions.json')
            .then(resp => resp.json())
            .then((json) => {
                questionList.value = json
                mutateQuestionList()
            })
            .catch(e => {
                throw e
            })
    }

    const mutateQuestionList = () => {
        if (!questionList.value) return

        questionList.value = questionList.value.map(item => {
            return {
                ...item,
                is_passed: false
            }
        })
    }

    return {
        getQuestionList,
        questionList,
    }
})