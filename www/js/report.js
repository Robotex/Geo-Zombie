
function initialize() {
    $('#btnReportForm').click(function() {
        toggle_visibility('reportform');
    });
    
    $('#btnReport').click(function() {
        report(playerMarker.getPosition(), 'Passaggio pedonale');
    });
}

function report(pos, type) {
    /*
    var reports = [];
    if (localStorage.getItem('reports') !== null) {
        reports = localStorage['reports'];
    }
    
    reports.push({
        type: type,
        coordinate: pos
        });
        
    localStorage['reports'] = JSON.stringify(reports);
    */
    $.ajax({
        url: 'http://robotex.altervista.org/tesi/index.php',
        data: { type: type, lat: pos.lat(), lng: pos.lng() }
    });
}

function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}

$( initialize );