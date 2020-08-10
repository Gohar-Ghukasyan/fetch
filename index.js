document.getElementById('button').onclick = function() {myFunction()}

function myFunction() {

  const user=document.getElementById('input').value
  const div = document.getElementById('div')

  function avatar(){

    try{
      fetch(`https://api.github.com/users/${user}`)
        .then(res => res.json())
        .then(data => {
          div.innerHTML = `<img src=${data.avatar_url}/>`
        })
    }
    catch(e){
      document.write('<h1>Error</h1>');
    }
  }

  avatar()
}