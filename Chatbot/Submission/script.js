/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */
//
// Variables
//
let name;
let secret = 0;
let path;
let level;
let type;
let mpType;
let subPath;
let end;

const getBotReply = (msg) => {
  // Lowercase conversion
  if (name !== undefined) {
    msg = msg.toLowerCase();
  }
  //
  // Catch all and always run
  //

  // Reset
  if (msg === "reset" || msg === "RESET" || msg === "Reset") {
    name = undefined;
    secret = 0;
    path = undefined;
    level = undefined;
    type = undefined;
    mpType = undefined;
    subPath = undefined;
    end = undefined;
    return `OK, lets start over. Please start by telling me your name.`;
  }
  // Name, blank inputs or end reached
  if (name === undefined && msg === "") {
    return `Sorry, looks like you've not entered anything. Lets start by you telling me your name.`;
  }
  if (end === true || (end === true && msg === "")) {
    return `Looks like you've reached the end ${name}. If you'd like to start again enter 'reset' and we'll find another game.`;
  }
  if (msg === "") {
    return `Sorry ${name}, looks like you've not entered anything. Please try again by providing an input`;
  }
  // Funny stuff
  if (msg === "hey, how you doing?" || msg === "HEY, HOW YOU DOING?") {
    return `Mood - https://youtu.be/2zgcFFvEA9g?list=LL`;
  }
  if (msg === "music" || msg === "MUSIC" || msg === "Music") {
    return "https://youtu.be/U4lz8MN6MQA?list=LL";
  }
  // Secret stuff
  if (
    (msg === "secret" && secret < 3) ||
    (msg === "SECRET" && secret < 3) ||
    (msg === "Secret" && secret < 3)
  ) {
    secret++;
    return `What? Is this a secret? Try entering 'hey, how you doing?' or 'music' for some funny stuff`;
  } else if (
    (msg === "secret" && secret < 5) ||
    (msg === "SECRET" && secret < 5) ||
    (msg === "Secret" && secret < 5)
  ) {
    secret++;
    return `Hidden treasure?`;
  } else if (
    (msg === "secret" && secret === 5 && name === undefined) ||
    (msg === "SECRET" && secret < 5 && name === undefined) ||
    (msg === "Secret" && secret < 5 && name === undefined)
  ) {
    return `You're a persistent one. I wonder how long you're going to do this for but here you go, https://youtu.be/dQw4w9WgXcQ`;
  } else if (
    (msg === "secret" && secret === 5) ||
    (msg === "SECRET" && secret === 5) ||
    (msg === "Secret" && secret < 5)
  ) {
    return `You're a persistent one ${name}. I wonder how long you're going to do this for but here you go, https://youtu.be/dQw4w9WgXcQ`;
  }
  //
  // Intro stuff
  //
  if (name === undefined) {
    name = msg;
    return `Nice to meet you ${name}! Today I'm going to help you find a fun FPS game to play. Are you 'ready' to get started?`;
  }
  if (msg === "ready") {
    path = "ready";
    return `Great! Lets start by selecting a setting. Are you interested in 'scifi' or would you like 'other' options?`;
  }
  if (msg === "no" && path === undefined) {
    path = "no";
    return `That's OK. Just let me know when you're 'ready' to get started.`;
  }
  if (path === undefined || (path === "no" && msg !== "ready")) {
    path = "no";
    return `Sorry ${name}, I'm not sure I understand. Please enter 'ready' when you want to get started.`;
  }
  //
  // First path decision
  //
  if (path === "ready") {
    level = 1;
    if (msg === "scifi") {
      path = "scifi";
      return `Awesome, I love scifi. Would you have guessed? Would you like 'singleplayer' or 'multiplayer' recommendations?`;
    }
    if (msg === "other") {
      path = "other";
      return `How about a 'modern' or 'historic' setting?`;
    }
    if (msg !== "scifi" || msg !== "other") {
      return `Sorry ${name}, I'm not sure I understand. Please enter 'scifi' or 'other'. If you'd like to start again enter 'reset'.`;
    }
  }
  //
  // SciFi tree
  //
  if (path === "scifi") {
    if (level === 1) {
      if (msg === "singleplayer" || msg === "sp") {
        type = "sp";
        level = 2;
        return `Who would you like your main combatants to be 'humans' or would you like two 'other' options?`;
      }
      if (msg === "multiplayer" || msg === "mp") {
        type = "mp";
        level = 2;
        return `Nice! Would you like 'co-op' or 'competative' options?`;
      }
      if (
        msg !== "singleplayer" ||
        msg !== "sp" ||
        msg !== "multiplayer" ||
        msg !== "mp"
      ) {
        return `Sorry ${name}, I'm not sure I understand. Please enter 'singlplayer' or 'multiplayer'. If you'd like to start again enter 'reset'.`;
      }
    }
    //
    // Singleplayer tree inside scifi
    //
    if (type === "sp") {
      if (level === 2) {
        if (msg === "humans") {
          level = 3;
          subPath = "humans";
          return `Would you rather fight 'tech nazis' or 'martians'?`;
        }
        if (msg === "other") {
          level = 3;
          subPath = "other";
          return `Maybe 'demons' or 'aliens'?`;
        }
        if (msg !== "humans" || msg !== "other") {
          return `Sorry ${name}, I'm not sure I understand. Please enter 'humans' or 'other'. If you'd like to start again enter 'reset'.`;
        }
      }
      if (level === 3) {
        if (subPath === "humans") {
          if (msg === "nazis" || msg === "tech nazis") {
            end = true;
            return `I'd suggest playing one of the Wolfenstein games! Wolfenstien: The New Order is the first of the new trilogy.`;
          }
          if (msg === "martians") {
            end = true;
            return `How about Call of Duty: Infinite Warfare. This game features a really cool robot named Ethan!`;
          }
          if (msg !== "nazis" || msg !== "tech nazis" || msg !== "martians") {
            return `Sorry ${name}, I'm not sure I understand. Please enter 'nazis' or 'martians'. If you'd like to start again enter 'reset'.`;
          }
        }
      }
      if (level === 3) {
        if (subPath === "other") {
          if (msg === "demons") {
            end = true;
            return `Are you ready to become the DOOM slayer?! I'd recommend DOOM (2016).`;
          }
          if (msg === "aliens") {
            level = 4;
            subPath = "aliens";
            return `Would you rather save the 'planet' or the 'universe'?`;
          }
          if (msg !== "demons" || msg !== "aliens") {
            return `Sorry ${name}, I'm not sure I understand. Please enter 'demons' or 'aliens'. If you'd like to start again enter 'reset'.`;
          }
        }
      }
      if (level === 4) {
        if (subPath === "aliens") {
          if (msg === "planet") {
            end = true;
            return `Become a super soldier and dive into the Crysis series! If your computer can run it...`;
          }
          if (msg === "universe") {
            end = true;
            return `"Wake up John". There's never a bad time to play Halo!`;
          }
          if (msg !== "planet" || msg !== "universe") {
            return `Sorry ${name}, I'm not sure I understand. Please enter 'planet' or 'universe'. If you'd like to start again enter 'reset'.`;
          }
        }
      }
    }
    //
    // Multiplayer tree inside scifi
    //
    if (type === "mp") {
      if (level === 2) {
        if (msg === "co-op" || msg === "coop") {
          level = 3;
          mpType = "coop";
          return `Would you like a 'looter' or see two 'other' options?`;
        }
        if (msg === "competitive") {
          level = 3;
          mpType = "competitive";
          return `Do you prefer a 'battle royale' or 'arena' shooter?`;
        }
        if (msg !== "co-op" || msg !== "coop" || msg !== "competitive") {
          return `Sorry ${name}, I'm not sure I understand. Please enter 'co-op' or 'competitive'. If you'd like to start again enter 'reset'.`;
        }
      }
      //
      // Co-Op inside scifi multiplayer
      //
      if (mpType === "coop") {
        if (level === 3) {
          if (msg === "looter") {
            level = 4;
            subPath = "looter";
            return `Do you see yourself as a 'hunter' or 'guardian'?`;
          }
          if (msg === "other") {
            level = 4;
            subPath = "other";
            return `Would you like to spend time in the dystopian '41st millennium' or the '26th century'?`;
          }
          if (msg !== "looter" || msg !== "other") {
            return `Sorry ${name}, I'm not sure I understand. Please enter 'looter' or 'other'. If you'd like to start again enter 'reset'.`;
          }
        }
        if (level === 4) {
          if (subPath === "looter") {
            if (msg === "hunter") {
              end = true;
              return `Venture to the planet of Pandora and hunt for mysterious vauls in Borderlands 3!`;
            }
            if (msg === "guardian") {
              end = true;
              return `Unravel a mysterious story in Destiny 2.`;
            }
            if (msg !== "hunter" || msg !== "guardian") {
              return `Sorry ${name}, I'm not sure I understand. Please enter 'hunter' or 'guardian'. If you'd like to start again enter 'reset'.`;
            }
          }
          if (subPath === "other") {
            if (msg === "41st millennium" || msg === "41st") {
              end = true;
              return `Grab your friends and jump into Warhammer 40K: Darktide and fight for the imperium of man.`;
            }
            if (msg === "26th century" || msg === "26th") {
              end = true;
              return `Squad up super soldier. Battle the Bannishhed in Halo Infinite.`;
            }
            if (
              msg !== "41st millennium" ||
              msg !== "41st" ||
              msg !== "26th century" ||
              msg !== "26th"
            ) {
              return `Sorry ${name}, I'm not sure I understand. Please enter '41st millennium' or '26th century'. If you'd like to start again enter 'reset'.`;
            }
          }
        }
      }
      //
      // Competitive inside scifi multiplayer
      //
      if (mpType === "competitive") {
        if (level === 3) {
          if (msg === "battle royale" || msg === "br") {
            end = true;
            return `Pick your favourite legend and battle it out in one of the most popular games ever made, Apex Legends!`;
          }
          if (msg === "arena") {
            level = 4;
            return `Would you like a 'classic experience' or a 'new spin' on the genre?`;
          }
          if (msg !== "battle royale" || msg !== "br" || msg !== "arena") {
            return `Sorry ${name}, I'm not sure I understand. Please enter 'battle royale' or 'arena'. If you'd like to start again enter 'reset'.`;
          }
        }
        if (level === 4) {
          if (msg === "classic experience" || msg === "classic") {
            end = true;
            return `One of the last remain classic area experiences, give Halo Infinite a go.`;
          }
          if (msg === "new spin" || msg === "new") {
            end = true;
            return `Did someone say Portal mixed with Halo? Splitgate is a great new spin on an arena shooter.`;
          }
          if (
            msg !== "classic experience" ||
            msg !== "classic" ||
            msg !== "new spin" ||
            msg !== "new"
          ) {
            return `Sorry ${name}, I'm not sure I understand. Please enter 'classic experience' or 'new spin'. If you'd like to start again enter 'reset'.`;
          }
        }
      }
    }
  }

  //
  // Other, second tree decision
  //
  if (path === "other") {
    if (msg === "modern") {
      path = "modern";
      return `OK! Would you like 'singleplayer' or 'multiplayer' recommendations?`;
    }
    if (msg === "historic") {
      path = "historic";
      return `Okeydoke, would you like 'singleplayer' or 'multiplayer' recommendations?`;
    }
    if (msg !== "modern" || msg !== "historic") {
      return `Sorry ${name}, I'm not sure I understand. Please enter 'modern' or 'historic'. If you'd like to start again enter 'reset'.`;
    }
  }
  //
  // Modern tree
  //
  if (path === "modern") {
    if (level === 1) {
      if (msg === "singleplayer" || msg === "sp") {
        type = "sp";
        level = 2;
        return `Would you like a 'simulation' or 'arcade' experience?`;
      }
      if (msg === "multiplayer" || msg === "mp") {
        type = "mp";
        level = 2;
        return `Nice! Would you like a 'battle royale' or 'classic' pvp?`;
      }
      if (
        msg !== "singleplayer" ||
        msg !== "sp" ||
        msg !== "multiplayer" ||
        msg !== "mp"
      ) {
        return `Sorry ${name}, I'm not sure I understand. Please enter 'singlplayer' or 'multiplayer'. If you'd like to start again enter 'reset'.`;
      }
    }
    //
    // Singleplayer inside modern
    //
    if (type === "sp") {
      if (level === 2) {
        if (msg === "simulation" || msg === "sim") {
          end = true;
          return `Explore the awesome open world sandbox of Arma 3.`;
        }
        if (msg === "arcade") {
          end = true;
          return `"Dice please", Haha, little inside joke. Give Call of Duty Modern Warfare II a go.`;
        }
        if (msg !== "simulation" || msg !== "sim" || msg !== "arcade") {
          return `Sorry ${name}, I'm not sure I understand. Please enter 'simulation' or 'arcade'. If you'd like to start again enter 'reset'.`;
        }
      }
    }
    //
    // Multiplayer inside modern
    //
    if (type === "mp") {
      if (level === 2) {
        if (msg === "battle royale" || msg === "br") {
          end = true;
          return `My personal favourite, Call of Duty Warzone. Maybe I'll see you online!`;
        }
        if (msg === "classic") {
          level = 3;
          return `Would you like 'small' or 'large' scale combat?`;
        }
        if (msg !== "battle royale" || msg !== "br" || msg !== "classic") {
          return `Sorry ${name}, I'm not sure I understand. Please enter 'battle royale' or 'classic'. If you'd like to start again enter 'reset'.`;
        }
      }
      if (level === 3) {
        if (msg === "small") {
          end = true;
          return `Pop off and slay some scrubs in Call of Duty Modern Warfare II. You can't really go wrong.`;
        }
        if (msg === "large") {
          end = true;
          return `Battlefield 2042 had a rough start but with the resent changes and updates it's worth a shot!`;
        }
        if (msg !== "small" || msg !== "large") {
          return `Sorry ${name}, I'm not sure I understand. Please enter 'small' or 'large'. If you'd like to start again enter 'reset'.`;
        }
      }
    }
  }
  //
  // Historic tree
  //
  if (path === "historic") {
    if (level === 1) {
      if (msg === "singleplayer" || msg === "sp") {
        type = "sp";
        level = 2;
        return `Would you like a 'simulation' or 'arcade' experience?`;
      }
      if (msg === "multiplayer" || msg === "mp") {
        type = "mp";
        level = 2;
        return `Nice! Would you like a 'simulation' or 'arcade' experience?`;
      }
      if (
        msg !== "singleplayer" ||
        msg !== "sp" ||
        msg !== "multiplayer" ||
        msg !== "mp"
      ) {
        return `Sorry ${name}, I'm not sure I understand. Please enter 'singlplayer' or 'multiplayer'. If you'd like to start again enter 'reset'.`;
      }
    }
    //
    // Singleplayer inside historic
    //
    if (type === "sp") {
      if (level === 2) {
        if (msg === "simulation" || msg === "sim") {
          end = true;
          return `This one isn't for the faint of heart. Take control of Sgt. Matt Baker in Brothers in Arms: Hell's Highway and guide your squad through a thrilling campaign.`;
        }
        if (msg === "arcade") {
          end = true;
          return `Battle your way through depictions of real WWII campaigns in Battlefield V.`;
        }
        if (msg !== "simulation" || msg !== "sim" || msg !== "arcade") {
          return `Sorry ${name}, I'm not sure I understand. Please enter 'simulation' or 'arcade'. If you'd like to start again enter 'reset'.`;
        }
      }
    }
    //
    // Multiplayer inside historic
    //
    if (type === "mp") {
      if (level === 2) {
        if (msg === "simulation" || msg === "sim") {
          end = true;
          return `Pew, pew! Join the ever expanding experience of Hell Let Loose - a hardcore World War Two first person shooter with epic battles of 100 players.`;
        }
        if (msg === "arcade") {
          level = 3;
          return `Would you like 'small' or 'large' scale combat?`;
        }
        if (msg !== "simulation" || msg !== "sim" || msg !== "arcade") {
          return `Sorry ${name}, I'm not sure I understand. Please enter 'simulation' or 'arcade'. If you'd like to start again enter 'reset'.`;
        }
      }
      if (level === 3) {
        if (msg === "small") {
          end = true;
          return `CoD Squad! Is that even a thing? I'd recommend Call of Duty Vanguard.`;
        }
        if (msg === "large") {
          end = true;
          return `Large scale infantry and vehicle battles in Battlefield V!`;
        }
        if (msg !== "small" || msg !== "large") {
          return `Sorry ${name}, I'm not sure I understand. Please enter 'small' or 'large'. If you'd like to start again enter 'reset'.`;
        }
      }
    }
  }
};

export { getBotReply };
