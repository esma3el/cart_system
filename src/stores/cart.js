import { defineStore } from 'pinia'
import bigDecimal from 'js-big-decimal';

export const useCart = defineStore('cart', {
    state: () => {
        return {
            data: {
                cart_items: [],
                total_price: 0,
                discount: "NX100",
                discount_status: 0
            }
        }
    },
    actions: {
        get_total_price_after_discount() {
                return bigDecimal.subtract(this.data.total_price,bigDecimal.multiply(0.20, this.data.total_price))
        },
        setDiscount(code) {            
            if (code == this.data.discount) {
                this.data.discount_status = 1;
                localStorage.setItem('cart', JSON.stringify(this.data))
                // this.data.total_price = bigDecimal.subtract(this.data.total_price,bigDecimal.multiply(0.20, this.data.total_price))
            //     this.data.discount_status = 1
            //     return "Discount Applied"
            // }
            // else{
            //     return "Unable to set discount"
            // }
            }
        },
        clear_all() {
            this.data.cart_items = []
            this.data.total_price = 0
            this.data.discount_status = 0
            localStorage.setItem('cart', JSON.stringify(this.data))
        },
        increase_quantity(product) {
            const idx = this.data.cart_items.findIndex((item) => item.id == product.id)
            this.data.cart_items[idx].quantity += 1
            this.data.total_price = bigDecimal.add(this.data.total_price, product.price)            
            localStorage.setItem('cart', JSON.stringify(this.data))
        },
        setData() {
            const storagedata = JSON.parse(localStorage.getItem('cart'))
            if (storagedata) {
                this.data = storagedata
            }
        },
        add(product) {
            const idx = this.data.cart_items.findIndex((item) => item.id == product.id)
            if (idx != -1) {
                this.data.cart_items[idx].quantity += 1
                this.data.total_price = bigDecimal.add(this.data.total_price, this.data.cart_items[idx].price)
            }
            else {
                product.quantity = 1
                this.data.total_price = bigDecimal.add(this.data.total_price, product.price)
                this.data.cart_items.push(product)
            }

            localStorage.setItem('cart', JSON.stringify(this.data))
        },
        remove(product) {
            const idx = this.data.cart_items.findIndex((item) => item.id == product.id)
            if (this.data.cart_items[idx].quantity > 1) {
                this.data.cart_items[idx].quantity -= 1
            }
            else {
                this.data.cart_items = this.data.cart_items.filter((item) => item.id != product.id)
            }
            this.data.total_price = bigDecimal.subtract(this.data.total_price, product.price)

            localStorage.setItem('cart', JSON.stringify(this.data))
        }
    },
})