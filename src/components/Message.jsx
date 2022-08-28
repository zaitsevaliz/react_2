export const Message = (props) => {
    return (<div className="messageComp">
        <h3>Message comp (child)</h3>
        <p>Всего сообщений: {props.data}</p>
    </div>)

}