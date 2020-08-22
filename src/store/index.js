import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
//可省略state.js和mutations.js的后缀名.js

Vue.use(Vuex)

//拆分成三个文件index.js,mutations.js,state.js
// let defaultCity = '上海'
// try {
//   if (localStorage.city) {
//     defaultCity = localStorage.city
//   }
// } catch (e) {}
// export default new Vuex.Store({
//   state: {
//     city: defaultCity
//   },
//   actions: {
//     //传入city
//     changeCity (ctx, city){
//       console.log(city)
//       //commit执行mutations中的changeCity方法
//       ctx.commit('changeCity',city)
//     }
//   },
//   mutations: {
//     changeCity (state,city){
//       state.city = city
//       try {
//         localStorage.city = city
//       } catch (e){}

//     }
//   }
// })

//键值一样时可以省略值{state,state}==>{state}
export default new Vuex.Store({
  state,
  mutations
})
