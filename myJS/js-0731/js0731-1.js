//取得送出按鈕(擇其一)
// let btn1= document.getElementById('btn');
let myBtn= document.querySelector('#btn');  //用querySelector後面括弧裡要css語法所以要加#

//監聽按鈕是否被左鍵一下了
myBtn.addEventListener('click',function(){
    let result = "";
    //取得科目的全部
    let subjects=document.getElementsByName('subject');
    //使用迴圈逐一檢查是否被選取→checked
    for(let i=0;i<subjects.length;i++){
        if(subjects[i].checked){
            //取得選項按鈕的值
            result=subjects[i].value;
            //因為是單選，所以找到後就結束
            break;
        }
    }
    console.log('科目'+result);
});

myBtn.addEventListener('click',function(){
    let result1 = "";
    //取得科目的全部
    let subjects2=document.getElementsByName('design');
    //使用迴圈逐一檢查是否被選取→checked
    for(let i=0;i<subjects2.length;i++){
        if(subjects2[i].checked){
            //取得選項按鈕的值
            result1=subjects2[i].value;
            //因為是單選，所以找到後就結束
            break;
        }
    }
    console.log('科目'+result1);
});