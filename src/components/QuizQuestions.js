import Style from './QuizQuestions.module.css'
function Quiz2(){

    return(
        <div className={Style.Quiz}>
          <div className={Style.QuizContainer}>
            <div  className={Style.QuestionNumberContainer}>
            <h1 className={Style.QuestionNumber}>01/04</h1>
            <h1  className={Style.QuizTimer}>00:10s</h1>
            </div>
            <h1 className={Style.QuizTitle}>Your question text comes here, its a sample text.</h1>
            <div className={Style.OptionsContainer}>
                <div className={Style.QuizOptions}>
                    <button className={Style.OptionBtn}>Option1</button>
                    <button className={Style.OptionBtn}>Option1</button>
                </div>
                <div className={Style.QuizOptions}>
                    <button className={Style.OptionBtn}>Option1</button>
                    <button className={Style.OptionBtn}>Option1</button>
                </div>
                <div>
                    <button className={Style.NextBtn}>NEXT</button>
                </div>
            </div>
          </div>
        </div>
    )
}
export default Quiz2;