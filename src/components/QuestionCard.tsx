import React from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: boolean | undefined;
    questionNb: number;
    totalQuestions: number;
};

const QuestionCard = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNb,
    totalQuestions,
}: Props) => {
    return (
        <div>
            <p className="number">
                Question: {questionNb} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map((answer, index) => (
                    <div key={index}>
                        <button disabled={userAnswer} onClick={callback}>
                            <span
                                dangerouslySetInnerHTML={{ __html: answer }}
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
