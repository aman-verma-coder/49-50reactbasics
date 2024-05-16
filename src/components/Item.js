import './Item.css';
function Item(props) {
    const item = props.name;
    return (
        <div>
            <h3 className='item' >{item}</h3>
            <p>{props.children}</p>
        </div>
    );
}
export default Item; 