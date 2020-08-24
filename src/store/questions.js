import questionsApi from "../api/questionsApi"

const state = {
    questions: [],
    isDoing: false
}

const actions = {
    fetchQuestion(context) {
        return new Promise(function(resolve){
            questionsApi.getQuestion(questions => {
                context.commit('setQuestion', questions)
                resolve();
            })
        })
    },

    startQuiz(context){
        console.log("start quiz")
        context.commit('setIsDoing', true);
    },

    stopQuiz(context){
        context.commit('setIsDoing', false);
    }

}

const mutations = {
    setQuestion(state, questions){
        state.questions = questions
    },

    setIsDoing(state, val){
        state.isDoing = val
    }
}

export const questions = {
    namespace: true,
    state,
    actions,
    mutations
}
