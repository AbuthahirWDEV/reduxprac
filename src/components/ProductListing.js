import React , { useEffect } from 'react'
import axios from 'axios'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productActions'
import { useSelector , useDispatch } from 'react-redux'

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products)
  const dispatch = useDispatch()
  // api call
  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Err: ', err)
      })
      // setting values to redux store 
    dispatch(setProducts(response.data))
  }
  
  useEffect(() => {
    fetchProducts()
  }, [])
  
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing