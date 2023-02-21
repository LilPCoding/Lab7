import { defineStore } from "pinia";
import { computed } from "vue";

export const useCounterV1Store = defineStore("counterV1", ()=>{
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);

    function increase() {
        count.value++;
    }

    return {count, doubleCount, increase}
})