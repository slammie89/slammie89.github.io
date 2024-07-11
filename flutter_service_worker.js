'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

<<<<<<< HEAD
const RESOURCES = {".git/COMMIT_EDITMSG": "8bb0676fefdb1bc53ea270c1265f21a1",
".git/config": "bd437afaee55cb67088d84c4f900d494",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8775ff0e07c7af5a46a5fd18f4f96f44",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "83e4932b394555079daaac3ea94da734",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "61a81ca8d2aa09459531f22d42e46ec7",
".git/logs/refs/heads/main": "2f11f11f0f2dbbd8bc4245706836fd4d",
".git/logs/refs/heads/master": "430f1d537bdffdcfb4053ad8b741bd5e",
".git/logs/refs/remotes/origin/main": "8ed57f06b481b774daaf83ef8ad1109f",
".git/objects/0c/3f06db0438da33d4364e3363f629bd5c875e5b": "e0eb345b435279091a9df1d73830cab8",
".git/objects/0d/1b9220c44da63034ae2f5d14caa4a32a95efad": "15f51bcfda2d3f97eb9b8c48b3dc1c0f",
".git/objects/0f/f2fa918071a0b935937e701bf3992b9af7e52c": "a9d36e64f038d2979ed68dd0368adb9e",
".git/objects/26/bbc2c86c32ad9b48af75068b894d654068a950": "e7a59968ba9568fa0670a6735921a6a0",
".git/objects/3c/6cda8bd27deacb911edc0725039714c8ddd7b4": "eca8482ee9e85e44bd4a0da77565ce57",
".git/objects/44/afa126433d1133dc46a7012760a0ae8bd51594": "b8e08d90900ade9b6ba350001181ba30",
".git/objects/4f/0075d2d89b7021947144c9b694d26e5b8c7362": "8aad011818d295613e2e40ed4c59347e",
".git/objects/54/cf5fa995025e11e2cbcb877a18b15949834883": "3d3e0f09ac7e2b855172e78e28b99977",
".git/objects/61/3c3e073ff7292bb87428e5dd3fa85a0aff9d0b": "e8dac282fdd6c0d2f814adcebc159daf",
".git/objects/76/d4a866df30e11a38a18c2fe8dc5ec1ccd13d44": "bd23780030c23bcc91b45ebb824a0894",
".git/objects/79/4a38c3fa650668e1606ab67772ece4437b4efe": "4f2ba472c81d2588f34650ddc2b8268e",
".git/objects/82/e4faffddff75492590a59ac707b440e19703d9": "39ba91decf2b94d99e94bd978dc52b68",
".git/objects/97/03b93dcf2b66337e38f108021e5eac749e64a3": "062f207fb9e8a5dff016324dfaf4731f",
".git/objects/98/ddc2f56b3b601359dc7723c164dfcf0083e079": "545372e09439153208d05fdb594b8297",
".git/objects/b2/a35633b0790c1234f10153526b2818682d2ac8": "58907057ce2c288170aa04f62d30d507",
".git/objects/b2/c0b57706ee0222ae0ec191708271d6cab91765": "1a2c418030280b3a246fc95c72b8d8ad",
".git/objects/b6/7ad073781b57213aa7eabb5f0ed0d6f3624189": "89d2618eab37f8831b253492659eb365",
".git/objects/be/5cc0662441a3c4d230ed8c7fde7d27e3c072e7": "b9114e77b5c7ce884a1e32b2ff9319f6",
".git/objects/c1/5fd7c85cc49437ab5f7be96178c75e62bb049e": "e1345844e38d6a5387ff3df8d0ea1ec7",
".git/objects/ce/603e714f2cdedd6da68db997e5fca715a5f728": "a624f3b7cb04e4b5bb78b0e00b111c47",
".git/objects/d0/6b99a50c2b56956c6cfad528efdd181742978d": "29350b89c22f712c83c08de979bc5f4c",
".git/objects/df/c2979fe934325686124716cbbee331909f470a": "8869e661aa24a66fd367ce76a5299714",
".git/objects/e6/e2d0ee79676f7feadbe735aaebabd61b8eaac1": "741e17eec070ca81f42d5de16495d1c9",
".git/objects/ed/ee416083fddd45477655e52e819491dff40c8a": "4001e69bd3bbad7c9de73284a0d6ab62",
".git/objects/f4/0b550a414d3c78d273ed7de11cdf97c65509a1": "45fceeb1ea87ddabe9797f04a4421ddc",
".git/objects/f9/6a5a807d656a17644c0a1590d90510764a7fe3": "afcbdb091cdb526b494fb69b3389e6b4",
".git/objects/pack/pack-78ad431de7215109400984910e88a0310f8d9d54.idx": "9dfc1cb1ef3b0daca7385b36ef717ea8",
".git/objects/pack/pack-78ad431de7215109400984910e88a0310f8d9d54.pack": "94679b71e26b9e61d4e8b358735106da",
".git/ORIG_HEAD": "046027eb5d55666f580dea0677acfe00",
".git/refs/heads/main": "c84d5997813b3d165585a47acfda8165",
".git/refs/heads/master": "5b6445efe762ac6da54f404afeea71f1",
".git/refs/remotes/origin/main": "c84d5997813b3d165585a47acfda8165",
"app_launcher_icon.png": "894c315ac113caa750a3d4c36d880630",
"assets/AssetManifest.bin": "f9589b06e44825fd3ae138c797002829",
"assets/AssetManifest.bin.json": "22303e7d86f667d44e25d36c6a996803",
"assets/AssetManifest.json": "951d13c301fc6a1a27778a85f29131ed",
=======
const RESOURCES = {"app_launcher_icon.png": "894c315ac113caa750a3d4c36d880630",
"assets/AssetManifest.bin": "64f0deabf53fb59f8d9b7214e40700e0",
"assets/AssetManifest.bin.json": "497db39aa4fbdc6340392091278ee6b1",
"assets/AssetManifest.json": "234217ea1484ef6df59e66911089b7ef",
>>>>>>> 378c1ce (Solved bugs 11/07/2024)
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
<<<<<<< HEAD
"assets/assets/images/gray-photo-placeholder-icon-design-ui-vector-35850819_(1).jpg": "1d40a5c5aa5b3ee4429a9e2d45df719c",
"assets/assets/images/ic_placeholder_user.jpg": "94b3486fd68de2551912fdeea9fc62b0",
=======
>>>>>>> 378c1ce (Solved bugs 11/07/2024)
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
<<<<<<< HEAD
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
=======
"assets/fonts/MaterialIcons-Regular.otf": "20bfc9b27b0ba7756a2bc72e01fd6591",
"assets/NOTICES": "9829b31402d04c1581860ca7205f7dd6",
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
"flutter_bootstrap.js": "00e6e48723f725c36ad5e49d28e898d7",
>>>>>>> 378c1ce (Solved bugs 11/07/2024)
"icons/app_launcher_icon.png": "894c315ac113caa750a3d4c36d880630",
"icons/error_image.png": "894c315ac113caa750a3d4c36d880630",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0ed2ab9b4ef3cefc24979b8d402ec448",
"/": "0ed2ab9b4ef3cefc24979b8d402ec448",
<<<<<<< HEAD
"main.dart.js": "852bb1ff4b759cce1574a74a6e599035",
"manifest.json": "b01dbaf0249a73df3dede01097716370",
"slammie89.github.io/.git/config": "68a6a76f36ed05ca35f40eabdd332304",
"slammie89.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"slammie89.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"slammie89.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"slammie89.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"slammie89.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"slammie89.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"slammie89.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"slammie89.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"slammie89.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"slammie89.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"slammie89.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"slammie89.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"slammie89.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"slammie89.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"slammie89.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"slammie89.github.io/.git/index": "55eeeeb532662e6cda036dd6d7dc4cf9",
"slammie89.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"slammie89.github.io/.git/logs/HEAD": "2dd8de2c2a0517df5fb3559deeab553a",
"slammie89.github.io/.git/logs/refs/heads/main": "2dd8de2c2a0517df5fb3559deeab553a",
"slammie89.github.io/.git/logs/refs/remotes/origin/HEAD": "2dd8de2c2a0517df5fb3559deeab553a",
"slammie89.github.io/.git/objects/pack/pack-19bcb94abdcd7dbf925a32c6604de73686f21cb1.idx": "aa57cbb604ce2108c40b41c2ea0ea219",
"slammie89.github.io/.git/objects/pack/pack-19bcb94abdcd7dbf925a32c6604de73686f21cb1.pack": "a8464f0881bda98a67f580c02054e310",
"slammie89.github.io/.git/packed-refs": "013bf5a2aa6ebb6b6fcd65e249e92e71",
"slammie89.github.io/.git/refs/heads/main": "c8ac00582725a0bd499fc30b9da44129",
"slammie89.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"slammie89.github.io/app_launcher_icon.png": "894c315ac113caa750a3d4c36d880630",
"slammie89.github.io/assets/AssetManifest.bin": "f9589b06e44825fd3ae138c797002829",
"slammie89.github.io/assets/AssetManifest.bin.json": "22303e7d86f667d44e25d36c6a996803",
"slammie89.github.io/assets/AssetManifest.json": "951d13c301fc6a1a27778a85f29131ed",
"slammie89.github.io/assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"slammie89.github.io/assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"slammie89.github.io/assets/assets/fonts/ic_whatsapp.ttf": "e23fedbf6dd622778dc576526c4acd26",
"slammie89.github.io/assets/assets/fonts/SF-Pro-Text-Bold.otf": "5b6c7cdfe0acd0fcc93cef7984a08740",
"slammie89.github.io/assets/assets/fonts/SF-Pro-Text-BoldItalic.otf": "102ced08dfce419a4ab92ff8b16fdd06",
"slammie89.github.io/assets/assets/fonts/SF-Pro-Text-HeavyItalic.otf": "a7106fbac3d0666ffd315d15b783e8d6",
"slammie89.github.io/assets/assets/fonts/SF-Pro-Text-Light.otf": "71d6e2c38c8d3dd6697bb8f2e4a5efb7",
"slammie89.github.io/assets/assets/fonts/SF-Pro-Text-LightItalic.otf": "0173d338d5959e61a2393e0feef438ed",
"slammie89.github.io/assets/assets/fonts/SF-Pro-Text-Medium.otf": "9491854a8b6ec3a0c915668083f18fde",
"slammie89.github.io/assets/assets/fonts/SF-Pro-Text-MediumItalic.otf": "9f5c9e1ad763571b8513bb88cd4fa23b",
"slammie89.github.io/assets/assets/fonts/SF-Pro-Text-Regular.otf": "404e4373cba1344d28a4a257152ac8b8",
"slammie89.github.io/assets/assets/fonts/SF-Pro-Text-Semibold.otf": "8f079b59ff6659b39b41bc2255c968b8",
"slammie89.github.io/assets/assets/fonts/SF-Pro-Text-SemiboldItalic.otf": "b006a42590a5809de6231aa535fabea1",
"slammie89.github.io/assets/assets/images/app_launcher_icon.png": "894c315ac113caa750a3d4c36d880630",
"slammie89.github.io/assets/assets/images/Ellipsis_2.4s_204px1.gif": "fdbcaf5ce51a915973163b349cd7eb13",
"slammie89.github.io/assets/assets/images/error_image.png": "894c315ac113caa750a3d4c36d880630",
"slammie89.github.io/assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"slammie89.github.io/assets/assets/images/google.png": "b294611a6ddc739b597a1f8f904610b2",
"slammie89.github.io/assets/assets/images/gray-photo-placeholder-icon-design-ui-vector-35850819_(1).jpg": "1d40a5c5aa5b3ee4429a9e2d45df719c",
"slammie89.github.io/assets/assets/images/ic_placeholder_user.jpg": "94b3486fd68de2551912fdeea9fc62b0",
"slammie89.github.io/assets/assets/images/Maslow_AI_iOS.png": "0c3388022c8676a726ad3da3d2f615f4",
"slammie89.github.io/assets/assets/images/maslow_logo_dark_theme.png": "a31cd033bdb19c9b020b0296adead1de",
"slammie89.github.io/assets/assets/images/RIVALSLAM_LOGO__WHITE_Palm-CLEAR_Star.png": "dc16a4bd382fb859c4076587c8d0526a",
"slammie89.github.io/assets/assets/images/rival_slam_logo.png": "fc30419ab6563352398fd2e1701f5fa5",
"slammie89.github.io/assets/assets/images/Slammie_-_OpenGraph.jpeg": "18923e41c4e1bbf776fd870dbe747b35",
"slammie89.github.io/assets/assets/images/Thumbs_Down_Red.svg": "74292e86cb03c6127ecd519ea5cb8247",
"slammie89.github.io/assets/assets/images/Thumbs_Up_Filled.svg": "7e6c885543b569dfd66c059a02a4f5d5",
"slammie89.github.io/assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"slammie89.github.io/assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"slammie89.github.io/assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"slammie89.github.io/assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"slammie89.github.io/assets/FontManifest.json": "afba93828394c4a734a8dbdccd24fd86",
"slammie89.github.io/assets/fonts/MaterialIcons-Regular.otf": "e69ba8f966d6444066f8a5cc034e6421",
"slammie89.github.io/assets/NOTICES": "8e3afdd121376847dde68a5c22d26fdc",
"slammie89.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"slammie89.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "663bbb1c08918178d75492a51d44b8ca",
"slammie89.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"slammie89.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b34172418a7d11318339b1ceee295147",
"slammie89.github.io/assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"slammie89.github.io/canvaskit/canvaskit.js": "b8f4beed9f92960c33fac4f3ec0f49db",
"slammie89.github.io/canvaskit/canvaskit.js.symbols": "a5abd9548c1ac52492fb83682355175c",
"slammie89.github.io/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"slammie89.github.io/canvaskit/chromium/canvaskit.js": "ae8a22c690cdbe6db931f7fcfa32793c",
"slammie89.github.io/canvaskit/chromium/canvaskit.js.symbols": "e6a058eeb908ce2c2c30d450cffb438a",
"slammie89.github.io/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"slammie89.github.io/canvaskit/skwasm.js": "78e709d9dc8ed5e0288a151e3cf3e95d",
"slammie89.github.io/canvaskit/skwasm.js.symbols": "d10d5b9ecde9454f3b5e0574a3d4649c",
"slammie89.github.io/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"slammie89.github.io/canvaskit/skwasm.worker.js": "e35e7fbec8f04f340add4f6ace89a29c",
"slammie89.github.io/favicon.png": "2704101cb06ce66e2000356a312be25c",
"slammie89.github.io/flutter.js": "9fd90a6808bad6cfbaf32408c99eee90",
"slammie89.github.io/icons/app_launcher_icon.png": "894c315ac113caa750a3d4c36d880630",
"slammie89.github.io/icons/error_image.png": "894c315ac113caa750a3d4c36d880630",
"slammie89.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"slammie89.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"slammie89.github.io/index.html": "00f92831b68f05b1af73aed1c0c72aaa",
"slammie89.github.io/main.dart.js": "e400d37034dfea4484975093a3fa1e15",
"slammie89.github.io/manifest.json": "024a6f41b6aa7ea2213a23d867057ad1",
"slammie89.github.io/Slammie_-_OpenGraph.jpeg": "18923e41c4e1bbf776fd870dbe747b35",
"slammie89.github.io/version.json": "8a6d7f9cafaa795df939b65c0b69c25a",
=======
"main.dart.js": "e14f95a09cdea899dd6931a863433fdd",
"manifest.json": "b01dbaf0249a73df3dede01097716370",
>>>>>>> 378c1ce (Solved bugs 11/07/2024)
"Slammie_-_OpenGraph.jpeg": "18923e41c4e1bbf776fd870dbe747b35",
"version.json": "8a6d7f9cafaa795df939b65c0b69c25a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
<<<<<<< HEAD
=======
"flutter_bootstrap.js",
>>>>>>> 378c1ce (Solved bugs 11/07/2024)
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
