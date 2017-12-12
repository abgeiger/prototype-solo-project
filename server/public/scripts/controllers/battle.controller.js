app.controller('BattleController', ['BattleService', function(BattleService){
    var self = this;

    self.newUnit = BattleService.newUnit;
    self.submitUnit = BattleService.submitUnit;
    self.units = BattleService.units;

    BattleService.getUnits();
}]);