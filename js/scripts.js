window.addEventListener("load", function() {
  console.log("script executing");
  
  
  const form = document.querySelector("form");
  
  form.addEventListener("submit" , function(event) {
    event.preventDefault();
    const personality = document.querySelector("input[name='personality']:checked").value;
    console.log(personality);
    const turtle = document.querySelector("input[name='turtle']:checked").value;
    console.log(turtle);
    const breakfast = document.querySelector("input[name='breakfast']:checked").value;
    console.log(breakfast);
    const bizkit = document.querySelector("input[name='bizkit']:checked").value;
    console.log(bizkit);
    const hair = document.querySelector("input[name='hairstyle']:checked").value;
    console.log(hair);
  
    let answerHeading = document.getElementById("recHeader");
    answerHeading.removeAttribute("class");
    
    
    let answerOne = document.getElementById("answer1");
    answerOne.setAttribute("class", "hidden");
    let answerTwo = document.getElementById("answer2");
    answerTwo.setAttribute("class", "hidden");
    let answerThree = document.getElementById("answer3");
    answerThree.setAttribute("class", "hidden");

    if (personality === "none" && turtle === "whatever" && breakfast === "notime" && bizkit === "ashamed" && hair === "pompadour") {
      answerThree.removeAttribute("class");
    } else if (personality === "pickles" && turtle === "do" && breakfast === "toast" && bizkit === "yes" && hair === "mohawk") {
      answerOne.removeAttribute("class");
    } else {
      answerTwo.removeAttribute("class");
    }
  }
)});


  