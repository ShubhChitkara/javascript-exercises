const sumAll = function(num1,num2) {
    if(typeof(num1)=="number"&&typeof(num2)=="number"){
        if(num1>0&&num2>0){
            if(num1<num2){
                let ans=0;
                for(num1;num1=num2+1;num1++){ans=ans+num1;}
                return ans;
            }else{let ans=0;
                for(num2;num2=num1+1;num2++){
                    ans=ans+num2;}
                return ans;}

        }else{return "ERROR"};
        
    }else{return "ERROR"};

};

// Do not edit below this line
module.exports = sumAll;
