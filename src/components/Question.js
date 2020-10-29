import React from 'react';

export default function Question({ questionList, questionIdx }) {

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
