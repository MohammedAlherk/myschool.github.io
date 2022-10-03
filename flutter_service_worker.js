'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f2ed1705addf4e39b1f780ee5e06301a",
"assets/assets/ads.png": "f79ecb53d32628f3580282acd51d8ab0",
"assets/assets/alla_company.png": "46dd26831166bfa4974be9da54bdfdae",
"assets/assets/answer.jpg": "75ac3738b4581d4635662d3df8263cdb",
"assets/assets/app_icon.png": "7ada449ffe3f6085defc22faa77af55c",
"assets/assets/ar_1.jpg": "7f740781c9b42642a142b572f29fbe65",
"assets/assets/ar_2.jpg": "6516224224df4afae0124400b70b40f4",
"assets/assets/ar_3.jpg": "963a33585ba3d6ac5fe46ec0d946e623",
"assets/assets/ar_4.jpg": "e36fe9a7c77d21b4a78aa3bcb6540d34",
"assets/assets/ar_5.jpg": "f8ae3568140260091ebb9c838b5dd3cd",
"assets/assets/ar_6.jpg": "4cea391c2205603fc0cb8ec7a143bc6b",
"assets/assets/ar_7.jpg": "f3f6fdf68958f9b0c0a6f2d32e8d5c56",
"assets/assets/back.png": "91dfe02cf34ffb320e0c2235862f9ce4",
"assets/assets/background_dohr.png": "198c9492b6909563360d57c2be1ca6c3",
"assets/assets/blue.png": "cc68cf721e513eb2254cda124f6a4015",
"assets/assets/books.png": "4af8b4a811dc14eff61c56666c1ebce3",
"assets/assets/box2.png": "011f10a7988fe603735a3d0c90ad188d",
"assets/assets/card.png": "7177a0112d97d5e0b31fc5c41aaff3db",
"assets/assets/cardeeeee.png": "80c117725e62e7b13cf310f4e8bd606e",
"assets/assets/check.png": "1ded118db6599f0acdd4d7223fc3056b",
"assets/assets/click.png": "36096cf532b5d59d3bc3a102dc67284d",
"assets/assets/co2_20191019230424_20200503031416_20200511161832.png": "581a2629edab7fcc014cb4c4718459f0",
"assets/assets/common_full_open_on_phone.png": "882a43607ffe9b1fea2a9fe288d10b96",
"assets/assets/concerter.png": "cb457bdf1140a4907b49abf9bb7a27d9",
"assets/assets/createpencel.png": "6964aa27e0eac1caceb46ace5f15557e",
"assets/assets/customer.png": "aa8c089fc90789e106db5315f89eadb7",
"assets/assets/degrees.png": "3c9f7bf60ff5a1eb6294f12a6d167bdb",
"assets/assets/delete.png": "259348c2f63de50eebaf38376aeeb7dd",
"assets/assets/direction2.png": "e32a8770b93b8b76a6162c5224b72ff8",
"assets/assets/downarrow.png": "71b8eb67ff11e309cf2f67ce565d01be",
"assets/assets/download.png": "035b340e5c7c4e14cb89b7b29d3dbcc2",
"assets/assets/earth.png": "46dd26831166bfa4974be9da54bdfdae",
"assets/assets/edit.png": "b7eebdb0105e038d57d5b00b1d60f3bd",
"assets/assets/editstu.png": "fe4531310eaacccf41b082f40e0baa96",
"assets/assets/ee2.png": "1c478d371dd86037badddc099fc566b3",
"assets/assets/eee.png": "dfeb0b42c6612cef84712cf3bd26596e",
"assets/assets/en_1.jpg": "1d86b6161ae8f7e0966ff2239c2a2b94",
"assets/assets/en_2.jpg": "5ffc0d5d450190b3893b1fa7d25f164f",
"assets/assets/en_3.jpg": "608ad86a3db11e81a2cb7e05ec226cef",
"assets/assets/en_4.jpg": "f270e9f7d7366607217a252bf2906043",
"assets/assets/en_5.jpg": "60856d50386e38dbc8e2316f519cfbf5",
"assets/assets/en_6.jpg": "14832929cd7ccd57ced03fedc686ca59",
"assets/assets/en_7.jpg": "d82dfbcefd13611679059dbf34362b76",
"assets/assets/erw.png": "98b8b202074d1daad04ae06f17cdfa89",
"assets/assets/exam.png": "036843d45a9b2927a3ded888dfae042a",
"assets/assets/family.png": "5e7070e2b783908f8f44c1fa9a525a6d",
"assets/assets/finale.png": "37ff61a8194a86cef8a777a209ae3d0a",
"assets/assets/fonts/arabic.ttf": "92b52023f4f9bd582aa22d957791512b",
"assets/assets/googleg_disabled_color_18.png": "86bcab997776d72f35454026a0f17f12",
"assets/assets/googleg_standard_color_18.png": "b02ad79156c6f7db58a918d7a5a0c11a",
"assets/assets/gradient_1.png": "69fd808d1d36dfdbb6ed4184b1b6f7ce",
"assets/assets/gradient_2.png": "d04addd1780694125a42ef4cbc2c743e",
"assets/assets/gree.png": "1865e0ec437a5d250744004843a1eaea",
"assets/assets/green.png": "6a709eab0283c08462b2a05759dcc13b",
"assets/assets/group_mempres.png": "ba1ff3efb762f6c61eec9b3e349161c2",
"assets/assets/guys.png": "79f3fef8efc1fff22868b0e7d9d20e1c",
"assets/assets/help.png": "4a0a62f8db74ea77634fb86ece51131c",
"assets/assets/icons8_english_to_arabic_512px_1.png": "7ca4a191fbf11d03b5e01240baa0737b",
"assets/assets/icons8_geography_320px.png": "cf94974d64b1cea2f4432203dd9472ff",
"assets/assets/icons8_report_card_320px.png": "6c3c261840e41b9209782a1a8105f865",
"assets/assets/icons8_timesheet_320px.png": "e1a658aa067677c079337147e184857c",
"assets/assets/ic_keyboard_arrow_right_black.png": "f791bcefcc63c0bc2ac3c36e9eb337ca",
"assets/assets/ic_navigate_before_black.png": "f8ecb4c3c743ff9e8587f5fe0a95f211",
"assets/assets/img.png": "a2280ebba20580ac5a9f8b38c504ddd6",
"assets/assets/infu.png": "a82096a40fc052d8a0e9e41a1c86d9e4",
"assets/assets/insert.png": "632f9e4ecb79447c861efeaac6fa47ab",
"assets/assets/instagram.png": "40ffe8ea681b9b937d188de167d5df04",
"assets/assets/libya.png": "e5d39738d0579a1fb946006f1e6c40a5",
"assets/assets/logjn_righte.png": "4a69cc36bc2f1060817e9ef7e3e96dd9",
"assets/assets/logomohammed.png": "6b804efad5ee28d9afd6a4eb6a23dc77",
"assets/assets/log_20200330110841.png": "cf688f7a700befe7eff63e77d8198ca5",
"assets/assets/md_5a9794da1b10e.png": "b55537b97578a9d6c42bdcc528fd69d8",
"assets/assets/money_sms.png": "2582514a8b90c27698b9d49096aec6cd",
"assets/assets/more.png": "71b8eb67ff11e309cf2f67ce565d01be",
"assets/assets/morei.png": "97b2e4c1fe0be66d1897879b4b16e4dd",
"assets/assets/myschool.png": "d57ab92c80fe1e9652174f0a358ca8a8",
"assets/assets/my_info.png": "412e8fdde147ef7bc438a040e2043c34",
"assets/assets/note.png": "964d3b9110868196ef594352710056f7",
"assets/assets/notification_bg_low_normal.9.png": "3d4e903880e581df0dff44a4cc07c65b",
"assets/assets/notification_bg_low_pressed.9.png": "9dd63d1b33874553de30074a5144f1f9",
"assets/assets/notification_bg_normal.9.png": "bf3a10daa260ba3f4cd3325b94f75cf7",
"assets/assets/notification_bg_normal_pressed.9.png": "d422e95d716d1d1582fbcac1149fdb04",
"assets/assets/notify_panel_notification_icon_bg.png": "e5e0e446cc8c3c56990cd94799d65598",
"assets/assets/nowifif.json": "416f73e1bd241fe7d575cf2e450136c7",
"assets/assets/omr.jpg": "847596335789d90eae3afe5a85c26dda",
"assets/assets/ooo.png": "9d44fb7872f7ce9bde8c6017b839156c",
"assets/assets/orange.png": "c9abaf954eb3e0aaf28825f8df8e78f5",
"assets/assets/pen.png": "54be6993538500b792ece9f896865cdf",
"assets/assets/quickinput.png": "f9d95ecabba93010b931bd91f1fbe433",
"assets/assets/red.png": "9c0206c8af0c008095ecf8071e203045",
"assets/assets/rede.png": "01e4f5756708726ed81bb8977e7ef4ac",
"assets/assets/right.png": "b87b325f60346c0d00e1092ecf732c8a",
"assets/assets/rsult.png": "fd7f556e0d6c8eda2fda5bdf9ddadc09",
"assets/assets/school.png": "49aed5462af0677d2dc1dc0e855af6f7",
"assets/assets/searching_word.json": "2a911d5b2c608327bd1f230a7ebcfe1d",
"assets/assets/search_stu.png": "df419a5d4d65c6957ffe3acb47762bca",
"assets/assets/select_off_20210122191317.png": "42b153646d9dd2a661d1ed1b41ff7f7c",
"assets/assets/select_on_20210122191316.png": "1543fcc5eaf8c37ecfcf42a06baa9c71",
"assets/assets/sentences.png": "48b033c4bdcbf214573669aed38f0975",
"assets/assets/server.png": "84f970064b6ac9ac45079246aef859f6",
"assets/assets/settings.png": "d0513326e092c45a2d3ecdb1b6402929",
"assets/assets/square77.png": "1325cd441fa9c8cd8e1e6bcd53219042",
"assets/assets/students.png": "3291776a423ac67a2bd63c0cca7b8151",
"assets/assets/surface.png": "8d5a84a60ce4885637435f082d16b239",
"assets/assets/tech.png": "f9334d3ed15217956ffa7da549024407",
"assets/assets/timesheet.png": "e1e92968039b3013d88de1d371402663",
"assets/assets/ttt.png": "684d0a16bd635aa66d18260a098dd104",
"assets/assets/ttt1.png": "89e0748006bb7735b6012f1778ef86db",
"assets/assets/ttt2.png": "3d43d29406a146e31dd60b23c5a449a9",
"assets/assets/weekend.png": "e15237ec51db56b5cfc765c5dd0b3622",
"assets/assets/wordlist.png": "73f249871eec76bd6586e348a0eb20d2",
"assets/assets/work_diary.png": "af431ffe030390964d03ba3e11a7c87e",
"assets/FontManifest.json": "cd23f051f6a4369a5297e4a91e359bc2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2f04ed848bf5dec503d35fb61b13dbe0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "8ae00b472ec3937a5bee52055d6bc8b4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5444d39119012a7f6b07cb3859a8fb37",
"/": "5444d39119012a7f6b07cb3859a8fb37",
"main.dart.js": "ec815d774d79afb62ebc9562f44227d0",
"manifest.json": "0333ca9ada83d2c83d6a7cee9101cb5f",
"version.json": "b0b17b6768e675983a8bcce9c6cff671"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
