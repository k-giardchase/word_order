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
    return new_array;

}
