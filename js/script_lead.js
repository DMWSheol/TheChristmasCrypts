const leaderboardDisplayEx = document.getElementById('leaderboardEx')
window.addEventListener('storage', (event) => {updateLeaderboard()})
function updateLeaderboard(){
  window.scrollTo(0, 0);
  let rowCount = leaderboardDisplayEx.rows.length;
  while(--rowCount) leaderboardDisplayEx.deleteRow(rowCount);
 let i = 0,
  leaderboardObj = {};
  for(i ; i < localStorage.length ; i++){
    const jsonKey = localStorage.key(i)
    if(jsonKey != 'null'){
      let keyName = jsonKey;
      leaderboardObj[keyName] = JSON.parse(localStorage.getItem(jsonKey))
    }
  }
  const scoreArr = []
  for(const name in leaderboardObj){
    console.log(leaderboardObj[name])
    const scoreCount = leaderboardObj[name].score;
    const presentCount = leaderboardObj[name].goldenPresents;
    const nestedObj = {}
    nestedObj['name'] = name;
    nestedObj['value'] = scoreCount;
    nestedObj['presents'] = presentCount;
    scoreArr.push(nestedObj)
  }
  const sortedArr = scoreArr.sort((a, b) => a.value - b.value);
console.log(sortedArr)
  for(const obj of sortedArr){
    let row = leaderboardDisplayEx.insertRow(1); 
    let nameCell = row.insertCell(0); 
    let scoreCell = row.insertCell(1); 
    let presentCell = row.insertCell(1); 
    nameCell.innerHTML = obj.name; 
    scoreCell.innerHTML = obj.value; 
    presentCell.innerHTML = `${obj.presents}/9`;
  }
  document.title = `${document.querySelectorAll("tr td")[0].innerHTML} is in the lead!`
  return;
}
updateLeaderboard();