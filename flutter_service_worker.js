'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2ee598ba706ab819678c46b9c233eec0",
".git/config": "bd437afaee55cb67088d84c4f900d494",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f561f1fd995438fd5d68022fc35cc58c",
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
".git/index": "e3bf8ffcabe3a86dd55cbd4d7fdc7e9c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "495cb2213459a65a1967c43bdd3d6a7c",
".git/logs/refs/heads/main": "8cbe67d0d96d831103e13ff093f7ccc0",
".git/logs/refs/heads/master": "1b425cac35e910b9c34570f57d5bb2e9",
".git/logs/refs/heads/web-publish": "bd8c334bdf17f4cf88ea206eff8171ba",
".git/logs/refs/remotes/origin/main": "360b077b64dab94c789fa09f0ee3c8e7",
".git/logs/refs/remotes/origin/master": "6081ee308e759b37d39410a150bda250",
".git/logs/refs/remotes/origin/web-publish": "152c7e6bdce63fba6a841b6c621b653a",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/05/360e348e325f3b849d9d1b0aea473058ab2545": "1e56df4044bf621317b7adc22b6af19e",
".git/objects/05/82f5da5c6a73c3fe2dc0dc23b100f333f3320f": "5e602d6b6568e24e238ae750f5076a0a",
".git/objects/06/73359c4e6e304f4b4874911dc6d0f9d1ca5ce0": "60e7593d4c2c239c0fa905f60187be99",
".git/objects/08/ee24db11ad29f401dd0952ac356a5a31049926": "d4d1762ce5d2dfe24eb5a355987a923a",
".git/objects/0e/0ac0cb9246589baa215fdc59c096dc8b49ab65": "9203dfda9371f7c5f34b848aa93be844",
".git/objects/0e/f25d9adc5baf14b36e297cf21648b25f59d420": "aa572bd98a01c4b856f93e35b5676e56",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/63d298f14849a70e5d78942307c7458f0929b8": "4703404c925253a4a9485efb2702f736",
".git/objects/13/ed3e2fe12bbf66f402385b59a8162419a96b86": "e1223a1d26d609d0e8d62266a4a1fa48",
".git/objects/15/4c91e2053a29dbcc9a88d3fbbfcf9df7e39d59": "528663c538fca980aea8e4938cd68231",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/157fe4c57b1a3bc95970aa3188571757b6c110": "1a7b7cab6ccd73fda997c8af70992618",
".git/objects/19/f2e07b1d86e12db74fbfad789703845f419ac8": "e8b5d974ced665c3c096a8a97efbaaed",
".git/objects/1b/1e396e154adc3341f903cd6c31d0fd3cfd8c71": "023b2181cdc1460c51113fc07ade9490",
".git/objects/1e/1696825b77c571988b6096d08f5db1a2c8b0e2": "7cb6aca588363836caf281463b3cc8b4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/6d57db0701722ec9a3d66575901f51fc24c05b": "bad0103f373054a1b2da0feda1882eaf",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/47335ba7b07e21413f9df362d81e27498aaba0": "3941acd0bac5999c78b2ecc8d78337ed",
".git/objects/26/42105fa5df37fe8adb5e875ada7104595f498a": "df2cbadcfc9758c6614e33b229900641",
".git/objects/28/28987b827ce153363b42ba21387315812c8e63": "9b6b5bf30fb8675972b870e89d5859eb",
".git/objects/2d/c0686927611680663c1cedb19992ea0cb5d832": "73fbabff48968145c67727c292eec1c6",
".git/objects/2e/a60275a57667e17de667c615735d0007a41c63": "608bc7e3f2c3f22a393777e6543c98dd",
".git/objects/2f/f0a845a6a57a4c0e20076971b8788afbbe44e8": "621ce96d89a0456a0a2ea179ef669c77",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/32/d6532795903cd895fe580610e03c47a66cf1ae": "8ae57991425d8364358f17f7f0fee024",
".git/objects/32/fc1b513f7f4239bff568f7aff09e79d1e89b84": "4fc80d78dd36d573ec95e27076a94794",
".git/objects/33/247f57720e5f6cf6b5359db1a8c3775c2b5009": "8d69a0fed33a7aaca9bbe8e83d64e55c",
".git/objects/33/4b9f08d5a6f0cddafad324ac96e435ef2fe9a3": "a728fd9d3621ff6c521be8eedf88347c",
".git/objects/35/1738d01b8642c7d78c533b5c3299c497ec3f52": "7573d1cd2082b8ebd55d93e29dcb2cf3",
".git/objects/37/8c1cecb0c932a347cee45b266b73e75b79c564": "7602768149ad77ab688c5a909d26ecf8",
".git/objects/38/23ba680db3de3414b7dba6fee1505c3c7137b5": "c5278643d51b7fb85cd6775dbd3c0fc2",
".git/objects/39/d056a118650a9a358ecee68d2f5d9149f7a117": "37f13df319b551f7077fda271445d55d",
".git/objects/3c/ddfc4bb8562ac5e3aca92f8e97ec39b5537025": "14c072d0484d43ab0d15630dfa0ac8f3",
".git/objects/3d/f7830e9f8b5b2c4233a959f3c7dc2919163ad2": "7cbe05d268c1db8030b41d456fe5ddce",
".git/objects/3f/32966666fb65ad86ed9d1dc144623ccd2ebe51": "17a2b020934921ba2a01880ad457a208",
".git/objects/40/66e19bc146ad099a1f97cc38a8991e76a47e8a": "67cd06e4ec207165b8cfa2f25025b3d7",
".git/objects/41/264712191a12c2bdbd15974f9a5f0af22f84c4": "ee71db3c3d433dcc70a3121d07cd6c38",
".git/objects/42/e0cf8edadcc657be6611dfeec1ed25b7c98160": "0387f77f6d4aed351f7e91706884be67",
".git/objects/43/172a06273635eff67415ce6abe886d5248f441": "cef4b8fa2fa1ce258bfbf8d77b21544a",
".git/objects/43/7e77713379d97888aeea366a4981249b988c00": "f4f1c136b3fe0755c37268e3479295d8",
".git/objects/43/a521ce2259b3b71a996681f56c58474b332324": "8fb889cd0adff87589abd1dfabf5dec3",
".git/objects/48/19e6d0dd36e97e7de561552e550162a2360dd3": "d3306304406727be95bd0fa580fbed34",
".git/objects/49/467c8c18c296ac01a05c3dfcde77f7748d7cbc": "74eef3777eb04d1cc45a413983a3f3eb",
".git/objects/49/82cb588701e1dd073debcabf31ad703b09d26c": "b8c37a864ff4ed08386676a4c6264f7a",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/419e896261aab4b4c2f016d42714f9deefc77b": "6a14b692b4dff6ea6073195d10373144",
".git/objects/52/db4dca37ec4a69e56648fe442623c9b829808b": "642ced1b3fb63a4cecd2d3095cd3b22e",
".git/objects/53/67a0b6179c600986264a7640f4b7ddcd721ce6": "7e7c3f02451add7883202bd51c48e634",
".git/objects/53/a7df8d6b70b8bf5e28cb5e76d40c9943575bf6": "d938f0ecce00e05770f159d7446ed02a",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/b139e2bf66e4c0bbeaa3156269e273755220e3": "fa5b93810f685aa77833c6e6427a109e",
".git/objects/58/bca980397faf78fc0cad670f77c7485c9e9f99": "476a7ead987a720dc46c6299d02277fb",
".git/objects/5b/ee181510fde059fc5f7d7c28bb3a7a716ee8ec": "979c6643df36e8c3a891467d4c05abf8",
".git/objects/60/398549346c6e624b718849be02b1e4f1f68542": "f66e44633ac923e95ae06463a86611ea",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/6a0413298614a047f4332576445a139209fab0": "b7263e44b1afbc21744d1aa4e1832e15",
".git/objects/65/f9ea5eaee37921461fcc29f7dd84c8250f8763": "5f73b0e72a83d08acb8c5ba175916a8e",
".git/objects/67/b05a4df002b84d4e67178123997871febcc8f6": "9bc2fb34436cacbdf8df5f9af669439e",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6e/8e7a476e0d56cd66b01ed88a6755c6ba73957f": "908777d9ebaed7899e3cfdd948b5fd69",
".git/objects/6f/9f2c9b2f368a9cb6f8012bd66b12fc03800432": "a1447640bdf045d8bc314c8c85066fd4",
".git/objects/70/780d0978873cf0d6d5d2c80edde8d2924ad78d": "b124c985cd6547a444ca423689595968",
".git/objects/71/2526b98986bd7ad20d59e05758373543f696d2": "e2b648807d87016b1cfd2db459e2d162",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7c/02fc896cdcb1b5214c5e6386f9765db7ec8c78": "f476ebe196f43b220b1ce8d7a0887a60",
".git/objects/83/75249de8b26db02ef11d021dcb08698e714f3a": "1dbc86b5840ab9dc37bb258590374d6f",
".git/objects/84/0d8109fb4dd1768f86521500212ff6a179be24": "753d0f3d960869c5092ada7030e7ee87",
".git/objects/84/ac03ca309c8a0d13288cf31b990859fd87947b": "388078974e1f51be2903a017f32bfd49",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/2f51cc976781f0d3f86302075c8208b8a3a9c8": "d7e26f3ad2533dccb175959dff7ff243",
".git/objects/88/22505b7468b233138983827da459e625a62c04": "84e9290d33add9bfe7c34fed06658d67",
".git/objects/88/2cc91ad0dde84efa6c6dd1a2c64eea1eebdb07": "f61788cfb33eae21f5cfb9a0605fa20f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/c569cb36a55cb3638659472c736a6963c56ee7": "3873abcf5ff88f23fa2214f7c15d8f41",
".git/objects/91/7872507c10901bae1bc33d22b10450d4e0bd5c": "c6c16f9457d2e626a88c778091036884",
".git/objects/91/85f72b12adb66819003cbb96d6cc35bc44d48e": "4bc138b87a978ebdd169972863ee006a",
".git/objects/93/0694b48b08cddd2443102094c76c912faedd06": "5d3155af1a4046657a6524767f7a1f34",
".git/objects/93/a50b21a477415f1f795aba550d7c6a3691a0ca": "fbd1307c45a58a5fd6b88f5b25d2875e",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/9725aebf37e26d362ab77c0a372c466c5272a2": "f68b994fa2cd41f68737f90e69dde2fe",
".git/objects/97/a9125fbb0d5586b5abf5bf8bd3a7c3178416ee": "695694498e46f55c99957afde6312e8b",
".git/objects/99/3665b076cb917953795ffe592a160e164346a8": "c42b83c0f3963c55c6808b5f3ba52b10",
".git/objects/99/58cae46546806f304a1d3869195a5769b13ae0": "8c40c682a3903b9e383cedca24b0c1eb",
".git/objects/99/7bbde8e5589e6a03cd17ae822c6e1870ef61d0": "7f5f7ec18b20d80890c791dffec62076",
".git/objects/9a/24c23d17cfe7e033536606fa67ec277982fff0": "9cb4d827653f619cc67f12d93f98f106",
".git/objects/9a/548476da68e0a213b536cd1ea12a3010d11b5b": "fa1796e86e372d63105c963099506b4c",
".git/objects/9c/228af888b98e49cdf280fdc2cb364f072a3f7e": "bc4015043ea8ceb83c5c352c86a562b7",
".git/objects/9e/7da832d2f96c8732779e613a3a90f0925bbfcd": "1bf6529982f229b11df839f500ff8c47",
".git/objects/9f/a2f9180ab17961264f4dcb219c9a5a2e3f26c1": "934cfd9aa3eb491910eef633986e17c8",
".git/objects/a0/3d0033b1716a289823988d214961f88922eb8b": "07d5c452425de598bb344b53e28bc0ce",
".git/objects/a2/0e7a0a7dce0eedeceeb6499bd2e37998b2ed54": "efd4c0336fccbb0c9838e4caeaaa9c17",
".git/objects/a2/71ad8b3f65fe0fd87373220e04d88bf8bb4863": "754efdb2c2586b927630c89f15f1e411",
".git/objects/a9/c9d4addafd1a99fe7199a24fbc64d0e43d08ce": "1c2b4d21314cd3de2d979105078db93d",
".git/objects/ab/8b17baf415724ddaac8a51b770dce69b13b381": "6643806c314e9016cf92201b78b1a48f",
".git/objects/b0/36708268ed8b1a4e388b86b9e7c07acefe6d75": "44b9bbc243e06eba6ace49a2de454e9d",
".git/objects/b0/4ca8a739315905e5e8e8858eec9acdcea51ada": "57688f1fd0e7d80be074e0079c24e888",
".git/objects/b0/a6602635eec059ca653ad506aec92df394d710": "f3c048c85233845c7cc7a95e4db2ce11",
".git/objects/b0/c1bc20f2ce6935a07084973f399ec28afbe51b": "9bca89e4302f52064b1820d6f6c2c2a7",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/0ce755b1e4925485e432e4d385e77ef279389c": "f1422aa88de2e8aa360d097af7f7d407",
".git/objects/b4/40320b3fb9fc3441e77749007b2c67b6cd6699": "25f0171d626539a0656a45ac9b34615f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9d930afd05ea277d33507a33e37bc137c7d88b": "db4a8bc386eb0a061d6b5f12d763e407",
".git/objects/b8/826df7270a710a86e7d654c3ed648a73345d4d": "0f5dd3b5deccacbbcde6cf13da61490c",
".git/objects/b8/dc68fbbffd8902f13024bb9b339b66cb793b58": "240c1016bb1f8ce4634c8120ed1933a8",
".git/objects/b9/7bf437811b02224019dab18047f2be9d3b1662": "6233254c16b7e30b504cef96922c6ab0",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/fb230cdd1ebcbcfdf97e8cb598c494d9d5ecbc": "9f5f25681c3310ea483315a986c7b19a",
".git/objects/bf/47dbe5a3e895729fd815e16a3e269d89c60903": "21c52c94c021efa300fe24903dc0428a",
".git/objects/c1/68f5e6793faedc0512cb9885953faa5625221b": "b3d69938f08c0dcb1a498f6a116bee0d",
".git/objects/c1/923274cd2562332da6a5ade340ca6edc774f18": "3e664513917a0fb6100c6527f41bdbf4",
".git/objects/c2/70d887bf2a6026a8c3da770c4ede9d915ef500": "5a34d1789ba6af20092e518cd39c6455",
".git/objects/c3/2e8f2d2888e1f78e9aef190873bb4496885373": "7a81cf50da93f608eff8d43ce0d1f9e4",
".git/objects/c5/1a6120224e697c57f58753e19683fbb6cda13e": "4f44be880eb645af3d8728581715d70b",
".git/objects/c6/3ff7101b15d0e39b44f2bf5e4126567da2a761": "3fdb84c3ba330b50c38a88cc62d1b6bb",
".git/objects/c8/76a0e7b96ed2041a4554132cf950876463d515": "a72c00122e008656dea70974a7304038",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/0131d3b7e0075b74014b0cfe7ec05a689c963a": "e016eb84abb6e51154fae3de6379cd17",
".git/objects/cc/cdb4cff8f192d633d8d9488ccaa94d4910b44f": "36d0c8b0151ac9a417207653d0e61d46",
".git/objects/cd/4beb265cfc95adca20c911a29667f8a7baa0db": "c7ac8a49ebd59da5cb3c40b8f0d69575",
".git/objects/cd/c1e3a7d9d20d9db925cb8147035fd28ada1987": "4638b33628d7aea1ab361f3e8a916751",
".git/objects/d1/04a3e1bedf7ac390f9a56c56bffee0af5e7eac": "55b01b24a31e78ec5a73affbb79f723b",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/9e8b71039634ac435964799268fcc375a93221": "6bb10be0ccb30f864f35fcd63ac416f3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b842004f214936acca74dc0fc25bd28787a43c": "fd15b3870bca862f6f38da919771e16e",
".git/objects/dd/7c3d53da244c30d7f6939e68048abdd03a603d": "88983b756ee32e0fbc6c3efff501296e",
".git/objects/de/949968f7098d528936f45eca04138d7fe6e8ce": "ecc6ff18379fa5a2f55bbabe793e3c39",
".git/objects/e0/b8e8d5960beda16704de05ceebe6fefcad19db": "fb4d9953c1fbeb7311d32bfa6b0519da",
".git/objects/e1/f7a4102178b2d4534406a08aafd06566466841": "e0199b97851cbfd33daf71f9295fad54",
".git/objects/e6/fbba5441b6a54ed8c741540436535f6b8bd312": "57b2af3ba91997d16af91100392079d3",
".git/objects/e8/2537003ad176cca19295cd154f41352400eb7e": "3269e206edec2ff54a7818ea2cecd6ee",
".git/objects/e9/f40a4f11eb8c0e132382fbde9a464bca80a5b2": "9d7e4a197c94d5aa8bd63520e2ee94ea",
".git/objects/eb/2f60805695b7cb8d2c6cc44076dc71ef928554": "b6cc1990e29ad63b63c796d4ab7671fa",
".git/objects/ec/ab6569de3235c4d19655a1811b4eba49749e65": "02a1f5eacac931c8043e0fbd2f5a2542",
".git/objects/ec/ac433871039dd36240b21f9e661882f59b665e": "1fe976c359cdd43b3317d45c5ded69d5",
".git/objects/ed/6d066d36300b232e49e081c965b54366636dc7": "20d7519e234f9d67e3427755e627de4f",
".git/objects/f0/6be118b55b4e327c152f7fac399e766c513950": "948295ae6863284252078a20ad0c53c8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/9744952916eda5acb080dc79c76c75538bddc8": "dad9f6bb3cb30b88538319f720558c04",
".git/objects/f2/a191ba4d38b4a3cbf5ff318423e5aae3d714f2": "e05167dea67e127959d49db3a3332cc5",
".git/objects/f6/9402d644647d93c8f131cd903cc78c881081f9": "0320229a0656c561ef74c7529b9d558b",
".git/objects/f7/517ea39471f83e1a3a97c654e169f4e6546932": "d95d299ce6cb8fec2b8ba9c58c35189f",
".git/objects/fa/e0aed63d950098ec52fd63f991ae4af1c0b23b": "56e03f2ef942d515afb336e82f40103a",
".git/objects/fb/6b666926075b4869df256920d2388037dda71c": "9feda1b369ff22fa92e7de4a9534d368",
".git/objects/ff/3e5736dbfe180c17085a614df54415d63765e7": "8c815b87402cc8a87ec6486551901267",
".git/objects/ff/c26b9067799bca776691d2b248798ad15c1b4d": "6960da12a4fa7ec6c604de0e8f0699fb",
".git/objects/pack/pack-34beb023f327fdaaf9db7cb9c843f61874f7c9b4.idx": "6719488a8406394f2933d59eac3b2632",
".git/objects/pack/pack-34beb023f327fdaaf9db7cb9c843f61874f7c9b4.pack": "c0bf1d081878ac7c72e3bcf7080c1ccd",
".git/objects/pack/pack-bb04e76df664942941fc3e4d959ccec395ec9a2a.idx": "e01498a2711570f9e1698a1b2b4a1140",
".git/objects/pack/pack-bb04e76df664942941fc3e4d959ccec395ec9a2a.pack": "9f4bdde6fd2b57f9b457dd2b7a1e2410",
".git/ORIG_HEAD": "69eb2ccc63761ffb5b81b1257a697ac9",
".git/rebase-merge/author-script": "9b5e4e785d61578c442a8921817daa34",
".git/rebase-merge/done": "570f8ea186702df1674ff60d5d8f6326",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/git-rebase-todo.backup": "01e72d54c76dd2b0e82248d86cc0f833",
".git/rebase-merge/head-name": "7af7f62c1ff93562f49dd5a2f00c248f",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "45b9900309f1291aced5bfa043604f2c",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/onto": "8a024c42ca5e940c414746c30375dc44",
".git/rebase-merge/orig-head": "96733e6db675d394ee7804d4f62d2ecf",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "96733e6db675d394ee7804d4f62d2ecf",
".git/REBASE_HEAD": "96733e6db675d394ee7804d4f62d2ecf",
".git/refs/heads/main": "701744c09f2d3d26ab0f39f893ec6d03",
".git/refs/heads/master": "69eb2ccc63761ffb5b81b1257a697ac9",
".git/refs/heads/web-publish": "6a1aec70193f27ee1ec46c7cc0a6ce30",
".git/refs/remotes/origin/main": "701744c09f2d3d26ab0f39f893ec6d03",
".git/refs/remotes/origin/master": "69eb2ccc63761ffb5b81b1257a697ac9",
".git/refs/remotes/origin/web-publish": "6a1aec70193f27ee1ec46c7cc0a6ce30",
"app_launcher_icon.png": "894c315ac113caa750a3d4c36d880630",
"assets/AssetManifest.bin": "64f0deabf53fb59f8d9b7214e40700e0",
"assets/AssetManifest.bin.json": "497db39aa4fbdc6340392091278ee6b1",
"assets/AssetManifest.json": "234217ea1484ef6df59e66911089b7ef",
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
"flutter_bootstrap.js": "68fddbc4d48b95137352aab507a2d11d",
"icons/app_launcher_icon.png": "894c315ac113caa750a3d4c36d880630",
"icons/error_image.png": "894c315ac113caa750a3d4c36d880630",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "80cb4ec3a7e4fe3b333b17a7217e2baf",
"/": "80cb4ec3a7e4fe3b333b17a7217e2baf",
"main.dart.js": "e14f95a09cdea899dd6931a863433fdd",
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
