import axios from "axios";

const state={
    products:[],
}
const mutations = {
    addProduct(state, payload){
        state.products.push(payload);
    }
}
const actions={
    fetchProducts(context){
        const token = context.rootState.auth.token;
        axios.get(`https://vue-3-shop-backend-4c1ea-default-rtdb.europe-west1.firebasedatabase.app/products.json?auth=${token}`)
        .then((response)=>{
            console.log(response);
        
            
        })
        .catch((err)=>{
            console.log(err);
            
        })

    },
    storeProduct(context, payload){

        
        const productItem={
            title:payload.title,
            description:payload.description,
            price:payload.price,
        }
        const token = context.rootState.auth.token;
        axios.post(`https://vue-3-shop-backend-4c1ea-default-rtdb.europe-west1.firebasedatabase.app/products.json?auth=${token}`, productItem)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=> {throw new Error(err)})
    }
}
const getters={}

const shopModule={
    state,
    mutations,
    actions,
    getters,
};

export default shopModule;