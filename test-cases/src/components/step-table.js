const StepTable = ({ steps }) => {

    const formTable =
        steps.map(({ step, expectedResult }, index) =>
            <tr>
                <td>{step}</td>
                <td>{expectedResult}</td>
            </tr>
        )

    return (
        <div className="StepTable">
            <table>
                <tr>
                    <th>Steps</th>
                    <th>Expected Results</th>
                </tr>
                {formTable}
            </table>
        </div>
    );
}

export default StepTable;
