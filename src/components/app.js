import Vue from '../../js/vue.min.js' 

new Vue({
  el: '#list-demo',
  data: {
    items : [
      { message: 'Foo' ,scan:15 ,imgurl:'https://qnphoto.kagirl.cn/icon/green.jpg',title:'好的撒UI后端死回电话撒UI', mark:["dsadsa","dsada","新标签"]},
      { message: 'Bar' ,scan:20 ,imgurl:'https://qnphoto.kagirl.cn/icon/shengdan.jpg',title:'大撒胡丢沙堆', mark:["zzzzz","qeqeq","新标签"]}
    ],
    nextNum : 10,
    activeClass: 'mark_style1',
    errorClass: 'mark_style2'
  },
  methods: {
      show: function () {
      var a = event;
          this.items.splice(a.currentTarget.dataset.index, 1);
      },
      show1:function(index){
          var a = event;
          var itemNum = a.currentTarget.parentNode.dataset.index;
          var length = this.items[itemNum].mark.length;
          if(index == length -1) {
              if(index == 3&&this.items[itemNum].mark[3]=='新标签'){
                  this.items[itemNum].mark.pop();
                  this.items[itemNum].mark.push("isaooo"); 
              }
              else if(index == 3){
                  this.items[itemNum].mark.pop();
                  this.items[itemNum].mark.push("新标签"); 
              }
              else{
                  this.items[itemNum].mark.splice(length -1,0,"isaooo");
              }
          }
          else{
              if(length==4&&this.items[itemNum].mark[3]!='新标签'){
                  this.items[itemNum].mark.splice(index, 1);  
                  this.items[itemNum].mark.push("新标签"); 
              }
              else{
                  this.items[itemNum].mark.splice(index, 1);   
              }
          }     
      },
      styleselect:function(index,item){
          var a = index;
          var b = item;
          var length = b.mark.length;
          if(a==3&&item.mark[3]!='新标签')return true;  
          if(a == length -1 )return false;
          else
             return true;     
      }
  },
})

