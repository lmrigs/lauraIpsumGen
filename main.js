// text array with Laura Ipsum

const lauraIpsum = ["In the episode 'A Little Romance', the girls find themselves reminiscing about their past romantic adventures when Blanche suddenly gets a letter from a man she had a fling with years ago. They decide to set them up on a date, but things don't go as planned when they discover that the man is now engaged. As they navigate through the awkwardness of the situation, Blanche realizes that she has feelings for him and doesn't want to let him go. Eventually, she comes to terms with the situation and learns to move on.",
    "'The Triangle' is a classic love triangle story that revolves around Dorothy's ex-husband Stan. When he comes to visit, he tries to win her back, leading to a complicated situation between him, Dorothy, and her new beau, Lucas. The girls try to help Dorothy figure out what to do, but things get even more complicated when Stan offers her a job in Hawaii. Dorothy is torn between her feelings for Stan and her new life with Lucas, and ultimately has to make a difficult decision.",
    "'Sophia's Wedding' sees the girls planning a wedding for Sophia after she discovers that her first marriage wasn't legally recognized. The girls are excited to help her plan the perfect wedding, but things get complicated when her ex-husband shows up and tries to win her back. As Sophia grapples with her feelings for him, she must also navigate the tricky waters of planning a wedding with her best friends. In the end, she decides to go through with the wedding and finally puts her past behind her.",
    "In 'The Flu', the girls all come down with the flu and chaos ensues in the house as they try to take care of each other while dealing with their own symptoms. As they lie in bed, delirious with fever, they reminisce about their past and reflect on their lives. It's a touching and funny episode that showcases the girls' love and friendship for each other.",
    "'That Was No Lady' sees Blanche wearing a red dress to a fancy restaurant, only to be mistaken for a prostitute. As she tries to clear up the misunderstanding, hilarity ensues and the girls find themselves in some embarrassing situations. It's a classic Golden Girls episode that highlights Blanche's love for attention and her ability to laugh at herself.",
    "In 'Old Friends', the girls are visited by some old friends from their youth who they haven't seen in decades. As they catch up and reminisce, they realize that their friends haven't changed much and are still as immature and wild as they were in their youth. It's a fun and nostalgic episode that showcases the girls' history and the depth of their friendship.",
    "'Love Under the Big Top' has the girls attending a circus and Blanche falling for a clown. As she tries to win his heart, she discovers that he's just using her for a free place to stay, leaving her heartbroken. It's a classic Blanche story that highlights her love for romance and her ability to bounce back from heartbreak.",
    "In 'The Operation', Rose is nervous about having a minor surgery, leading to the girls reminiscing about their own medical experiences. As they share their stories, they come to realize that they're not as young as they used to be and that their bodies are starting to show signs of wear and tear. It's a poignant episode that highlights the realities of aging.",
    "In 'The Way We Met', the girls recount how they first met and became roommates. It's a heartwarming episode that highlights the girls' unique personalities and how they came together to form a family. As they share their stories, they reflect on the ups and downs of their lives and how they've been there for each other through it all. It's a touching tribute to the power of friendship and the bonds that can be formed when people come together in unexpected ways.",
    "'Journey to the Center of Attention' sees Blanche feeling insecure about her age and looks, leading her to seek attention from anyone who will give it to her. However, she soon realizes that true beauty comes from within and that the people who truly care about her don't care about her looks. It's a poignant episode that highlights the importance of self-acceptance and the power of true friendship. As Blanche learns to love herself for who she is, the other girls offer their unwavering support and love, reminding her that she is beautiful just the way she is."]

// variables for dom elements

const form = document.getElementById("form-fields");
const amount = document.getElementById("number-input");
const output = document.getElementById("laura-output");



//event listener for submit
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const value = parseInt(amount.value);
    let tempArray = lauraIpsum.slice(0, value);
    let tempContent = tempArray.map(function(item) {
        return `<p>${item}</p>`;
    });   
    output.innerHTML= tempContent.join("");
});




