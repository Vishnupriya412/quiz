import Style from './QuestionwiseAnalysis.module.css'

function QuestionWiseAnalysis() {
    return (
        <div className={Style.container}>
            <div className={Style.navbar}>
                <h1>QUIZZIE</h1>
            </div>
            <div className={Style.questionAnalysis}>
                <div className={Style.headContainer}>
                    <h1 className={Style.heading}>Quiz 2 Question Analysis</h1>
                    <div className={Style.quizDetails}>
                        <p className={Style.date}>Created on: 04 Sep, 2023</p>
                        <p className={Style.date}>Impressions: 667</p>
                    </div>
                </div>
                <div className={Style.questionContainer}>
                    <div className={Style.questionPlaceholder}>
                        <h1 className={Style.question}>Q.1 Question place holder for analysis?</h1>
                        <div className={Style.optionContainer}>
                            <div className={Style.options}>
                                <h1>60</h1>
                                <h2 className={Style.insideText}>People Attempted the questions</h2>
                            </div>
                            <div className={Style.options}>
                                <h1>38</h1>
                                <h2 className={Style.insideText}>People Answered correctly</h2>
                            </div>
                            <div className={Style.options}>
                                <h1>22</h1>
                                <h2 className={Style.insideText}>People Answered incorrectly</h2>
                            </div>
                        </div>
                    </div>
                    <h1 className={Style.horizontalLine}></h1>
                    <div className={Style.questionPlaceholder}>
                        <h1 className={Style.question}>Q.1 Question place holder for analysis?</h1>
                        <div className={Style.optionContainer}>
                            <div className={Style.options}>
                                <h1>60</h1>
                                <h2 className={Style.insideText}>People Attempted questions</h2>
                            </div>
                            <div className={Style.options}>
                                <h1>38</h1>
                                <h2 className={Style.insideText}>People Answered correctly</h2>
                            </div>
                            <div className={Style.options}>
                                <h1>22</h1>
                                <h2 className={Style.insideText}>People Answered incorrectly</h2>
                            </div>
                        </div>
                    </div>
                    <h1 className={Style.horizontalLine}></h1>
                    <div className={Style.questionPlaceholder}>
                        <h1 className={Style.question}>Q.1 Question place holder for analysis?</h1>
                        <div className={Style.optionContainer}>
                            <div className={Style.options}>
                                <h1>60</h1>
                                <h2 className={Style.insideText}>People Attempted the questions</h2>
                            </div>
                            <div className={Style.options}>
                                <h1>38</h1>
                                <h2 className={Style.insideText}>People Answered correctly</h2>
                            </div>
                            <div className={Style.options}>
                                <h1>22</h1>
                                <h2 className={Style.insideText}>People Answered incorrectly</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionWiseAnalysis