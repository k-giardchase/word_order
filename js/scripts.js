var wordSort = function(input) {

    var split_input = input.split(' ');
    var new_array = {};

    split_input.forEach(function(word)
    {
        if (new_array[word])
        {
            new_array[word] += 1;
        }
        else
        {
            new_array[word] = 1;
        }

    });

    var sortable = [];
    for(var word in new_array) {
        sortable.push([word, new_array[word]]);
        sortable.sort(function(word1,word2) {
            return word2[1] - word1[1];
        });
    }

    return sortable;

}



$(document).ready(function() {
    $("form#wordCount").submit(function(event) {

        var input = $('input#inputText').val();
        var result = wordSort(input);

        $(".count").empty();


        $.each(result, function( key, value) {

            $('.count').append("<li>"  + value + " </li>");
        });

        $('#result').show();
        event.preventDefault();
    });
});
