import './NewProduct.css';
import ProductForm from './ProductForm.js';

function NewProduct(props) {
    function saveProduct(product) {
        console.log('Inside New Product');
        console.log(product);
        props.aman(product);
    }
    return (
        <ProductForm onSaveProduct={saveProduct} />
    )
}
export default NewProduct;