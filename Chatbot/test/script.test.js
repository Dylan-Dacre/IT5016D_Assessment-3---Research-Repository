// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

//
// Note to the markers all of my tests were added after the submission date of Friday 17th March
//

describe("getBotReply", () => {
  //
  // Reset tests
  it("Reset inputs", () => {
    const botReply1 = getBotReply("reset");
    const expectedReply1 =
      "OK, lets start over. Please start by telling me your name.";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("Reset");
    const expectedReply2 =
      "OK, lets start over. Please start by telling me your name.";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("RESET");
    const expectedReply3 =
      "OK, lets start over. Please start by telling me your name.";
    expect(botReply3).toEqual(expectedReply3);
  });
  //
  // Blank response tests
  it("Blank response tests", () => {
    const botReply1 = getBotReply("");
    const expectedReply1 =
      "Sorry, looks like you've not entered anything. Lets start by you telling me your name.";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("Dylan");
    const expectedReply2 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("");
    const expectedReply3 =
      "Sorry Dylan, looks like you've not entered anything. Please try again by providing an input";

    expect(botReply3).toEqual(expectedReply3);
  });
  //
  // Funny sstuff tests
  it("Funny sstuff tests", () => {
    const botReply1 = getBotReply("hey, how you doing?");
    const expectedReply1 = "Mood - https://youtu.be/2zgcFFvEA9g?list=LL";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("HEY, HOW YOU DOING?");
    const expectedReply2 = "Mood - https://youtu.be/2zgcFFvEA9g?list=LL";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("music");
    const expectedReply3 = "https://youtu.be/U4lz8MN6MQA?list=LL";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("Music");
    const expectedReply4 = "https://youtu.be/U4lz8MN6MQA?list=LL";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("MUSIC");
    const expectedReply5 = "https://youtu.be/U4lz8MN6MQA?list=LL";
    expect(botReply5).toEqual(expectedReply5);
  });
  //
  // Secret tests if name undefined
  it("Secret tests if name undefined", () => {
    const botReply1 = getBotReply("secret");
    const expectedReply1 =
      "What? Is this a secret? Try entering 'hey, how you doing?' or 'music' for some funny stuff";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("SECRET");
    const expectedReply2 =
      "What? Is this a secret? Try entering 'hey, how you doing?' or 'music' for some funny stuff";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("Secret");
    const expectedReply3 =
      "What? Is this a secret? Try entering 'hey, how you doing?' or 'music' for some funny stuff";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("Secret");
    const expectedReply4 = "Hidden treasure?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("secret");
    const expectedReply5 = "Hidden treasure?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("secret");
    const expectedReply6 =
      "You're a persistent one. I wonder how long you're going to do this for but here you go, https://youtu.be/dQw4w9WgXcQ";
    expect(botReply6).toEqual(expectedReply6);
  });
  //
  // Secret tests if name defined
  it("Secret tests if name defined", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("SECRET");
    const expectedReply2 =
      "What? Is this a secret? Try entering 'hey, how you doing?' or 'music' for some funny stuff";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("Secret");
    const expectedReply3 =
      "What? Is this a secret? Try entering 'hey, how you doing?' or 'music' for some funny stuff";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("Secret");
    const expectedReply4 =
      "What? Is this a secret? Try entering 'hey, how you doing?' or 'music' for some funny stuff";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("Secret");
    const expectedReply5 = "Hidden treasure?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("secret");
    const expectedReply6 = "Hidden treasure?";
    expect(botReply6).toEqual(expectedReply6);

    const botReply7 = getBotReply("secret");
    const expectedReply7 =
      "You're a persistent one Dylan. I wonder how long you're going to do this for but here you go, https://youtu.be/dQw4w9WgXcQ";
    expect(botReply7).toEqual(expectedReply7);
  });
  //
  // Not ready into ready
  it("Not ready into ready", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("no");
    const expectedReply2 =
      "That's OK. Just let me know when you're 'ready' to get started.";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("random entry");
    const expectedReply3 =
      "Sorry Dylan, I'm not sure I understand. Please enter 'ready' when you want to get started.";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("ready");
    const expectedReply4 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply4).toEqual(expectedReply4);
  });
  //
  // Instant ready
  it("Instant ready", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);
  });
  //
  // Wolfenstien tree
  it("Wolfenstien tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("scifi");
    const expectedReply3 =
      "Awesome, I love scifi. Would you have guessed? Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("singleplayer");
    const expectedReply4 =
      "Who would you like your main combatants to be 'humans' or would you like two 'other' options?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("humans");
    const expectedReply5 = "Would you rather fight 'tech nazis' or 'martians'?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("tech nazis");
    const expectedReply6 =
      "I'd suggest playing one of the Wolfenstein games! Wolfenstien: The New Order is the first of the new trilogy.";
    expect(botReply6).toEqual(expectedReply6);
  });
  //
  // CoD Infinite tree
  it("CoD Infinite tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("scifi");
    const expectedReply3 =
      "Awesome, I love scifi. Would you have guessed? Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("singleplayer");
    const expectedReply4 =
      "Who would you like your main combatants to be 'humans' or would you like two 'other' options?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("humans");
    const expectedReply5 = "Would you rather fight 'tech nazis' or 'martians'?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("martians");
    const expectedReply6 =
      "How about Call of Duty: Infinite Warfare. This game features a really cool robot named Ethan!";
    expect(botReply6).toEqual(expectedReply6);
  });
  //
  // DOOM tree
  it("CoD Infinite tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("scifi");
    const expectedReply3 =
      "Awesome, I love scifi. Would you have guessed? Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("singleplayer");
    const expectedReply4 =
      "Who would you like your main combatants to be 'humans' or would you like two 'other' options?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("other");
    const expectedReply5 = "Maybe 'demons' or 'aliens'?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("demons");
    const expectedReply6 =
      "Are you ready to become the DOOM slayer?! I'd recommend DOOM (2016).";
    expect(botReply6).toEqual(expectedReply6);
  });
  //
  // Crysis tree
  it("Crysis tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("scifi");
    const expectedReply3 =
      "Awesome, I love scifi. Would you have guessed? Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("singleplayer");
    const expectedReply4 =
      "Who would you like your main combatants to be 'humans' or would you like two 'other' options?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("other");
    const expectedReply5 = "Maybe 'demons' or 'aliens'?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("aliens");
    const expectedReply6 =
      "Would you rather save the 'planet' or the 'universe'?";
    expect(botReply6).toEqual(expectedReply6);

    const botReply7 = getBotReply("planet");
    const expectedReply7 =
      "Become a super soldier and dive into the Crysis series! If your computer can run it...";
    expect(botReply7).toEqual(expectedReply7);
  });
  //
  // Halo tree
  it("Halo tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("scifi");
    const expectedReply3 =
      "Awesome, I love scifi. Would you have guessed? Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("singleplayer");
    const expectedReply4 =
      "Who would you like your main combatants to be 'humans' or would you like two 'other' options?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("other");
    const expectedReply5 = "Maybe 'demons' or 'aliens'?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("aliens");
    const expectedReply6 =
      "Would you rather save the 'planet' or the 'universe'?";
    expect(botReply6).toEqual(expectedReply6);

    const botReply7 = getBotReply("universe");
    const expectedReply7 = `"Wake up John". There's never a bad time to play Halo!`;
    expect(botReply7).toEqual(expectedReply7);
  });
  //
  // Borderlands tree
  it("Borderlands tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("scifi");
    const expectedReply3 =
      "Awesome, I love scifi. Would you have guessed? Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("multiplayer");
    const expectedReply4 =
      "Nice! Would you like 'co-op' or 'competative' options?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("co-op");
    const expectedReply5 =
      "Would you like a 'looter' or see two 'other' options?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("looter");
    const expectedReply6 = "Do you see yourself as a 'hunter' or 'guardian'?";
    expect(botReply6).toEqual(expectedReply6);

    const botReply7 = getBotReply("hunter");
    const expectedReply7 =
      "Venture to the planet of Pandora and hunt for mysterious vauls in Borderlands 3!";
    expect(botReply7).toEqual(expectedReply7);
  });
  //
  // Destiny tree
  it("Destiny tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("scifi");
    const expectedReply3 =
      "Awesome, I love scifi. Would you have guessed? Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("multiplayer");
    const expectedReply4 =
      "Nice! Would you like 'co-op' or 'competative' options?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("co-op");
    const expectedReply5 =
      "Would you like a 'looter' or see two 'other' options?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("looter");
    const expectedReply6 = "Do you see yourself as a 'hunter' or 'guardian'?";
    expect(botReply6).toEqual(expectedReply6);

    const botReply7 = getBotReply("guardian");
    const expectedReply7 = "Unravel a mysterious story in Destiny 2.";
    expect(botReply7).toEqual(expectedReply7);
  });
  //
  // Darktide tree
  it("Darktide tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("scifi");
    const expectedReply3 =
      "Awesome, I love scifi. Would you have guessed? Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("multiplayer");
    const expectedReply4 =
      "Nice! Would you like 'co-op' or 'competative' options?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("co-op");
    const expectedReply5 =
      "Would you like a 'looter' or see two 'other' options?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("other");
    const expectedReply6 =
      "Would you like to spend time in the dystopian '41st millennium' or the '26th century'?";
    expect(botReply6).toEqual(expectedReply6);

    const botReply7 = getBotReply("41st millennium");
    const expectedReply7 =
      "Grab your friends and jump into Warhammer 40K: Darktide and fight for the imperium of man.";
    expect(botReply7).toEqual(expectedReply7);
  });
  //
  // Halo Infinite tree
  it("Halo Infinite tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("scifi");
    const expectedReply3 =
      "Awesome, I love scifi. Would you have guessed? Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("multiplayer");
    const expectedReply4 =
      "Nice! Would you like 'co-op' or 'competative' options?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("co-op");
    const expectedReply5 =
      "Would you like a 'looter' or see two 'other' options?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("other");
    const expectedReply6 =
      "Would you like to spend time in the dystopian '41st millennium' or the '26th century'?";
    expect(botReply6).toEqual(expectedReply6);

    const botReply7 = getBotReply("26th century");
    const expectedReply7 =
      "Squad up super soldier. Battle the Bannishhed in Halo Infinite.";
    expect(botReply7).toEqual(expectedReply7);
  });
  //
  // Apex tree
  it("Apex tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("scifi");
    const expectedReply3 =
      "Awesome, I love scifi. Would you have guessed? Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("multiplayer");
    const expectedReply4 =
      "Nice! Would you like 'co-op' or 'competative' options?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("competitive");
    const expectedReply5 =
      "Do you prefer a 'battle royale' or 'arena' shooter?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("battle royale");
    const expectedReply6 =
      "Pick your favourite legend and battle it out in one of the most popular games ever made, Apex Legends!";
    expect(botReply6).toEqual(expectedReply6);
  });
  //
  // Halo Infinite multiplayer tree
  it("Halo Infinite tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("scifi");
    const expectedReply3 =
      "Awesome, I love scifi. Would you have guessed? Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("multiplayer");
    const expectedReply4 =
      "Nice! Would you like 'co-op' or 'competative' options?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("competitive");
    const expectedReply5 =
      "Do you prefer a 'battle royale' or 'arena' shooter?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("arena");
    const expectedReply6 =
      "Would you like a 'classic experience' or a 'new spin' on the genre?";
    expect(botReply6).toEqual(expectedReply6);

    const botReply7 = getBotReply("classic experience");
    const expectedReply7 =
      "One of the last remain classic area experiences, give Halo Infinite a go.";
    expect(botReply7).toEqual(expectedReply7);
  });
  //
  // Splitgate tree
  it("Splitgate tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("scifi");
    const expectedReply3 =
      "Awesome, I love scifi. Would you have guessed? Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("multiplayer");
    const expectedReply4 =
      "Nice! Would you like 'co-op' or 'competative' options?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("competitive");
    const expectedReply5 =
      "Do you prefer a 'battle royale' or 'arena' shooter?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("arena");
    const expectedReply6 =
      "Would you like a 'classic experience' or a 'new spin' on the genre?";
    expect(botReply6).toEqual(expectedReply6);

    const botReply7 = getBotReply("new spin");
    const expectedReply7 =
      "Did someone say Portal mixed with Halo? Splitgate is a great new spin on an arena shooter.";
    expect(botReply7).toEqual(expectedReply7);
  });
  //
  // Arma 3 tree
  it("Arma 3 tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("other");
    const expectedReply3 = "How about a 'modern' or 'historic' setting?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("modern");
    const expectedReply4 =
      "OK! Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("singleplayer");
    const expectedReply5 =
      "Would you like a 'simulation' or 'arcade' experience?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("simulation");
    const expectedReply6 = "Explore the awesome open world sandbox of Arma 3.";
    expect(botReply6).toEqual(expectedReply6);
  });
  //
  // CoD MWII tree
  it("CoD MWII tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("other");
    const expectedReply3 = "How about a 'modern' or 'historic' setting?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("modern");
    const expectedReply4 =
      "OK! Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("singleplayer");
    const expectedReply5 =
      "Would you like a 'simulation' or 'arcade' experience?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("arcade");
    const expectedReply6 = `"Dice please", Haha, little inside joke. Give Call of Duty Modern Warfare II a go.`;
    expect(botReply6).toEqual(expectedReply6);
  });
  //
  // CoD WZ tree
  it("CoD WZ tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("other");
    const expectedReply3 = "How about a 'modern' or 'historic' setting?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("modern");
    const expectedReply4 =
      "OK! Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("multiplayer");
    const expectedReply5 =
      "Nice! Would you like a 'battle royale' or 'classic' pvp?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("battle royale");
    const expectedReply6 =
      "My personal favourite, Call of Duty Warzone. Maybe I'll see you online!";
    expect(botReply6).toEqual(expectedReply6);
  });
  //
  // CoD MWII multiplayer tree
  it("CoD MWII multiplayer tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("other");
    const expectedReply3 = "How about a 'modern' or 'historic' setting?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("modern");
    const expectedReply4 =
      "OK! Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("multiplayer");
    const expectedReply5 =
      "Nice! Would you like a 'battle royale' or 'classic' pvp?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("classic");
    const expectedReply6 = "Would you like 'small' or 'large' scale combat?";
    expect(botReply6).toEqual(expectedReply6);

    const botReply7 = getBotReply("small");
    const expectedReply7 =
      "Pop off and slay some scrubs in Call of Duty Modern Warfare II. You can't really go wrong.";
    expect(botReply7).toEqual(expectedReply7);
  });
  //
  // BF 2042 tree
  it("BF 2042 tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("other");
    const expectedReply3 = "How about a 'modern' or 'historic' setting?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("modern");
    const expectedReply4 =
      "OK! Would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("multiplayer");
    const expectedReply5 =
      "Nice! Would you like a 'battle royale' or 'classic' pvp?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("classic");
    const expectedReply6 = "Would you like 'small' or 'large' scale combat?";
    expect(botReply6).toEqual(expectedReply6);

    const botReply7 = getBotReply("large");
    const expectedReply7 =
      "Battlefield 2042 had a rough start but with the resent changes and updates it's worth a shot!";
    expect(botReply7).toEqual(expectedReply7);
  });
  //
  // Brothers in Arms tree
  it("Brothers in Arms tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("other");
    const expectedReply3 = "How about a 'modern' or 'historic' setting?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("historic");
    const expectedReply4 =
      "Okeydoke, would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("singleplayer");
    const expectedReply5 =
      "Would you like a 'simulation' or 'arcade' experience?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("simulation");
    const expectedReply6 =
      "This one isn't for the faint of heart. Take control of Sgt. Matt Baker in Brothers in Arms: Hell's Highway and guide your squad through a thrilling campaign.";
    expect(botReply6).toEqual(expectedReply6);
  });
  //
  // BFV tree
  it("BFV tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("other");
    const expectedReply3 = "How about a 'modern' or 'historic' setting?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("historic");
    const expectedReply4 =
      "Okeydoke, would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("singleplayer");
    const expectedReply5 =
      "Would you like a 'simulation' or 'arcade' experience?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("arcade");
    const expectedReply6 =
      "Battle your way through depictions of real WWII campaigns in Battlefield V.";
    expect(botReply6).toEqual(expectedReply6);
  });
  //
  // Hell Let Loose tree
  it("Hell Let Loose tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("other");
    const expectedReply3 = "How about a 'modern' or 'historic' setting?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("historic");
    const expectedReply4 =
      "Okeydoke, would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("multiplayer");
    const expectedReply5 =
      "Nice! Would you like a 'simulation' or 'arcade' experience?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("simulation");
    const expectedReply6 =
      "Pew, pew! Join the ever expanding experience of Hell Let Loose - a hardcore World War Two first person shooter with epic battles of 100 players.";
    expect(botReply6).toEqual(expectedReply6);
  });
  //
  // CoD Vanguard tree
  it("CoD Vanguard tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("other");
    const expectedReply3 = "How about a 'modern' or 'historic' setting?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("historic");
    const expectedReply4 =
      "Okeydoke, would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("multiplayer");
    const expectedReply5 =
      "Nice! Would you like a 'simulation' or 'arcade' experience?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("arcade");
    const expectedReply6 = "Would you like 'small' or 'large' scale combat?";
    expect(botReply6).toEqual(expectedReply6);

    const botReply7 = getBotReply("small");
    const expectedReply7 =
      "CoD Squad! Is that even a thing? I'd recommend Call of Duty Vanguard.";
    expect(botReply7).toEqual(expectedReply7);
  });
  //
  // BFV multiplayer tree
  it("BFV multiplayer tree", () => {
    const botReply1 = getBotReply("Dylan");
    const expectedReply1 =
      "Nice to meet you Dylan! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("ready");
    const expectedReply2 =
      "Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("other");
    const expectedReply3 = "How about a 'modern' or 'historic' setting?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("historic");
    const expectedReply4 =
      "Okeydoke, would you like 'singleplayer' or 'multiplayer' recommendations?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("multiplayer");
    const expectedReply5 =
      "Nice! Would you like a 'simulation' or 'arcade' experience?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("arcade");
    const expectedReply6 = "Would you like 'small' or 'large' scale combat?";
    expect(botReply6).toEqual(expectedReply6);

    const botReply7 = getBotReply("large");
    const expectedReply7 =
      "Large scale infantry and vehicle battles in Battlefield V!";
    expect(botReply7).toEqual(expectedReply7);
  });
});
