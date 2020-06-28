const pet={
    name:"Kasper",
    age:2,
    happy:1,
    mood:"Happy",
    weight:0.0
}
const work=()=>{

document.getElementById("name").innerHTML = pet.name;
document.getElementById("age").innerHTML = pet.age;
document.getElementById("happy").innerHTML = pet.happy;
document.getElementById("weight").innerHTML = pet.weight;
document.getElementById("mood").innerHTML = pet.mood;



}


const givePuppyTreat=()=>{
    // when i give puppy a treat happyness 
    //should go up one and weight should go up two

    var treatHappy=pet.happy;
    

    var treatWeight=pet.weight;
    treatHappy+=1;
    treatWeight+=2;
    
     if ((treatHappy>=5)){
        var puppyMood="I AM HAPPY";
        pet.mood=puppyMood
         work();

    }  if ((treatHappy<=1)){
        var puppyMood="I AM ANGRY";
        pet.mood=puppyMood
         work();

    } 
    pet.happy=treatHappy;
    pet.weight=treatWeight;
    work();
}

const puppyExercise=()=>{
    var puppyWorkOut=pet.weight;
    puppyWorkOut-=1;
    pet.weight=puppyWorkOut;
    work();
}

const timeOut=()=>{
    //put is time out his happyniess decrease by one

    var puppyHappy=pet.happy;
    puppyHappy-=1;
    var puppyMood=pet.mood
    if (puppyHappy<=5){
        
        puppyMood="I AM ANGRY";
        pet.mood=puppyMood
        work();
      

    }    if (puppyHappy==0){
        
        puppyMood="I AM RUNNING AWAY";
        pet.mood=puppyMood
        work();
    }
      

     
    pet.happy=puppyHappy;
        work();
    


}
