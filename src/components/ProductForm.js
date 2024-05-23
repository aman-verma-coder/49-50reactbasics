import './ProductForm.css';
function ProductForm() {
    function titleChangeHandler(event) {
        console.log(event.target.value);
    }
    return (
        <div className='newProduct'>
            <div>
                <label>Title:</label>
                <input type='text' onChange={titleChangeHandler}></input>
            </div>
            <div>
                <label>Date:</label>
                <input type='date' min='01-01-2024' max='18-05-2024'></input>
            </div>
            <div>
                <button type='submit'>Add New Product</button>
            </div>
        </div>
    )
}
export default ProductForm;