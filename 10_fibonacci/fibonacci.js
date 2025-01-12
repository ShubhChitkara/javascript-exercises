const fibonacci = function(target) {
    if(target<0){
        return "OOPS"
    }else{
        array=[0,1];
        for(let i=0;i<target+1;i++){
            len=array.length;
            array.push(array[len-1]+array[len-2]);
        }
        return array[target]
    }

};

// Do not edit below this line
module.exports = fibonacci;
