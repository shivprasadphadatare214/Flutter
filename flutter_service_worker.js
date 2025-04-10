'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "fab2a2fd72c2c462bf21649bf6b40923",
"/": "fab2a2fd72c2c462bf21649bf6b40923",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "10aa1d27a0731b0475d3ecc17b8c76d4",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/fd/afd8c54cfde1d0399fdcc55cf51acbd37bf9d0": "0d979708538d033f98add3896336a7b9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/98/aee2ddac8bbac3458e1dbaa4fd163531c947da": "ae191db9a18e5785905672c98e4806ca",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/pack/pack-7fd606ad6812216c60ef0216a75c6eb21a335c23.rev": "3ebaaed873291cd5e1639ef7a3139a6d",
".git/objects/pack/pack-7fd606ad6812216c60ef0216a75c6eb21a335c23.idx": "32c7e592b222710939d17d614e04474f",
".git/objects/pack/pack-7fd606ad6812216c60ef0216a75c6eb21a335c23.pack": "75c940e9b69975e6ce4d7bc9514944a3",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/27/f0397d9d378cea82a1e21bbdec81b9acd755d4": "1ed4af90b8bde780bea8f562e5c15c01",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/a9/c056d0e0ba54ce861aec37825b75954db804fb": "33881a75bc36d4b6656a4262483fac42",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/e6/e652b38a5985e4766231108bc4a88b12edb434": "c99246265bc61476a96136a54ab6f595",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/b7/d97c9fe320015afeea9bc400969e550e3cee2d": "2dfb469580dc2c4b3f52f4024bbc2a64",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/08/f1097c6fdfa2117c3d51c6787f83dac1d47b6e": "8a2bec26091d4b782aca30427c203f32",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/26/669f72cb7015b6ed01d365aac4ca07fa73d18d": "475dea74b3f549aea2252b73c81ccae8",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8f/e2dd2e22523f4aae523347cf668e4802250afe": "f72403a14e249730811a0d1a287ee076",
".git/objects/4f/9ce3c7411c88a3fc66c22b23334afda9cdf581": "c05a5389fa0bbf1448c66a0b74cd1886",
".git/objects/4f/012de8fee1ddec020f1a257754681e80a6f40b": "76803b95bf3ef864396cc718579ca063",
".git/objects/99/dc5addb482142834c988c2200d60a5c678ce94": "e72c841cd2688464aab607a331ccf941",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/92/f321d2921151bcb0ad8530913c1df1b5742d78": "054a9a6257d8f2729c68ecd62eb4078b",
".git/AUTO_MERGE": "1c29eda1932298cf2b46ad8952412f8c",
".git/refs/heads/main": "5a3555bb2d3d56a65c27fb16414dcfdd",
".git/refs/remotes/origin/main": "5a3555bb2d3d56a65c27fb16414dcfdd",
".git/FETCH_HEAD": "f02b87c172f89773338944d013ced96e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "7da661276aa27df611f9ed4029531a0c",
".git/config": "9a2bc667877bf59c03a74b634ab5b315",
".git/logs/HEAD": "118ee5fe103371f128d481ad6bbecb78",
".git/logs/refs/heads/main": "4429bd4b55d399ca8e880d724cd9b1a2",
".git/logs/refs/remotes/origin/main": "7f806364dfc2cd3718ae249a0bde8b97",
".git/ORIG_HEAD": "71226f65d3d0887a591a48dd4560c219",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "4fecfe6325116117c22e55cca2f003d3",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"manifest.json": "9664ee6180eb1bf5df97d8df5a1bc23b",
"movedock/pubspec.yaml": "5500864364f522c33fd86b9b4b67183f",
"movedock/lib/main.dart": "c1f1b22909d009bf0cdd0585862399e9",
"movedock/linux/my_application.h": "7bd839b67ebee22174be9f4da4521b6f",
"movedock/linux/CMakeLists.txt": "1045608e67df3c530f2e7bcf1ffb9fdb",
"movedock/linux/my_application.cc": "e5a3a8b488c22b1c23f27ebd14ce8ea2",
"movedock/linux/flutter/CMakeLists.txt": "46690fb8ffaf7d227d8bc4713f31140d",
"movedock/linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"movedock/linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"movedock/linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"movedock/linux/main.cc": "0643b8609698e96b3abd63c210361a87",
"movedock/windows/CMakeLists.txt": "20e60ed536235a8b7ecb6f34e9bc327e",
"movedock/windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"movedock/windows/runner/runner.exe.manifest": "81f2aed52d431763e83890f3d17da92a",
"movedock/windows/runner/CMakeLists.txt": "e99a99b5cc82a168fc557eb23b8d5a96",
"movedock/windows/runner/flutter_window.cpp": "9b92b95a9eecce25e3e9d356688d0cb6",
"movedock/windows/runner/Runner.rc": "e65904f33b0316ad7a06ae9dc8000b7c",
"movedock/windows/runner/flutter_window.h": "79bea736711adda00c49419a39a4a0b4",
"movedock/windows/runner/win32_window.cpp": "928e86a2be27eca688669dce6c9177d9",
"movedock/windows/runner/resource.h": "c8f809a4f8d3f2f625e358fd90f72fee",
"movedock/windows/runner/win32_window.h": "5a4cf051798d7e6931ee0405a4523c8f",
"movedock/windows/runner/utils.h": "c741fb9cddbf3a62f4688b6cca39ddcc",
"movedock/windows/runner/utils.cpp": "9b5697b276c8ad67a02ec12ad2c09851",
"movedock/windows/runner/main.cpp": "0e0edb31fc6d8f1214491150c39bb681",
"movedock/windows/flutter/CMakeLists.txt": "0c500410e3259a9a053797dc1c28070e",
"movedock/windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"movedock/windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"movedock/windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"movedock/pubspec.lock": "e28873b69866c111154179d771ad682f",
"movedock/android/gradle/wrapper/gradle-wrapper.properties": "869b43a4017378d9be13b7e3deeec192",
"movedock/android/settings.gradle": "f2bd1a19983eddeeb87a4621af74ebf4",
"movedock/android/app/src/debug/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"movedock/android/app/src/profile/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"movedock/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"movedock/android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"movedock/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"movedock/android/app/src/main/res/values-night/styles.xml": "feddd27a2f77ef486e2b7a420b1de43d",
"movedock/android/app/src/main/res/values/styles.xml": "58b48ec178bde5aad76063577172ad24",
"movedock/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"movedock/android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"movedock/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"movedock/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"movedock/android/app/src/main/AndroidManifest.xml": "c347ba62f035dbd9055eda2e55ca862c",
"movedock/android/app/src/main/kotlin/com/example/movedock/MainActivity.kt": "6021a1e726c27d8396ce0e2bb10cf8d5",
"movedock/android/app/build.gradle": "83daeffa80e52bf26d9314dcd1b432ee",
"movedock/android/gradle.properties": "5fc95ddf5b8ad7d23acec4c364c26487",
"movedock/android/build.gradle": "8fea88f0221dc81c23b0e4c55c169ccc",
"movedock/README.md": "e36667b3a01f14243550a01537c1f4fb",
"movedock/macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"movedock/macos/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"movedock/macos/RunnerTests/RunnerTests.swift": "97d3a20fd20a063c192e886d1822b4a8",
"movedock/macos/Flutter/Flutter-Release.xcconfig": "2b03faed3e462ed0ed348559e4796ed8",
"movedock/macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"movedock/macos/Flutter/Flutter-Debug.xcconfig": "2b03faed3e462ed0ed348559e4796ed8",
"movedock/macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "075622d652baf185dc5a4ba7f7a20100",
"movedock/macos/Runner.xcodeproj/project.pbxproj": "14f9b188a05694e93ae81d95438b1e19",
"movedock/macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"movedock/macos/Runner/Release.entitlements": "e6fde05dec64f9856d3978a4a5e4bf48",
"movedock/macos/Runner/Info.plist": "b945a5051bb1cca2d906ac0be98b629a",
"movedock/macos/Runner/DebugProfile.entitlements": "6e164fc6ed6acb30c71fe12e29e49642",
"movedock/macos/Runner/MainFlutterWindow.swift": "4a747b1f256d62a2bbb79bd976891eb5",
"movedock/macos/Runner/Base.lproj/MainMenu.xib": "a41bc20792a7e771d7901124cdb8c835",
"movedock/macos/Runner/Configs/Debug.xcconfig": "0a7555f820f3e4371d88ec1c339d70ef",
"movedock/macos/Runner/Configs/Release.xcconfig": "d36330778580798c0d9c5a5b71501a0f",
"movedock/macos/Runner/Configs/AppInfo.xcconfig": "68ce73f30c56d906b87cf91aad4b1d44",
"movedock/macos/Runner/Configs/Warnings.xcconfig": "e19c2368cf97e5f3eaf8de37cff2b341",
"movedock/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"movedock/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"movedock/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"movedock/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"movedock/macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "5bd47c3ef1d1a261037c87fb3ddb9cfd",
"movedock/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"movedock/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"movedock/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"movedock/macos/Runner/AppDelegate.swift": "43e630f8974625a25df2af9653bb6ac4",
"movedock/web/index.html": "51c99fdc9c490b2ad273cc77006029f1",
"movedock/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"movedock/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"movedock/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"movedock/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"movedock/web/manifest.json": "db850bdea99b95a9c6dae0467f805c87",
"movedock/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"movedock/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"movedock/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"movedock/ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"movedock/ios/RunnerTests/RunnerTests.swift": "a225a382d14d7b16b6f602a5c1d49331",
"movedock/ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"movedock/ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"movedock/ios/Flutter/AppFrameworkInfo.plist": "5eb1ee18836d512da62e476379865f8d",
"movedock/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "ffac881d52d43c06cc1b45b6aeabc194",
"movedock/ios/Runner.xcodeproj/project.pbxproj": "1f5901e6d19fbb7f2d1ba9b3e0b4d572",
"movedock/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"movedock/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"movedock/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"movedock/ios/Runner/Info.plist": "c2755317fb63a38be39369ad96628533",
"movedock/ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"movedock/ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"movedock/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"movedock/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"movedock/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"movedock/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"movedock/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"movedock/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"movedock/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"movedock/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"movedock/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"movedock/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"movedock/ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"movedock/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"movedock/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"movedock/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"movedock/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"movedock/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"movedock/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"movedock/ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"movedock/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"movedock/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"movedock/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"movedock/ios/Runner/AppDelegate.swift": "303ca46dbd58544be7b816861d70a27c",
"movedock/ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"movedock/analysis_options.yaml": "be4b078e1022d3a457690c54dd76aa16",
"README.md": "1ac6726e33d6c69ba4e5aea72c435dc2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "e9e6df621cb6f71db3ade51610bc4c84",
"movesquare/pubspec.yaml": "c0c6caaf55fa80b5f2a8f453ca8521c8",
"movesquare/lib/main.dart": "420f321cc6960974e7ce88f2052c8cfa",
"movesquare/linux/my_application.h": "7bd839b67ebee22174be9f4da4521b6f",
"movesquare/linux/CMakeLists.txt": "df3067eb7b67eefb0c8fda6d9cabdc38",
"movesquare/linux/my_application.cc": "06b023718e99290f095e617500368e50",
"movesquare/linux/flutter/CMakeLists.txt": "46690fb8ffaf7d227d8bc4713f31140d",
"movesquare/linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"movesquare/linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"movesquare/linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"movesquare/linux/main.cc": "0643b8609698e96b3abd63c210361a87",
"movesquare/windows/CMakeLists.txt": "cb3cdb57e07bcf65523e51c9b073867e",
"movesquare/windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"movesquare/windows/runner/runner.exe.manifest": "81f2aed52d431763e83890f3d17da92a",
"movesquare/windows/runner/CMakeLists.txt": "e99a99b5cc82a168fc557eb23b8d5a96",
"movesquare/windows/runner/flutter_window.cpp": "9b92b95a9eecce25e3e9d356688d0cb6",
"movesquare/windows/runner/Runner.rc": "4c78718f02f0b9de10434fe30f84d230",
"movesquare/windows/runner/flutter_window.h": "79bea736711adda00c49419a39a4a0b4",
"movesquare/windows/runner/win32_window.cpp": "928e86a2be27eca688669dce6c9177d9",
"movesquare/windows/runner/resource.h": "c8f809a4f8d3f2f625e358fd90f72fee",
"movesquare/windows/runner/win32_window.h": "5a4cf051798d7e6931ee0405a4523c8f",
"movesquare/windows/runner/utils.h": "c741fb9cddbf3a62f4688b6cca39ddcc",
"movesquare/windows/runner/utils.cpp": "9b5697b276c8ad67a02ec12ad2c09851",
"movesquare/windows/runner/main.cpp": "4fa60fca5294b1dd0f74bff1ea65d445",
"movesquare/windows/flutter/CMakeLists.txt": "0c500410e3259a9a053797dc1c28070e",
"movesquare/windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"movesquare/windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"movesquare/windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"movesquare/pubspec.lock": "e28873b69866c111154179d771ad682f",
"movesquare/android/gradle/wrapper/gradle-wrapper.properties": "869b43a4017378d9be13b7e3deeec192",
"movesquare/android/settings.gradle": "f2bd1a19983eddeeb87a4621af74ebf4",
"movesquare/android/app/src/debug/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"movesquare/android/app/src/profile/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"movesquare/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"movesquare/android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"movesquare/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"movesquare/android/app/src/main/res/values-night/styles.xml": "feddd27a2f77ef486e2b7a420b1de43d",
"movesquare/android/app/src/main/res/values/styles.xml": "58b48ec178bde5aad76063577172ad24",
"movesquare/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"movesquare/android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"movesquare/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"movesquare/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"movesquare/android/app/src/main/AndroidManifest.xml": "087fe2331b1c3a072736954b881cf623",
"movesquare/android/app/src/main/kotlin/com/example/movesquare/MainActivity.kt": "a2d8d8f7c465e1c28cb77929787c6a23",
"movesquare/android/app/build.gradle": "b26122bf0ee27e38bd5ebdb96c017442",
"movesquare/android/gradle.properties": "5fc95ddf5b8ad7d23acec4c364c26487",
"movesquare/android/build.gradle": "8fea88f0221dc81c23b0e4c55c169ccc",
"movesquare/README.md": "1bb3f52999f338257ff371dd43576d36",
"movesquare/macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"movesquare/macos/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"movesquare/macos/RunnerTests/RunnerTests.swift": "97d3a20fd20a063c192e886d1822b4a8",
"movesquare/macos/Flutter/Flutter-Release.xcconfig": "2b03faed3e462ed0ed348559e4796ed8",
"movesquare/macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"movesquare/macos/Flutter/Flutter-Debug.xcconfig": "2b03faed3e462ed0ed348559e4796ed8",
"movesquare/macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "24b81570007593aeda1f60fe08b04862",
"movesquare/macos/Runner.xcodeproj/project.pbxproj": "97213d654f288c5f575ae0f1cd696b9d",
"movesquare/macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"movesquare/macos/Runner/Release.entitlements": "e6fde05dec64f9856d3978a4a5e4bf48",
"movesquare/macos/Runner/Info.plist": "b945a5051bb1cca2d906ac0be98b629a",
"movesquare/macos/Runner/DebugProfile.entitlements": "6e164fc6ed6acb30c71fe12e29e49642",
"movesquare/macos/Runner/MainFlutterWindow.swift": "4a747b1f256d62a2bbb79bd976891eb5",
"movesquare/macos/Runner/Base.lproj/MainMenu.xib": "a41bc20792a7e771d7901124cdb8c835",
"movesquare/macos/Runner/Configs/Debug.xcconfig": "0a7555f820f3e4371d88ec1c339d70ef",
"movesquare/macos/Runner/Configs/Release.xcconfig": "d36330778580798c0d9c5a5b71501a0f",
"movesquare/macos/Runner/Configs/AppInfo.xcconfig": "afa58f8dc4d7e8bde73d421e4de20a66",
"movesquare/macos/Runner/Configs/Warnings.xcconfig": "e19c2368cf97e5f3eaf8de37cff2b341",
"movesquare/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"movesquare/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"movesquare/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"movesquare/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"movesquare/macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "5bd47c3ef1d1a261037c87fb3ddb9cfd",
"movesquare/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"movesquare/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"movesquare/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"movesquare/macos/Runner/AppDelegate.swift": "43e630f8974625a25df2af9653bb6ac4",
"movesquare/web/index.html": "0533cd54259011cba14905ac3caf767a",
"movesquare/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"movesquare/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"movesquare/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"movesquare/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"movesquare/web/manifest.json": "9664ee6180eb1bf5df97d8df5a1bc23b",
"movesquare/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"movesquare/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"movesquare/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"movesquare/ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"movesquare/ios/RunnerTests/RunnerTests.swift": "a225a382d14d7b16b6f602a5c1d49331",
"movesquare/ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"movesquare/ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"movesquare/ios/Flutter/AppFrameworkInfo.plist": "5eb1ee18836d512da62e476379865f8d",
"movesquare/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "ffac881d52d43c06cc1b45b6aeabc194",
"movesquare/ios/Runner.xcodeproj/project.pbxproj": "3d1998a7727d28e087c2c30d6ad561ce",
"movesquare/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"movesquare/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"movesquare/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"movesquare/ios/Runner/Info.plist": "be27111f76da281ce9ccbaf3c4891bb3",
"movesquare/ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"movesquare/ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"movesquare/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"movesquare/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"movesquare/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"movesquare/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"movesquare/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"movesquare/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"movesquare/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"movesquare/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"movesquare/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"movesquare/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"movesquare/ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"movesquare/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"movesquare/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"movesquare/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"movesquare/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"movesquare/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"movesquare/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"movesquare/ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"movesquare/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"movesquare/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"movesquare/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"movesquare/ios/Runner/AppDelegate.swift": "303ca46dbd58544be7b816861d70a27c",
"movesquare/ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"movesquare/analysis_options.yaml": "be4b078e1022d3a457690c54dd76aa16",
"version.json": "0bb2798ca7e3992e326a2758947b19a8"};
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
