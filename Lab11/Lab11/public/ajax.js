(function ($) {
    var load = {
        url: 'http://api.tvmaze.com/shows',
        method: 'GET',
    };
    $.ajax(load).then(function (responseMessage) {
        $('#homeLink').hide();
        $('#error').hide();
        var listItem = $(responseMessage);
        for (var i = 0; i < listItem.length; i++)
        {
            var li = `<li><a class="link" href='${listItem[i]._links.self.href}'>${listItem[i].name}</a></li>`;
            $('#showList').append(li);
        }
        $('#showList').show();
        $('#show').hide();

        $('a.link').click((event) => {
            event.preventDefault();
            linkClick(event.target.href);
        })
    })

    $('#searchForm').submit((event) => {
        event.preventDefault();
        //console.log($('#search_term'));
        //$('#showList').empty();
        var inputText = $('#search_term').val().trim();
        //console.log(inputText);
        if(inputText === ''){
            $('#showList').show();
            $('#error').show();
            $('#search_term').val("");
        }
        else{
            $('#showList').empty();
            $('#error').hide();
            var requestConfig = {
                url: 'http://api.tvmaze.com/search/shows?q=' + inputText,
                method: 'GET',
            };
            $.ajax(requestConfig).then(function(responseMessage){
                var searchList = $(responseMessage);
                for (var i = 0; i < searchList.length; i++)
                {
                    var li2 = `<li><a class="link" href='${searchList[i].show._links.self.href}'>${searchList[i].show.name}</a></li>`;
                    $('#showList').append(li2);
                    //console.log(li2);
                }
                $('#show').hide();
                $('#showList').show();
                $('#homeLink').show();
                $('a.link').click((event) => {
                    event.preventDefault();
                    linkClick(event.target.href);
                })
            })
        }
    })

    function linkClick(link) {
        $('#error').hide();
        $('#showList').hide();
        $('#show').hide();
        $('#show').empty();
        var requestConfig = {
            method: 'GET',
            url: link,
        }
        $.ajax(requestConfig).then(function (responseMessage){
            var newElement = $(responseMessage);
            $('#show').show();
            if(newElement[0].name === null){
                var name = 'N/A';
            }
            else{
                var name = newElement[0].name;
            }
            if(newElement[0].image === null){
                var image = '../public/image/no_image.jpg';
            }
            else{
                var image = newElement[0].image.medium;
            }
            if(newElement[0].language === null){
                var language = 'N/A';
            }
            else{
                var language = newElement[0].language;
            }
            if(newElement[0].genres === null){
                var genres = 'N/A';
            }
            else{
                var genres = newElement[0].genres;
            }
            if(newElement[0].rating.average === null){
                var average = 'N/A';
            }
            else{
                var average = newElement[0].rating.average;
            }
            if(newElement[0].network === null){
                var network = 'N/A';
            }
            else{
                var network = newElement[0].network.name;
            }
            if(newElement[0].summary === null){
                var summary = 'N/A';
            }
            else{
                var summary = newElement[0].summary;
            }
            $('#show').append(`<h1>${name}</h1>`);
            $('#show').append(`<img src='${image}'>`);
            $('#show').append(`<dl>`);
            $('#show').append(`<dt>Languages</dt><dd>${language}</dd>`);
            $('#show').append(`<dt>Genres</dt><dd><ul id='genresList'></ul></dd>`);
            for(var i = 0; i < genres.length; i++){
                $('#genresList').append(`<li>${genres[i]}</li>`);
            }
            $('#show').append(`<dt>Average</dt><dd>${average}</dd>`);
            $('#show').append(`<dt>Network</dt><dd>${network}</dd>`);
            $('#show').append(`<dt>Summary</dt><dd>${summary}</dd>`);
            $('#show').append(`</dl>`);
        })
        $('#homeLink').show();
    }
})(window.jQuery);