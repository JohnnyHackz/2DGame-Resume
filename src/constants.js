export const scaleFactor = 4;
export const dialogueData = {
  pc: `This is my PC. I work mostly in Python/Java these days.
    I also like Javascript and C# and just started making my own game in Unity using C#. Anyway regardless of the language, I just like programming and solving problems.
    Here is my <a href="https://github.com/JohnnyHackz" target="_blank">Github</a>!`,
  "cs-degree": `This is my CS degree. I hung it on the wall because I'm proud of it. It taught me many things but none as important as how to commit and finish something. There was many times I wanted to quit but I didn't. It was a very theoretical degree but I think it gave me a good foundation.`,
  "sofa-table": `That's my sofa. I like to relax here and watch TV and spend quality time with my family.
    <button onclick="copyTextToClipboard('berentsenjakob@gmail.com')">Copy Email</button>`,
  tv: `That's my TV. I've been watching tech YouTubers a lot recently like :
    <a href="https://www.youtube.com/@ThePrimeTimeagen" target="_blank">Theprimeagen</a>, <a href="https://www.youtube.com/@_JohnHammond" target="_blank"> John Hammond</a>,
    <a href="https://www.youtube.com/@PirateSoftware" target="_blank">PirateSoftware</a> and <a href="https://www.youtube.com/@CodeMonkeyUnity" target="_blank">CodeMonkey</a>!`,
  bed: `This where I sleep. Great ideas come when I'm lying on my bed. When an idea strikes, I often have to write it down or else I won't be able to sleep because my mental energy is consumed by it.`,
  resume: `This is my desk and on it is my resume. <a href="https://github.com/JohnnyHackz" target="_blank">Check it out?</a>
    Contact me at <button onclick="copyTextToClipboard('berentsenjakob@gmail.com')">berentsenjakob@gmail.com</button> if you have any interesting job opportunities!`,
  projects: `Info about this portfolio : It's made with the Kaboom.js library which is a library for making games in JavaScript.
    Text is rendered with HTML/CSS. So the textbox you're currently reading is not rendered within canvas. </a>.`,
  library: `There are a lot of programming and cyber books on my shelves.
    I love to read but often times I never completely finish them. Who else compulsively buys technical books without ever finishing them?`,
  exit: `If you want to exit Jakob Berentsen's portfolio, just close the tab.`,
};

// Additional JavaScript function to copy text to clipboard
function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
