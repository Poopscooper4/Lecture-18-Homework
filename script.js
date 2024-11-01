// Switch , prompt , Number - გამოყენებით, დავწეროთ კოდი, 
// კოდი იწყება 3 შეკითხვით(prompt): 
// 1. Enter your age: 
// 2. Enter movie type (regular or 3D):
// 3. Enter time of day (matinee or evening):

// let age = prompt("Enter your age:")

// let movie = prompt("Enter movie type -- TYPE ONLY -- Regular & 3D")

// let time = prompt("Enter time of day -- TYPE ONLY -- Matinee & Evening")

// თუ მომხმარებელი 10-წელზე ნაკლების არის ticket-ის ფასი იქნება 5 ლარი, 
// თუ მომხმარებელი 10-წლიდან 65-წლამდე არის ticket-ის ფასი იქნება 15 ლარი,
// თუ მომხარებელი 65+ წლის არის ticket-ის ფასი იქნება 10 ლარი,  

// console.log(age , movie , time);
// 
// let price

// if (age < 10 && age > 0) {

    // console.log("ticket-ის ფასი იქნება 5 ლარი");
// }else if (age > 10 && age < 65) {
    // console.log("ticket-ის ფასი იქნება 15 ლარი");
// }else if(age > 65){
    // console.log(" ticket-ის ფასი იქნება 10 ლარი");
// }else{
    // console.log("ERORR");
// }

// ასევე 3D ფილს თუ აირჩევს მომხმარებელი ფასს ემატება 5 ლარი.
// თუ საღამოს სიანსია ასევე ემატება 5 ლარი.

// if (movie = "3D") {
//     console.log("3D -- ემატება 5 ლარი.");
// }else{
//     console.log("Regular -- ფასი იგივეა.");
// }

// if(time = "Evening"){
//     console.log("Evening -- ემატება 5 ლარი.");
// }else{
//     console.log("Matinee -- ფასი იგივეა.");
// }



// function price() {
//     let age = prompt("Enter your age:")
    
//     let price

//     if (age < 10 && age > 0) {
    
//         console.log("ticket-ის ფასი იქნება 5 ლარი");
//     }else if (age > 10 && age < 65) {
//         console.log("ticket-ის ფასი იქნება 15 ლარი");
//     }else if(age > 65){
//         console.log(" ticket-ის ფასი იქნება 10 ლარი");
//     }else{
//         console.log("ERORR");
// }


// price()


// საბოლოოდ უნდა დაგვიწეროს კოდმა ასეთი რამ :  ბილეთის ფასი თქვენთვის არის : 25 ლარი. 
// Bonus დავალება, switch case-ის დავამატოთ if ფუნქციონალი, რომელიც შეამოწმებს
//  თუ გვაქვს ფასდაკლების ბილეთი,
// თუ ფასდაკლების ბილეთი გვაქვს ფასს დააკლდეს 25% ან უბრალოდ 5 ლარი.

// წარმატებები 🚀


function main() {
    let age = prompt("Enter your age:")

    let movie = prompt("Enter movie type -- TYPE ONLY -- Regular & 3D")
    
    let time = prompt("Enter time of day -- TYPE ONLY -- Matinee & Evening")
    
    console.log(age , movie , time);

    let price = 0

    if (age < 10 && age > 0) {
        price += 5;
        console.log("ticket-ის ფასი იქნება 5 ლარი");
        console.log(price);
    }else if (age > 10 && age < 65) {
        price += 15
        console.log("ticket-ის ფასი იქნება 15 ლარი");
        console.log(price);
    }else if(age > 65){
        price += 10
        console.log(" ticket-ის ფასი იქნება 10 ლარი");
        console.log(price);
    }else{
        console.log("ERORR");
    }

    if (movie === "3D") {
        price += 5
        console.log("3D -- ემატება 5 ლარი.");
        console.log(price);
    }else if(movie === "Regular"){
        console.log("Regular -- ფასი იგივეა.");
    }else{
        console.log("ERORR");
    }
    
    if(time === "Evening"){
        price += 5
        console.log("Evening -- ემატება 5 ლარი.");
        console.log(price);
    }else if(time === "Matinee"){
        console.log("Matinee -- ფასი იგივეა.");
    }else{
        console.log("ERORR");
    }
let discount = prompt("შეიყვანეთ ფაზდაკლების კოდი ****")
    switch (discount) {
        case "5555":
            price -= (price * 0.25);
            console.log(`ფაზდაკლება  ${price}`);
            break;
        default:
            console.log(`ფაზდაკლება არ გაქვთ, საბოლო ფასი ${price}`);
            break;
    }
    
}

main()

// let discount = prompt("დისქაუნთის კოდი ****")
// console.log(discount);
// switch (15 , 20 ,25) {
//     case "5555":
//         console.log(price - (price * 25 / 10));
//         break;

//     default:
//         // console.log("error");
//         // main()
//         break;
// }