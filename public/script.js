// Story building blocks per theme
const stories = {
  abenteuer: {
    titles: [
      "Die geheimnisvolle Karte",
      "Das verlorene Amulett",
      "Die verborgene Höhle",
      "Der Schatz am Ende der Welt",
      "Die mutige Entdeckerin",
    ],
    openings: [
      "An einem sonnigen Morgen fand {name} eine alte, zerknitterte Karte auf dem Dachboden. Darauf war ein Weg eingezeichnet, der in den tiefen Wald führte.",
      "Eines Tages entdeckte {name} hinter dem alten Bücherregal einen geheimen Durchgang. Ein kühler Wind wehte daraus hervor.",
      "{name} konnte es kaum glauben: Ein richtiger Kompass lag plötzlich in der Jackentasche — und die Nadel zeigte nicht nach Norden, sondern in den Wald.",
      "Mitten in der Nacht wachte {name} auf, weil draussen ein seltsames Leuchten durch die Bäume flackerte.",
      "Der alte Leuchtturmwärter gab {name} einen rostigen Schlüssel. «Du wirst wissen, wofür er ist, wenn du ihn brauchst», sagte er geheimnisvoll.",
    ],
    middles: [
      "Nach einer Stunde Wanderung erreichte {name} eine Brücke aus Moos und alten Steinen. Darunter rauschte ein wilder Fluss. Auf der anderen Seite wartete ein freundlicher Fuchs, der den Weg kannte.",
      "{name} kletterte über umgestürzte Bäume und rutschte einen steilen Hang hinunter. Dort, zwischen den Felsen, öffnete sich eine Höhle, die von bunten Kristallen leuchtete.",
      "Plötzlich hörte {name} ein Geräusch hinter den Büschen. Aber es war kein Monster — es war ein kleiner Hund mit einem Zettel im Maul! Auf dem Zettel stand ein Rätsel.",
      "Im Dickicht fand {name} eine alte Holzhütte. Drinnen lag ein Tagebuch, das von jemandem geschrieben wurde, der vor hundert Jahren denselben Weg gegangen war.",
      "Der Weg führte zu einem See, so klar wie Glas. Am Ufer stand ein kleines Boot mit einem Segel in Regenbogenfarben. {name} stieg ein und das Boot begann sich von allein zu bewegen.",
    ],
    endings: [
      "Am Ende des Weges fand {name} eine kleine Truhe. Darin lag kein Gold, sondern etwas viel Besseres: ein Buch voller leerer Seiten — bereit für die nächsten Abenteuer.\n\n{name} lächelte. Das war erst der Anfang.",
      "{name} kehrte nach Hause zurück, aber alles sah anders aus. Die Welt war voller Wunder — man musste nur genau hinschauen.\n\nUnd in der Jackentasche klimperte leise der Kompass.",
      "Als {name} zurückkam, leuchteten die Sterne besonders hell. «Jedes Abenteuer macht uns mutiger», dachte {name} und schlief mit einem Lächeln ein.",
      "{name} hatte den Schatz gefunden — es war eine Schneekugel, die echte Schneeflocken fallen liess. Von nun an war jeder Tag ein kleines Wunder.",
      "Von diesem Tag an wusste {name}: Die besten Abenteuer beginnen genau dort, wo der Mut anfängt. Und Mut hatte {name} jetzt jede Menge.",
    ],
  },

  fantasy: {
    titles: [
      "Der verzauberte Garten",
      "Die Sternensammlerin",
      "Das sprechende Buch",
      "Der Zaubertrank",
      "Die fliegende Insel",
    ],
    openings: [
      "{name} entdeckte eines Morgens, dass die Blumen im Garten leise flüsterten. «Komm näher», sagten die Rosen.",
      "Ein winziger Drache, nicht grösser als ein Schmetterling, landete auf {name}s Schulter und nieste Funken.",
      "Die alte Bibliothekarin zwinkerte {name} zu und reichte ein Buch, das warm war wie ein lebendes Wesen. «Lies die erste Seite», flüsterte sie.",
      "{name} fand einen Zauberstab in einem hohlen Baum. Er war aus Mondlicht und Holunderholz — und er summte leise.",
      "Hinter dem Regenbogen, den {name} an diesem Nachmittag sah, versteckte sich eine Tür. Eine echte Tür, mitten in der Luft.",
    ],
    middles: [
      "Im verzauberten Garten lebten Elfen, die aus Tautropfen Musik machten. Sie baten {name} um Hilfe: Ihr magischer Baum verlor seine Blätter, weil jemand das Mondlicht gestohlen hatte.",
      "Der kleine Drache führte {name} zu einer Wolkenstadt. Dort oben lebten Wesen aus Nebel und Sternenlicht, die vergessen hatten, wie man lacht.",
      "Das Buch erzählte {name} eine Geschichte — aber mittendrin hörte es auf! «Den Rest musst du selbst erleben», stand auf der letzten Seite.",
      "{name} braute den Zaubertrank nach dem Rezept: drei Tropfen Morgentau, ein Sonnenstrahl und eine Prise Mut. Der Trank begann zu leuchten!",
      "Hinter der Tür lag eine Welt, in der alles spiegelverkehrt war. Bäume wuchsen nach unten, Flüsse flossen bergauf, und die Tiere sprachen in Rätseln.",
    ],
    endings: [
      "{name} sprach die magischen Worte und das Mondlicht kehrte zurück. Der Garten erblühte in tausend Farben, und die Elfen tanzten vor Freude.\n\n«Du bist jetzt eine Freundin der Magie», flüsterten sie.",
      "Mit einem Witz brachte {name} die Nebelwesen zum Lachen. Und als sie lachten, fielen Sterne vom Himmel wie goldener Regen.\n\nDer kleine Drache schnurrte zufrieden auf {name}s Schulter.",
      "{name} schrieb das Ende der Geschichte selbst — und es war das schönste Ende, das das Buch je gelesen hatte.\n\n«Danke», flüsterte das Buch und leuchtete warm.",
      "Der Zaubertrank verwandelte nicht {name}, sondern die Welt: Plötzlich konnte {name} die Magie sehen, die schon immer da gewesen war — in jedem Blatt, jedem Stein, jedem Lächeln.",
      "{name} kehrte zurück, aber behielt ein Geschenk: einen kleinen Kristall, der im Dunkeln leuchtete. Immer wenn {name} ihn ansah, erinnerte er daran, dass Magie überall ist.",
    ],
  },

  tiere: {
    titles: [
      "Der kluge Fuchs",
      "Die Reise der kleinen Eule",
      "Der mutige Igel",
      "Das Geheimnis der Waldtiere",
      "Die singende Katze",
    ],
    openings: [
      "{name} sass am Waldrand, als ein kleiner Fuchs aus dem Gebüsch trat. Er trug einen winzigen Rucksack und sah sehr entschlossen aus.",
      "Die kleine Eule Olivia landete auf {name}s Fensterbrett. «Ich brauche deine Hilfe», sagte sie. {name} war überrascht — aber nicht so sehr, wie man denken würde.",
      "Mitten auf dem Schulweg sass ein Igel. Er rollte sich nicht zusammen, sondern schaute {name} direkt an und sagte: «Du bist genau die richtige Person.»",
      "{name} bemerkte, dass die Tiere im Garten sich seltsam verhielten. Die Eichhörnchen flüsterten, die Vögel bildeten Kreise am Himmel, und die Katze nickte bedeutungsvoll.",
      "Eine kleine gestreifte Katze folgte {name} seit Tagen. Und manchmal, ganz leise, summte sie eine Melodie.",
    ],
    middles: [
      "Der Fuchs erklärte: «Im Wald ist der grosse Eichenbaum krank. Nur eine seltene blaue Blume kann ihn heilen — aber ich finde sie nicht allein.» Also machten sich {name} und der Fuchs auf die Suche.",
      "Olivia die Eule hatte ihre Brille verloren und konnte nachts nicht mehr fliegen. Ohne sie konnte sie die anderen Tiere nicht vor dem nahenden Sturm warnen. {name} half ihr suchen — auf dem Dachboden, im Park, unter der alten Brücke.",
      "Der Igel führte {name} zu einer Lichtung, wo sich alle Waldtiere versammelt hatten. «Unser Bach ist versiegt», sagte ein Reh traurig. «Irgendjemand hat einen Damm gebaut, der das Wasser blockiert.»",
      "{name} folgte den Eichhörnchen tiefer in den Wald. Dort fand sie ein verlassenes Tierbaby — einen kleinen Hasen, der sich verirrt hatte und seine Familie suchte.",
      "Die Katze führte {name} zu einem geheimen Ort unter der alten Eiche. Dort lebte eine Familie Mäuse, die die schönsten Geschichten der Welt kannte — aber niemand hörte ihnen zu.",
    ],
    endings: [
      "Am Ufer des Baches fanden sie die blaue Blume. {name} pflanzte sie neben der alten Eiche, und innerhalb von Minuten wuchsen neue grüne Blätter.\n\nDer Fuchs lächelte. «Freunde des Waldes sind die besten Freunde.»",
      "Die Brille lag im Vogelnest auf dem höchsten Baum! {name} kletterte mutig hinauf. Olivia setzte die Brille auf und rief: «Ich kann wieder sehen!» Gemeinsam warnten sie alle Tiere rechtzeitig vor dem Sturm.",
      "{name} und die Tiere arbeiteten zusammen und räumten den Damm weg. Das Wasser floss wieder, der Bach plätscherte fröhlich, und die Tiere feierten ein grosses Fest.\n\n{name} war ab jetzt immer willkommen im Wald.",
      "Nach langer Suche fanden sie die Hasenfamilie am Rande einer Blumenwiese. Die Wiedersehensfreude war riesig — und die Hasenmama schenkte {name} eine Blume als Dankeschön.\n\n«Wer einem Tier hilft, hat ein grosses Herz», sagte der Igel.",
      "{name} hörte den Mäusen zu — stundenlang. Und die Geschichten waren wirklich wunderschön. Von da an kam {name} jeden Tag, und die Katze summte dazu.\n\nManchmal sind die kleinsten Stimmen die wichtigsten.",
    ],
  },

  freundschaft: {
    titles: [
      "Die beste Überraschung",
      "Zwei sind besser als eins",
      "Der Freundschaftsstein",
      "Zusammen stark",
      "Der geheime Club",
    ],
    openings: [
      "{name} sass allein auf der Schaukel, als jemand Neues auf den Spielplatz kam. Das Kind hatte einen riesigen Rucksack und ein schüchternes Lächeln.",
      "Seit dem Umzug kannte {name} niemanden in der neuen Schule. Aber am zweiten Tag fand {name} einen Zettel im Spind: «Willst du heute mit mir Mittag essen? — Eine Freundin, die du noch nicht kennst.»",
      "{name} und Alex waren seit dem Kindergarten beste Freunde. Aber heute hatten sie sich gestritten — zum ersten Mal richtig.",
      "Im Kunstunterricht sollten alle ein Bild malen. {name} malte einen Regenbogen, und das Kind daneben malte genau den gleichen. Sie sahen sich an und mussten lachen.",
      "{name} fand im Park einen glatten, runden Stein. Er schimmerte ein bisschen, als ob er etwas Besonderes wäre.",
    ],
    middles: [
      "Das neue Kind hiess Mira und kam von weit her. Sie sprach leise und kannte die Spiele nicht. Aber als {name} ihr die Schaukel zeigte, leuchteten Miras Augen. «Bei uns gab es so etwas nicht», sagte sie staunend.",
      "{name} folgte den Hinweisen: ein Pfeil an der Wand, ein Stern auf dem Boden, eine kleine Blume auf dem Treppengeländer. Am Ende der Spur, auf der Bank unter dem grossen Baum, sass ein Mädchen mit einem Buch und winkte.",
      "{name} vermisste Alex. Der Streit war wegen etwas Kleinem gewesen — aber jetzt fühlte es sich riesig an. {name} bastelte eine Karte, aber die Worte wollten nicht kommen. Also malte {name} stattdessen: zwei Figuren, die zusammen lachen.",
      "Zusammen malten {name} und das andere Kind, das Sam hiess, ein riesiges Bild. Jeder malte eine Hälfte, und in der Mitte trafen sich ihre Regenbogen. «Das ist das schönste Bild der Klasse!», sagte die Lehrerin.",
      "{name} malte einen Stern auf den Stein und schenkte ihn dem stillen Kind aus der Klasse, das immer allein sass. «Für dich», sagte {name} einfach.",
    ],
    endings: [
      "Am Ende des Tages hatte {name} eine neue Freundin. Mira konnte wunderbare Geschichten erzählen, und {name} konnte toll zuhören. Zusammen waren sie unschlagbar.\n\n«Beste Freunde müssen nicht gleich sein», sagte {name}. «Sie müssen nur füreinander da sein.»",
      "Die geheimnisvolle Freundin hiess Lina, und sie liebte Rätsel genauso sehr wie {name}. Von diesem Tag an schrieben sie sich jeden Tag geheime Nachrichten und hatten das beste Schuljahr aller Zeiten.",
      "Als Alex die Karte sah, musste Alex lächeln. «Tut mir leid», sagten beide gleichzeitig — und dann lachten sie. Der Streit war vergessen.\n\nManche Freundschaften sind so stark, dass nichts sie kaputtmachen kann.",
      "{name} und Sam beschlossen, jede Woche zusammen ein Bild zu malen. Sie nannten sich «Die Regenbogen-Maler» und bald wollten alle mitmachen.\n\nDie besten Dinge entstehen, wenn man sie teilt.",
      "Das stille Kind, das Leo hiess, schaute den Stein an und dann {name}. Zum ersten Mal lächelte Leo richtig. «Danke», flüsterte Leo.\n\nVon da an sassen sie immer zusammen. Manchmal braucht man nur jemanden, der den ersten Schritt macht.",
    ],
  },

  weltraum: {
    titles: [
      "Reise zum Sternenmond",
      "Die Astronautin",
      "Planet der Wunder",
      "Der Sternenkompass",
      "Freunde aus den Sternen",
    ],
    openings: [
      "{name} konnte nicht schlafen. Draussen leuchtete ein Stern so hell, dass er direkt ins Zimmer schien. Und dann — bewegte er sich!",
      "Im Garten stand plötzlich etwas, das vorher nicht da gewesen war: ein kleines Raumschiff, nicht grösser als ein Auto, das leise summte.",
      "{name} bastelte eine Rakete aus Karton. Aber als {name} den letzten Stern aufklebte, begann die Rakete zu vibrieren — und zu wachsen!",
      "Der Stern, den {name} im Unterricht als Referat gewählt hatte, blinkte in der Nacht in einem seltsamen Muster. Wie eine Nachricht.",
      "Ein kleines, leuchtendes Wesen klopfte an {name}s Fenster. Es sah aus wie ein Glühwürmchen, aber mit winzigen Händen und einem freundlichen Gesicht.",
    ],
    middles: [
      "Der Stern war ein Raumschiff! Es holte {name} ab und flog durch die Milchstrasse. Auf dem Mond aus Kristall lebten Wesen, die aus Licht gemacht waren. Sie feierten gerade ein Fest — das Sternenfest, das nur alle hundert Jahre stattfindet.",
      "{name} stieg ein und das Raumschiff hob ab. Es flog vorbei am Mond, an Saturn mit seinen Ringen, und landete auf einem kleinen Planeten, der komplett aus Blumen bestand.",
      "Die Karton-Rakete flog tatsächlich! {name} flog höher und höher, bis die Erde wie eine blaue Murmel aussah. Dann sah {name} ihn: einen versteckten Planeten zwischen Mars und Jupiter, der auf keiner Karte verzeichnet war.",
      "{name} entschlüsselte die Nachricht: «Hilfe! Unser Licht geht aus!» Sie kam von einem kleinen Stern am Rande der Galaxie. {name} wusste: Jemand brauchte Hilfe.",
      "Das Lichtwesen hiess Nova. «Mein Planet verliert seine Farben», erklärte Nova traurig. «Alles wird grau. Kannst du helfen?» {name} nahm Novas winzige Hand und zusammen flogen sie durch die Sterne.",
    ],
    endings: [
      "{name} tanzte mit den Lichtwesen unter dem Kristallmond. Als es Zeit war zu gehen, schenkten sie {name} einen kleinen Stern für die Hosentasche.\n\nSeitdem leuchtet {name}s Zimmer nachts immer ein kleines bisschen.",
      "Auf dem Blumenplaneten pflückte {name} eine Mondblume — sie duftete nach Abenteuern und Träumen. Zurück auf der Erde pflanzte {name} sie im Garten.\n\nSie blüht noch heute, aber nur bei Vollmond.",
      "Auf dem geheimen Planeten lebten freundliche Wesen, die Geschichten sammelten. {name} erzählte ihnen von der Erde, und sie staunten über Regen, Eiscreme und Schmetterlinge.\n\n«Die Erde klingt wunderbar», sagten sie. «Pass gut auf sie auf.»",
      "{name} sammelte Sternenlicht in einem Glas und brachte es dem kleinen Stern. Sein Licht wurde wieder hell, und er strahlte so schön, dass er von der Erde aus zu sehen war.\n\nJedes Mal, wenn {name} jetzt zum Himmel schaut, blinkt der Stern: Danke!",
      "{name} malte den Planeten in allen Farben an, die {name} kannte — Sonnenuntergangsrot, Meeresblau und Grasgrün. Die Farben blieben! Novas Planet leuchtete wieder.\n\n«Farben kommen von Herzen, die sie teilen wollen», sagte Nova. {name} wurde nie vergessen.",
    ],
  },

  meer: {
    titles: [
      "Das Geheimnis der Meerjungfrau",
      "Die versunkene Stadt",
      "Wellen der Freundschaft",
      "Der singende Ozean",
      "Schatz der Tiefe",
    ],
    openings: [
      "{name} fand am Strand eine Muschel, die nicht rauschte, sondern flüsterte. «Komm zum Wasser», sagte sie.",
      "Beim Schwimmen im Meer bemerkte {name} etwas Glitzerndes tief unten. Es war zu schön, um es zu ignorieren.",
      "{name} baute die grösste Sandburg am Strand. Als die Flut kam, verschwand sie nicht — sie leuchtete und öffnete ein Tor.",
      "Ein kleiner Delfin schwamm immer wieder nah ans Ufer und schaute {name} an. Es war, als wollte er etwas sagen.",
      "Nach dem Sturm lag am Strand eine Flasche mit einer Nachricht. Aber die Schrift schimmerte und veränderte sich, während {name} las.",
    ],
    middles: [
      "{name} tauchte ins Wasser und konnte plötzlich atmen! Unter den Wellen erstreckte sich eine Stadt aus Korallen und Perlen. Eine junge Meerjungfrau schwamm heran. «Endlich! Wir warten schon so lange auf jemanden von der Oberfläche.»",
      "{name} tauchte tiefer und tiefer. Das Glitzern führte zu einer versunkenen Bibliothek, in der Bücher aus Seetang in Blasen eingehüllt schwebten. Eine alte Schildkröte war die Bibliothekarin.",
      "Durch das Tor gelangte {name} in eine Unterwasserwelt, in der Fische in allen Farben des Regenbogens schwammen. Sie bereiteten ein Fest vor — das Fest der Gezeiten.",
      "Der Delfin hiess Splash und konnte tatsächlich sprechen! «Die Unterwasser-Korallen verlieren ihre Farbe», erklärte er. «Wir brauchen jemanden, der die Melodie der Wellen kennt, um sie zu heilen.»",
      "Die Nachricht war eine Einladung von der Meereskönigin persönlich. «Ich lade dich ein, mein Reich zu besuchen. Folge dem silbernen Fisch.» Und tatsächlich — ein silberner Fisch wartete schon.",
    ],
    endings: [
      "Die Meerjungfrau schenkte {name} eine Perle, die im Mondlicht leuchtete. «Immer wenn du ans Meer denkst, denken wir an dich», sagte sie.\n\n{name} trug die Perle von da an immer bei sich — ein Stück vom Ozean, für immer.",
      "Die Schildkröte lieh {name} ein Buch: «Geschichten des Meeres». Jede Nacht erschien eine neue Geschichte auf den Seiten — Geschichten von Wellen, Walen und Wundern.\n\n{name} las sie alle. Und es kamen immer neue dazu.",
      "Das Fest der Gezeiten war wunderschön. Die Fische sangen, die Quallen leuchteten wie Laternen, und {name} tanzte im warmen Wasser.\n\nZurück am Strand fand {name} eine kleine Koralle in der Tasche. Eine Erinnerung an die schönste Nacht unter dem Meer.",
      "{name} sang ein Lied — einfach so, aus dem Herzen. Und die Korallen begannen zu leuchten! Zuerst rosa, dann blau, dann gold. Splash der Delfin machte vor Freude einen Salto.\n\n«Du hast die Melodie der Wellen in dir», sagte Splash. «Komm uns bald wieder besuchen.»",
      "Die Meereskönigin war freundlich und weise. Sie zeigte {name} die Wunder der Tiefe: leuchtende Quallen, tanzende Seepferdchen, singende Wale.\n\n«Das Meer hat keine Grenzen», sagte die Königin, «genau wie deine Fantasie.» {name} vergass diesen Tag nie.",
    ],
  },
};

