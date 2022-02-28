
const loadPlayer=()=>{
    const searchValue=document.getElementById('input-field').value ;
    // console.log(searchValue);
    const url=`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => displayPlayer(data.player))
    // console.log(searchValue)
}
const displayPlayer= players =>{
    // console.log(players)
    const displayDiv=document.getElementById('')
    for(const player of players){
        console.log(player.strPlayer)
    }
}