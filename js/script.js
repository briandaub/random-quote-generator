$(document).ready(function(){
   generateQuote();
   addURL();
  
   var quoteArr = new Array();
   
   function generateQuote(){
     quoteArr = ["Life is about making an impact, not making an income.  --Kevin Kruse", "Whatever the mind of man can conceive and believe, it can achieve. --Napolean Hill", "Strive not to be a success, but rather to be of value. --Albert Einstein", "We become what we think about. --Earl Nightingale", "The mind is everything. What you think you become. --Buddha", "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it. --Johann Wolfgang von Goethe"];
     
     var random = quoteArr[Math.floor(Math.random()*quoteArr.length)];
     
     $('.quote').html(random);
     
   }
  
   $('.genQuote').click(function(){
        generateQuote();
   });
  
   function addURL (){
     var url = "https://twitter.com/intent/tweet?url=http://codepen.io/codeJunkie01/full/GpREOE/&text=";
     $('.tweetQuote').click(function(){
        $('.tweet').attr('href', url + $(".quote").text());
     });
   }
});