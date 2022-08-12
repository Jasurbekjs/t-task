<template>
  <div class="mt-5 mx-10 flex flex-col lg:flex-row md:flex-row ">
    <TButton 
      class="mt-[10px]"
      :label="btn1.name"
      :classes="'bg-blue-500 hover:bg-blue-600'"
      @click="clicked(1)"
    ></TButton>
    <TButton 
      class="mt-[10px] md:ml-[17px]"
      :label="btn2.name"
      :classes="'bg-teal-600 hover:bg-teal-700'"
      @click="clicked(2)"
    ></TButton>
    <TPopup
      class="transition ease-in-out delay-150"
      v-show="togglePopup"
    ></TPopup>
  </div>
</template>

<script>
import TButton from './TButton.vue'
import TPopup from './TPopup.vue'

export default {
  name: 'Main',
  components: { TButton, TPopup },
  data(){
    return{
      btn1: {
        name: "Заказать в Москву"
      },
      btn2: {
        name: "Заказать в Санкт-Петербург"
      },
    }
  },
  computed:{
    form:{
      get () { return this.$store.getters.GET_FORM },
      set (value) { this.$store.commit('SET_FORM', value) }
    },
    togglePopup:{
      get () { return this.$store.getters.GET_TOGGLE_POPUP },
      set (value) { this.$store.commit('SET_TOGGLE_POPUP', value) }
    }
  },
  mounted(){
    console.log(this.togglePopup)
  },  
  methods:{
    clicked(id){
      this.togglePopup = true;
      this.form.city_id = id;
      console.log('clicked', id)
    }
  }
}
</script>

<style>

</style>