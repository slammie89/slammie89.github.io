'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "51b569ef5ce9559f6ddde0d87dd504ab",
".git/config": "bd437afaee55cb67088d84c4f900d494",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "940d9c908e2560ba320a33d8e9e2746e",
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
".git/index": "a0fc0303a3effa2668046b7ac297ca3e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd41c6b75eae805d39b69c9937c61ddb",
".git/logs/refs/heads/master": "d967d408e62f7c4f11a132f396f3244d",
".git/logs/refs/remotes/origin/master": "0f6a8de8e54a94a811e2d7d59cde555f",
".git/objects/00/a1148686c5d109dedde0dad339237bedf2a254": "64a5e7cccffbf343569f8edecafb711d",
".git/objects/03/2e9cc0eda38d150b9f4440c01faeb642e97ea7": "33b50b747ea13df154fcde97963e6ce5",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/05/360e348e325f3b849d9d1b0aea473058ab2545": "1e56df4044bf621317b7adc22b6af19e",
".git/objects/06/73359c4e6e304f4b4874911dc6d0f9d1ca5ce0": "60e7593d4c2c239c0fa905f60187be99",
".git/objects/08/ee24db11ad29f401dd0952ac356a5a31049926": "d4d1762ce5d2dfe24eb5a355987a923a",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/16/60fb7861a33624e4adced816af4b25d63a6366": "9ee259c61d06cfc6b176b7404748caa1",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/141f85ef5fae70836a1c88490c0fadfd0f521c": "0adc8f9cc2a5f96a02812254e95f3c58",
".git/objects/1a/3d112afc17511a37d3bdbfe81c9548c4c9f627": "2f77d746274784c153b17bfc7d08e64a",
".git/objects/1b/3ddddb8fd9b9f08467e6e14e1466a8fbb3115f": "31f1d4ad2f341d66536b83569e531409",
".git/objects/1c/9cf45602566aa2cde31556822fa4955699194b": "acbff72368de4c526d232ae8310ded2e",
".git/objects/1e/1696825b77c571988b6096d08f5db1a2c8b0e2": "7cb6aca588363836caf281463b3cc8b4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/26/42105fa5df37fe8adb5e875ada7104595f498a": "df2cbadcfc9758c6614e33b229900641",
".git/objects/29/0c718550b023209919c4d5f574bb86364e59bb": "c839817fb6aff314fc77336f67bae810",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/31/bab5b8bc1bb85372e9f7d664c22cfe9c144e5c": "ffb10e5ea483323d5ed0b44b8db12e78",
".git/objects/33/247f57720e5f6cf6b5359db1a8c3775c2b5009": "8d69a0fed33a7aaca9bbe8e83d64e55c",
".git/objects/34/01b4394a3ecac057325fef4fc14999889b0026": "a9492092e824dd38a39b069947cd8c34",
".git/objects/3c/ddfc4bb8562ac5e3aca92f8e97ec39b5537025": "14c072d0484d43ab0d15630dfa0ac8f3",
".git/objects/43/04275d55915dc6a957ae570f56087c57c6bab3": "0783b4a7057e93591918b3b3b078c8f5",
".git/objects/43/7e77713379d97888aeea366a4981249b988c00": "f4f1c136b3fe0755c37268e3479295d8",
".git/objects/46/d52047988979b976e9ee3eaa0780dc97c79e87": "ee8b540e59d6585007e4a01c8ab05981",
".git/objects/49/82cb588701e1dd073debcabf31ad703b09d26c": "b8c37a864ff4ed08386676a4c6264f7a",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/0bfded7e2c47955f3cb49f8ddb5c2856219467": "e320729183df5eeb7f665e79400d43ce",
".git/objects/4a/8538ff7e7c08181fc99319258d10295c2abf2f": "ae8842324226d142905752018baa261c",
".git/objects/4b/6e8e068ab892eeac59e221cdd2f60f1e5baed1": "dee7347a2c35cc7b73c96d8475168925",
".git/objects/4f/4fab27b297cdcc06afaa705ac58690beda4631": "4278d62787c8ba80aa32cb1117dc8cce",
".git/objects/52/f4325c55906c82c01fa25cd7b37439dc816869": "76ef4bc7f74c177e5c22a857c59734f5",
".git/objects/54/b6057eb58d959bab801772023d81a4ae8ee6ad": "100521258cd279c80274e3291462cd19",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/ee181510fde059fc5f7d7c28bb3a7a716ee8ec": "979c6643df36e8c3a891467d4c05abf8",
".git/objects/5f/ce2b949ab1bd0f473d66dc06c33a7179a06bfe": "fd1d003bb03cc185b3af3cfee9172c94",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/f9ea5eaee37921461fcc29f7dd84c8250f8763": "5f73b0e72a83d08acb8c5ba175916a8e",
".git/objects/68/6a3ddf691d6b62b54d89def02b041027bf4f6f": "62ee8953b67a21a768e0bc90fdfb5e39",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6a/ffb7029be5ceb43f86216065e859e69bb0ee66": "d8b000e281e5550fd4b31b6915bd0514",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/4d96fbb4b5830504b408203aaf99a04c72d89d": "ef29edbbb930b71ca93f014d63908f8f",
".git/objects/7c/02fc896cdcb1b5214c5e6386f9765db7ec8c78": "f476ebe196f43b220b1ce8d7a0887a60",
".git/objects/84/0d8109fb4dd1768f86521500212ff6a179be24": "753d0f3d960869c5092ada7030e7ee87",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/2f51cc976781f0d3f86302075c8208b8a3a9c8": "d7e26f3ad2533dccb175959dff7ff243",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/513f14481ffafb97278fe88e5363acfa2a2dfb": "94d7f509b2ed64451cd2b2bae3ba2cb0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/c569cb36a55cb3638659472c736a6963c56ee7": "3873abcf5ff88f23fa2214f7c15d8f41",
".git/objects/91/85f72b12adb66819003cbb96d6cc35bc44d48e": "4bc138b87a978ebdd169972863ee006a",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/94094fa247dd87335e4252d414fc7d8036a8b2": "387deb0baecf0428121404da9608e417",
".git/objects/99/58cae46546806f304a1d3869195a5769b13ae0": "8c40c682a3903b9e383cedca24b0c1eb",
".git/objects/9a/548476da68e0a213b536cd1ea12a3010d11b5b": "fa1796e86e372d63105c963099506b4c",
".git/objects/9c/2e584d4be958feceac787e6565823d5eeddbe1": "160b7a62326113180c1c42c410c0d0ab",
".git/objects/a0/3d0033b1716a289823988d214961f88922eb8b": "07d5c452425de598bb344b53e28bc0ce",
".git/objects/a2/0e7a0a7dce0eedeceeb6499bd2e37998b2ed54": "efd4c0336fccbb0c9838e4caeaaa9c17",
".git/objects/a9/c9d4addafd1a99fe7199a24fbc64d0e43d08ce": "1c2b4d21314cd3de2d979105078db93d",
".git/objects/aa/73ed7dac74ee8e583ed3d52cdaaaf4e961b197": "e6ec552133009b48e9c6ff55b46a21f2",
".git/objects/b0/36708268ed8b1a4e388b86b9e7c07acefe6d75": "44b9bbc243e06eba6ace49a2de454e9d",
".git/objects/b0/c1bc20f2ce6935a07084973f399ec28afbe51b": "9bca89e4302f52064b1820d6f6c2c2a7",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8ba0041aeda0d989f879361dac3533d4fa1851": "d2af93aac45246a40086207bdab3e46d",
".git/objects/b7/9d930afd05ea277d33507a33e37bc137c7d88b": "db4a8bc386eb0a061d6b5f12d763e407",
".git/objects/b8/826df7270a710a86e7d654c3ed648a73345d4d": "0f5dd3b5deccacbbcde6cf13da61490c",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/2e8f2d2888e1f78e9aef190873bb4496885373": "7a81cf50da93f608eff8d43ce0d1f9e4",
".git/objects/c8/76a0e7b96ed2041a4554132cf950876463d515": "a72c00122e008656dea70974a7304038",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/0131d3b7e0075b74014b0cfe7ec05a689c963a": "e016eb84abb6e51154fae3de6379cd17",
".git/objects/cb/4446feb3da8cc693cd407c206dcc1820d47240": "f00264111b21a9fafb51215005f69fa6",
".git/objects/cd/c1e3a7d9d20d9db925cb8147035fd28ada1987": "4638b33628d7aea1ab361f3e8a916751",
".git/objects/ce/be2d36cdc907e16b488b765364f332eff1faf0": "c35324fc4bf5b13238a8f77c2ef97aa6",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/40fddf9754ed3da53ed1f8a44e2c071b269aa8": "18badaf93536ecd0c158beb92616bea8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/db/ad2559b4f3578bb5ee51cae8c86b47c5e0aa59": "b8321a1b64225c36e2754e5468a10f24",
".git/objects/dd/7c3d53da244c30d7f6939e68048abdd03a603d": "88983b756ee32e0fbc6c3efff501296e",
".git/objects/df/d24f0b943091699e8958a7519f6c7987dc95be": "a721752d389d345770c352fd0f931f4d",
".git/objects/e1/f7a4102178b2d4534406a08aafd06566466841": "e0199b97851cbfd33daf71f9295fad54",
".git/objects/e5/da93203eda72c0faf66783a6ba4fd02a86fc04": "093b1e50572dacf786bf33be30144082",
".git/objects/e6/6f54ef5fe4fc4562c09e66d54c51991d67f5d0": "1b0521061783e1fb2e104408bb0fba3f",
".git/objects/e7/f11add1ab66d88ce83ddb30eb1bda842dde9c1": "d338ca46e35e059e2239792642198749",
".git/objects/eb/2f60805695b7cb8d2c6cc44076dc71ef928554": "b6cc1990e29ad63b63c796d4ab7671fa",
".git/objects/ec/6fd1aabaec1af75f0859a0c09ffa4e365008df": "beafb385fc3b3134fa44c996b5a50c21",
".git/objects/ed/813e169f7d7d38262eaa2080e11a538f8447ee": "79e56fdda40529ca10d818ab0bec5210",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/cf6a31102b1d5c18e5cfc35e27962116750c9f": "eb7283486e2f22a810584403b8bb2906",
".git/objects/fb/6b666926075b4869df256920d2388037dda71c": "9feda1b369ff22fa92e7de4a9534d368",
".git/objects/fd/02e42723a821f65f083027c7af2231dcf075c3": "33587b29ea8658afbf2c90f7cfafce46",
".git/objects/fd/a1d850970803c158d390fbc5b1d4a06acf8625": "182d40b613a24caf0be3689fb8b801b0",
".git/objects/ff/c26b9067799bca776691d2b248798ad15c1b4d": "6960da12a4fa7ec6c604de0e8f0699fb",
".git/objects/pack/pack-7edf483b55863be066918d1936e31e3224ff8565.idx": "8795f1becc77266bfdae535e41c8f935",
".git/objects/pack/pack-7edf483b55863be066918d1936e31e3224ff8565.pack": "e705f4a289140703d584146bcd77e376",
".git/ORIG_HEAD": "b29f0794650c44b676cc1320d694ac5b",
".git/refs/heads/master": "b29f0794650c44b676cc1320d694ac5b",
".git/refs/remotes/origin/master": "b29f0794650c44b676cc1320d694ac5b",
"404.html": "e84e858aca7abba29f114961976c1f7c",
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
"assets/fonts/MaterialIcons-Regular.otf": "20bfc9b27b0ba7756a2bc72e01fd6591",
"assets/NOTICES": "731c660ed10b49fb79110dc6062af9f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "663bbb1c08918178d75492a51d44b8ca",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa21ac6fa1874af610abcfce1bb6d1f7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "4ca4d8e583960e59897a79eb71fe9bbf",
"icons/app_launcher_icon.png": "894c315ac113caa750a3d4c36d880630",
"icons/error_image.png": "894c315ac113caa750a3d4c36d880630",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "beefa2b9e4cd730e221a59887d5f0f00",
"/": "beefa2b9e4cd730e221a59887d5f0f00",
"main.dart.js": "ab9c804d5e016c045afe2496029d0cdb",
"manifest.json": "b01dbaf0249a73df3dede01097716370",
"Slammie_-_OpenGraph.jpeg": "18923e41c4e1bbf776fd870dbe747b35",
"version.json": "8a6d7f9cafaa795df939b65c0b69c25a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
