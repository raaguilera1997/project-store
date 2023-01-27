import {defineStore} from 'pinia'
import Product from '../components/types/product'

export const useProducts=defineStore('productos',{
    state:()=>(
        {
            products:<Product>[]
        }
        
    ),
  

      actions: {
        addProduct(product:Product) {
          this.products.push(product)
        },
      }
}) 