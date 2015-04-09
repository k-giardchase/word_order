describe('wordSort' ,function() {
    it("will return one word if user inputs one word", function() {
        expect(wordSort('hello')).to.eql({hello:1})
    });

    it("will return two unique words if user inputs two unique words", function() {
        expect(wordSort('hello there hello apples chicken wings there apples chicken wings')).to.eql({hello: 1, there: 1});
    });
});
