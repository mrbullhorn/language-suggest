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
    
      

    window.addEventListener("load" , function() {
      document.getElementById("radio-form").addEventListener("submit", handlePersonality);
      
    });
    
    
    

  

 

    

  
  })});


  