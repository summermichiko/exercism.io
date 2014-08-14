function Bob () {

}

Bob.prototype.hey = function (string) {
   var upStr = string.toUpperCase(),
       loStr = string.toLowerCase(),
       shout = (string === upStr)  && !(string === loStr) ;

   if ( shout )    return 'Woah, chill out!';
   if ( string[string.length-1] === '?')   return 'Sure.';
   if ( string.trim() === '')  return 'Fine. Be that way!';
   return 'Whatever.';
};

module.exports = Bob;
