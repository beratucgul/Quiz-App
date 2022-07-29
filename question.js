function Question(questionText, answerOptions, correctAnswer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function(answer) {
    return answer === this.correctAnswer
}

let questions = [
    new Question("1-Which is js package management application?", {a: "Node.js", b: "TypeScript", c: "Npm", d: "Nuget"}, "c"),
    new Question("2-Which is not considered in frontend scope?", {a: "css", b: "html", c: "javascript", d: "sql"}, "d"),
    new Question("3-Which is considered in the backend scope?", {a: "Node.js", b: "TypeScript", c: "angular", d: "react"}, "a"),
    new Question("4-Which does not use the javascript programming language?", {a: "react", b: "angular", c: "vue.js", d: "asp.net"}, "d")
]
