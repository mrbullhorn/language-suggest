window.addEventListener("load", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit" , function(event) {
    event.preventDefault();
    function getRadio{
    const person1 = document.querySelector("input[name='personality']:checked").value;
    const person2 = document.getElementById("personality2").value;
    const person3 = document.getElementById("personality3").value;
    const turtle1 = document.getElementById("turtle1").value;
    const turtle2 = document.getElementById("turtle2").value;
    const turtle3 = document.getElementById("turtle3").value;
    const break1 = document.getElementById("breakfast1").value;
    const break2 = document.getElementById("breakfast2").value;
    const break3 = document.getElementById("breakfast3").value;
    const bizkit1 = document.getElementById("bizkit1").value;
    const bizkit2 = document.getElementById("bizkit2").value;
    const bizkit3 = document.getElementById("bizkit3").value;
    const hair1 = document.getElementById("hairstyle1").value;
    const hair2 = document.getElementById("hairstyle2").value;
    const hair3 = document.getElementById("hairstyle3").value;
    
    }

    window.addEventListener("load" , function() {
      this.document.getElementById("radio-form").addEventListener("submit", getRadio);
    })
}
  )

});

  