import { useLocation } from 'react-router-dom';

function Answer() {
    const ansObj = useLocation();
    let object = ansObj.state.obj1;
    let score = ansObj.state.totalScore

    return (
        <div className="answer-container">
            <h1>Score: {score}</h1>
            
            {

                <table className='table' >
                    <tr>
                        <th>Q.no</th>
                        <th>Question</th>
                        <th>Your Answer</th>
                        <th>Correct Answer</th>
                    </tr>

                    {Object.keys(object).map((key) => {
                       
                        return (


                            < tr >
                                <td >{object[key].qn}</td>
                                <td>{key}</td>
                                <td style={{ backgroundColor: object[key].flag === true ? '#8ac926' : '#d62828' }}>{object[key].option}</td>
                                <td>{object[key].corrAns}</td>
                            </tr>



                        )
                    })
                    }


                </table>


            }
           

        </div >
    )
}
export default Answer