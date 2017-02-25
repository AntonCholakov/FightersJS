(function() {
    var wayneHealthHolder = document.getElementById('wayne-health');
    var kentHealthHolder = document.getElementById('kent-health');
    var resultField = document.getElementById('result');

    var startTrigger = document.getElementById('btn-start');

    var factory = new Factory();
    var f1 = factory.createFighter('student', 'Bruce Wayne');
    var f2 = factory.createFighter('master', 'Clark Kent');

    wayneHealthHolder.innerText = f1.health;
    kentHealthHolder.innerText = f2.health;

    startTrigger.onclick = function() {
        var winner = fight(f1, f2);
        resultField.innerText = 'Winner is ' + winner.name;
        startTrigger.className += ' disabled';
        startTrigger.onclick = null;
    };
})();