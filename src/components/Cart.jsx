import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {delCart} from '../redux/action/index';


function Cart() {
    const state=useSelector((state)=>state.addCart)
    const dispatch=useDispatch()

    const handleButton=(item)=>{
        dispatch(delCart(item))
    }
    const cartItems=(product)=>{
        return(
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container">
                    <button className="btn"></button>
                    <div className="row">
                        <img src={product.image} alt={product.title} height={200} width={180} />
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className='lead fw-bold'>
                                {product.qty} X ${product.price}=$
                                {product.qty * product.price}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={()=>handleButton(product)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-dark me-4" onClick={()=>handleButton(product)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const emptyCart=()=>{
        return(
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container">
                    <div className="row">
                        <h3>Your Cart is empty</h3>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <>
        {state.length===0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
    </>
  )
}

export default Cart