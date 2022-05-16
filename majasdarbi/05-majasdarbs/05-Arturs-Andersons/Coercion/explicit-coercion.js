// Kads rezultats bus pec datu tipu pārvēršānas
// Rezultatu uzrakstit blakus komentāros



String(123)     //'123'
String(-12.3)      // '-12.3'
String(null)        // null
String(undefined)   //undefined   
String(true)          //true
String(false)        //false
String(function () {})  // function (){}
String({})   //{}         
String({ key: 42 })  //{42}  
String([])      //[]       
String([1, 2]) //'1,2'       


Number("123")  //123         
Number("123.4") //123.4
Number("123,4") //NaN        
Number("")  //undefined          
Number(null) //0           
Number(undefined) //undefined      
Number(true)  //1        
Number(false) //0          
Number(function () {}) //NaN
Number({}) //NaN            
Number([]) //NaN             
Number([1]) //1           
Number([1, 2]) //NaN         


Boolean("") //undefined         
Boolean("string") //true      
Boolean("false")  //false      
Boolean(0)  //true            
Boolean(42) //true            
Boolean(-42) //true           
Boolean(NaN)  //undefined          
Boolean(null) //undefined            
Boolean(undefined)  //undefined      
Boolean(function () {}) //undefined  
Boolean({}) //undefined              
Boolean({ key: 42 }) //true   
Boolean([]) //undefined            
Boolean([1, 2]) //true   