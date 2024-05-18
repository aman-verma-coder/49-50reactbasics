import './ItemDate.css';

function ItemDate(props) {
    const date = props.date;
    return (
        <div className='itemDate' >
            <p><b>Item Date:</b> {date}</p>
        </div>
    )
}
export default ItemDate;