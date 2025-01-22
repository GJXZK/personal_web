import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

const useSearchKeyword = defineStore('searchKeyword',{
  state: () => ({
    searchKeyword: "",
  }),
  actions:{
    updateKeyword(searchKeyword:string) {
      this.searchKeyword = searchKeyword
    }
  }
})
export default useSearchKeyword