function ProductCard() {
    return <>
        <div className="card_product">
            <div className="card_item">
                <div className="card-img">
                    <img src="../../public/img/giay-nam-sneaker-la-gi.jpg" alt="Giày sneaker" />
                </div>

                <div className="card-info">
                    <div className="product-name">
                        Nike Air MX Support 2500 - Black
                    </div>
                    <div className="product-price">
                        <div className="price-new">4.000$</div>
                        <div className="price-old">4.500$</div>
                    </div>
                </div>
                <button>Add to cart</button>
            </div>
        </div>
    </>;
}
export default ProductCard;