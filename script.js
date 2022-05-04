function calc(type, value){
 console.log(type, value); 
 if(type === 'action'){
    if(value === 'c'){
        
         document.getElementById('result').value = ''
    }
    if( value === '+' || value === '-' || value === '*' || value ==='/' || value === '.' ){
        document.getElementById('result').value += value;
    }
    if(value === '='){
        const valueField = eval( document.getElementById('result').value); 
        document.getElementById('result').value = valueField; 
         
    }

 }else if (type == 'value'){
    document.getElementById('result').value += value;
 }   
}