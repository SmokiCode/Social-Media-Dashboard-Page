// Toggle code to select between dark and light mode
/* when toggle button (radio button) is selcted, add a class of white or dark to the body
which corresponds to the id selector of the dark theme for dark and 

*/
const radioButtons = document.querySelectorAll(".toggle__wrapper input");
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("click", (_event) => {
        document.getElementById("dark").checked 
            ? (document.querySelector("body").classList = "dark" )
            : (document.querySelector("body").classList = "light");
        
    })
}