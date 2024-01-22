import Style from './Table.module.css'
import edit from '../assets/edit.png'
import del from '../assets/delete.png'
import share from '../assets/share.png'

function Table() {

    return (
        <div className={Style.container}>
            <div className={Style.navBar}></div>
            <div className={Style.QuizAnalysis}>
                <h1 className={Style.quizHeading}>Quiz Analysis</h1>
                <table className={Style.table}>
                    <thead className={Style.thead}>
                            <tr className={Style.tableRow}>
                                <th className={Style.tableHeader}>S.No</th>
                                <th className={Style.tableHeader}>Quiz Name</th>
                                <th className={Style.tableHeader}>Created on</th>
                                <th className={Style.tableHeader}>Impression</th>
                                <th></th>
                                <th></th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr className={Style.column1}>
                            <td>1</td>
                            <td>Quiz1</td>
                            <td>01sep,2023</td>
                            <td>345</td>
                            <td><div className={Style.icons}><li><img className={Style.icon} src={edit} /></li>
                                <li><img className={Style.icon} src={del} /></li>
                                <li><img className={Style.icon} src={share} /></li>
                            </div></td>
                            <td className={Style.analysisText}>Question Wise Analysis</td>
                        </tr>
                        <tr className={Style.column2}>
                            <td>2</td>
                            <td>Quiz2</td>
                            <td>04sep,2023</td>
                            <td>667</td>
                            <td><div className={Style.icons}><li><img className={Style.icon} src={edit} /></li>
                                <li><img className={Style.icon} src={del} /></li>
                                <li><img className={Style.icon} src={share} /></li>
                            </div></td>
                            <td className={Style.analysisText}>Question Wise Analysis</td>
                        </tr>
                        <tr  className={Style.column3}>
                            <td>3</td>
                            <td>Quiz3</td>
                            <td>06sep,2023</td>
                            <td>1.6K</td>
                            <td><div className={Style.icons}><li><img className={Style.icon} src={edit} /></li>
                                <li><img className={Style.icon} src={del} /></li>
                                <li><img className={Style.icon} src={share} /></li>
                            </div></td>
                            <td className={Style.analysisText}>Question Wise Analysis</td>
                        </tr>
                        <tr  className={Style.column4}>
                            <td>4</td>
                            <td>Quiz4</td>
                            <td>09sep,2023</td>
                            <td>789</td>
                            <td><div className={Style.icons}><li><img className={Style.icon} src={edit} /></li>
                                <li><img className={Style.icon} src={del} /></li>
                                <li><img className={Style.icon} src={share} /></li>
                            </div></td>
                            <td className={Style.analysisText}>Question Wise Analysis</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}
export default Table;