const quotesArr = [
    {
        "text": "It ain't over 'til it's over.",
        "author": "Yogi Berra",
        "category": "yogisms",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "Baseball is 90 percent mental. The other half is physical.",
        "author": "Yogi Berra",
        "category": "yogisms",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "I always thought that record would stand until it was broken.",
        "author": "Yogi Berra",
        "category": "yogisms",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "You can observe a lot by watching.",
        "author": "Yogi Berra",
        "category": "yogisms",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "No one goes there anymore. It's too crowded.",
        "author": "Yogi Berra",
        "category": "yogisms",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "I wish I had an answer to that, because I'm tired of answering that question.",
        "author": "Yogi Berra",
        "category": "yogisms",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "The future ain't what it used to be.",
        "author": "Yogi Berra",
        "category": "yogisms",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "When you come to a fork in the road, take it.",
        "author": "Yogi Berra",
        "category": "yogisms",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "Always go to other people's funerals. Otherwise, they won't come to yours.",
        "author": "Yogi Berra",
        "category": "yogisms",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "You better cut the pizza in four pieces because I'm not hungry enough to eat six.",
        "author": "Yogi Berra",
        "category": "yogisms",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "Things may come to those who wait, but only the things left behind from those who hustle",
        "author": "Abraham Lincoln",
        "category": "motivational",
        "image": "img/lincoln.webp"
    },
    {
        "text": "It’s not whether you get knocked down; it’s whether you get up.",
        "author": "Vince Lombardi",
        "category": "motivational",
        "image": "img/lombardi.avif"
    },
    {
        "text": "I don’t count my situps. I only start counting once it starts hurting.",
        "author": "Muhammad Ali",
        "category": "motivational",
        "image": "img/ali.jpg"
    },
    {
        "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill",
        "category": "motivational",
        "image": "img/churchill.jpg"
    },
    {
        "text": "Are you willing to sprint when the distance is unknown?",
        "author": "Lewis Caralla",
        "category": "motivational",
        "image": "img/caralla.jpg"
    },
    {
        "text": "Hard work beats talent when talent doesn’t work hard.",
        "author": "Tim Notke",
        "category": "motivational",
        "image": "img/notke.jpg"
    },
    {
        "text": "An amateur practices until he gets it right; a professional practices until he can’t get it wrong",
        "author": "Unknown",
        "category": "motivational",
        "image": "img/original.jpg"
    },
    {
        "text": "Today I will do what others won’t, so tomorrow I can accomplish what others can’t.",
        "author": "Jerry Rice",
        "category": "motivational",
        "image": "img/rice.jpg"
    },
    {
        "text": "I’ve failed over & over & over again in my life & that is why I succeed.",
        "author": "Michael Jordan",
        "category": "motivational",
        "image": "img/jordan.jpg"
    },
    {
        "text": "Most people give up just when they’re about to achieve success. They quit on the one yard line. They give up at the last minute of the game one foot from a winning touchdown.",
        "author": "Ross Perot",
        "category": "motivational",
        "image": "img/perot.jpg"
    },
    {
        "text": "I'm gonna make him an offer he can't refuse",
        "author": "The Godfather (1972)",
        "category": "movies",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
        "author": "The Silence of the Lambs (1991)",
        "category": "movies",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "You can't handle the truth!",
        "author": "A Few Good Men (1992)",
        "category": "movies",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "Today, I consider myself the luckiest man on the face of the earth.",
        "author": "The Pride of the Yankees (1943)",
        "category": "movies",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "Out of order, I show you out of order.",
        "author": "Scent of a Woman (1992)",
        "category": "movies",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "Remember, kid; there’s heroes and there’s legends. Heroes get remembered, but legends never die. Follow your heart, kid, and you’ll never go wrong.",
        "author": "The Sandlot (1993)",
        "category": "movies",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "The greatest trick the Devil ever pulled was convincing the world he did not exist",
        "author": "The Usual Suspects (1995)",
        "category": "movies",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "I'm a Peacock, You gotta let me fly!",
        "author": "The Other Guys (2010)",
        "category": "movies",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "Don't sell yourself short Judge, you're a tremendous slouch.",
        "author": "Caddyshack (1980)",
        "category": "movies",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
        "author": "Dead Poets Society (1989)",
        "category": "movies",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill",
        "category": "historic",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "I have a dream.",
        "author": "Martin Luther King Jr.",
        "category": "historic",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "All great change in America begins at the dinner table.",
        "author": "Ronald Reagan",
        "category": "historic",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "It's better to fight for something in life than to die for nothing.",
        "author": "Gen. George S. Patton",
        "category": "historic",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "Better slip with foot than tongue.",
        "author": "Benjamin Franklin",
        "category": "historic",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi",
        "category": "historic",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "If the freedom of speech iss taken away then dumb and silent we may be led, like sheep to the slaughter.",
        "author": "George Washington",
        "category": "historic",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "It does not matter how slowly you go as long as you do not stop.",
        "author": "Confucius",
        "category": "historic",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "Education is the most powerful weapon which you can use to change the world.",
        "author": "Nelson Mandela",
        "category": "historic",
        "image": "img/yogi1.jpg"
    },
    {
        "text": "I am an American; free born and free bred, where I acknowledge no man as my superior, except for his own worth, or as my inferior, except for his own demerit.",
        "author": "Theodore Roosevelt",
        "category": "historic",
        "image": "img/yogi1.jpg"
    },
]