// ---Create a function that takes the age in years and returns the age in days.

function leapyear(year){
    if ((year%4==0 && year%100!==0) || year%400==0){
        // console.log("leapyear")
    }
    // else{
    //     console.log("not leapyear")
    // }
     
    }

function age_in_days(age){
   let currentyear=2024
   let birthyear=(currentyear-age)
   let count=0
   letdays=0
   for(let i=birthyear;i<=currentyear;i++)
   {
    if( leapyear(i)==true){
        count=count++
    }
   }
   days=(age*365)+count
   return days
}
console.log(age_in_days(25))