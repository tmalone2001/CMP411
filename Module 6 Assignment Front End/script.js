async function loadTable(){
    var url = "https://localhost:44374/api/MusicItems";
    var response = await fetch(url);
    var data = await response.json();
    var clean = JSON.stringify(data);
    console.log(data);

    var table = document.getElementById('data-table');
    data.forEach(function (item) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + item.id + '</td>' +
        '<td>' + item.songName + '</td>' +
        '<td>' + item.artistName + '</td>' +
        '<td>' + item.rating + '</td>' +
        table.appendChild(tr);
    })
}

function addMusic(){
    var payload = {
        songName: 'Music',
        artistName: 'Name',
        rating: 4
    };

    fetch("https://localhost:44374/api/MusicItems",
    {
        method: 'POST',
        body: JSON.stringify(payload)
    })
    .then(function(res){return res.json();})
    .then(function(payload){alert(JSON.stringify(payload))});
}