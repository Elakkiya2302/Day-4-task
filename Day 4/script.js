//Anonymous function:print odd number:
function(a){
    for(var i=0;i<a.length;i++){
        if(a[i]%2==0){
        console.log(a[i]);
        }
        }
    } 
a([1,2,3,4,5]);  

//IIFE function: 
(function(a){
    for(var i=0;i<a.length;i++){
        if(a[i]%2==0){
        console.log(a[i]);
        }
        }
})([1,2,3,4,5]);

//Arrow function:
var odd = (a)=> {
     for(var i=0;i<a.length;i++){
        if(a[i]%2==0){
        console.log(a[i]);
        }
        }
}
([1,2,3,4,5]); 

//Anonymous function::

funtion(a){
    console.log(a.toLowerrCase());
}
a(["THIRU"]);
//IIFE function:
(function(a){
    console.log(a.toLowerCase());
})(["THIRU"]);

//Arrow Function:
function array = (a)=>{
    console.log(a.toLowerCase());
}
array(["THIRU"]);

//Anonymous function: sum
var add = function(a,b){
    return a+b
}
console.log(add);
add([2,2]);
//IIFE function
(function a(a,b){
    console.log(a+b);
})a([2,2]) 

//Arrow function
var add =(a,b)=>{
    console.log(a+b);
}
add([2,2])


//anonymous function:prime number
var num =function (7){
    for(var i=1;i>0;i++){
        num++;
        var count=0;
        for(var j=1;j<=num;j++){
        if(num%j==0){
            count++;
        }
    }
        if(count==2){
            console.log(num+"it is a prime number");
            //break;
            i=1;
        }
    }
    }

    //IIFE function
     (function (7){
        for(var i=1;i>0;i++){
            num++;
            var count=0;
            for(var j=1;j<=num;j++){
            if(num%j==0){
                count++;
            }
        }
            if(count==2){
                console.log(num+"it is a prime number");
                //break;
                i=1;
            }
        }
        })

        //Arrow function:prime Number
        var num =function (7)=>{
            for(var i=1;i>0;i++){
                num++;
                var count=0;
                for(var j=1;j<=num;j++){
                if(num%j==0){
                    count++;
                }
            }
                if(count==2){
                    console.log(num+"it is a prime number");
                    //break;
                    i=1;
                }
            }
            }

















      
