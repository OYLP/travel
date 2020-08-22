<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header ></detail-header>
    <div class="content">
      <detail-list :list="categoryList" ></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName : '',
      bannerImg : '',
      gallaryImgs : [],
      categoryList : [],
    }
  },
  methods: {
    getDetailInfo(){
      axios.get('/api/detail.json?id=', {
        params:{
          id: this.$route.params.id
        }
      }).then((res)=>{
        // console.log(res.data.ret)
        res = res.data
        if(res.ret && res.data){
          // console.log(res.data)
          let data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.categoryList = data.categoryList
          // console.log(this.categoryList)
        }
      })
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
