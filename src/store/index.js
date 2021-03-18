import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		userInfo: {},
		tooken: localStorage.getItem('trialfund_tooken') ? localStorage.getItem('trialfund_tooken') : ''
	 },
	mutations: {
		setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
            console.log("store:"+state.userInfo); 
        },
        setTooken(state, user) {
            state=user;
	    	localStorage.setItem('trialfund_tooken', state.tooken); 
        }
	},
	actions: {
		setUserInfo({ commit }, user) {
            commit('setUserInfo', user);
        },
		changeLogin ({ commit },user) {			
			console.log(user);
 			commit('setTooken', user);
	    	
	    }
	},
	modules: {

	}
})
