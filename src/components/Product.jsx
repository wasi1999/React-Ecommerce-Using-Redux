import React,{useEffect,useState} from 'react'
import {useDispatch} from 'react-redux';
import { addCart } from '../redux/action';
import { NavLink, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


function Product() {
  const {id}=useParams();
  const [product,setProduct]=useState([]);
  const [loading,setLoading]=useState(false);


  const dispatch=useDispatch();
  const addProduct=(product)=>{
    dispatch(addCart(product));
  }

  useEffect(()=>{
    const getProduct=async()=>{
      setLoading(true);
      const response=await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);

    }
    getProduct();
  },[])

  const Loading=()=>{
    return (
      <>
      <div className="col-md-6 my-4">
        <Skeleton height={400} width={400}/>
      </div>
      <div className="col-md-6 my-4 " style={{lineHeight:2}}>
        <Skeleton height={50} width={300} />
        <Skeleton height={75}  />
        <Skeleton height={25} width={150} />
        <Skeleton height={50} />
        <Skeleton height={150} />
        <Skeleton height={50} width={100}/>
        
      </div>
      </>
    )
  }

  const ShowProduct=()=>{
    return(
      <>
      
       <div className="col-md-6 my-3">
        <img src={product.image} alt={product.title} height='400px' width={'400px'}  />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50 my-3">
          {product.category}
        </h4>
        <h1 className="display-5">
          {product.title}
          
        </h1>
        <p className="lead fw-bolder">
          Rating {product.rating && product.rating.rate }
          <i className="fa fa-star mx-1"></i>
          <i className="fa fa-star mx-1"></i>
          <i className="fa fa-star mx-1"></i>
          <i className="fa fa-star-half-empty mx-1"></i>
        </p>
        <h3 className="display-6 fw-bold my-4">
          $ {product.price}
        </h3>
        <p className="lead">
          {product.description}
        </p>
        <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>
          Add To Cart
        </button>
        <NavLink to='/cart' className="btn btn-dark px-3 py-2 ms-2">
          Go To Cart
        </NavLink>
      </div>
      </>
    )
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          {loading ? <Loading/> : <ShowProduct/>}
        </div>
      </div>
    </div>
  )
}

export default Product