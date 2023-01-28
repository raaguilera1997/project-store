<template>
<!--  nav bar-->
    <nav class="bg-blue-600 border-white  dark:bg-gray-900" :style="open?'height: 40px':''">
        <div class="flex flex-left justify-between " :style="open?'height: 40px':''">
            <a href="https://flowbite.com" class="flex items-center  px-2">
                <img src="../assets/store.png" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
                <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Tienda</span>
            </a>
            <div class="flex flex-left">
                <div v-if="open" id="dropdownNotification" class="z-10 py-11 w-full max-w-sm   rounded-lg "
                     aria-labelledby="dropdownNotificationButton">
                    <div class="flex items-start justify-between bg-blue-600 ">
                        <div class="block px-4 py-2 font-medium text-center text-white rounded-t-lg ">
                            Productos
                        </div>
                        <button type="button" @click="open=false"
                                class="text-white bg-transparent hover:bg-blue-650 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="defaultModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>

                        </button>
                    </div>
                    <div class="block py-2 text-sm font-medium  text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                        <div href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                             v-for="item in store.get_products" :key="item.id">
                            <div class="flex-shrink-0">
                                <img class="rounded-full w-11 h-11" :src="item.image"
                                     alt="Jese image">
                                <div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                                    <svg class="w-3 h-3 text-white" aria-hidden="true" fill="currentColor"
                                         viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="w-full pl-3 flex-row justify-between">
                                <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span
                                        class="font-bold text-gray-900 dark:text-white">{{item.title}}</span>
                                </div>
                                <div class="text-gray-700 text-sm mb-1.5 dark:text-gray-700"><span
                                        class="font-bold text-gray-700 dark:text-white">precio: {{item.price}}</span>
                                </div>
                                <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span
                                        class="font-semibold text-gray-900 dark:text-white">cantidad: {{item.cantidad}}</span>
                                </div>
                                <div class="text-blue-600 text-sm mb-1.5 dark:text-gray-400"><span
                                        class="font-bold text-dark dark:text-white">total: {{item.cantidad *item.price}}</span>
                                </div>

                            </div>
                            <div class="w-full pl-10 pt-10 ">
                                <button type="button"
                                        class="px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        @click="deleteProduct(item)">Eliminar
                                </button>
                            </div>

                        </div>
                    </div>
                    <a href="#"
                       class="block py-2 text-sm font-medium text-center text-white rounded-b-lg bg-blue-600  dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                        <div class="inline-flex items-center ">
                            <svg class="w-4 h-4 mr-2 text-gray-white" aria-hidden="true"
                                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                <path fill-rule="evenodd"
                                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            Monto total: {{store.get_monto_total}}
                        </div>
                    </a>

                </div>
                <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification"
                        class="inline-flex px-2 items-center text-sm font-medium text-center text-white hover:text-gray-700 focus:outline-none  "
                        type="button" :disabled="store.get_cant_product==0?true:false" @click="open=!open">
                    <svg aria-hidden="true" class="w-7 h-7 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                    <div class="relative flex pt-2">
                        <div class="relative  items-center justify-center inline-flex w-6 h-6 bg-red-500 border-2 border-white rounded-full -top-2 right-4 dark:border-gray-900">
                            {{cant_product}}
                        </div>
                    </div>

                </button>
            </div>

        </div>
    </nav>
    <!--  nav bar-->
    <div class="py-4 px-5">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <table class="w-full text-sm text-left text-gray-500 border-blue-500 border-blue-500">
                <thead class="text-xs text-white uppercase bg-blue-600 bg-blue-600 ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Image</span>
                    </th>
                    <th scope="col" class=" py-3">
                        Productos
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Precio
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Cantidad
                    </th>
                </tr>
                </thead>
                <tbody v-for="item in list_product" :key="item">
                <tr class="bg-gray-200 border-blue-500 hover:bg-gray-300">
                    <td class="w-12 p-2">
                        <img :src="item.image" alt="Apple Watch">
                    </td>
                    <td class="py-4 font-semibold text-gray-900 dark:text-white">
                        {{ item.title }}
                    </td>

                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {{item.price}}
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex items-center space-x-3">
                            <div>
                                <input type="number" v-model="item.cantidad" @change="RestartValue(item)"
                                       @click="AddProduct(item)"
                                       class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="1" required>
                            </div>
                        </div>
                    </td>
                </tr>

                </tbody>
            </table>
            <div role="status" v-if="is_load" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                <svg aria-hidden="true" class="w-8 h-14 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"/>
                </svg>
            </div>
        </div>

    </div>


</template>


<script setup lang="ts">
    import {onMounted, ref, watch, computed} from 'vue';
    import {useProducts} from '../stores/products'
    import BaseUrl from '../config/base_url'
    import Product from '../components/types/product'
    import api from 'axios'

    let open = ref(false)
    let is_load = ref(false)
    let list_product = ref<Product[]>([])
    let store = useProducts()
    let cant_product = computed(() => {
        return store.get_cant_product
    })
    onMounted(() => {
        LoadData()
    })

    function AddProduct(value: Product) {
        store.addProduct(value)
    }

    function RestartValue(value) {
        if (value.cantidad == -1) {
            value.cantidad = 0;
        }

    }

    async function LoadData() {
        is_load.value = true
        let url = BaseUrl.api.url
        let result = <any>[]
        await api.get(url).then(resp => {
            resp.data.forEach((element: any) => {
                let object = {
                    ...element,
                    cantidad: 0
                }
                result.push(object)
            })
        }).finally(() => {
            list_product.value = result
            is_load.value = false
        })


    }

    function deleteProduct(product: Product) {
        store.deleteProduct(product.id)
        product.cantidad = 0
    }

    watch(store, () => {
        let list = store.get_products
        list.forEach(item => {
            if (item.cantidad == 0) {
                store.deleteProduct(item.id)
            }
        })
        if (store.get_cant_product == 0) {
            open.value = false
        }
    })
</script>
