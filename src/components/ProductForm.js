import { useState } from "react";
import './ProductForm.css';
function ProductForm() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    function titleChangeHandler(event) {
        setTitle(event.target.value);
        console.log(title);
    }
    function dateChangeHandler(event) {
        setDate(event.target.value);
        console.log(date);
    }
    return (
        <div className='newProduct'>
            <div>
                <label>Title:</label>
                <input type='text' onChange={titleChangeHandler}></input>
            </div>
            <div>
                <label>Date:</label>
                <input type='date' min='01-01-2024' max='18-05-2024' onChange={dateChangeHandler}></input>
            </div>
            <div>
                <button type='submit'>Add New Product</button>
            </div>
        </div>
    )
}
export default ProductForm;