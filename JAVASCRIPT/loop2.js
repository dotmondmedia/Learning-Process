//ASSIGNMENT

//CREATE AN ARRAY OF STRINGS/WORDS, WITH THE LENGTH OF 10, 
//PROMPT THE USER WITH THE STRINGS AND THE USER IS GOING TO TYPE OUT THE ONE 
//THAT'S RANDOMLY CHOSEN BEHIND THE SCENE


const media =["facebook","twitter","whatsapp","thread","linkedin","discord","flickr","instagram","snapchat","telegram"]
let randMedia = Math.floor(Math.random()*media.length)
prompt(media[randMedia])
let select = prompt("What Social Media did i choose?\nfacebook\ntwitter\nwhatsapp\nthread\nlinkedin\ndiscord\nflickr\ninstagram\nsnapchat\ntelegram")


while(select !== randMedia){
    if(select !== randMedia){
        console.log(`you are wrong, the right answer is ${media[randMedia]}`)
        break
    }
    else{
        console.log("input a valid social media!")
        break
    }
}
if(select === randMedia){
    console.log(`Yes you are right, i choose ${media[randMedia]}`)
}