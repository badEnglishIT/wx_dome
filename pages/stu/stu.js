Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var limit=30;
    var myDate = new Date();
    var currM = myDate.getMonth()+1
    var currD = myDate.getDate()
    var currH = myDate.getHours()
    var currI = myDate.getMinutes()
    console.log(currM,currD,currH,currI);
    var indexM=currM;
    var indexD=currD;
    var m = [];
    var optionD=[];
    var tmp=[];
    for (var i = 0; i < limit;i++){
      if (indexM%2==0){
        if (indexD <= 30 && indexM!=2){
          tmp.push(indexD);
          indexD++;
        } else if (indexD <=28){
          tmp.push(indexD);
          indexD++;
        }else{
          console.log(indexM, indexD);
          m.push(indexM);
          optionD.push(tmp);
          tmp = [];
          indexD = 1;
          indexM++;
          i--;
        }
      }else{
        if (indexD<=31){
          tmp.push(indexD);
          indexD++;
        }else{
          m.push(indexM);
          optionD.push(tmp);
          tmp=[];
          indexD=1;
          indexM++;
          i--;
        }
      }
    }
    m.push(indexM)
    optionD.push(tmp)
    var d = optionD[0];
    var h=this.longArr(24);
    var i=this.longArr(60);
    var that =this,value=[0,0,currH-1,currI-1];
    console.log(m, d, h, i, optionD, currM)
    this.setData({ m, d, h, i, currM,optionD},function(){
      that.setData({value:value})
    })
    console.log(this.data.value)
  },
  longArr(num){
    var tmp=[];
    for(var i=1;i<=num;i++){
      tmp.push(i);
    }
    return tmp;
  },
  //监听更改
  changeTime(e){
    var data=e.detail.value;
    var currM=this.data.currM;
    var m=this.data.m,optionD=this.data.optionD;
    // var value=this.data.value;
    console.log(currM , m[data[0]])
    //是否修改的是月份
    if(currM!=m[data[0]]){
      //重置天数
      data[1]=0
      this.setData({
        d: optionD[data[0]],
        currM: m[data[0]],
      })
      console.log('修改了');
    }
    this.setData({
      value: data
    })
    console.log(data)
  },
  confirm(){
    console.log('ok:',this.data.value);
    var data=this.data.value;
    var m=this.data.m,d=this.data.d,h=this.data.h,i=this.data.i;
    console.log(m[data[0]]+"月",d[data[1]]+"日",h[data[2]]+"时",i[data[3]]+"分")
  }
})