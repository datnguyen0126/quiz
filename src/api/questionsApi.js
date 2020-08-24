const questions = [
    {
        id: 1,
        contents: "How many provices does Viet Nam have?",
        options: [
            "62",
            "63",
            "64",
            "65"
        ],
        level: "easy",
        answer: "64"
    },
    {
        id: 2,
        contents: "How many provices does Viet Nam have?",
        options: [
            "62",
            "63",
            "64",
            "65"
        ],
        level: "easy",        
        answer: "64"
    },
    {
        id: 3,
        contents: "How many provices does Viet Nam have?",
        options: [
            "62",
            "63",
            "64",
            "65"
        ],
        level: "hard",
        answer: "64"
    },
]

export default {
    getQuestion (callback) {
      setTimeout(() => callback(questions), 100)
    },
}

