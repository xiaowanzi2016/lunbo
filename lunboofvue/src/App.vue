<template>
<div id="app">
  <div id="container">
    <div id="list" :style="dis">
        <ul>
          <li v-for="(imge,index) in todo"  :key="index"><img  :src="imge.imga"   alt=" "></li>
        </ul>
    </div>
    <div id="arrow">
      <ul class="arrow">
        <li ><b  id="left" class="left" @click="move(600,1)">&lt;</b></li>
        <li ><b id="right" class="right" @click="move(600,-1)">&gt;</b></li>
      </ul>
    </div>
  </div>
  <!--制作小圆点-->
  <div id="btns">
    <span v-for="(list,index1) in lists" index="index1" :key="index1" :class="{dotted: index1 === (currentpage - 1)}"  @click="jump(index1+1)"></span>
  </div>
</div>
</template>
<script>
export default {
  name: 'App',
  data: function () {
    return {
      todo: [
        {imga: require('./assets/img/5.jpg')},
        {imga: require('./assets/img/1.jpg')},
        {imga: require('./assets/img/2.jpg')},
        {imga: require('./assets/img/3.jpg')},
        {imga: require('./assets/img/4.jpg')},
        {imga: require('./assets/img/5.jpg')},
        {imga: require('./assets/img/1.jpg')}
      ],
      lists: [1, 2, 3, 4, 5],
      distance: -600,
      currentpage: 1
    }
  },
  computed: {
    dis () {
      return {
        left: this.distance + 'px'
      }
    }
  },
  methods: {
    move: function (dist, meric) {
      this.distance = this.distance + dist * meric
      this.currentpage = this.distance / (-600)
      if (this.distance === -3600) {
        this.distance = -600
        this.currentpage = 1
      }
      if (this.distance === 0) {
        this.distance = -3600
        this.currentpage = 5
      }
      return this.distance
    },
    jump: function (index) {
      var va = this.currentpage - (index - 1)
      if (va < 0) {
        var dista = (index - this.currentpage) * 600
        this.move(dista, -1)
      } else {
        dista = (this.currentpage - index) * 600
        this.move(dista, 1)
      }
    }
  }
}
</script>
<style>
#container{
width: 600px ;
height: 400px ;
overflow: hidden;
position: relative
}
#list {
width: 4200px ;
height: 400px ;
position: absolute
}
ul {
list-style: none;
padding: 0px
}
li{
float: left;
display: inline;
}
#arrow ul {
list-style: none
}
#arrow ul li {
display: inline
}
#left, #right {
position: absolute;
top: 200px;
width: 50px;
height: 50px;
font-size: 36px;
font-weight: bold;
color: #fff;
background-color: RGBA(0,0,0,.3);
}
#left {
left: 50px;
}
#right {
left: 500px
}
#btns span{
float: left;
width: 10px;
height: 10px;
margin: 10px;
border: 1px solid #fff;
background: #333;
border-radius: 50% 50%;
}
#btns {
position: absolute;
left: 200px;
width: 200px;
height: 30px;
top: 330px
}
#btns .dotted {
background: orangered
}
</style>
