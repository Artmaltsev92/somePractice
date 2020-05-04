const team = {
    _players: [],
    _games: [],
    get players() {
      return this._players;
      },
    get games() {
      return this._games;
      },
    addPlayer(name,lastName,age) {
      const player = {
        firstName: name,
        lastName: lastName,
        age: age
        };
      this._players.push(player)
      },
  
    addGames(opponent,teamPoints, opponentPoints) {
      const game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      }
      this._games.push(game)
  
    }
  }
  
  team.addPlayer('Artem','Maltsev',27)
  team.addPlayer('Alena','Maltseva',26)
  team.addPlayer('Lida','Sirotina',73)
  
  team.addGames('Broncos',42,27)
  team.addGames('Berkley',34,29)
  team.addGames('NY',42,39)
  
  console.log(team._players,team._games)