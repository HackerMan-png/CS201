const http = require('http');
const eventEmitter = require('events');

http
  .createServer()
  .on('request', (req, res) => {
    switch (req.url.toLowerCase()) {
      case '/':
        res.end(`
        <div>
        <h1> To start please type "/1" after the URL </h1>
        </div>
      `);
        break;

      case '/1':
        res.end(`
        <div>
          <h1 style="text-align: center;">990000 + 0000FF</h1>
        </div>
        `);
        break;

      case '/1/hint':
        res.end(`
        <h1> What color is made? </h1>
        `);

      case '/purple':
        res.end(`
        <div style="height: 97vh; overflow-y: hidden;">
        <style>
        h4 {font-size: 1.5rem}
        .answer {color: white}
        .wrong {color: white}
        h4::selection {color: white}
        .answer:hover {color: green}
        .wrong:hover {color: red}
        </style>
          <h1 style="text-align: center;">Good job! You have solved the first puzzle. </h1>
          <h2 style="text-align: center;"> The answer for the next one is somewhere within this page.</h2>
          <h4 class="wrong" style="cursor: pointer; position: absolute; right:0; margin-right: 10vw">Nope</h4>
          <h4 class="wrong" style="cursor: pointer; position: absolute; left: 0; margin-top: 10vh; margin-left: 20vw; ">Not this one</h4>
          <h4 class="wrong" style="cursor: pointer; position: absolute; left: 0; margin-top: 50vh; margin-left: 60vw;">Not here :)</h4>
          <h4 class="answer" style="position: absolute; bottom:0">The answer is "hidden"</h4>
        </div>
        `);
        break;

      case '/hidden':
        const clickable = `style = "cursor: pointer`;
        res.end(`
        <div style="display: flex; flex-direction: row; gap: 0.5rem; width: 97vw; flex-wrap: wrap;">
        <h1 style="width:100vw; text-align:center;"> One of these words is the answer </h1>
        <style>
        p::selection {color:white}
        .answer::selection {color: black}
        </style>
          <p>edge</p>
          <p>mellow</p>
          <p>dream</p>
          <p>expert</p>
          <p>responsible</p>
          <p>defeated</p>
          <p>stare</p>
          <p>umbrella</p>
          <p>abandoned</p>
          <p>mitten</p>
          <p>nation</p>
          <p>fantastic</p>
          <p>relation</p>
          <p>oceanic</p>
          <p>abortive</p>
          <p>decide</p>
          <p>inexpensive</p>
          <p>jewel</p>
          <p>puzzling</p>
          <p>tough</p>
          <p>groovy</p>
          <p>conscious</p>
          <p>print</p>
          <p>imaginary</p>
          <p>hateful</p>
          <p>slip</p>
          <p>writer</p>
          <p>seal</p>
          <p>rainy</p>
          <p>tiny</p>
          <p>befitting</p>
          <p>waggish</p>
          <p>fit</p>
          <p>picture</p>
          <p>person</p>
          <p>stop</p>
          <p>partner</p>
          <p>turn</p>
          <p>vulgar</p>
          <p>observation</p>
          <p>youthful</p>
          <p>silent</p>
          <p>mailbox</p>
          <p>faded</p>
          <p>thankful</p>
          <p>handy</p>
          <p>paint</p>
          <p>business</p>
          <p>fact</p>
          <p>nod</p>
          <p class="answer">disapprove</p>
          <p>round</p>
          <p>abrasive</p>
          <p>minute</p>
          <p>wrap</p>
          <p>letter</p>
          <p>sloppy</p>
          <p>punch</p>
          <p>childlike</p>
          <p>furry</p>
          <p>wrong</p>
          <p>uppity</p>
          <p>fearless</p>
          <p>thaw</p>
          <p>silky</p>
          <p>worry</p>
          <p>zebra</p>
          <p>pleasure</p>
          <p>joyous</p>
          <p>assorted</p>
          <p>ritzy</p>
          <p>capable</p>
          <p>devilish</p>
          <p>dramatic</p>
          <p>remember</p>
          <p>scatter</p>
          <p>soup</p>
          <p>boorish</p>
          <p>ablaze</p>
          <p>momentous</p>
          <p>damaging</p>
          <p>educated</p>
          <p>hilarious</p>
          <p>doubtful</p>
          <p>ubiquitous</p>
          <p>explode</p>
          <p>event</p>
          <p>crib</p>
          <p>happen</p>
          <p>consider</p>
          <p>internal</p>
          <p>store</p>
          <p>quilt</p>
          <p>stormy</p>
          <p>treat</p>
          <p>squeamish</p>
          <p>exercise</p>
          <p>tremendous</p>
          <p>river</p>
          <p>noiseless</p>
          <p>satisfy</p>
          <p>enjoy</p>
          <p>wasteful</p>
          <p>moon</p>
          <p>whistle</p>
          <p>gaze</p>
          <p>periodic</p>
          <p>far-flung</p>
          <p>bead</p>
          <p>wave</p>
          <p>chickens</p>
          <p>scrape</p>
          <p>irate</p>
          <p>resonant</p>
          <p>naive</p>
          <p>place</p>
          <p>frame</p>
          <p>appliance</p>
          <p>fruit</p>
          <p>ill</p>
          <p>expect</p>
          <p>rotten</p>
          <p>drum</p>
          <p>like</p>
          <p>poised</p>
          <p>flavor</p>
          <p>tasteful</p>
          <p>sheet</p>
          <p>degree</p>
          <p>blue</p>
          <p>invention</p>
          <p>slim</p>
          <p>man</p>
          <p>dull</p>
          <p>root</p>
          <p>left</p>
          <p>airport</p>
          <p>groan</p>
          <p>charming</p>
          <p>rabbits</p>
          <p>weary</p>
          <p>wrench</p>
          <p>start</p>
          <p>prevent</p>
          <p>note</p>
          <p>approve</p>
          <p>camera</p>
          <p>sincere</p>
          <p>analyze</p>
          <p>intelligent</p>
          <p>precede</p>
          <p>cloistered</p>
          <p>dirty</p>
          <p>nasty</p>
          <p>flood</p>
          <p>impossible</p>
          <p>dolls</p>
          <p>bag</p>
          <p>wooden</p>
          <p>squeak</p>
          <p>grandfather</p>
          <p>robin</p>
          <p>rightful</p>
          <p>trucks</p>
          <p>scared</p>
          <p>billowy</p>
          <p>political</p>
          <p>occur</p>
          <p>sparkling</p>
          <p>sock</p>
          <p>curved</p>
          <p>measure</p>
          <p>spicy</p>
          <p>belligerent</p>
          <p>discovery</p>
          <p>wanting</p>
          <p>pest</p>
          <p>disagree</p>
          <p>robust</p>
          <p>feeble</p>
          <p>seashore</p>
          <p>hook</p>
          <p>bathe</p>
          <p>lewd</p>
          <p>new</p>
          <p>hang</p>
          <p>boundary</p>
          <p>nondescript</p>
          <p>dime</p>
          <p>arch</p>
          <p>super</p>
          <p>creator</p>
          <p>fretful</p>
          <p>copy</p>
          <p>string</p>
          <p>caring</p>
          <p>vast</p>
          <p>week</p>
          <p>yard</p>
          <p>sound</p>
          <p>crowded</p>
          <p>camp</p>
          <p>motionless</p>
          <p>drunk</p>
          <p>hill</p>
          <p>color</p>
          <p>delicate</p>
          <p>supply</p>
          <p>plot</p>
          <p>nest</p>
          <p>aspiring</p>
          <p>spoon</p>
          <p>animal</p>
          <p>corn</p>
          <p>reminiscent</p>
          <p>gate</p>
          <p>mammoth</p>
          <p>influence</p>
          <p>manage</p>
          <p>tie</p>
          <p>time</p>
          <p>shrill</p>
          <p>brash</p>
          <p>amuse</p>
          <p>meal</p>
          <p>cloth</p>
          <p>aquatic</p>
          <p>strange</p>
          <p>trot</p>
          <p>burn</p>
          <p>needle</p>
          <p>smart</p>
          <p>remove</p>
          <p>shock</p>
          <p>extra-large</p>
          <p>comb</p>
          <p>idiotic</p>
          <p>transport</p>
          <p>fresh</p>
          <p>tangible</p>
          <p>ocean</p>
          <p>suggestion</p>
          <p>skin</p>
          <p>thundering</p>
          <p>ice</p>
          <p>serve</p>
          <p>smelly</p>
          <p>snake</p>
          <p>religion</p>
          <p>stay</p>
          <p>freezing</p>
          <p>wriggle</p>
          <p>chemical</p>
          <p>drop</p>
          <p>school</p>
          <p style="cursor:pointer">switch</p>
          <p>sidewalk</p>
          <p>low</p>
          <p>ordinary</p>
          <p>rapid</p>
          <p>share</p>
          <p>underwear</p>
          <p>bizarre</p>
          <p>heap</p>
          <p>fortunate</p>
          <p>mean</p>
          <p>toy</p>
          <p>tidy</p>
          <p>liquid</p>
          <p>dirt</p>
          <p>look</p>
          <p>satisfying</p>
          <p>sail</p>
          <p>mice</p>
          <p>knowledge</p>
          <p>market</p>
          <p>deserted</p>
          <p>nippy</p>
          <p>girl</p>
          <p>tan</p>
          <p>steam</p>
          <p>spurious</p>
          <p>greet</p>
          <p>board</p>
          <p>hideous</p>
          <p>changeable</p>
          <p>teeny</p>
          <p>wink</p>
          <p>milky</p>
          <p>warlike</p>
          <p>provide</p>
          <p>laughable</p>
          <p>hard</p>
          <p>bless</p>
          <p>locket</p>
          <p>alive</p>
          <p>sneaky</p>
          <p>fall</p>
          <p>slope</p>
          <p>chivalrous</p>
          <p>obtain</p>
          <p>class</p>
          <p>discover</p>
          <p>control</p>
          <p>grotesque</p>
          <p>bump</p>
          <p>exciting</p>
          <p>didactic</p>
          <p>servant</p>
          <p>wait</p>
          <p>lonely</p>
          <p>uneven</p>
          <p>wobble</p>
        </div>
        `);
        break;

      case '/hidden/hint':
        res.end(`
        <h1>Try double clicking the words</h1>
        `);
        break;
      case '/disapprove':
        res.end(`
        <div>
          <h1> The answer is hidden somewhere inside this page </h1>
          <p class="the answer is 'maple'"></p>
        </div>
        `);
        break;
      case '/disapprove/hint':
        res.end(`
        <h1> Look deep inside of the page </h1>
        `);

      case '/maple':
        res.end(`
        <div>
        <style>
        .wrapper {display:flex; flex-direction:row; width: 100%; justify-content:center;}
        .click {cursor: pointer; text-decoration: none; color: black; font-size: 2em; font-weight:bold; display:block; margin-block-start: 0.67em; margin-block-end: 0.67em; margin-inline-start: 0px; margin-inline-end: 0px; }
        </style>
          <div class="wrapper">
            <h1>T</h1><a class="click" onClick="alert('The answer is letterH')">h</a><h1>e answer is "h"</h1>
          </div>
          <p>h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h h</p>
        </div>
        `);
        break;

      case '/maple/hint':
        res.end(`
        <h1> The answer is in the question. </h1>
        `);

      case '/letterh':
        res.end(`
        <h1> What letter is missing from this word. "Pneumonoultramicroscopicsilicovolcanoconiois" </h1>
        `);
        break;
      case '/letterh/hint':
        res.end(`
        <h1> Idk google it or smth </h1>
        `);
        break;

      case '/s':
        res.end(`
        <h1> You finished it! </h1>
        `);
        break;

      default:
        let arr = [6, 3, 1, 6, 7, 9, 4, 2, 0, -5, -2, -7];
        arr = arr.sort((a, b) => a - b);
        console.log(arr);
        res.end('404');
        break;
    }
  })
  .listen(3003);
