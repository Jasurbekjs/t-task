export default
{
  state: {
    cities:[
      { id: 1, name: "Москва"},
      { id: 2, name: "Санкт-Петербург"},
      { id: 3, name: "Казань"}
    ],
    form:{
      name: '',
      phone: '',
      email: '',
      city_id: 0
    },
    togglePopup: false
  },
  mutations: {
    SET_FORM(state,payload){ state.form = payload.form; },
    UNSET_FORM(state){ state.form = { name: '', phone: '', email: '',city_id: ''}; },

    SET_TOGGLE_POPUP(state,payload){ state.togglePopup = payload; },
    UNSET_TOGGLE_POPUP(state){ state.togglePopup = false; },
  },
  actions:{
    
  },
  getters:{
    GET_CITIES:(state)=>state.cities,
    GET_FORM:(state)=>state.form,
    GET_TOGGLE_POPUP:(state)=>state.togglePopup,
  }
}