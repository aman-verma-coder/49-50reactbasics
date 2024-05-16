import './ItemDate.css';

function ItemDate(props) {
    const date = props.date;
    const time = props.time;;
    return (
        <div className='itemDate' >
            <p><b>Item Date:</b> {date}</p>
            <p><b>Item Time:</b> {time}</p>
        </div>
    )
}
export default ItemDate;