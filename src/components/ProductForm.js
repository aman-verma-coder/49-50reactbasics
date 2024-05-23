import { useState } from "react";
import './ProductForm.css';
function ProductForm(props) {
    const [newtitle, setTitle] = useState('');
    const [newdate, setDate] = useState('');
    // const [fullProductInput, setProductInput] = useState({
    //     title: '',
    //     date: ''
    // });
    function titleChangeHandler(event, prevState) {
        // let obj = { ...prevState, title: event.target.value };
        // console.log(obj);
        // return obj;
        setTitle(event.target.value);
        // console.log(title);
    }
    function dateChangeHandler(event) {
        setDate(event.target.value);
        // console.log(date);
    }
    function onSubmitHandler(event) {
        event.preventDefault();
        const productData = {
            title: newtitle,
            date: newdate
        }
        // console.log(productData);
        props.onSaveProduct(productData);
        setTitle('');
        setDate('');
    }

    return (
        <div className='newProduct'>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Title:</label>
                    <input type='text' value={newtitle} onChange={titleChangeHandler}></input>
                </div>
                <div>
                    <label>Date:</label>
                    <input type='date' value={newdate} min='01-01-2024' max='18-05-2024' onChange={dateChangeHandler}></input>
                </div>
                <div>
                    <button type='submit'>Add New Product</button>
                </div>
            </form>
        </div>
    )
}
export default ProductForm;