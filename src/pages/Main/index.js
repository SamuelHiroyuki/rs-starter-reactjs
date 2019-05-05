import React, { Component } from "react";
import { getProducts } from "../../services/api/Products";
import { Link } from "react-router-dom";
import "./styles.css";

export default class Main extends Component {
    state = {
        products: [],
        productsInfo: {},
        page: 1
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await getProducts(page);
        const { docs: products, ...productsInfo } = response.data;
        this.setState({ products, productsInfo, page });
    };

    prevPage = () => {
        const { page } = this.state;

        if (page !== 1) {
            let p = page - 1;
            this.loadProducts(p);
        }
    };

    nextPage = () => {
        const { page, productsInfo } = this.state;

        if (page !== productsInfo.pages) {
            let p = page + 1;
            this.loadProducts(p);
        }
    };

    render() {
        const { products, page, productsInfo } = this.state;
        return (
            <div className="product-list">
                {products.map(p => (
                    <article key={p._id}>
                        <strong>{p.title}</strong>
                        <p>{p.description}</p>
                        <Link to={`/products/${p._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>
                        Anterior
                    </button>
                    <button
                        disabled={page === productsInfo.pages}
                        onClick={this.nextPage}
                    >
                        Próximo
                    </button>
                </div>
            </div>
        );
    }
}
