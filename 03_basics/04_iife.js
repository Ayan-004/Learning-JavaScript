// Invoked Immediately Function Expression

//named IIFE
(function database() {
    console.log("DB CONNECTED");
})();

//unamed IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("Ayan");