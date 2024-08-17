'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a326cb872315df87a3ba17f6f0e2ee63",
"index.html": "bdd39787dd3163d9449dcf542b9d8245",
"/": "bdd39787dd3163d9449dcf542b9d8245",
"main.dart.js": "1bc8c4ca92ba38f1789913425a8bc947",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon_app.png": "f2fa238591103bcab9e7048a05fb46c2",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "82541ed73ccd91e0ae6d480a301c9d64",
".git/config": "c4fea3534326b42a2b61e027f589dc48",
".git/objects/95/0b2c0148e321c3e209f3a2808d88cbab79c6bb": "dd5173dbb74ce20e4f8232b1480063c5",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/9e/2467e612df9c1554e2420972f9698221f38cac": "a0084ad10303db6e0ca0841f91f7c00c",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0e/486f4e077e2a88a042f7f74ca7836b929848aa": "9a3dd789e1c54c39812cd69b5880df32",
".git/objects/5f/058c9246e15d3be2c885914abd4a27e61df703": "9b6797f34488e745096ba592e545ca78",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/e7c72c6b58e939806ce9f38a16a03321bf08f6": "b3c582667c5c8b23e9237f24621b40dc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/fd/0a5010e5ae3a30a7ad0b0d9617fced5d5c6a27": "cef323e08c0ab26e1757d646f2542cfd",
".git/objects/cf/993744b4c6c764d61af0d3c10f70c835b2b9cd": "a55706b0071040db4448f5f58037c345",
".git/objects/e4/e3675d7a581ec22961c31e60dc19f0d8940bae": "84bca1b666705f5cdafffc3ac82bb32c",
".git/objects/c8/ef9a579b192c030010ce2f007726a9d5a00808": "3545e293fd908fec0ee2efe72d6e8942",
".git/objects/c8/2f02a6a37f836a5d4b96fe98fa58616fdf2a99": "1248f21b8432b16c9bc6be737c3bd32f",
".git/objects/ed/56a12161913610f5f2ec8edd09b62a28104f1b": "43b2c1a48806b582cdbc74aff03ad279",
".git/objects/c1/9d6266582a91085ffd8df2c1bbee2785f01681": "d194a1803722c54d10be660dcd27391e",
".git/objects/4e/3545aeb7e29d30f6e20c32a6945122ee8ef6e6": "548d030d72b3ff0d83059f4aa125c33a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/7c/6c1dd7b5b9f79456d40eed7a249ade2d010533": "0f80a7d02d2f4ea20ec3d258cfbc2b47",
".git/objects/7c/6f9cc489bd15971d066cb018519f4676f94384": "0907399d5520d4dfffc52c6501128a98",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/17/8428e5b1d447153227623282bf4e0b668ecd63": "58f9eca8dae0722a55de5a325e496a42",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/26/62893b3636b500ea387b3806fe2880c51a77b6": "804dd50104cf0aa70084f972db175c0b",
".git/objects/81/4502f4823a5b1054fd5b5f455b4926a7a35751": "c04c8a04005830e552e1c0f9a0af55d8",
".git/objects/81/71b5416b71cd5ab5c9068ebe30b90f72933b0f": "96f7b20a48dd91cbccc1f0f91da02b53",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/72/28b936c03f77c9ecb8a46643afbe188a4edf28": "3c2c544bd7afd497d32180653503c54d",
".git/objects/2a/cee7f8643f8b319bbb3c802147b8363af70567": "30efd7ae42cd92ff683beb914adf6635",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/3d63ff829d0aebbdf59c595f117a12b6438c3b": "2b5d1927195c5215c63bb4e2fac8b1ee",
".git/objects/6e/0f6788cafafa0c3a03e8ecc2dbe0d403d0e17e": "c6b9a12180c3f3da7008096f07caa49c",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/09/b0bd79bab17d4bbcc97c138daf28eef1589919": "f460c7c918d99296aa0962fdb81818ba",
".git/objects/3a/324d51c1078f2345e8d73a7ae21a6b02d4d236": "17b7bde74d47c84cf4371f2620b579d2",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/97/041daacd184b11d61c8852bfcb274f39388c3b": "4e6d0ec92b7775ad6be3610f726538d5",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/e89081e277d78c28731df2ed02f187ec25a350": "d24ae7f235bc2856a9ca449a5f57a7f1",
".git/objects/d5/05453237f922ae92a6da62d73e92f2f967335c": "b7f41ef19153c3644999cb8f6ad98509",
".git/objects/aa/6bfde5d2c56242e92f2a0274aad3c19f2739a2": "98d29683bae86f8e89178185493c79e3",
".git/objects/aa/fb00741071c80af82d70bcf0aa27106f3894d8": "928dbdd551c01a0f3b9f9ae6b7249c8f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/074726f439fce22ef556c9ab52da605d736c5c": "887a0a60f8dd3ad1dc82357a14a48295",
".git/objects/b0/9ae49ead4eb61393e0ce861f4a2a1b813f4a1e": "2c7598b50ef5194066a5a6e575ed464a",
".git/objects/e6/0ca4e78f5ebeb3dccdd8ca4cf5fceb78916182": "9972635952b346e50ee73e6ae8c3aec0",
".git/objects/f7/83ca89ef626e3c34db5cd7f21d9555374e9877": "6e3258dc43935803910a492c48499a89",
".git/objects/e8/b4039f01534cc95b83d9b9fd33c3322536c10c": "379549d6441fd7e4bcf88cbdf73e0ef1",
".git/objects/e8/3d2acd39f8fe22739ccccb65eb978f99969099": "58e1851fe5f0a226c4ab2d3a8d23d974",
".git/objects/fa/479b996fc333b6ba323374f2cc09256ccc2d20": "3fdf355c7bb2f701ceae090ecc7cd4ae",
".git/objects/f6/ee35076899f4712267464bc2dd1d0207d93ab8": "6e86d62ef239e7d5bd85b0847a6ec65d",
".git/objects/f1/962d385743a1649f5608cb8c67554f93ac45ff": "b244fb32495fd59113c10f6e2e41d70c",
".git/objects/f1/3d02d5313eb8bd28e5342a934869c18c925798": "7a36fa97d2d5eb8f5f79408f5787ffde",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/91def1a81167b13fca422831d978c2e765b725": "2df552ba3ccb3c91d0d5f0294572e855",
".git/objects/24/0f7ae50dc7a1317519bebaa506b9ee1c78d6fd": "38cc671d5a93a89994b77e63f8875f11",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/12/b61792c4cd48cb62832a0e26d7cb8717d5a649": "d9fefa7b4c3112259d985c7472c96870",
".git/objects/85/d702b86ea5bcef96d2a45bdbdc786c3eee5d1b": "5f2f0fa9ef3479a7b16b4882c4e08a94",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/9f37244d29c99fcc45fbf6d1aed5a4d4b554a4": "deed1f01c338d9b1ee8c1dad12ccb045",
".git/objects/1c/fbd64269bf97c2e77108ba93ed421d24b0910f": "3e8a0453af62bc64887e57e23387cdcc",
".git/objects/49/5420cb733dd7a384cd812c98b1f27836f170eb": "d099d92ee65da6f7ca74cfe13ffc9406",
".git/objects/40/fb82304c7d33500fe6ba7b5eb0d75bac5623a3": "eba952b70314497a0db9f12ad46bc018",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/7f/07c752da1e6ff26a5bf5ac2ceb8c513f830645": "a28f0a08609a5decaf7674c4facdd393",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ce9564672f2f5bc1b25ed732db0cde73",
".git/logs/refs/heads/gh-pages": "89b9c514ee2bf91ea7d024e214baa68e",
".git/logs/refs/remotes/origin/gh-pages": "c27b861ab83da3cacb4619235a44a2af",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "f20c90900c2579cbab0cf388c1357187",
".git/refs/remotes/origin/gh-pages": "f20c90900c2579cbab0cf388c1357187",
".git/index": "9c9e08a4b1bdf33c728a2a22b6b6ef71",
".git/COMMIT_EDITMSG": "f41191bb585c1ce8dcdea2d25fbaea8a",
"assets/AssetManifest.json": "5f768457a56dcaecdbad8be391a5de53",
"assets/NOTICES": "b68f687979e6c9e9e2f1bb96611e8844",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "9baf0d40f33c6faadb3461e1f3b4804d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "136a923908f6abfd3ce291f9eedc2b56",
"assets/fonts/MaterialIcons-Regular.otf": "1264931ba29770971e1cedb590e95125",
"assets/assets/Logo.png": "0ed64a9faff5784942aee07ed3bc7282",
"assets/assets/icons/ic_square.png": "b8be1a83dc4d3588d2f4bfa32c1411c1",
"assets/assets/icons/ic_close.png": "567909f4b174360415fd8ea16b751242",
"assets/assets/icons/ic_location.png": "de345bfe84de1b401b1083d2a8e8fca5",
"assets/assets/icons/ic_lock.png": "b1b41ecf17b1eec7bae7b98cc9e4066c",
"assets/assets/icons/ic_map_pin_red.png": "d5b402238c07d2ff4238ed9ea1b6c880",
"assets/assets/icons/ic_play.png": "edaa9e3bc0f7f0c9dd7cca5f0c6bc343",
"assets/assets/icons/ic_map_pin_purple.png": "f6ea97d0bcd619a9e04d07613b2834ca",
"assets/assets/icons/launcher_icon.png": "829fde1592245e05aebe65a0f9f79796",
"assets/assets/icons/ic_back_white.png": "49806336c6c4c1e70281b5edaa3125d1",
"assets/assets/page1.jpg": "68aa950a8de01a959a1fef63438098e4",
"assets/assets/page3.jpg": "11e622be4054dcf06f888f25f1f6f262",
"assets/assets/page2.jpg": "5e9b2243b58772d9a18713e4e922e82c",
"service_worker.js": "d0d190bd2f53470cd527ee08ffc75c27",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
