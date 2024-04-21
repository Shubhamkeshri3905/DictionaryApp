const dictionary=(word)=>{
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '04f9ae1ae0mshe1f93b78d8d5c30p12a93djsn3b6135b68849',
          'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
      };
      fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+word,options)
      .then(response =>response.json())
      .then((response)=>
      {
        console.log(response)
        wordsearch.innerHTML=response.word;
        if(response.definition=="")
         definition.innerHTML="Oops! Try Another Word...";
         else
        definition.innerHTML=response.definition.replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.");
    
    }
    )
      .catch(err=>console.error(err))
      
}

searchbtn.addEventListener("click" ,(e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})