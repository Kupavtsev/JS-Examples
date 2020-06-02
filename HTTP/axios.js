console.log('Before request')

axios
 .get("https://blablablabla.com/users")
 .then( data => console.log(data) );

 console.log('after request');
 