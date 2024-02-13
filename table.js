function table()
{
    let x=parseFloat(document.getElementById('t').value)
    var result="";
    if(!x)
    {
        alert("fill it first you fool 😂😂")
    }
    else{
            for(let i=1;i<=10;i++)
    {
       let v=x*i
       result= result +x+ " X" +i +" ="+v+"\n"
       
    }
    document.getElementById('res').innerText=result
    document.getElementById('res').style.backgroundColor='black'
    document.getElementById('res').style.color='white'
    alert("Ahaaa-Aahaaa , Touch krne k liye sukriya 😂😂")
  
    }

}
function table1()
{
    let x=parseFloat(document.getElementById('t1').value)
    var result="";
    if(!x)
    {
        alert("fill it first you fool 😂😂")
    }
    else
    {
for(let i=1;i<=10;i++)
    {
       let v=x*i
       result= result +x+ " X" +i +" ="+v+"\n"
       
    }
    document.getElementById('res1').innerText=result
    alert("Ahaaa-Aahaaa doobara , Touch krne k v liye sukriya 😂😂")

    }
    
    
}
document.addEventListener("DOMContentLoaded", function() {
    const affectionDiv = document.getElementById("affection");
    
        const messages = [
            "Your positivity brightens up every room you enter, making everyone around you feel uplifted. ☀️",
            "Your laughter is contagious, spreading happiness like wildfire wherever you go. 🎵",
            "Your perspective on life opens my eyes to new possibilities and fills me with inspiration. 💫",
            "Every moment spent with you feels like a fun-filled adventure, creating memories that last a lifetime. 🌈",
            "Your friendship keeps me grounded and encourages me to pursue my dreams fearlessly. ⚓️",
            "Having you as a friend gives me the confidence to take on any challenge, knowing you'll always have my back. 😊"
        ];
        
    

    // Function to display affectionate messages with animations
    function displayMessages() {
        messages.forEach((message, index) => {
            setTimeout(() => {
                const p = document.createElement("p");
                p.textContent = message;
                p.style.opacity = "0";
                p.style.transform = "translateY(-20px)";
                affectionDiv.appendChild(p);
                setTimeout(() => {
                    p.style.opacity = "1";
                    p.style.transform = "translateY(0)";
                }, 100);
            }, index * 2000); // Delay each message by 2 seconds
        });
    }

    // Call the function to display messages
    displayMessages();
});
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const thothi = document.querySelector('.thothi');

    // Hide container and thothi initially
    container.style.display = 'none';
    thothi.style.display = 'none';

    const inputFields = document.querySelectorAll('input[type="number"]');
    inputFields.forEach(input => {
        input.addEventListener('input', function() {
            const anyInputFilled = Array.from(inputFields).some(input => input.value.trim() !== '');
            container.style.display = anyInputFilled ? 'block' : 'none';
            thothi.style.display = anyInputFilled ? 'block' : 'none';
        });
    });
});
