import {defineStore} from 'pinia'
import Product from '../components/types/product'

export const useProducts=defineStore('productos',{
    state:()=>(
        {
            products:<any>[],

        }

    ),
    getters: {
        get_products: (state) => state.products.sort(function(a, b){return a.id - b.id}),
        get_cant_product:(state)=>{
            let cont=0
        state.products.forEach(item=>{
            cont+=item.cantidad
        })
            return cont;
        },
        get_monto_total:(state)=>{
            let total=0
            state.products.forEach(item=>{
                total+=item.cantidad*item.price
            })
            return Math.round(( total) * 100) / 100
        },
    },

      actions: {
        addProduct(product:Product) {
           let ind=this.products.findIndex(p=>p.id==product.id)
           if(ind!=-1){
               this.products.splice(ind,1)
           }
          this.products.push(product)
        },
          deleteProduct(id:number){
              let ind=this.products.findIndex(p=>p.id==id)
              this.products.splice(ind,1)

          },
      }
})
