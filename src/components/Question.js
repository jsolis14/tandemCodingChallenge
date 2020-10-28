import React from 'react';

export default function Question({ questionList, questionIdx }) {
    console.log(questionList)

    if (questionList.length > 0) {
        return (
            <div>
                {questionList[questionIdx].question}
            </div>
        )
    } else {
        return 'Loading Questions'
    }

}
