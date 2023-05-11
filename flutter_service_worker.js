'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "clevertap.js": "8ede9f8cb68f6afc57826134c5bdb3ef",
"version.json": "71340c0391300455d2b174ae87504b20",
"splash/img/branding-4x.png": "d600778e264e87ffdd4be2e69ffe1d28",
"splash/img/branding-dark-1x.png": "6f07ebf3b2c7ccb58b7a877a1d085037",
"splash/img/branding-2x.png": "771ab07b57981cd5c219fbe0e7af0c04",
"splash/img/branding-3x.png": "d9eec9a4f30c6574c435bfcd31a37cb6",
"splash/img/branding-dark-4x.png": "d600778e264e87ffdd4be2e69ffe1d28",
"splash/img/logo.png": "2480c06469221e6ac657a38e1f734cc8",
"splash/img/branding-1x.png": "6f07ebf3b2c7ccb58b7a877a1d085037",
"splash/img/branding-dark-2x.png": "771ab07b57981cd5c219fbe0e7af0c04",
"splash/img/branding-dark-3x.png": "d9eec9a4f30c6574c435bfcd31a37cb6",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "e94040e8c17a4c25476bcd74deb3d034",
"favicon.ico": "3fdc39af41c473506412dc87470fd400",
"index.html": "03d3621b54c3c09456b8ddfb84fadc35",
"/": "03d3621b54c3c09456b8ddfb84fadc35",
"styles.css": "c97a3d3fd9e381144269e77e9e0cb494",
"main.dart.js": "84323a5a74f5551f45bf6a71d1bcb151",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "72f8ef2344edfb7335be7ae330989e1a",
"icons/Icon-192.png": "1d55986372bdec826d08c6309692b34d",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "10a2875f7f2d8efc4e01cd7bc7d9571e",
"manifest.json": "e9932768b57374ac738bfb0947ecc857",
".git/config": "12e665858eaa223243fc27a61ea22168",
".git/objects/0c/d671d3c812c0ae95761b75951903979f47323c": "88d3e2b54aa01fce8aef3dae990f60e1",
".git/objects/50/dca971c93315418d3b6c4fcd5550f80e79d824": "c8a3dd2a67d39cbdc01e35ab85c8114e",
".git/objects/68/98a837e94234cbd572d9656d63e7ef8217618a": "bf6eea65feb79d4fe09b5c6826bd82f4",
".git/objects/57/d874f2f02d28c895d9ca279b126b9c7914f148": "cd00c0f274262809e3ee5c87841ee5ba",
".git/objects/9e/5cdc4c2ee81bb8eab8c5b8fa1375d412f3cd49": "d442d6e590f885d563a21b79384f9c5e",
".git/objects/04/4b0f3fc4658c952ed55446c6cd29d853b712c7": "7e7645756e74507baadb89ddaae03776",
".git/objects/6a/20b865bbee1a25f3a6f7149c4629a58c1fa716": "9bb4f6e87b533eaf5de4422902c11bb3",
".git/objects/6a/464bb0b44dbfa45b31a1173a7312d0bae9e9c9": "d2926d0d7d5cf5b057a3a91b673fed28",
".git/objects/93/2a67b5e6e3cbba5363999f7ba6d4155149141d": "1b188ddc928161947ee1dafd42f6f56b",
".git/objects/60/0280effe866506504ac74742ae9604666a8345": "7817037102228517bdff076d3738352e",
".git/objects/60/d126fdc9cae91ff317a9fbb5ef78174b5f37ef": "3ad6ede9eb14fbaad6767aa2cd6b907e",
".git/objects/02/bb9484f9a11ced10cd4a7f8a05e3e2ec487b7d": "080073fdc8302bc0d1a2701d87d99b90",
".git/objects/be/d227d66cd94a9e59521eefd722d20db4bd2477": "0510977e057a396957d53600321589cf",
".git/objects/be/0d54cbc8bed76b6588c93e541cde35d99b12ae": "c154fdd16de834a2c6dbf2aa7b404185",
".git/objects/b3/7f62577e4d17565e6a519ba790479766b974b9": "3d49889722f02be3dc9a71fd9054d9e5",
".git/objects/df/caad995dba116bd017a8675fe4846a3f86e5c2": "29a03bee65df349cffcef1108bbbbb7d",
".git/objects/df/e1db1ad29b965124782205ca99ea137b5485aa": "a211ad4af186332ec516b830c9062c03",
".git/objects/bd/37d0f1de1608940cdc2a2c10a988771de19d35": "00ec7e4a510125b08e7b5389c00661b2",
".git/objects/e2/f79c04f25880a250c4924129cb2d430eb053d2": "57783bc413720e2706c9b873bf6b8630",
".git/objects/c0/494a78cee42f9845787f5f4c339023a64a3fcf": "922337c4a010cb42edb546671563d821",
".git/objects/f2/c74ab7e75b13a11e3343ec9d8ac809a57cc1c6": "838f2322ded96669ae19d8ee114c3e8a",
".git/objects/f2/7b2ab73e291d75e5f18b4c8e6102332faa9f99": "028f85ab5f53b378ec0dc6ff79ed8b71",
".git/objects/cf/3185b6ab41733396e4fea2e9b767d153488ec2": "04b107f0b58d848ceb3780c655636a08",
".git/objects/fe/24324adefab3a3d3e0839a0bc2248968e2297f": "f760d59de635ad138b1c7b745c9c7b4f",
".git/objects/ed/5951a1e27834cd0b820fe39516379b71638e7f": "e76b4004ed81871a08f4aaec8c072f87",
".git/objects/4e/59ed485b03108063ee0a3bf986810d8419dc37": "2edf69c7a58621db0817ead5aea99688",
".git/objects/pack/pack-a3d9ee988b6f03406dac97283251980adeb62554.pack": "7e32e74e81899afec53adb4ee73e3560",
".git/objects/pack/pack-a3d9ee988b6f03406dac97283251980adeb62554.idx": "947f4382352a9748bc69ac1c10ac6495",
".git/objects/29/ae1f16790139b1819e1bec41f7f68433e5c3ba": "7acf4ef0647d4b099b53df26610239d3",
".git/objects/87/694a5fada2553af445533f984c7ca9e1da713f": "7dbe5b2db25b5dbe91bbe2bbe552d30f",
".git/objects/87/638a657822683530670af8ec4cc499ed5fa073": "cd5a63b0f47f1ed2e4b46e300f7853b6",
".git/objects/17/ccbcfb6006ef426f4603bf0afa070e279ffd7f": "9cc03644ef1848cacae34ccdc2054ba8",
".git/objects/8a/ebbad381f265355be50efaf2a998240488a17c": "af39a8eb9591c59175fd4aaed775748e",
".git/objects/7e/99687e21d43ec1ff9b4abd6b112a67cf535818": "0a72a803765dd9085853416e190e9eb8",
".git/objects/10/5ba7f7da38a8061b0ab575aeab791c45604981": "2fc840bb143100daf359f6712c234003",
".git/objects/4d/414f333d0b698500cddcc8c425b50fb6385c7a": "726602b70d24ef60c2636a81101812ff",
".git/objects/86/d21c704279d3a56882d65766360357bb9f8a18": "ab41c808c0cd4f3033c66b8b86906c36",
".git/objects/2a/f0bf9b80eb320ee8db51fb8a4df1eef0de1c9f": "7b7bee117e4c5a053b23644a1312386e",
".git/objects/6b/1407cbad845aa6c9b5342bbd59497aa62ae1b0": "ab5142dd630a587e029ee7d993060343",
".git/objects/9a/e8a1219169b7e3981094130a03242d04479fa0": "e6731ee265547d54011a3e61fbe96ca5",
".git/objects/09/d82bc6fc50b0255b29dff3511005e836e9f36a": "ec209f75f5c385bacd07948fd4129cbc",
".git/objects/91/0ddc4f4899fd3edd34052c93e10621128e3157": "39a6b87be4bfd942a9b8b9c7bcbd15c9",
".git/objects/96/ffe094a38bc7b1b3c4b8b5d6187c42eff71655": "635a754f52b893e6b19689205a98b719",
".git/objects/53/a0b80960f876329db667cfa93d34b5f492c9da": "d39c2794a4394138d40f595c4b833947",
".git/objects/5b/76da3ce1747cd16363e301d3e92c35671b4468": "b8ce5ffeca1cb32977ec85e1ce842156",
".git/objects/08/c1f9dd68a1d09e0e68a4f483e01b1c1fd8aa2c": "62e72432fc3f8048dfbaff5e487954bb",
".git/objects/06/a300fd2df8ecf060cf1df29184d5078f821a52": "1f84962de470d76ef87a144375775c6c",
".git/objects/90/5960cb5190b0410a8a6da3565e8ce2a0e2c2e3": "3226dbea320b0cecf6f82fc863dfde61",
".git/objects/90/b3f4c2ee9dd0dd825e9c7c13e838b6b7b90157": "9c4c7bd325d55887de60b5d4c87c9758",
".git/objects/d3/c4ca0a780f35b75631ba65fc21676bdc4e337b": "170b51e75cbcb21d40cb253c60f113e9",
".git/objects/ba/da13af20f536bb430f15645128edbf8ea74d14": "7f51de4a993d11f37a84e66f7e723d83",
".git/objects/b1/320cbb8537be0f08d3d2a49fcd93f1e06a7e58": "7b1fcc6627a41171143c3c90a5bc0094",
".git/objects/d5/8a6b7783e3f86f246cfe67d5a3a20eb92a7376": "c19b812f0add6a6082dc0e2736ee7920",
".git/objects/d2/2b18da4516674224078d9d5a6afbcb2e2ff2cc": "556e44f515f22975e7f120e44b6a6d6f",
".git/objects/d2/004229ac0cb6ed1161d5961f1ab96a15734ea5": "19fa6ffd088cd8947e17bedaf630cb7d",
".git/objects/de/68521f6b761117e0d22e96d84e507bab9bcc17": "334dac3b0fb629bd6f1157a9b7290c8f",
".git/objects/a6/6abce2cc37e46c7e80ccc16c228b4896eea8a9": "b60ff2dde2712945f2c7b9b731022024",
".git/objects/b9/f8110458d194af6c37dfa3231e89e03e96158f": "28ad46f9a28e0957069afe17ec6bdff7",
".git/objects/ef/b520c2a3c5d6c906484aa8a3f8638b989b8082": "834e873eca60dd1f5181b052a12b7fad",
".git/objects/ea/821a2319c18e7def7cfa7e49dfc629edc5776a": "02a976da4657da8c25b2b615198cdc2b",
".git/objects/e1/2348b410d159a555a3ddffa4a84d71a163a6ee": "25b705f5e73a84dd7c07a05c83dec7bf",
".git/objects/f7/dbe95fb5c2f21b27be8f6cf9e3acf6ae056c62": "ede081aafc1a5a8046fe822eebffd71a",
".git/objects/f6/7c0a891af2dbc639a69943f42c3f2edea3507b": "ecec91e6b4199fd847953f7c7eb7befc",
".git/objects/e7/1809e9a295583c2766364d675d988b2bbb311b": "cb97df2b2e22f52f343ee674c6691211",
".git/objects/e0/08859bea6f14bd77ddbbcebd10f666412e4562": "801c163ec9caf07b24341e13fad689e8",
".git/objects/41/0a378e2d34a39248facfb4d44dad2c8922db7e": "2493aefde41b69fbc64d68d0594b35a6",
".git/objects/84/5d3c1bc580d6f3da447ca86211aa2702450906": "db3d4fb13c6ca283fdd9f456656d51df",
".git/objects/23/9e360901059c045f8591aec4506fa533175ccb": "c8a5c4f7dae568325474b20ddeac5f06",
".git/objects/4f/fdae7cd5e64fe00eca6f50d051cb19a8010130": "6c6c810817b116e4862ece9a27580340",
".git/objects/8c/d132dc42bf073b38854625ac376f6589a12157": "7dc5afdc1a276e114ca5da136e74b059",
".git/objects/71/a0268d54d63686e43f85d8ef369cc18f5a41cb": "6b745eb873d0f2c29685d6d10559e694",
".git/objects/76/4bc6bbf552b79a6054d3711b57613bf2729004": "6bb48bff8e8abfb9b84cc2f5c2dcd62b",
".git/objects/82/c317f96a3f57a6a1c801b18bd29147261b5371": "24ad6ed81f947d501986a5eb44c7e89d",
".git/objects/2b/879f46ed54f03af66d3d32bca3497ec2bab15c": "ffd8c8b5b8a3c16ae82a93a039d97710",
".git/objects/8b/e11a9f8f121be2c59a199d17fe88c74d0910ef": "706c50c8d7ad828833e35ffc8204469d",
".git/objects/8e/bb9a0551d6dcf750fce4b7bb88c20578801f17": "a8fa7a69d4fd888532b048d7ad924f1c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ba6d35459aafe496c8a6c7219ac3a773",
".git/logs/refs/heads/main": "ba6d35459aafe496c8a6c7219ac3a773",
".git/logs/refs/remotes/origin/HEAD": "35cbaa8b478067ebd8e7d9b3e5b5a1b0",
".git/logs/refs/remotes/origin/main": "f400e615f3b45ab8ccc3b59d25c40b04",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
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
".git/refs/heads/main": "49503c518eca69a2217fa0db5cc632a6",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "49503c518eca69a2217fa0db5cc632a6",
".git/index": "04d2cc301df629aa3f9087d7663ebbb1",
".git/packed-refs": "a7cfc718eba6bd36365e86715fec8d21",
".git/COMMIT_EDITMSG": "3532d11855ca175f717185077d3ca4ca",
"assets/AssetManifest.json": "3a617284e35e2d8bdfbdd85c7eb8d51a",
"assets/NOTICES": "d635c407c2b3779bb7de9387f4c03b8c",
"assets/FontManifest.json": "c23d9a44fb5228fd644cdfa4070f54f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/orders_delivered_icon.png": "ee56dbb72e4efd68e37d72ffd0c761ce",
"assets/assets/images/My-Shiprocket-Logo-Black-BG.png": "c7e15b2fae7e54e497763c58336520ad",
"assets/assets/images/order_off.png": "31331ef57d7b267e2476e12fe726a43f",
"assets/assets/images/view_all_arrow.png": "5b0dc48f760b18fc88c50d8452d60359",
"assets/assets/images/link_gmail_icon.png": "1bd7bdef6e225a0cd5e3a43696f53748",
"assets/assets/images/order_bg.png": "9296f45be363af6a8ba752325c698ae2",
"assets/assets/images/order_cancelled_icon.png": "96c4347572bc7f40e64d7d9a50ea24d6",
"assets/assets/images/emptyOrder_icon.png": "16532bef696985529389d5289b22673e",
"assets/assets/images/deliveredIcon.png": "3e0a093ed9fa7241a256bfaf2a6a8819",
"assets/assets/images/user.svg": "b33b29809523c756fea5a1d3c7ca18e4",
"assets/assets/images/home_on@3x.png": "83127d3e32bb566fc751cab269e8b1e2",
"assets/assets/images/login_illustration.png": "ce03b6c8a474f691386d7e563d198073",
"assets/assets/images/person.svg": "7a874b25251cc9226de73f27f9fa5435",
"assets/assets/images/home_on@2x.png": "eb1757312b852ef0cca40e59e203afa7",
"assets/assets/images/data_point_image_one.png": "fdb779b21bcbca2763b7a63cba592784",
"assets/assets/images/data_point_image_three.png": "ca6488d9b6f8f3e0633b99bf0c35a112",
"assets/assets/images/my_shiprocket_trasparent.png": "3d7c7bd8103726eb64bcd70a2216b31b",
"assets/assets/images/order_placed_icon.png": "3d3e9e42428c21b243d186ce2e55f1eb",
"assets/assets/images/edit_order.png": "ef5328fa99c682d6af6b20670f3f9da2",
"assets/assets/images/to_be_dispatch_icon.png": "3912538fcb27b7f138e89d6f451efec1",
"assets/assets/images/delivered_icon.png": "45767d0d493d79b9d4137d55679f936b",
"assets/assets/images/in_transit_icon_new.png": "c75d872751777d60004cc1dcc0bf950d",
"assets/assets/images/add_button.png": "93deb413fd478784aa66908a8912146b",
"assets/assets/images/start-tracking-orders-vector.png": "9dde92fced9731d3f212f5dab669b15f",
"assets/assets/images/auth/login_illustration.png": "fc348c07e7917df33ed25f5b90fcbc27",
"assets/assets/images/auth/otp_illustration.png": "2e90d183ade2fcd92d1ae6f71a46cab0",
"assets/assets/images/amazon_logo.png": "eecbed452b869d5d5cf053757d79e92b",
"assets/assets/images/add_button.svg": "aeb3411e4cc5cd076b452348ae77d6f5",
"assets/assets/images/profile_nav_selected.png": "e2cd2e4b19446b3cacd8991574697be3",
"assets/assets/images/profile_off@2x.png": "5302b2ab347779723e6d4a1036c0f21b",
"assets/assets/images/unlink_successfully_icon.png": "43dfcfb8c1e6cbd3d041ad34d845882c",
"assets/assets/images/profile_on@3x.png": "ae6b1bd7caf6324a30f05dc50a7096fe",
"assets/assets/images/home_off@3x.png": "0ab9a2c991a1c2da4a757d8f9709a982",
"assets/assets/images/total_orders_icon.png": "df7e62faad2474061e8d5a2186b895f7",
"assets/assets/images/Orders-off.svg": "31499787a7d75653524257aff85061e1",
"assets/assets/images/log_out.png": "1d8b74dd96f57fbdb50c6ab601a0bc20",
"assets/assets/images/no_account_link_image.png": "6c4f54c7250858123888315e3d2576ce",
"assets/assets/images/profile_on.png": "f2060881adfa8b447f4ecd7e5a509ac3",
"assets/assets/images/copyicon.png": "5a20ef087b274060b05ad4ef9c87c89e",
"assets/assets/images/orders_nav.png": "0798e4366717610e9312619050af0572",
"assets/assets/images/profile_nav.png": "af2647414f2c4bdd4716d74f9866902a",
"assets/assets/images/no_orders.png": "9b224fc6ff53d40abaf80cf22dc11383",
"assets/assets/images/truck_icon.png": "2a2bafecb2d34dac1cc0c6e71b6ea533",
"assets/assets/images/tracking_icon.png": "d64d2019ff8fc85c6259e9aa46da860d",
"assets/assets/images/order_receipt.png": "fcbb23133ef94ea2755d51b611bd3187",
"assets/assets/images/location_newpin.png": "5de1fccbcad90ba033a2351f7bb2ea11",
"assets/assets/images/profile-off.svg": "219e3eeeb9f86f6cec8452ba69c3b5c6",
"assets/assets/images/privacy_icon.png": "b7ba0fd2387a4226f627a7c9bc21c216",
"assets/assets/images/home_off@2x.png": "a95c294983529007fb839e84aae811cd",
"assets/assets/images/home_on.png": "9b1b7018fb67ec3e00e579ea26e35652",
"assets/assets/images/right_icon.png": "c0c9752b6df40554770143cc38c330d0",
"assets/assets/images/edit_profile.png": "b7351d9efe067b07853d6f320b8d0984",
"assets/assets/images/profile_on@2x.png": "ed3a2b3c4150a095334dcc9ef91c810e",
"assets/assets/images/profile_off@3x.png": "f2ad66bfc8a7e3cb87fbdc88dda1906a",
"assets/assets/images/profile_off.png": "3aeb9af3aa59f4008922cb0c35086998",
"assets/assets/images/hand_icon.png": "3340a7c70de0f2f7e1f81d58206a61f4",
"assets/assets/images/track_more_icon.png": "76e0e90df33676cb88fd61a912cdcc41",
"assets/assets/images/contact_icon.png": "395b4399b0df2772cf2ef0f587d3eeca",
"assets/assets/images/start-tracking-orders-vector@2x.png": "7f23a3333aa4f706ee0378d5d9bed214",
"assets/assets/images/order_on@3x.png": "8cbe6a691e60c083fefc7ba966799667",
"assets/assets/images/lock_image.png": "5ad7df472fd9535b3777a38abd8c46dd",
"assets/assets/images/something_wrong.png": "42d08c8e249d53b7643495be4c801b0c",
"assets/assets/images/ready_to_ship_icon.png": "d3c2df17f80a5a45900fef5e7ef129e4",
"assets/assets/images/google-icon@2x.png": "e7540c24d7b4a5f4237b35db8d5dd06e",
"assets/assets/images/in_transit_icon.png": "2aab648170fa294cee2cea587f0840ee",
"assets/assets/images/notification_icon.png": "2d4e01af3fc6934529363e9a83339c31",
"assets/assets/images/out_for_delivery_icon.png": "731a25c3512b78370ab4f5cfc2f9ccde",
"assets/assets/images/notification2.png": "434ebb16c392cf0b735f44d01f04f8c3",
"assets/assets/images/orders_nav_selected.png": "6fc1a1235574e559a8e78b169704a57b",
"assets/assets/images/done_icon.png": "3fa3439f1a616d4fcc2ec012d9ee9871",
"assets/assets/images/myshiprocket_logo.png": "eb9cb2f5835133c3531a2bef89707067",
"assets/assets/images/noun-time.png": "85dd210933ed0c6052fcc628ead10717",
"assets/assets/images/location_icon.png": "f1cbaf40ad723b0bd16d39e7624a5b79",
"assets/assets/images/on_order_detail_illustration.png": "30f366876366f033066438b941394153",
"assets/assets/images/google-icon@3x.png": "24f4283b1929d14a01b91d30d0335d3b",
"assets/assets/images/google-icon.png": "38a9f767f77b86c8ef3f4998d1adfed1",
"assets/assets/images/no_order_image.png": "14ab28da31f33338a6b0c88ac784e535",
"assets/assets/images/feedback_icon.png": "2d0d61e0174d85f512fa18940104b4cf",
"assets/assets/images/error_icon.png": "0462d015ffe3e23e42475445cf701afa",
"assets/assets/images/top_bg.svg": "89d12bcdd348e8f9d5dc54f4fcc26d60",
"assets/assets/images/all_orders.png": "569ab89e0cf8b4c09e82b1af96133699",
"assets/assets/images/toggle_switch.png": "411167d4303383b9dea08dc1ff00cacc",
"assets/assets/images/order_share.png": "a2fde2931aece50ed2c5bc73b79aa593",
"assets/assets/images/order_on@2x.png": "737c458cc45b73cc08438c68958a3f3a",
"assets/assets/images/dispatched_icon.png": "cc0381c4a7c12a209ae013810dcdce9a",
"assets/assets/images/start-tracking-orders-vector@3x.png": "d6703af59da24e5f9af9f40d86612e26",
"assets/assets/images/bg@3x.webp": "590c56e41fecacf4bcebf7ff2dce6f9d",
"assets/assets/images/home-on.svg": "f4d6e161b4f17003044e8d7890274aab",
"assets/assets/images/welcome_my_shiprocket.png": "1915cf09dbf4a5b55018e8e64702b1c6",
"assets/assets/images/link_add_icon.png": "768f5c27b742f8e7dd6e48f63923d3f6",
"assets/assets/images/home_off.png": "24434630e7f5d160d2293af7f1b4e18c",
"assets/assets/images/My-Shiprocket-Logo-colored.png": "3af2743bf286619d7d604bce578d8a77",
"assets/assets/images/no_product.png": "5c458d7d4594cb46caff7245b023b334",
"assets/assets/images/purple_arrow.png": "42f017577996564ebf63a3bc283a7872",
"assets/assets/images/test_marker.png": "d5b99688d4cf91cf134ff0933700d9c1",
"assets/assets/images/no_order_icon.png": "9688e51e9aecd5d55028b93a0d7322ea",
"assets/assets/images/home_nav.png": "97805b16e41a39a0f84946a38d6adc3c",
"assets/assets/images/linked_accounts_illustration.png": "c5d7be40eab4909217b36b4f198c49ed",
"assets/assets/images/plus_icon.png": "cec5af266b451bec17e6b0da7ea8778d",
"assets/assets/images/order_off@2x.png": "1bfe8c8107f1725e676a96002b0c677e",
"assets/assets/images/order_off@3x.png": "432747711a4f4fb69bcd6dd9ba1b5ca9",
"assets/assets/images/order_on.png": "5542f9bab3438ae08bc588581ace9b4b",
"assets/assets/images/home_nav_selected.png": "96c52077b6ffcfa2a7bd9e882f497145",
"assets/assets/images/unlink_icon.png": "3eaecd36883c2c8059a37fc4f8bb3592",
"assets/assets/images/get_started_image.png": "40942104cc9748abb84217c2bf151f3d",
"assets/assets/images/error_illustration.png": "00eb3b587ffac089ac2391f7d7e500b7",
"assets/assets/images/data_point_image_two.png": "137cd4f2906a7986f102ea0ae2d1e8ff",
"assets/assets/images/emptyOrderList.png": "763d79ac56919a2ae2a3d75a9a0e05f7",
"assets/assets/images/orderPlaceholderImage.png": "04c4c07e777e14e651993b4ba54c1d71",
"assets/assets/images/onboarding/onboarding-2.png": "c0939532297b55ed17668639c6b19fd3",
"assets/assets/images/onboarding/onboarding-3.png": "1d0ebd2598cbcf60c0728bd8a5fe02c3",
"assets/assets/images/onboarding/arrow_flutter.png": "66e073bb2c188f6aaebae017dcba087d",
"assets/assets/images/onboarding/onboarding-1.png": "b2afcbb1abdff68c76316439d76c0bea",
"assets/assets/images/onboarding/arrow.png": "a1e1a432c8bea41e2569fe49375631fa",
"assets/assets/images/toggle_switch_on.png": "b640d88f6d16eb83d9747ba5e1b7eeee",
"assets/assets/images/order_shipped_icon.png": "0a44a7487205d7f5a332b98717e5e3e6",
"assets/assets/RiveAnimation/onboarding-3.riv": "c9957889b40c4d4cc209b5d61471033a",
"assets/assets/RiveAnimation/onboarding-2.riv": "5fa5d375dd486669e62a2e7af5af1319",
"assets/assets/RiveAnimation/onboarding-1.riv": "d3b767f92ad5a1009918a744425fe5f0",
"assets/assets/RiveAnimation/Loader.riv": "58ed67be1b7ef153aa2e3f2eb0206baa",
"assets/assets/RiveAnimation/splash.riv": "84d44bc1f19086c0582246b3df71e58d",
"assets/assets/icons/accounts/my_account@2x.png": "c3b8bb1a4df0361b08cb5041f4f04309",
"assets/assets/icons/accounts/faqs.png": "3423f9486ce33c206e72699f77849709",
"assets/assets/icons/accounts/privacy_policy@3x.png": "148ddfbe43515d408b2c2d5907c821bf",
"assets/assets/icons/accounts/support.png": "b78e01587e56b5b425825ef2ee71c263",
"assets/assets/icons/accounts/write_us.png": "260abcb7f696ebedac9054fffaea2cd0",
"assets/assets/icons/accounts/faqs@3x.png": "a88bde263fccf4484c2b9a9114353482",
"assets/assets/icons/accounts/faqs@2x.png": "66284b209053135fe011ca6311cbc05d",
"assets/assets/icons/accounts/privacy_policy@2x.png": "03d8f0952f710741ee87fb94902b079f",
"assets/assets/icons/accounts/editIcon.png": "329f2c5df70626b134b04d5b4f2f6de7",
"assets/assets/icons/accounts/my_account@3x.png": "7b56b4b0103cb5c98a509c6d1233f146",
"assets/assets/icons/accounts/my_account.png": "2a23a23059d447db9e7aea40f653cfe5",
"assets/assets/icons/accounts/my_address@3x.png": "bd6b4de80077fc700293aaa1404b1982",
"assets/assets/icons/accounts/logout.png": "bb6d5d0fdec4a7c6fbff3f0367ec56bf",
"assets/assets/icons/accounts/order_placeholder.png": "3d652cf935d568c8fe4dc9026f3b2599",
"assets/assets/icons/accounts/arrow.png": "42c2e4353be1b4f1e10f0dec015228a6",
"assets/assets/icons/accounts/my_address.png": "96755a09fe7ea28e50d223e5bda28149",
"assets/assets/icons/accounts/my_address@2x.png": "c5162941d87f3c9461a7eff8e0db3b08",
"assets/assets/icons/accounts/seller_logo_placeholder.png": "459ad50b3ac38350c3150cc7087a28a7",
"assets/assets/icons/accounts/terms_of_use.png": "9562ea3d13f46e5c44d7170054a54e8f",
"assets/assets/icons/accounts/edit_profile.png": "e7021354ffc565c65f0e991e072a4bdf",
"assets/assets/icons/accounts/tracking.png": "defbb5bc1deb1ed71db3c936253fec81",
"assets/assets/icons/accounts/emailSupport.png": "ff65dd0c70c645d04ecf206d1ad4fa7d",
"assets/assets/icons/accounts/myntra.png": "98e2695f79aa9412082112453c3b6d4e",
"assets/assets/icons/accounts/profile_placeholder.png": "90821fc2ad4ee331d81206647f26e2bf",
"assets/assets/icons/accounts/bg@2x.png": "2b62279fee38ac25a52d0c614a4de9d7",
"assets/assets/icons/accounts/logout_icon.png": "2adacf6384575e8d0f12ae58af9d6080",
"assets/assets/icons/accounts/bg@3x.png": "bb8d0ea3a037b784c51bea3e09c1d034",
"assets/assets/icons/accounts/user_2_fill.png": "d2d819ab6644563c8be36d7edf654822",
"assets/assets/icons/accounts/no_order_placeholder.png": "bd913f6f5025515e18928ede595c0496",
"assets/assets/icons/accounts/privacy_policy.png": "b1a28cb45a4cf3fbb2852ca47857c3d1",
"assets/assets/icons/accounts/ajio.png": "0a7d8575e5105df28a770dfd2a7e36fe",
"assets/assets/icons/accounts/item.png": "3d652cf935d568c8fe4dc9026f3b2599",
"assets/assets/icons/accounts/feedback@3x.png": "b79f810a029c4cae763914ca68555b47",
"assets/assets/icons/accounts/terms_of_use@3x.png": "84615cb8042ac26ff13d1d97374876d8",
"assets/assets/icons/accounts/write_us@3x.png": "06ea862d556d7061bcd4781bb1603cbe",
"assets/assets/icons/accounts/logout@3x.png": "adccad4decd8b5ca01e9589cdb6ed9b7",
"assets/assets/icons/accounts/logout@2x.png": "cd43da378b0a7351200f3396498abf9e",
"assets/assets/icons/accounts/amazon.png": "c52eff7b3ded85aafaefdfb39500f924",
"assets/assets/icons/accounts/feedback.png": "fed206ccf15aa68210ced85637926f6b",
"assets/assets/icons/accounts/userPlaceholder.png": "de69870bb3113ce8199bf011fe40f169",
"assets/assets/icons/accounts/write_us@2x.png": "f1f8d7f8346d7c62ff4c7640ed6c4819",
"assets/assets/icons/accounts/support_call.png": "57b399abce3e5b6ed324f036a5c28410",
"assets/assets/icons/accounts/terms_of_use@2x.png": "73a0ca6aef95a4a0dacff545f7676a77",
"assets/assets/icons/accounts/feedback@2x.png": "ad35dbd25748aa0ea9a579021b22a424",
"assets/assets/icons/accounts/bg.png": "e2eb016b72376536fec47fe8638c1e86",
"assets/assets/lottie/on_boarding_illustration_two_new.json": "80ff809c037437471b81f9225ae518bb",
"assets/assets/lottie/loader_green.json": "bf91276060cece86e28d77701424a68d",
"assets/assets/lottie/loading.json": "f0e612cf74d1af1f2935fef331431796",
"assets/assets/lottie/on_boarding_illustration_one_new.json": "b13100e080daa89e535b0cb1e0d67a9d",
"assets/assets/lottie/on_boarding_illustration_three_new.json": "6dff1aa014a81d5aecc4e3c8496d8a4c",
"assets/assets/lottie/loader_spark.json": "522916c48dd8324e5a2397868ddb183c",
"assets/assets/lottie/splash.json": "0efd72c5110f5008770e72fe8ea9ab1b",
"assets/assets/lottie/splash_loader.json": "4db5a31a377a827738a7704446773995",
"assets/assets/lottie/MyShiprocket.json": "036ae9367de5937acfd23f0fc062ac82",
"assets/assets/lottie/loader.json": "6addaf4e0907ab559e2e9378cffb52b1",
"assets/assets/lottie/splash_interaction.json": "ade5b0c1d56694d36e0e98a5366a4ca4",
"assets/assets/fonts/SF-Pro-Display-Semibold.ttf": "13c45d3c341ec721f3e3e61d9d8b25c0",
"assets/assets/fonts/SF-Pro-Display-Medium.ttf": "93d0b207fab03a9f28d1c55c15a4a752",
"assets/assets/fonts/Bennett-SemiBold.ttf": "c7f81099c5e23d1b4514c31a7f55107a",
"assets/assets/fonts/SF-Pro-Display-Regular.ttf": "cc997c405c04c807536bbb6c6bac1db8",
"assets/assets/fonts/SF-Pro-Display-Bold.ttf": "d8eb8101e8875853fad585395ccdb24a",
"assets/assets/fonts/Bennett-Medium.ttf": "9f5669e385957ad43676079eafbcb754",
"assets/assets/fonts/Bennett-Thin.ttf": "bbbedeb6343577f740dc8482fc05b5cf",
"assets/assets/fonts/Bennett-Regular.ttf": "b97bb61a0f371eb29a637f571887f88d",
"assets/assets/fonts/Bennett-Bold.ttf": "954ad06f6af68e716efa5322712e0473",
"assets/assets/fonts/poppins/poppins_semibold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/poppins_regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Bennett-Black.ttf": "985030a8f318f63e4a8ee82da8396ace",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