// UI elements
const nameInput = document.getElementById("name");
const generateBtn = document.getElementById("generate-btn");
const formCard = document.getElementById("form-card");
const storyCard = document.getElementById("story-card");
const storyTitle = document.getElementById("story-title");
const storyBody = document.getElementById("story-body");
const storyEnd = document.getElementById("story-end");
const newStoryBtn = document.getElementById("new-story-btn");
const backBtn = document.getElementById("back-btn");
const themeBtns = document.querySelectorAll(".theme-btn");

let selectedTheme = "abenteuer";

// Theme selection
themeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    themeBtns.forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedTheme = btn.dataset.theme;
  });
});

// Random pick helper
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate story
function generateStory() {
  const name = nameInput.value.trim() || "Luna";
  const theme = stories[selectedTheme];

  const title = pick(theme.titles);
  const opening = pick(theme.openings).replaceAll("{name}", name);
  const middle = pick(theme.middles).replaceAll("{name}", name);
  const ending = pick(theme.endings).replaceAll("{name}", name);

  storyTitle.textContent = title;
  storyBody.textContent = opening + "\n\n" + middle + "\n\n" + ending;
  storyEnd.textContent = "~ Ende ~";

  formCard.classList.add("hidden");
  storyCard.classList.remove("hidden");
  storyCard.scrollIntoView({ behavior: "smooth" });
}

// New story (same settings)
newStoryBtn.addEventListener("click", () => {
  storyCard.classList.remove("story-card");
  void storyCard.offsetWidth;
  storyCard.classList.add("story-card");
  generateStory();
});

// Back to form
backBtn.addEventListener("click", () => {
  storyCard.classList.add("hidden");
  formCard.classList.remove("hidden");
});

// Generate button
generateBtn.addEventListener("click", generateStory);

// Enter key
nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") generateStory();
});

// Create twinkling stars background
function createStars() {
  const container = document.getElementById("stars");
  for (let i = 0; i < 60; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 3 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.setProperty("--dur", Math.random() * 3 + 2 + "s");
    star.style.animationDelay = Math.random() * 3 + "s";
    container.appendChild(star);
  }
}

createStars();
