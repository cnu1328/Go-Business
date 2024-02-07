
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

console.log(message.innerText);

function sendEmail() {
    const formattedMessage = message.value.replace(/\n/g, "<br>");
    Email.send({
        // SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        Host : "smtp.elasticemail.com",
        Username : "srinudarpally@gmail.com",
        Password : "590B7A4EC4AEE7346D232824C44A17DD20EC",
        To : email.value,
        From : "srinudarpally@gmail.com",
        Subject : subject.value,
        Body : formattedMessage,
    }).then(
      message => {
        if(message === "OK") {
            Swal.fire({
                title: "Sucess!",
                text: "Message sent Successfully!",
                icon: "success"
            });

            form.reset();
        }
      }
    ).catch((e) => {
            console.log(e);
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    

    for(const item of items) {
        if(item.value === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != "") {
            checkEmail();
        }
    
        items[1].addEventListener("keyup", () => {
            checkEmail();
        });
        

        item.addEventListener("keyup", () => {
            if(item.value !== "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
        
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorEmail = document.querySelector(".error-txt.email")
    
    if(!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value !== "") {
            errorEmail.innerText = "Enter a valid email address";
        } else {
            errorEmail.innerText = "Email Address can't be blank"
        }
    }

    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") &&
       !email.classList.contains("error") &&
       !subject.classList.contains("error") &&
       !message.classList.contains("error")
    ) {
        sendEmail();
    }
    // sendEmail();
})

