app.service('BattleService', ['$http', function($http) {
    var self = this;

    self.leftFlankSelf = { data: [] };
    self.centerFlankSelf = { data: [] };
    self.rightFlankSelf = { data: [] };
    self.leftFlankEnemy = { data: [] };
    self.centerFlankEnemy = { data: [] };
    self.rightFlankEnemy = { data: [] };
    self.regiment = { data: [] };

    self.getRegiment = function(flank, commander) {
        $http.get('/regiment', {flank: "right", commander: "General"}).then(function (response) {
            console.log('response', response);
            
            self.regiment.data = response.data;
        });
    };

    self.getLeftFlank = function() {
        $http.get('/battle/leftFlankSelf').then(function (response) {
            console.log('response', response);
            
            self.leftFlankSelf.data = response.data;
        });
    };

    self.getLeftFlank();
    self.getRegiment();

    // self.submitUnit = function (unit) {
    //     $http.post('/units', unit).then(function (response) {
    //         console.log(response);
    //         self.getUnits();
    //     });
    // }
}]);