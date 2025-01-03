// latte / frappe / macchiato / mocha
const palette = frappe;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Tokyo",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "main",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "admin",
          links: [
            {
              name: "GitHub",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.red,
            },
            {
              name: "Gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.blue,
            },
            {
              name: "Sheets",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "japanese",
          links: [
            {
              name: "JSE",
              url: "https://japanese.stackexchange.com/",
              icon: "torii",
              icon_color: palette.red,
            },
            {
              name: "Main Guide",
              url: "https://donkuri.github.io/learn-japanese",
              icon: "language-hiragana",
              icon_color: palette.blue,
            },
            {
              name: "Media Recommendations",
              url: "https://docs.google.com/spreadsheets/d/1w42HEKEu2AzZg9K7PI0ma9ICmr2qYEKQ9IF4XxFSnQU/edit?gid=1999205540#gid=1999205540",
              icon: "table",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "YouTube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "JPDB",
              url: "https://jpdb.io/",
              icon: "language",
              icon_color: palette.blue,
            },
            {
              name: "VNDB",
              url: "https://vndb.org/",
              icon: "tournament",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
            {
              name: "ChatGPT",
              url: "https://chatgpt.com/",
              icon: "sparkles",
              icon_color: palette.green,
            },
            {
              name: "Odin Project",
              url: "https://www.theodinproject.com",
              icon: "circle-triangle",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "learn",
          links: [
            {
              name: "cryptopals",
              url: "https://www.cryptopals.com/",
              icon: "key",
              icon_color: palette.red,
            },
            {
              name: "Teach Yourself CS",
              url: "https://teachyourselfcs.com/",
              icon: "device-desktop",
              icon_color: palette.green,
            },
            {
              name: "Missing Semester of CS",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "A Tour of Go",
              url: "https://go.dev/tour/welcome/1",
              icon: "brand-golang",
              icon_color: palette.red,
            },
            {
              name: "React",
              url: "https://react.dev/learn",
              icon: "brand-react",
              icon_color: palette.blue,
            },
            {
              name: "MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/Tutorials",
              icon: "cloud-network",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
    {
      name: "hope",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "immersion",
          links: [
            {
              name: "asbplayer",
              url: "https://killergerbah.github.io/asbplayer/",
              icon: "",
              icon_color: palette.red,
            },
            {
              name: "ttsu",
              url: "https://reader.ttsu.app/",
              icon: "books",
              icon_color: palette.blue,
            },
            {
              name: "mokuro",
              url: "https://catalog.mokuro.moe/",
              icon: "layers-selected",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "interests",
          links: [
            {
              name: "Mathematics Guide",
              url: "https://donkuri.github.io/learn-mathematics/",
              icon: "math-x-divide-y-2",
              icon_color: palette.red,
            },
            {
              name: "BWSF",
              url: "https://nick-e.com/bwsf/",
              icon: "barbell",
              icon_color: palette.blue,
            },
            {
              name: "Pedal Playground",
              url: "https://pedalplayground.com/",
              icon: "status-change",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "trackers",
          links: [
            {
              name: "JPopSuki",
              url: "https://jpopsuki.eu/",
              icon: "music",
              icon_color: palette.red,
            },
            {
              name: "AnimeBytes",
              url: "https://www.facebook.com",
              icon: "device-tv",
              icon_color: palette.blue,
            },
            {
              name: "JPTV",
              url: "https://jptv.club/login",
              icon: "antenna",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
