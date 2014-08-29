function Bob (){

}

Bob.prototype.hey = function (string){
   var upperCaseString = string.toUpperCase();
   var lowerCaseString = string.toLowerCase();
   var shout = (string === upperCaseString) && (string !== lowerCaseString);
   if(shout){
   	return 'Woah, chill out!';
   }    
   if(string[string.length-1] === '?'){
   	return 'Sure.';
   }
   if(string.trim() === ''){
   	return 'Fine. Be that way!';
   }
   return 'Whatever.';
};
