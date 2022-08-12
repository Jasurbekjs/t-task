<template>
  <div class="flex flex-col">
    <label class="text-base font-medium text-gray-700">{{label}}</label>
    <select
      class="border border-gray-300 rounded-[6px] py-[9px] px-[13px] focus:outline-none w-min-[170px]"
      :value="modelValue"
      @change="updateSelect"
      :placeholder="placeholder">
      <option 
        v-for="(item,index) of items" 
        :key="index"
        :value="item.id"
      >
        {{item.name}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props:{
    label: String,
    items: Array,
    placeholder: String,
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  methods:{
    updateSelect(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
}
</script>

<style>
</style>