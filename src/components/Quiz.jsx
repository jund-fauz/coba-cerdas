import React, { useState } from 'react'

const questions = [
    {
        questionText: 'Apa ibukota Indonesia?',
        answerOptions: [
            { answerText: 'Jakarta', isCorrect: true },
            { answerText: 'Bandung', isCorrect: false },
            { answerText: 'Surabaya', isCorrect: false },
            { answerText: 'Medan', isCorrect: false },
        ],
    },
    {
        questionText: 'Apa bahasa resmi Indonesia?',
        answerOptions: [
            { answerText: 'Bahasa Inggris', isCorrect: false },
            { answerText: 'Bahasa Jawa', isCorrect: false },
            { answerText: 'Bahasa Indonesia', isCorrect: true },
            { answerText: 'Bahasa Sunda', isCorrect: false },
        ],
    },
]

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

    return (
        <div className="quiz">
            {showScore ? (
                <div className="score-section">
                    <h2>Skor kamu: {score} dari {questions.length}</h2>
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Pertanyaan {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className="question-text">{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map((option, index) => (
                            <button key={index} onClick={() => handleAnswerButtonClick(option.isCorrect)}>
                                {option.answerText}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Quiz