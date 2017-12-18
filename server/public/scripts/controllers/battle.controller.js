app.controller('BattleController', ['BattleService', function(BattleService){
    var self = this;

    self.leftFlankSelf = BattleService.leftFlankSelf;
    self.regiment = BattleService.regiment;
}]);