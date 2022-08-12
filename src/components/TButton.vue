<template>
  <div
    class="py-2 px-4 
        text-white text-center 
        rounded-[6px] 
        cursor-pointer 
        font-sans font-semibold 
        shadow-sm
        focus:outline-none
        transition ease-in-out delay-150"
    :class="classes"
    @click.stop.prevent="clicked($event)"
  >
    {{label}}
  </div>
</template>

<script>
export default {
  name: 'TButton',
  props:{
    label: String,
    classes: String
  },
  methods:{
    clicked(e){
      e.stopPropagation();
      e.preventDefault();
    }
  }
}
</script>

<style>

</style>