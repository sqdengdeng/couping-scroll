<template>
  <div class="main">
    <div class="nav">
      <ul class="nav-wrap">
        <li class="active-tab">A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>
      </ul>
    </div>
    <div class="content">
      <div class="item item1" id="topic-0">A</div>
      <div class="item item2" id="topic-1">B</div>
      <div class="item item3" id="topic-2">C</div>
      <div class="item item4" id="topic-3">D</div>
      <div class="item item5" id="topic-4">E</div>
      <div class="item item6" id="topic-5">F</div>
      <div class="item item7" id="topic-6">G</div>
      <div class="item item8" id="topic-7">H</div>
    </div>
    
  </div>
</template>

<script>
import scrollEvent from '../index'
export default {
  name: 'index',
  mounted() {
    scrollEvent()
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 20px;
  text-align: center;
  color: #FFF;
}
.active-tab {
  font-weight: bold;
  color: chocolate;
  font-size: 44px;
}

.main {
  padding: 0 20px 100px;
} 
.nav {
  width: 100%;
  height: 100px;
  line-height: 100px;
  font-size: 40px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background: #42b983;
}

.item {
   height: 600px;
   background: #FFF;
   border-radius: 20px;
   margin-top: 20px;
   font-size: 66px;
 }
</style>
