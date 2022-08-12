<template>
  <div>
    <div class="absolute z-40 inset-0 opacity-40 bg-black"></div>
    <div class="fixed  overflow-x-auto overflow-y-auto inset-0
                flex justify-center items-center mx-10
                z-50"
    >
      <div class="relative mx-auto w-full sm:w-auto md:w-auto lg:w-auto">
        <div class="bg-white w-full shadow-xl rounded-[8px] p-6">
          <div class="header text-2xl font-medium">Заказать звонок</div>
          <div class="content pt-6 
                      grid grid-cols-1 gap-5
                      sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 
                      grid-flow-row
                      ">
            <TInput
              :label="'Телефон*'"
              v-model="form.phone"
              :masked="'+# (###) ###-##-##'"
              :placeholder="'+7 (___) ___-__-__'"
            ></TInput>
            <TInput
              v-model="form.name"
              :label="'Имя*'"
              :placeholder="'Иван Иванов'"
            ></TInput>
            <TInput
              :label="'Email*'"
              v-model="form.email"
              :placeholder="'you@example.com'"
            ></TInput>
            <TSelect
              class="lg:col-start-4 lg:col-end-4 md:col-start-1 md:col-end-3 sm:col-start-1 sm:col-end-3"
              :label="'Город*'"
              v-model="form.city_id"
              :items="cities"
              :placeholder="'Выберите город'"
            ></TSelect>
            <TButton 
              class="self-end lg:col-start-4 lg:col-end-4 md:col-start-3 md:col-end-3 sm:col-start-3 sm:col-end-3"
              :label="'Отправить'"
              :classes="'bg-green-600 hover:bg-green-700 h-[44px]'"
              @click="sendForm()"
            ></TButton>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>

import TButton from './TButton.vue'
import TInput from './TInput.vue'
import TSelect from './TSelect.vue'

export default {
  props:{
    city_id: Number
  },
  components: { TButton, TInput, TSelect},
  data(){
    return{
      maskPhone: {
        mask: '+7 (___) 000-00-00',
        lazy: false
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
    },
    cities:{
      get () { return this.$store.getters.GET_CITIES }
    }
  },
  methods:{
    // closeModal(){
    //   this.togglePopup = false;
    // },
    sendForm(){
      this.axios.post('http://hh.autodrive-agency.ru/test-tasks/front/task-7',
        {
          name: this.form.name,
          phone: this.form.phone.replace(/[{()},-\s]/g, ''),
          email: this.form.email,
          city_id: this.form.city_id
        }
      ).then(res=>{
        this.$store.commit('UNSET_FORM');
        this.togglePopup = flase;
      }).catch(e=>{
        console.log(e)
      })
    }
  }
}
</script>

<style>

</style>