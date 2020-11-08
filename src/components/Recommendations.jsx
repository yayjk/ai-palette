import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { recommendations_data } from "../assets/recommendations"
import styled from 'styled-components';
import { H4Styled } from '../styledComponents/Typography';


const Recommendations = ({product}) => {
    const [listOfProducts, setListOfProducts] = useState([]);
    //State to toggle between more and less recommended products
    const [moreVisibility, setMoreVisibility] = useState(false)

    //Selects List of products based on the selected filter
    useEffect(() => {
        setListOfProducts(recommendations_data[product]);
        setMoreVisibility(false);
    }, [product])

    return (
        <RecommendationWrapper>
            <H4Styled>Recommended Products</H4Styled>
            <ProductsContainer>
                {
                    listOfProducts.slice(0,3).map(
                        product => <Product key={product.name} product={product} />
                    )
                }
                {
                    moreVisibility && 
                        listOfProducts.slice(3,6).map(
                            product => <Product key={product.name} product={product} />
                            )
                }
            </ProductsContainer>
            <div id="moreButton">
                <button onClick={
                    () => setMoreVisibility(!moreVisibility)
                }>
                    {moreVisibility ? "Less" : "More"}
                </button>
            </div>
        </RecommendationWrapper>
    )
}

const mapStateToProps = state => {
    const { product } = state.filterReducer;
    return { product }
}

export default connect(mapStateToProps)(Recommendations);


//Single Product Markup
const Product = ({product}) => {
    return (
            <SingleProduct>
                {product.name}
                <div className="img">
                    <img src={`https://picsum.photos/100/${Math.floor(Math.random() * 10) + 101}`} alt="image12" />                               
                </div>
                {product.price}
            </SingleProduct>
    );
}


//Recommendations Styles
const RecommendationWrapper = styled.div`
    padding: 1rem;

    #moreButton{
        display: flex;
        justify-content: flex-end;

        button{
            padding: 0.5rem;
        }
    }
`
const SingleProduct = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;

    @media (max-width: 500px) {
        width: 100%;
    }

    .img{
        width: 100px;
        height: 100px;
        border: 1px solid black;
        margin: 0.5rem 0;

        img {
            object-fit: cover;
            max-width: 100%;
            max-height: 100%;
        }
    }
`

const ProductsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    flex-wrap: wrap;
`
