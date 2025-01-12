const repeatString = function(strings,num) {
    if(num<0){
        return "ERROR"
    }
    else{let ans="";
        for(let i=0;i<num;i++){
            ans= ans+strings;
        }
        return ans
    }
    

};

// Do not edit below this line
module.exports = repeatString;
