<template>
  <div class="flex flex-col">
    <label class="text-base font-medium text-gray-700">{{label}}</label>
    <input
      :value="modelValue"
      @input="updateInput"
      v-maska="masked ? masked : ''" 
      :placeholder="placeholder"
      type="text" 
      class="border border-gray-300 rounded-[6px] py-[9px] px-[13px] focus:outline-none w-min-[170px]"/>
  </div>
</template>

<script>
export default {
  props:{
    label: {
      type: String,
      default: "",
    },
    masked: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  methods:{
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }

}
</script>

<style>

</style>