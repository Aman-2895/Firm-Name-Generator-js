// create a name for shop
// adjective:crazy 
//          :amazing
//          :fire
// shop name:engine
//          :food
//          :garmebts
//another words:bros
//             :limited
//             :hub
let rand = Math.random()
let first,second,third;
//first word
if(rand<0.33)
{
   first="crazy"
}
else if(rand>0.33&&rand<0.66)
{
    first="amazing"
}
else
{
    first="fire"
}
//second
rand=Math.random()
if(rand<0.33)
{
    second="engine"
}
else if(rand>0.33&&rand<0.66)
{
    second="food"
}
else
{
    second="garment"
}
//third
rand=Math.random()
if(rand<0.33)
{
    third="bros"
}
else if(rand>0.33&&rand<0.66)
{
    third="limited"
}
else
{
    third="hub"
}
console.log(`${first} ${second} ${third}`)