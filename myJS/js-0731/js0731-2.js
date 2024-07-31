//建立一個存放選取結果的變數 建議兩個以上用陣列(要刪除也方便)
let result="";
//取得送出按鈕
let myBtn = document.querySelector('#btn');
//監聽按鈕是否左鍵一下
myBtn.addEventListener('click',function(){
    //取得下拉式方塊
    let myCity = document.querySelector('#city');
    //使用迴圈，逐一檢查是否被選取→selected
    for(let i=0;i<myCity.length;i++){
        if(myCity[i].selected){
            if(myCity[i].value == ""){
                result = '尚未選取縣市';
            }else{
                result=myCity[i].value;
            }
            break;//break要寫在迴圈裡 被選擇才會結束
        }
        //break如果寫在迴圈外 請選擇後就會結束 部會跑到下面2.3.4選項
    }
    console.log('縣市:'+result)
});