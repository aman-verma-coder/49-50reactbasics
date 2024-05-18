import './Product.css';
import Card from "../components/Card.js";
import ProductItem from "../components/ProductItem.js";
function Product(props) {
    return (
        <Card>
            <ProductItem className="ProductItem" name={props.items[0].name} date={props.items[0].date} ></ProductItem>
            <ProductItem className="ProductItem" name={props.items[1].name} date={props.items[1].date} ></ProductItem>
            <ProductItem className="ProductItem" name={props.items[2].name} date={props.items[2].date} ></ProductItem>
            <ProductItem className="ProductItem" name={props.items[3].name} date={props.items[3].date} ></ProductItem>
            <ProductItem className="ProductItem" name={props.items[4].name} date={props.items[4].date} ></ProductItem>
            {/* <Item name={props.items[0].name}></Item>
            <ItemDate date={props.items[0].date}></ItemDate>
            <Item name={props.items[1].name}></Item>
            <ItemDate date={props.items[1].date}></ItemDate>
            <Item name={props.items[2].name}></Item>
            <ItemDate date={props.items[2].date}></ItemDate>
            <Item name={props.items[3].name}></Item>
            <ItemDate date={props.items[3].date}></ItemDate>
            <Item name={props.items[4].name}>Hello ji mai hu aapki fifth item</Item>
            <ItemDate date={props.items[4].date}></ItemDate> */}
        </Card>
    )
}

export default Product;