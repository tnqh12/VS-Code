export default function NumberOperator(props) {
    return (
        <>
            숫자1 : <input id='num1' type='text' /><br/>
            숫자2 : <input id='num2' type='text' /><br/>
            <input id='btn' type='button' value='합계' 
                onClick={props.onChangeMode} /><br />
            <span id='result'></span>
        </>
    );
}