'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e5f77814e732cf80482cc3c6504a71bb",
".git/config": "ac0e90309a836f689189d096af1bc444",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a898d1efa34480296f978ee6107dfbd2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "82b120b3deca54c3c6acdf5fa87cd3c2",
".git/logs/refs/heads/master": "82b120b3deca54c3c6acdf5fa87cd3c2",
".git/logs/refs/remotes/origin/master": "1f23fef600c7fd95e83172de90e4f232",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/00/a1148686c5d109dedde0dad339237bedf2a254": "64a5e7cccffbf343569f8edecafb711d",
".git/objects/01/59666b03fb7c56b1938fbc02cb74a638263d64": "8ccd9eec951292592f9b0cfbcec8db13",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/06/73359c4e6e304f4b4874911dc6d0f9d1ca5ce0": "60e7593d4c2c239c0fa905f60187be99",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/ee24db11ad29f401dd0952ac356a5a31049926": "d4d1762ce5d2dfe24eb5a355987a923a",
".git/objects/0d/ad6c3b2199560e2594cb2e90f16e0c20c89da3": "8edf0757d8b29a03019d453fde079670",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/60fb7861a33624e4adced816af4b25d63a6366": "9ee259c61d06cfc6b176b7404748caa1",
".git/objects/1b/f340d84fad7986c73dfe8f9b15e0ecaa453881": "06d2e3bcab411e9a760b1cf305e0506f",
".git/objects/1c/9cf45602566aa2cde31556822fa4955699194b": "acbff72368de4c526d232ae8310ded2e",
".git/objects/1e/1696825b77c571988b6096d08f5db1a2c8b0e2": "7cb6aca588363836caf281463b3cc8b4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/0ebece700d3886aa5a06542c7431ec86190047": "5709435a32db7c69621605ce8ebc249b",
".git/objects/26/42105fa5df37fe8adb5e875ada7104595f498a": "df2cbadcfc9758c6614e33b229900641",
".git/objects/26/bbc2c86c32ad9b48af75068b894d654068a950": "e7a59968ba9568fa0670a6735921a6a0",
".git/objects/28/d6dc5413ad73113a3e677ef0c7d36fa6adb011": "b60a6340cbce45390aee83df2a48a15c",
".git/objects/2a/1d982cd5667b0c150cf8c4c00adf4394d0af83": "f2c78895f751d3df975d02fc2275dad7",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/33/247f57720e5f6cf6b5359db1a8c3775c2b5009": "8d69a0fed33a7aaca9bbe8e83d64e55c",
".git/objects/3c/ddfc4bb8562ac5e3aca92f8e97ec39b5537025": "14c072d0484d43ab0d15630dfa0ac8f3",
".git/objects/3f/f6939bd5c7ef22fc4ba64d2f7c90640e9dc029": "578cabfe902bbcd8abcc2581eab17974",
".git/objects/49/82cb588701e1dd073debcabf31ad703b09d26c": "b8c37a864ff4ed08386676a4c6264f7a",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/ee181510fde059fc5f7d7c28bb3a7a716ee8ec": "979c6643df36e8c3a891467d4c05abf8",
".git/objects/5f/ce2b949ab1bd0f473d66dc06c33a7179a06bfe": "fd1d003bb03cc185b3af3cfee9172c94",
".git/objects/62/654cfa4b852121f170402477c8700a670a742f": "c66ce109a04022b3d6b93e1c9223a653",
".git/objects/64/c966f8670e26aa801e7a9e3654e95379ca4644": "0e6ed6988203ba14498ef3226fb7c26f",
".git/objects/65/f9ea5eaee37921461fcc29f7dd84c8250f8763": "5f73b0e72a83d08acb8c5ba175916a8e",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6f/4a29d5015395fdbbb11458aca52a241d08a77e": "b7e4b184ed47bc441c54cdf3eaae3d90",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7c/02fc896cdcb1b5214c5e6386f9765db7ec8c78": "f476ebe196f43b220b1ce8d7a0887a60",
".git/objects/84/0d8109fb4dd1768f86521500212ff6a179be24": "753d0f3d960869c5092ada7030e7ee87",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/2f51cc976781f0d3f86302075c8208b8a3a9c8": "d7e26f3ad2533dccb175959dff7ff243",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/513f14481ffafb97278fe88e5363acfa2a2dfb": "94d7f509b2ed64451cd2b2bae3ba2cb0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/dca82fa6659ff6e1e2de39f249747935f1bf59": "cf4999e4ba55a408d814e939b930defe",
".git/objects/93/0694b48b08cddd2443102094c76c912faedd06": "5d3155af1a4046657a6524767f7a1f34",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/0e5351d6761c4f1654376bf217b72fd9659a0f": "008183583eebbf449b2916d35eb143df",
".git/objects/96/42fd3b749c60d92af56fcab952320b03c93d84": "a809720bc07ba5721f5bb3632caa54f0",
".git/objects/98/ddc2f56b3b601359dc7723c164dfcf0083e079": "545372e09439153208d05fdb594b8297",
".git/objects/99/58cae46546806f304a1d3869195a5769b13ae0": "8c40c682a3903b9e383cedca24b0c1eb",
".git/objects/9a/548476da68e0a213b536cd1ea12a3010d11b5b": "fa1796e86e372d63105c963099506b4c",
".git/objects/a0/3d0033b1716a289823988d214961f88922eb8b": "07d5c452425de598bb344b53e28bc0ce",
".git/objects/a2/0e7a0a7dce0eedeceeb6499bd2e37998b2ed54": "efd4c0336fccbb0c9838e4caeaaa9c17",
".git/objects/a5/1b066a6ea16cfa2fa7cab5292fb7aad9b457e6": "c2d950a93b6610a7a0fbd9d9dea24261",
".git/objects/a9/c9d4addafd1a99fe7199a24fbc64d0e43d08ce": "1c2b4d21314cd3de2d979105078db93d",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/c1bc20f2ce6935a07084973f399ec28afbe51b": "9bca89e4302f52064b1820d6f6c2c2a7",
".git/objects/b4/564d984adceb408d7c0a94aac54b8f2bae6675": "ce1e8a407cb9c2cb6c65258b272aa30f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/826df7270a710a86e7d654c3ed648a73345d4d": "0f5dd3b5deccacbbcde6cf13da61490c",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/2e8f2d2888e1f78e9aef190873bb4496885373": "7a81cf50da93f608eff8d43ce0d1f9e4",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c8/76a0e7b96ed2041a4554132cf950876463d515": "a72c00122e008656dea70974a7304038",
".git/objects/ca/0131d3b7e0075b74014b0cfe7ec05a689c963a": "e016eb84abb6e51154fae3de6379cd17",
".git/objects/cd/c1e3a7d9d20d9db925cb8147035fd28ada1987": "4638b33628d7aea1ab361f3e8a916751",
".git/objects/ce/be2d36cdc907e16b488b765364f332eff1faf0": "c35324fc4bf5b13238a8f77c2ef97aa6",
".git/objects/d0/c08872c0089817c7412d5f0d8caaaec7eaea88": "efde4c37791d0df36609c90bc382533c",
".git/objects/d2/40fddf9754ed3da53ed1f8a44e2c071b269aa8": "18badaf93536ecd0c158beb92616bea8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/7c3d53da244c30d7f6939e68048abdd03a603d": "88983b756ee32e0fbc6c3efff501296e",
".git/objects/e1/f7a4102178b2d4534406a08aafd06566466841": "e0199b97851cbfd33daf71f9295fad54",
".git/objects/e5/b4fd0ef0bb5dd0c37dbcb8a1cdfe1dffa9d139": "c5f73439438b5c692631206796509ad9",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/2f60805695b7cb8d2c6cc44076dc71ef928554": "b6cc1990e29ad63b63c796d4ab7671fa",
".git/objects/ed/ee416083fddd45477655e52e819491dff40c8a": "4001e69bd3bbad7c9de73284a0d6ab62",
".git/objects/ee/3c9332922a93d12031dbbcb683a54ad21ed27d": "323d3374edacc1872b0206ec155cbbf7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/6b666926075b4869df256920d2388037dda71c": "9feda1b369ff22fa92e7de4a9534d368",
".git/refs/heads/master": "77185c505dedef5ca320251157cb4abc",
".git/refs/remotes/origin/master": "77185c505dedef5ca320251157cb4abc",
"app_launcher_icon.png": "894c315ac113caa750a3d4c36d880630",
"assets/AssetManifest.bin": "f9589b06e44825fd3ae138c797002829",
"assets/AssetManifest.bin.json": "22303e7d86f667d44e25d36c6a996803",
"assets/AssetManifest.json": "951d13c301fc6a1a27778a85f29131ed",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/ic_whatsapp.ttf": "e23fedbf6dd622778dc576526c4acd26",
"assets/assets/fonts/SF-Pro-Text-Bold.otf": "5b6c7cdfe0acd0fcc93cef7984a08740",
"assets/assets/fonts/SF-Pro-Text-BoldItalic.otf": "102ced08dfce419a4ab92ff8b16fdd06",
"assets/assets/fonts/SF-Pro-Text-HeavyItalic.otf": "a7106fbac3d0666ffd315d15b783e8d6",
"assets/assets/fonts/SF-Pro-Text-Light.otf": "71d6e2c38c8d3dd6697bb8f2e4a5efb7",
"assets/assets/fonts/SF-Pro-Text-LightItalic.otf": "0173d338d5959e61a2393e0feef438ed",
"assets/assets/fonts/SF-Pro-Text-Medium.otf": "9491854a8b6ec3a0c915668083f18fde",
"assets/assets/fonts/SF-Pro-Text-MediumItalic.otf": "9f5c9e1ad763571b8513bb88cd4fa23b",
"assets/assets/fonts/SF-Pro-Text-Regular.otf": "404e4373cba1344d28a4a257152ac8b8",
"assets/assets/fonts/SF-Pro-Text-Semibold.otf": "8f079b59ff6659b39b41bc2255c968b8",
"assets/assets/fonts/SF-Pro-Text-SemiboldItalic.otf": "b006a42590a5809de6231aa535fabea1",
"assets/assets/images/app_launcher_icon.png": "894c315ac113caa750a3d4c36d880630",
"assets/assets/images/Ellipsis_2.4s_204px1.gif": "fdbcaf5ce51a915973163b349cd7eb13",
"assets/assets/images/error_image.png": "894c315ac113caa750a3d4c36d880630",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/google.png": "b294611a6ddc739b597a1f8f904610b2",
"assets/assets/images/gray-photo-placeholder-icon-design-ui-vector-35850819_(1).jpg": "1d40a5c5aa5b3ee4429a9e2d45df719c",
"assets/assets/images/ic_placeholder_user.jpg": "94b3486fd68de2551912fdeea9fc62b0",
"assets/assets/images/Maslow_AI_iOS.png": "0c3388022c8676a726ad3da3d2f615f4",
"assets/assets/images/maslow_logo_dark_theme.png": "a31cd033bdb19c9b020b0296adead1de",
"assets/assets/images/RIVALSLAM_LOGO__WHITE_Palm-CLEAR_Star.png": "dc16a4bd382fb859c4076587c8d0526a",
"assets/assets/images/rival_slam_logo.png": "fc30419ab6563352398fd2e1701f5fa5",
"assets/assets/images/Slammie_-_OpenGraph.jpeg": "18923e41c4e1bbf776fd870dbe747b35",
"assets/assets/images/Thumbs_Down_Red.svg": "326de436180db449e3dbbda25fee8c61",
"assets/assets/images/Thumbs_Up_Filled.svg": "287696b1079815c5a03b5fa32cd480fd",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "afba93828394c4a734a8dbdccd24fd86",
"assets/fonts/MaterialIcons-Regular.otf": "e69ba8f966d6444066f8a5cc034e6421",
"assets/NOTICES": "b2566f5c9b1c7b780bf613660a1fb96b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "663bbb1c08918178d75492a51d44b8ca",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b34172418a7d11318339b1ceee295147",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/app_launcher_icon.png": "894c315ac113caa750a3d4c36d880630",
"icons/error_image.png": "894c315ac113caa750a3d4c36d880630",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "beefa2b9e4cd730e221a59887d5f0f00",
"/": "beefa2b9e4cd730e221a59887d5f0f00",
"main.dart.js": "ef0a3c297d48bad8dfb6779f193f959b",
"manifest.json": "b01dbaf0249a73df3dede01097716370",
"Slammie_-_OpenGraph.jpeg": "18923e41c4e1bbf776fd870dbe747b35",
"version.json": "8a6d7f9cafaa795df939b65c0b69c25a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
