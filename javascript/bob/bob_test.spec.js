describe("Bob", function() {
  var bob = new Bob();

  it("stating something", function() {
    var result = bob.hey('Tom-ay-to, tom-aaaah-to.'); //anything
    expect(result).toEqual('Whatever.');
  });

  it("shouting", function() {
    var result = bob.hey('WATCH OUT!'); //capital letters
    expect(result).toEqual('Woah, chill out!');
  });

  it("asking a question", function() {
    var result = bob.hey('Does this cryogenic chamber make me look fat?'); //question
    expect(result).toEqual('Sure.');
  });

  it("talking forcefully", function() {
    var result = bob.hey("Let's go make out behind the gym!"); //anything
    expect(result).toEqual('Whatever.');
  });

  it("using acronyms in regular speech", function() {
    var result = bob.hey("It's OK if you don't want to go to the DMV.");  //anything
    expect(result).toEqual('Whatever.');
  });

  it("forceful questions", function() {
    var result = bob.hey('WHAT THE HELL WERE YOU THINKING?'); //capital letters
    expect(result).toEqual('Woah, chill out!');
  });

  it("shouting numbers", function() {
    var result = bob.hey('1, 2, 3 GO!'); //capital letters
    expect(result).toEqual('Woah, chill out!');
  });

  it("only numbers", function() {
    var result = bob.hey('1, 2, 3');  //anything
    expect(result).toEqual('Whatever.');
  });

  it("question with only numbers", function() {
    var result = bob.hey('4?');  //question
    expect(result).toEqual('Sure.');
  });

  it("shouting with special characters", function() {
    var result = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');  //capital letters
    expect(result).toEqual('Woah, chill out!');
  });

  it("shouting with umlauts", function() {
    var result = bob.hey("\xdcML\xc4\xdcTS!");  //hmm
    expect(result).toEqual('Woah, chill out!');
  });

  it("calmly speaking about umlauts", function() {
    var result = bob.hey("\xdcML\xe4\xdcTS");  //hmm
    expect(result).toEqual('Whatever.');
  });

  it("shouting with no exclamation mark", function () {
    var result = bob.hey('I HATE YOU');  //capital letters
    expect(result).toEqual('Woah, chill out!');
  });

  it("statement containing question mark", function() {
    var result = bob.hey('Ending with a ? means a question.');   //anything
    expect(result).toEqual('Whatever.');
  });

  it("prattling on", function () {
    var result = bob.hey('Wait! Hang on.  Are you going to be OK?');  //question
    expect(result).toEqual('Sure.');
  });

  it("silence", function () {
    var result = bob.hey('');  //nothing
    expect(result).toEqual('Fine. Be that way!');
  });

  it("prolonged silence", function () {
    var result = bob.hey('   ');  //nothing
    expect(result).toEqual('Fine. Be that way!');
  });
});
