let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

randomPassword=document.getElementById('password');


const password=()=>{
    let pass='';
    for (let i = 1; i <= 8; i++) {
        let char = Math.ceil(Math.random() * str.length)
        pass += str.charAt(char)
  
      }
      randomPassword.value=pass;
      return pass;
}

const  clipboardCopy= async()=>{
    
    
    await navigator.clipboard
  .writeText(randomPassword.value)
  message.innerText="Copied"
    
  
}

const clipboardPaste=async()=>{
    const write= await navigator.clipboard.readText()
    document.getElementById('paste').value=write
    message.innerText="Pasted"

}