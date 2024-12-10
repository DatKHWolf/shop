import axios from "axios";

const state={
    products:[],
    id:'2024-12-05-01',
}
const mutations = {
    setProducts(state, payload){
        state.products = payload;
    },
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
            const productsDO=[]
            for (const id in response.data){
                productsDO.push({
                    id:id,
                    ...response.data[id],
                })
                console.log(productsDO);
                
                context.commit("setProducts", productsDO);
            }
        })
        .catch((err)=> {throw new Error(err)})
    }
}
const getters={
    products:(state)=>state.products,
};

const shopModule={
    state,
    mutations,
    actions,
    getters,
};

export default shopModule;