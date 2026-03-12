/**
 * Toyota Car Card for Home Assistant
 * Displays vehicle data from the ha-toyota-na integration
 * https://github.com/widewing/ha-toyota-na
 */

const CARD_VERSION = "1.13.8";

const TRUCK_SVG = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="192.000000pt" height="486.000000pt" viewBox="0 0 192.000000 486.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,486.000000) scale(0.100000,-0.100000)"
fill="currentColor" stroke="none">
<path d="M513 4841 c-23 -11 -52 -35 -65 -54 -14 -22 -62 -59 -130 -102 -117
-72 -139 -96 -167 -177 -11 -29 -26 -70 -35 -90 -23 -53 -24 -808 -2 -883 8
-26 18 -72 22 -102 l6 -55 -71 -65 c-68 -62 -71 -67 -71 -109 0 -59 15 -63 85
-26 l55 30 0 -752 c0 -706 1 -754 18 -787 20 -39 17 -47 -35 -112 l-23 -29 0
-403 c0 -273 4 -413 11 -432 34 -86 41 -136 47 -365 7 -231 8 -237 31 -262 30
-32 89 -45 261 -56 173 -10 1029 -4 1137 9 165 20 173 33 173 298 0 195 11
286 44 365 14 32 16 97 16 436 l0 398 -38 59 -38 58 18 36 c17 33 18 81 18
783 0 411 2 748 5 748 3 0 28 -12 55 -26 64 -33 80 -27 80 28 0 40 -4 47 -70
109 -81 75 -83 87 -50 204 18 65 20 100 20 468 l0 399 -30 68 c-16 38 -30 74
-30 81 0 36 -58 93 -161 155 -75 46 -114 77 -129 100 -12 21 -37 42 -62 54
-40 18 -69 20 -448 20 -377 0 -408 -2 -447 -19z m892 -21 c16 -8 40 -31 53
-50 14 -22 61 -58 122 -96 55 -33 109 -69 120 -79 38 -35 84 -197 46 -166 -8
7 -22 35 -31 64 -9 29 -26 62 -38 74 -28 31 -136 100 -167 108 -14 3 -33 19
-42 35 -9 16 -41 45 -70 64 l-54 36 -382 0 -383 0 -44 -26 c-43 -25 -95 -76
-95 -94 0 -4 -12 -11 -27 -15 -16 -3 -60 -26 -98 -50 -71 -44 -104 -85 -119
-149 -4 -16 -14 -39 -23 -50 -14 -20 -15 -18 -10 31 7 65 38 125 79 156 18 13
72 48 120 77 48 29 90 60 93 70 8 24 45 56 80 68 20 7 169 10 435 9 337 -2
410 -5 435 -17z m-555 -45 c0 -12 -19 -15 -114 -15 -82 0 -116 3 -119 13 -3 9
-7 9 -17 0 -32 -30 2 -33 353 -33 203 0 358 4 367 10 13 8 13 11 1 22 -11 10
-14 10 -18 1 -3 -10 -37 -13 -119 -13 -95 0 -114 3 -114 15 0 13 22 15 136 15
l135 0 47 -32 c65 -44 80 -68 43 -68 -11 0 -22 -4 -26 -10 -4 -6 -15 -6 -32 1
-38 14 -535 22 -706 11 -215 -14 -239 -4 -144 61 l52 36 138 0 c115 1 137 -1
137 -14z m198 -2 c3 -10 -20 -13 -93 -13 -87 0 -96 2 -85 15 17 20 171 18 178
-2z m141 -103 l127 0 18 -67 c50 -181 99 -381 125 -508 32 -152 74 -415 68
-422 -2 -2 -31 4 -63 12 -255 68 -918 58 -1055 -16 -24 -12 -24 -9 1 156 32
218 110 564 180 807 l11 37 157 4 c86 2 190 2 231 0 41 -1 131 -3 200 -3z
m-705 -12 c-2 -7 -45 -40 -96 -73 -92 -60 -126 -98 -147 -167 -7 -20 -19 -42
-28 -49 -14 -12 -15 -8 -8 41 4 30 16 77 28 104 30 71 138 138 249 155 4 1 5
-5 2 -11z m96 8 c0 -3 -4 -16 -10 -30 -45 -119 -169 -686 -191 -877 -11 -91
-16 -108 -37 -123 -13 -10 -26 -15 -29 -12 -3 3 -12 38 -19 78 -10 55 -11 107
-3 213 5 77 13 205 19 285 5 80 12 186 16 236 l6 90 46 30 c26 16 65 43 88 60
45 34 114 64 114 50z m827 -17 c11 -4 24 -13 28 -19 3 -5 39 -33 79 -60 l74
-49 6 -83 c3 -46 10 -159 16 -253 6 -93 15 -222 20 -285 8 -114 8 -127 -11
-228 l-10 -52 -28 16 c-25 15 -28 24 -40 118 -25 198 -115 606 -197 895 -7 25
-3 25 63 0z m98 4 c11 -3 50 -23 88 -44 76 -45 99 -79 116 -174 14 -76 14 -80
-3 -65 -8 6 -22 33 -31 59 -20 61 -52 94 -152 159 -87 57 -113 87 -65 76 15
-3 36 -8 47 -11z m-1200 -205 c-2 -29 -9 -127 -15 -218 -6 -91 -15 -230 -21
-310 -11 -147 -1 -250 31 -334 10 -27 8 -33 -22 -65 -18 -20 -33 -37 -34 -38
-2 -9 -104 43 -104 53 0 7 8 46 17 86 14 61 17 134 17 428 0 195 2 338 4 317
3 -29 7 -37 20 -35 20 4 60 61 68 97 7 27 31 71 39 71 3 0 3 -24 0 -52z m1341
-6 c21 -57 62 -114 77 -109 7 2 15 19 18 38 4 19 4 -87 1 -236 -5 -278 7 -482
31 -553 14 -40 12 -62 -4 -62 -6 0 -29 -9 -51 -20 -23 -11 -42 -19 -42 -17 -1
1 -16 18 -34 38 -29 32 -32 39 -22 63 6 15 17 65 25 111 13 75 12 113 -5 372
-10 158 -22 321 -25 361 -7 83 4 88 31 14z m-1496 -422 c0 -246 -3 -340 -14
-385 -13 -55 -14 -28 -15 340 0 220 2 411 6 425 16 56 23 -63 23 -380z m1649
-35 c0 -412 -8 -471 -30 -232 -11 120 -6 568 8 630 16 79 23 -31 22 -398z
m-512 -290 c173 -21 322 -73 310 -108 -5 -16 -9 -16 -105 16 -123 40 -280 57
-532 57 -258 0 -415 -18 -544 -61 -49 -16 -91 -27 -94 -25 -11 12 10 37 48 56
54 27 145 50 260 65 138 18 510 18 657 0z m68 -78 c91 -17 196 -50 230 -73 19
-13 22 -20 15 -42 -42 -134 -89 -298 -100 -350 -13 -56 -17 -63 -35 -57 -62
17 -325 36 -505 36 -180 0 -443 -19 -505 -36 -18 -5 -23 5 -49 106 -15 62 -43
160 -62 218 -18 58 -31 108 -29 112 19 30 210 84 349 99 128 13 597 4 691 -13z
m-1052 -129 c3 -13 21 -77 42 -143 87 -286 97 -396 110 -1125 3 -184 8 -390
11 -457 l6 -123 -36 0 c-19 0 -56 -10 -81 -22 -45 -22 -45 -22 -100 -3 -50 16
-85 47 -85 74 0 5 19 12 43 16 92 14 143 34 157 61 21 38 22 1165 1 1269 -19
101 -57 253 -87 347 -22 69 -24 84 -13 104 16 30 25 30 32 2z m1346 -1 c11
-20 9 -36 -13 -103 -41 -131 -64 -223 -86 -343 -19 -106 -20 -155 -20 -665 0
-351 4 -565 11 -588 12 -46 39 -61 137 -78 39 -6 72 -13 72 -15 0 -20 -28 -55
-54 -67 -59 -29 -91 -31 -135 -9 -22 12 -57 21 -77 21 l-36 0 6 238 c4 130 11
413 17 627 11 434 17 513 54 665 32 131 96 340 105 340 4 0 12 -10 19 -23z
m-1420 -23 c9 -9 -23 -64 -41 -70 -25 -8 -24 -8 -33 53 l-7 53 39 -16 c21 -9
40 -18 42 -20z m1534 -22 c-6 -50 -15 -60 -39 -44 -13 8 -34 46 -34 60 0 9 71
43 77 38 1 -1 0 -26 -4 -54z m-1498 -69 c9 -32 19 -67 22 -77 5 -18 3 -18 -29
2 -37 23 -58 16 -58 -18 0 -10 -32 -35 -83 -63 -46 -26 -87 -47 -90 -47 -4 0
-7 16 -7 37 0 30 8 43 47 80 27 25 69 55 95 69 26 13 55 35 64 49 9 14 18 25
19 25 2 0 11 -26 20 -57z m1497 -21 c29 -17 72 -49 96 -71 34 -33 42 -47 42
-76 0 -19 -3 -35 -7 -35 -3 0 -44 21 -90 47 -51 28 -83 53 -83 63 0 34 -21 41
-57 19 -39 -24 -39 -22 -12 66 l20 66 20 -24 c10 -14 43 -39 71 -55z m-1461
-115 c6 -10 22 -73 36 -140 30 -146 47 -507 23 -507 -7 0 -39 10 -71 21 l-59
22 0 329 0 329 31 -18 c17 -10 35 -26 40 -36z m1377 -284 l-3 -327 -60 -23
c-32 -13 -61 -23 -62 -23 -2 0 -3 72 -3 161 0 168 8 242 41 399 17 77 26 99
47 117 15 13 30 23 35 23 4 0 6 -147 5 -327z m-1468 -53 l0 -350 -25 12 -26
12 1 320 c2 317 2 321 23 338 12 10 23 18 25 18 1 0 2 -157 2 -350z m1548 -3
c-3 -319 -3 -320 -25 -335 l-23 -14 0 351 0 351 25 -16 25 -16 -2 -321z m-503
203 c66 -6 144 -15 173 -21 48 -10 53 -13 48 -32 -13 -49 -46 -1008 -46 -1324
l0 -83 -156 0 c-152 0 -157 1 -186 25 -27 23 -38 25 -128 25 -90 0 -101 -2
-128 -25 -29 -24 -34 -25 -186 -25 l-156 0 0 28 c0 15 -7 295 -15 622 -14 555
-18 646 -31 742 l-5 36 54 12 c134 27 538 38 762 20z m-955 -514 c55 -20 65
-28 68 -50 3 -24 1 -25 -30 -19 -81 15 -103 28 -106 61 -2 18 -2 32 0 32 2 0
32 -11 68 -24z m1380 -9 c0 -32 -2 -34 -52 -47 -29 -7 -59 -15 -65 -17 -8 -3
-13 4 -13 19 0 24 18 35 128 77 1 1 2 -14 2 -32z m76 -286 c-3 -135 -5 -317
-6 -403 l0 -158 -41 0 c-58 0 -128 20 -138 39 -5 9 -12 34 -16 55 l-8 39 29
-21 c48 -33 81 -36 99 -9 21 33 35 218 35 479 0 195 2 218 17 227 10 5 21 7
26 4 5 -3 6 -116 3 -252z m-1545 -56 c6 -308 11 -364 35 -403 16 -24 48 -23
92 4 21 14 22 13 22 -19 0 -18 -6 -40 -12 -49 -16 -21 -80 -38 -140 -38 l-48
0 0 406 0 405 23 -3 22 -3 6 -300z m96 269 c48 -14 75 -36 61 -50 -3 -2 -34 1
-69 8 -54 11 -64 16 -67 36 -4 26 3 27 75 6z m1373 -8 c0 -21 -6 -25 -47 -30
-27 -4 -56 -9 -65 -12 -13 -4 -18 0 -18 15 0 14 8 22 28 27 15 3 38 10 52 14
41 14 50 11 50 -14z m-1376 -57 l61 -10 -3 -267 c-3 -236 -5 -270 -21 -291
-20 -29 -66 -44 -80 -28 -16 20 -31 222 -31 419 0 103 3 188 7 188 3 0 34 -5
67 -11z m1374 -276 c-3 -318 -7 -337 -55 -324 -16 4 -38 22 -50 41 -22 32 -23
40 -23 291 l0 258 38 6 c20 4 44 8 52 10 43 9 42 19 38 -282z m-614 -499 c41
-16 6 -24 -104 -24 -107 0 -145 8 -107 23 18 8 192 8 211 1z m-820 -457 c16
-831 22 -1022 30 -1036 6 -9 5 -12 -1 -8 -6 4 -21 32 -33 63 -18 42 -27 54
-40 51 -16 -4 -18 10 -23 147 -3 83 -10 165 -15 183 -8 23 -6 43 5 74 12 36
14 116 12 480 -1 240 1 441 5 447 5 8 13 8 30 1 l23 -11 7 -391z m1286 403
c10 -6 -189 -10 -570 -10 -381 0 -580 4 -570 10 9 6 229 10 570 10 341 0 561
-4 570 -10z m213 -472 c1 -332 5 -469 13 -479 9 -11 9 -30 -2 -79 -7 -36 -14
-120 -14 -187 0 -113 -1 -121 -19 -116 -14 4 -23 -7 -41 -51 -12 -31 -25 -58
-29 -60 -3 -3 -3 41 1 97 7 102 29 1056 28 1238 0 90 1 97 23 106 12 6 26 7
30 3 5 -4 9 -217 10 -472z m-1439 300 c10 -206 22 -1308 15 -1308 -25 0 -31
81 -44 630 -8 316 -15 630 -15 698 0 113 1 122 19 122 17 0 19 -12 25 -142z
m1286 122 c0 -20 -5 -20 -632 -18 -593 3 -633 4 -636 21 -3 16 32 17 632 17
630 0 636 0 636 -20z m66 -267 c-4 -159 -11 -474 -16 -702 -8 -351 -12 -418
-26 -438 -8 -14 -17 -23 -19 -21 -2 2 2 328 8 726 l11 722 24 0 25 0 -7 -287z
m-1498 -168 c1 -381 -4 -474 -23 -445 -16 24 -19 817 -3 854 l13 31 6 -30 c4
-16 7 -201 7 -410z m1642 0 c0 -273 -4 -402 -12 -425 -10 -30 -12 -32 -19 -14
-9 23 -12 826 -2 850 6 16 7 16 20 -2 10 -14 13 -98 13 -409z m-1340 340 l0
-55 -65 0 -65 0 0 55 0 55 65 0 65 0 0 -55z m980 -262 l0 -318 70 -105 c69
-104 83 -143 56 -153 -8 -3 -19 -15 -25 -26 -9 -16 -6 -25 15 -50 l26 -31 -8
-160 -7 -160 -607 0 -607 0 -7 31 c-3 17 -6 91 -6 164 0 119 2 134 20 150 11
10 20 29 20 41 0 13 -9 29 -20 36 -32 20 -24 47 48 153 l67 100 3 323 3 322
479 0 480 0 0 -317z m150 262 l0 -55 -65 0 -65 0 0 55 0 55 65 0 65 0 0 -55z
m-1135 -331 l0 -250 -54 -82 c-30 -46 -55 -81 -56 -80 -1 2 -5 104 -9 228 l-7
225 23 10 c34 15 36 58 4 83 -22 17 -26 28 -26 71 l0 52 63 -3 62 -3 0 -251z
m1135 205 c0 -43 -4 -54 -25 -71 -31 -24 -32 -61 -2 -85 l23 -18 -6 -225 -5
-225 -57 89 -58 89 0 248 0 249 65 0 65 0 0 -51z m-1233 -123 c-11 -27 -27
-17 -27 16 0 30 1 31 16 16 9 -9 14 -24 11 -32z m1233 13 c0 -20 -4 -29 -12
-27 -18 6 -22 39 -6 49 18 12 18 12 18 -22z m-1230 -650 c0 -10 -4 -19 -10
-19 -5 0 -10 12 -10 26 0 14 4 23 10 19 6 -3 10 -15 10 -26z m1220 6 c0 -14
-4 -25 -10 -25 -11 0 -14 33 -3 43 11 11 13 8 13 -18z m-1296 -464 c42 -40 33
-56 -15 -29 -48 27 -64 49 -73 99 -12 68 4 74 34 12 15 -32 39 -69 54 -82z
m1423 16 c-17 -25 -84 -63 -93 -54 -4 4 9 24 28 45 19 22 44 61 54 88 l19 49
3 -53 c2 -35 -2 -62 -11 -75z m-137 14 l0 -29 -147 -8 c-191 -11 -735 -11
-925 0 l-148 8 0 29 0 29 610 0 610 0 0 -29z m160 -43 c-16 -56 -59 -67 -308
-77 l-162 -6 0 33 0 32 68 0 c38 0 110 3 160 6 90 7 92 6 92 -15 0 -12 7 -24
15 -27 20 -8 116 46 128 73 15 33 18 23 7 -19z m-1451 -43 c36 -16 44 -17 52
-4 5 8 6 20 4 28 -5 12 11 13 92 8 54 -4 128 -7 166 -7 l67 0 0 -32 0 -33
-167 7 c-163 6 -269 20 -285 36 -5 5 -12 23 -18 40 l-9 32 28 -28 c16 -15 47
-36 70 -47z m959 -12 l-3 -28 -277 -3 -278 -2 0 30 0 30 281 0 280 0 -3 -27z"/>
<path d="M386 4467 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z"/>
<path d="M1533 4475 c0 -8 4 -12 9 -9 5 3 6 10 3 15 -9 13 -12 11 -12 -6z"/>
<path d="M226 3562 c-3 -5 1 -9 9 -9 8 0 12 4 9 9 -3 4 -7 8 -9 8 -2 0 -6 -4
-9 -8z"/>
<path d="M375 3531 c-3 -5 -2 -12 3 -15 5 -3 9 1 9 9 0 17 -3 19 -12 6z"/>
<path d="M1539 3473 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z"/>
<path d="M1443 3225 c0 -8 4 -12 9 -9 5 3 6 10 3 15 -9 13 -12 11 -12 -6z"/>
<path d="M1440 3176 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21
13z"/>
<path d="M504 3148 l-19 -23 23 19 c21 18 27 26 19 26 -2 0 -12 -10 -23 -22z"/>
<path d="M1405 3150 c10 -11 20 -20 23 -20 3 0 -3 9 -13 20 -10 11 -20 20 -23
20 -3 0 3 -9 13 -20z"/>
<path d="M300 2670 c6 -11 13 -20 16 -20 2 0 0 9 -6 20 -6 11 -13 20 -16 20
-2 0 0 -9 6 -20z"/>
<path d="M1570 2896 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z"/>
<path d="M646 2911 c-36 -5 -55 -15 -72 -35 -23 -26 -24 -33 -24 -189 0 -131
3 -167 16 -185 l15 -22 372 0 c205 0 377 4 383 8 28 18 34 56 34 206 0 233 15
225 -415 224 -143 0 -282 -4 -309 -7z m593 -20 c108 -10 111 -15 111 -203 0
-84 -5 -158 -10 -169 -10 -18 -25 -19 -378 -19 -273 0 -371 3 -380 12 -18 18
-17 328 2 353 9 13 32 20 82 25 94 10 482 10 573 1z"/>
<path d="M584 2388 c-5 -7 -10 -149 -12 -315 -3 -232 -2 -306 8 -318 15 -18
61 -20 78 -3 13 13 16 453 3 578 -6 64 -6 65 -38 68 -18 2 -35 -2 -39 -10z
m58 -313 l3 -305 -27 0 -28 0 0 223 c0 122 3 259 7 305 5 70 9 82 24 82 17 0
19 -18 21 -305z"/>
<path d="M806 2339 c-3 -34 -6 -180 -6 -325 l0 -264 24 -6 c14 -3 34 -3 45 1
21 6 21 10 19 328 l-3 322 -36 3 -36 3 -7 -62z m64 -264 l0 -305 -25 0 -25 0
0 238 c0 301 6 372 31 372 18 0 19 -15 19 -305z"/>
<path d="M1034 2388 c-5 -7 -10 -149 -12 -315 -5 -323 -3 -333 43 -333 57 0
55 -11 54 284 0 149 -4 294 -7 321 -7 47 -9 50 -39 53 -18 2 -35 -2 -39 -10z
m60 -85 c3 -42 6 -179 6 -305 l0 -228 -27 0 -28 0 3 305 c2 288 4 305 21 305
15 0 19 -11 25 -77z"/>
<path d="M1257 2324 c-4 -42 -7 -186 -7 -319 0 -265 1 -270 57 -263 l28 3 0
325 0 325 -36 3 -36 3 -6 -77z m63 -249 l0 -305 -25 0 -25 0 0 244 c0 301 6
366 31 366 18 0 19 -14 19 -305z"/>
<path d="M291 1967 c-8 -10 -7 -14 2 -14 8 0 14 6 14 14 0 7 -1 13 -2 13 -2 0
-8 -6 -14 -13z"/>
<path d="M1580 1950 c-9 -6 -10 -10 -3 -10 6 0 15 5 18 10 8 12 4 12 -15 0z"/>
<path d="M570 1130 c0 -227 4 -350 10 -350 6 0 10 123 10 350 0 227 -4 350
-10 350 -6 0 -10 -123 -10 -350z"/>
<path d="M640 896 c0 -458 -3 -585 -12 -589 -7 -2 -10 -8 -6 -12 4 -4 14 -5
23 -2 13 6 15 74 15 597 0 387 -3 590 -10 590 -7 0 -10 -201 -10 -584z"/>
<path d="M710 896 c0 -458 -3 -585 -12 -589 -7 -2 -10 -8 -6 -12 4 -4 14 -5
23 -2 13 6 15 74 15 597 0 387 -3 590 -10 590 -7 0 -10 -201 -10 -584z"/>
<path d="M780 895 c0 -513 -2 -585 -15 -585 -8 0 -15 -5 -15 -11 0 -6 10 -9
23 -7 l22 3 3 593 c1 393 -1 592 -8 592 -7 0 -10 -199 -10 -585z"/>
<path d="M850 895 c0 -513 -2 -585 -15 -585 -8 0 -15 -5 -15 -11 0 -6 10 -9
23 -7 l22 3 3 593 c1 393 -1 592 -8 592 -7 0 -10 -199 -10 -585z"/>
<path d="M916 1473 c-3 -3 -6 -267 -6 -585 0 -379 -3 -578 -10 -578 -5 0 -10
-4 -10 -10 0 -16 37 -11 44 6 9 25 7 1162 -3 1168 -4 3 -11 3 -15 -1z"/>
<path d="M982 888 l3 -593 23 -3 c12 -2 22 1 22 7 0 6 -7 11 -15 11 -13 0 -15
72 -15 585 0 386 -3 585 -10 585 -7 0 -9 -199 -8 -592z"/>
<path d="M1052 888 l3 -593 23 -3 c12 -2 22 1 22 7 0 6 -7 11 -15 11 -13 0
-15 72 -15 585 0 386 -3 585 -10 585 -7 0 -9 -199 -8 -592z"/>
<path d="M1120 890 c0 -523 2 -591 15 -597 9 -3 19 -2 23 2 4 4 1 10 -5 12
-10 4 -13 131 -13 589 0 383 -3 584 -10 584 -7 0 -10 -203 -10 -590z"/>
<path d="M1190 890 c0 -523 2 -591 15 -597 9 -3 19 -2 23 2 4 4 1 10 -5 12
-10 4 -13 131 -13 589 0 383 -3 584 -10 584 -7 0 -10 -203 -10 -590z"/>
<path d="M1260 890 c0 -523 2 -591 15 -597 9 -3 19 -2 23 2 4 4 1 10 -5 12
-10 4 -13 131 -13 589 0 383 -3 584 -10 584 -7 0 -10 -203 -10 -590z"/>
<path d="M1325 1467 c-3 -6 -4 -162 -3 -346 2 -257 6 -335 16 -339 9 -3 12 71
12 347 0 235 -3 351 -10 351 -6 0 -13 -6 -15 -13z"/>
<path d="M506 893 c-3 -3 -6 -136 -6 -295 0 -185 -4 -288 -10 -288 -5 0 -10
-4 -10 -10 0 -16 37 -11 44 6 9 25 7 582 -3 588 -4 3 -11 3 -15 -1z"/>
<path d="M1396 893 c-8 -8 -8 -566 0 -587 7 -17 44 -22 44 -6 0 6 -4 10 -10
10 -6 0 -10 103 -10 289 0 263 -4 314 -24 294z"/>
<path d="M436 793 c-3 -3 -6 -114 -6 -245 0 -152 -4 -238 -10 -238 -5 0 -10
-4 -10 -10 0 -16 37 -11 44 6 9 25 7 482 -3 488 -4 3 -11 3 -15 -1z"/>
<path d="M1468 794 c-5 -4 -8 -117 -8 -251 0 -212 2 -244 16 -250 8 -3 20 -1
27 6 8 8 7 11 -6 11 -15 0 -17 23 -19 246 -2 135 -6 242 -10 238z"/>
<path d="M570 501 c0 -142 -3 -190 -12 -194 -7 -2 -10 -8 -6 -12 4 -4 14 -5
23 -2 13 6 15 35 15 202 0 123 -4 195 -10 195 -6 0 -10 -70 -10 -189z"/>
<path d="M1327 683 c-9 -8 -9 -356 -1 -377 7 -17 44 -22 44 -6 0 6 -4 10 -10
10 -6 0 -10 70 -10 190 0 174 -4 203 -23 183z"/>
<path d="M1163 245 c0 -8 4 -12 9 -9 5 3 6 10 3 15 -9 13 -12 11 -12 -6z"/>
<path d="M1485 251 c-3 -5 -2 -12 3 -15 5 -3 9 1 9 9 0 17 -3 19 -12 6z"/>
<path d="M166 4678 c3 -5 10 -6 15 -3 13 9 11 12 -6 12 -8 0 -12 -4 -9 -9z"/>
<path d="M1811 1647 c-8 -10 -7 -14 2 -14 8 0 14 6 14 14 0 7 -1 13 -2 13 -2
0 -8 -6 -14 -13z"/>
<path d="M1820 490 c-6 -11 -8 -20 -6 -20 3 0 10 9 16 20 6 11 8 20 6 20 -3 0
-10 -9 -16 -20z"/>
</g>
</svg>`;

class ToyotaCarCard extends HTMLElement {
  static get properties() {
    return { hass: {}, config: {} };
  }

  set hass(hass) {
    this._hass = hass;
    if (this.shadowRoot) {
      this._render();
    }
  }

  setConfig(config) {
    if (!config.entities || Object.keys(config.entities).length === 0) {
      throw new Error("Please define at least one entity in 'entities'");
    }
    this._config = {
      title: config.title || "Toyota",
      entities: config.entities || {},
      image_url: config.image_url || null,
      show_fuel: config.show_fuel !== false,
      show_odometer: config.show_odometer !== false,
      show_tires: config.show_tires !== false,
      show_doors: config.show_doors !== false,
      show_windows: config.show_windows !== false,
      show_locks: config.show_locks !== false,
      show_ev: config.show_ev || false,
      show_speed: config.show_speed || false,
      show_service: config.show_service || false,
      show_map: config.show_map !== false,
      show_buttons: config.show_buttons !== false,
      lock_entity: config.lock_entity || null,
      engine_status_entity: config.engine_status_entity || null,
      vehicle: config.vehicle || null,
      ...config,
    };

    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }
    // Force full rebuild when config changes
    const card = this.shadowRoot.querySelector("ha-card");
    if (card) card.remove();
    this._mapCard = null;
    this._mapCardLoading = false;
    this._render();
  }

  getCardSize() {
    if (!this._config) return 8;
    let size = 2; // header
    size += 8; // vehicle image
    if (this._config.show_fuel !== false) size += 1;
    if (this._config.show_ev === true) size += 1;
    if (this._config.show_odometer !== false || this._config.show_speed === true || this._config.show_service === true) size += 1;
    if (this._config.show_buttons !== false) size += 1;
    if (this._config.show_map !== false) size += 1; // map header only (map is beside, not below)
    return size;
  }

  _getEntityId(type, name) {
    if (this._config.entities && this._config.entities[name]) {
      return this._config.entities[name];
    }
    return null;
  }

  _getState(entityId) {
    if (!this._hass || !this._hass.states[entityId]) return null;
    return this._hass.states[entityId];
  }

  _getStateValue(entityId) {
    const state = this._getState(entityId);
    if (!state || state.state === "unavailable" || state.state === "unknown")
      return null;
    return state.state;
  }

  _formatNumber(val) {
    if (val === null || val === undefined) return "—";
    const num = parseFloat(val);
    if (isNaN(num)) return val;
    return num.toLocaleString(undefined, { maximumFractionDigits: 1 });
  }

  _render() {
    if (!this._config || !this._hass) return;

    // Sensor entity IDs
    const fuelId = this._getEntityId("sensor", "fuel_level");
    const odometerId = this._getEntityId("sensor", "odometer");
    const distToEmptyId = this._getEntityId("sensor", "distance_to_empty");
    const speedId = this._getEntityId("sensor", "speed");
    const nextServiceId = this._getEntityId("sensor", "next_service");
    const lastUpdateId = this._getEntityId("sensor", "last_update_timestamp");

    // Tire entities
    const flTireId = this._getEntityId("sensor", "front_driver_tire");
    const frTireId = this._getEntityId("sensor", "front_passenger_tire");
    const rlTireId = this._getEntityId("sensor", "rear_driver_tire");
    const rrTireId = this._getEntityId("sensor", "rear_passenger_tire");

    // Door binary sensors
    const doorFL = this._getEntityId("binary_sensor", "front_driver_door");
    const doorFR = this._getEntityId("binary_sensor", "front_passenger_door");
    const doorRL = this._getEntityId("binary_sensor", "rear_driver_door");
    const doorRR = this._getEntityId("binary_sensor", "rear_passenger_door");

    // Window binary sensors
    const winFL = this._getEntityId("binary_sensor", "front_driver_window");
    const winFR = this._getEntityId("binary_sensor", "front_passenger_window");
    const winRL = this._getEntityId("binary_sensor", "rear_driver_window");
    const winRR = this._getEntityId("binary_sensor", "rear_passenger_window");
    const moonroof = this._getEntityId("binary_sensor", "moonroof");

    // Lock binary sensors
    const lockFL = this._getEntityId(
      "binary_sensor",
      "front_driver_door_lock"
    );
    const lockFR = this._getEntityId(
      "binary_sensor",
      "front_passenger_door_lock"
    );
    const lockRL = this._getEntityId(
      "binary_sensor",
      "rear_driver_door_lock"
    );
    const lockRR = this._getEntityId(
      "binary_sensor",
      "rear_passenger_door_lock"
    );
    const lockTrunk = this._getEntityId("binary_sensor", "trunk_door_lock");

    // Other binary sensors
    const hoodId = this._getEntityId("binary_sensor", "hood");
    const trunkId = this._getEntityId("binary_sensor", "trunk");

    // EV entities
    const evBatteryId = this._getEntityId("sensor", "ev_battery_level");
    const evRangeId = this._getEntityId("sensor", "ev_range");

    // Location entities
    const currentLocationId = this._config.entities.current_location || null;
    const lastParkedId = this._config.entities.last_parked_location || null;

    // Gather values
    const fuel = this._getStateValue(fuelId);
    const odometer = this._getStateValue(odometerId);
    const distToEmpty = this._getStateValue(distToEmptyId);
    const speed = this._getStateValue(speedId);
    const nextService = this._getStateValue(nextServiceId);
    const lastUpdate = this._getStateValue(lastUpdateId);

    const odometerUnit =
      this._getState(odometerId)?.attributes?.unit_of_measurement || "mi";
    const distToEmptyUnit =
      this._getState(distToEmptyId)?.attributes?.unit_of_measurement || "mi";

    const flTire = this._getStateValue(flTireId);
    const frTire = this._getStateValue(frTireId);
    const rlTire = this._getStateValue(rlTireId);
    const rrTire = this._getStateValue(rrTireId);
    const tireUnit =
      this._getState(flTireId)?.attributes?.unit_of_measurement ||
      this._getState(frTireId)?.attributes?.unit_of_measurement || "psi";

    const evBattery = this._getStateValue(evBatteryId);
    const evRange = this._getStateValue(evRangeId);
    const evRangeUnit =
      this._getState(evRangeId)?.attributes?.unit_of_measurement || "mi";

    // Fuel bar color
    const fuelNum = parseFloat(fuel);
    let fuelColor = "var(--ccc-ok, #4caf50)";
    if (!isNaN(fuelNum)) {
      if (fuelNum <= 15) fuelColor = "var(--ccc-critical, #f44336)";
      else if (fuelNum <= 30) fuelColor = "var(--ccc-warning, #ff9800)";
    }

    // Tire pressure color helper
    const tireColor = (val) => {
      if (val === null) return "var(--secondary-text-color, #888)";
      const v = parseFloat(val);
      if (isNaN(v)) return "var(--secondary-text-color, #888)";
      if (v < 28 || v > 38) return "var(--ccc-critical, #f44336)";
      if (v < 30 || v > 36) return "var(--ccc-warning, #ff9800)";
      return "var(--ccc-ok, #4caf50)";
    };

    // Build HTML
    const vehicleImg = this._config.image_url
      ? `<img src="${this._encodeImageUrl(this._config.image_url)}" alt="Vehicle" />`
      : TRUCK_SVG;

    // Build overlay indicators positioned on the SVG
    const makeOverlay = (state, label, icon, cssClass, openText = "Open", closedText = "Closed") => {
      if (state === null) return "";
      const isAlert = state === "on";
      const color = isAlert ? "var(--ccc-warning, #ff9800)" : "var(--ccc-ok, #4caf50)";
      return `<div class="ov ${cssClass}" title="${label}: ${isAlert ? openText : closedText}">
        <ha-icon icon="${icon}" style="--mdc-icon-size: 18px; color: ${color};"></ha-icon>
        <span class="ov-label" style="color: ${color};">${label}</span>
      </div>`;
    };

    const makeTireOverlay = (val, label, cssClass) => {
      if (val === null) return "";
      const color = tireColor(val);
      return `<div class="ov ${cssClass}" title="${label}: ${val} ${tireUnit}">
        <span class="ov-tire" style="color: ${color};">${this._formatNumber(val)}</span>
        <span class="ov-label" style="color: ${color};">${tireUnit}</span>
      </div>`;
    };

    let overlays = "";

    // Tire overlays – at wheel positions
    if (this._config.show_tires !== false) {
      overlays += makeTireOverlay(flTire, "Front Driver Tire", "ov-tire-fl");
      overlays += makeTireOverlay(frTire, "Front Passenger Tire", "ov-tire-fr");
      overlays += makeTireOverlay(rlTire, "Rear Driver Tire", "ov-tire-rl");
      overlays += makeTireOverlay(rrTire, "Rear Passenger Tire", "ov-tire-rr");
    }

    // Door overlays – on the door areas
    if (this._config.show_doors !== false) {
      overlays += makeOverlay(this._getStateValue(doorFL), "Door", "mdi:car-door", "ov-door-fl");
      overlays += makeOverlay(this._getStateValue(doorFR), "Door", "mdi:car-door", "ov-door-fr");
      overlays += makeOverlay(this._getStateValue(doorRL), "Door", "mdi:car-door", "ov-door-rl");
      overlays += makeOverlay(this._getStateValue(doorRR), "Door", "mdi:car-door", "ov-door-rr");
      overlays += makeOverlay(this._getStateValue(hoodId), "Hood", "mdi:car-back", "ov-hood");
      overlays += makeOverlay(this._getStateValue(trunkId), "Trunk", "mdi:car-back", "ov-trunk");
    }

    // Window overlays – on the window areas
    if (this._config.show_windows !== false) {
      overlays += makeOverlay(this._getStateValue(winFL), "Window", "mdi:car-windshield-outline", "ov-win-fl");
      overlays += makeOverlay(this._getStateValue(winFR), "Window", "mdi:car-windshield-outline", "ov-win-fr");
      overlays += makeOverlay(this._getStateValue(winRL), "Window", "mdi:car-windshield-outline", "ov-win-rl");
      overlays += makeOverlay(this._getStateValue(winRR), "Window", "mdi:car-windshield-outline", "ov-win-rr");
      overlays += makeOverlay(this._getStateValue(moonroof), "Moonroof", "mdi:car-select", "ov-moonroof");
    }

    // Lock overlays – near the door handles
    if (this._config.show_locks !== false) {
      const lfl = this._getStateValue(lockFL);
      const lfr = this._getStateValue(lockFR);
      const lrl = this._getStateValue(lockRL);
      const lrr = this._getStateValue(lockRR);
      const ltr = this._getStateValue(lockTrunk);
      overlays += makeOverlay(lfl, "Lock", lfl === "on" ? "mdi:lock-open-variant" : "mdi:lock", "ov-lock-fl", "Unlocked", "Locked");
      overlays += makeOverlay(lfr, "Lock", lfr === "on" ? "mdi:lock-open-variant" : "mdi:lock", "ov-lock-fr", "Unlocked", "Locked");
      overlays += makeOverlay(lrl, "Lock", lrl === "on" ? "mdi:lock-open-variant" : "mdi:lock", "ov-lock-rl", "Unlocked", "Locked");
      overlays += makeOverlay(lrr, "Lock", lrr === "on" ? "mdi:lock-open-variant" : "mdi:lock", "ov-lock-rr", "Unlocked", "Locked");
      overlays += makeOverlay(ltr, "Trunk Lock", ltr === "on" ? "mdi:lock-open-variant" : "mdi:lock", "ov-lock-trunk", "Unlocked", "Locked");
    }

    const imageSection = `<div class="car-image-container">
      <div class="car-image">${vehicleImg}</div>
      ${overlays}
    </div>`;

    // Gather location tracker IDs for the map section
    let mapTrackerIds = [];
    let mapHistoryEntityId = null;
    if (this._config.show_map !== false) {
      if (currentLocationId && this._getState(currentLocationId)) {
        mapTrackerIds.push(currentLocationId);
        mapHistoryEntityId = currentLocationId;
      }
      if (lastParkedId && this._getState(lastParkedId)) {
        mapTrackerIds.push(lastParkedId);
      }
    }

    // Action buttons section
    let buttonsSection = "";
    if (this._config.show_buttons !== false) {
      const lockEntity = this._config.lock_entity;
      let buttons = "";
      if (lockEntity) {
        const lockState = this._getState(lockEntity);
        const isLocked = lockState && lockState.state === "locked";
        buttons += `<button class="action-btn" data-action="lock" title="${isLocked ? 'Unlock' : 'Lock'} Doors">
          <ha-icon icon="mdi:${isLocked ? 'lock' : 'lock-open-variant'}" style="--mdc-icon-size: 20px;"></ha-icon>
          <span>${isLocked ? 'Unlock' : 'Lock'} Doors</span>
        </button>`;
      }
      const engineEntity = this._config.engine_status_entity;
      const engineState = engineEntity ? this._getState(engineEntity) : null;
      const engineRunning = engineState && engineState.state === "on";
      buttons += `<button class="action-btn ${engineRunning ? 'action-btn-stop' : ''}" data-action="engine_toggle" title="${engineRunning ? 'Stop' : 'Start'} Engine">
        <ha-icon icon="mdi:${engineRunning ? 'engine-off' : 'engine'}" style="--mdc-icon-size: 20px;"></ha-icon>
        <span>${engineRunning ? 'Stop' : 'Start'} Engine</span>
      </button>`;
      if (buttons) {
        buttonsSection = `<div class="actions-row">${buttons}</div>`;
      }
    }

    const fuelSection =
      this._config.show_fuel && fuel !== null
        ? `<div class="stat-row fuel-row">
             <div class="stat-icon"><ha-icon icon="mdi:gas-station"></ha-icon></div>
             <div class="stat-bar-container">
               <div class="stat-bar" style="width: ${Math.min(fuelNum, 100)}%; background: ${fuelColor};"></div>
             </div>
             <div class="stat-value">${this._formatNumber(fuel)}%</div>
           </div>
           ${
             distToEmpty !== null
               ? `<div class="stat-detail">
                    <ha-icon icon="mdi:map-marker-distance"></ha-icon>
                    <span>${this._formatNumber(distToEmpty)} ${this._escapeHtml(distToEmptyUnit)} to empty</span>
                  </div>`
               : ""
           }`
        : "";

    const evSection =
      this._config.show_ev && evBattery !== null
        ? `<div class="stat-row fuel-row">
             <div class="stat-icon"><ha-icon icon="mdi:ev-station"></ha-icon></div>
             <div class="stat-bar-container">
               <div class="stat-bar" style="width: ${Math.min(parseFloat(evBattery), 100)}%; background: ${fuelColor};"></div>
             </div>
             <div class="stat-value">${this._formatNumber(evBattery)}%</div>
           </div>
           ${
             evRange !== null
               ? `<div class="stat-detail">
                    <ha-icon icon="mdi:map-marker-distance"></ha-icon>
                    <span>${this._formatNumber(evRange)} ${this._escapeHtml(evRangeUnit)} EV range</span>
                  </div>`
               : ""
           }`
        : "";

    const odometerSection =
      this._config.show_odometer && odometer !== null
        ? `<div class="info-chip">
             <ha-icon icon="mdi:counter"></ha-icon>
             <span>${this._formatNumber(odometer)} ${this._escapeHtml(odometerUnit)}</span>
           </div>`
        : "";

    const speedSection =
      this._config.show_speed && speed !== null
        ? `<div class="info-chip">
             <ha-icon icon="mdi:speedometer"></ha-icon>
             <span>${this._formatNumber(speed)} km/h</span>
           </div>`
        : "";

    const serviceSection =
      this._config.show_service && nextService !== null
        ? `<div class="info-chip">
             <ha-icon icon="mdi:wrench-clock"></ha-icon>
             <span>${this._formatNumber(nextService)} ${this._escapeHtml(odometerUnit)}</span>
           </div>`
        : "";

    // One-time: create persistent card structure (CSS + map container never destroyed)
    if (!this.shadowRoot.querySelector("ha-card")) {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            --ccc-ok: #4caf50;
            --ccc-warning: #ff9800;
            --ccc-critical: #f44336;
            display: block;
          }
          ha-card {
            padding: 16px;
            overflow: visible;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            gap: 16px;
          }
          #card-content {
            flex: 1;
            min-width: 0;
          }
          #card-map {
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
          }
          .header .title {
            font-size: 1.2em;
            font-weight: 500;
            color: var(--primary-text-color);
          }
          .header .last-update {
            font-size: 0.75em;
            color: var(--secondary-text-color);
            opacity: 0.7;
          }
          .car-image {
            display: flex;
            justify-content: center;
            margin: 8px 0 16px 0;
          }
          .car-image img {
            max-width: 100%;
            max-height: 160px;
            object-fit: contain;
            border-radius: 8px;
          }
          .car-image svg {
            max-width: 320px;
            width: 100%;
            height: auto;
          }

          /* Fuel / EV bar */
          .fuel-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 4px;
          }
          .stat-icon {
            flex-shrink: 0;
            color: var(--secondary-text-color);
            --mdc-icon-size: 20px;
          }
          .stat-bar-container {
            flex: 1;
            height: 10px;
            background: var(--divider-color, #e0e0e0);
            border-radius: 5px;
            overflow: hidden;
          }
          .stat-bar {
            height: 100%;
            border-radius: 5px;
            transition: width 0.5s ease;
          }
          .stat-value {
            font-weight: 600;
            font-size: 0.95em;
            min-width: 42px;
            text-align: right;
            color: var(--primary-text-color);
          }
          .stat-detail {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 0.8em;
            color: var(--secondary-text-color);
            margin: 2px 0 10px 30px;
            --mdc-icon-size: 16px;
          }

          /* Info chips */
          .info-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 12px 0;
          }
          .info-chip {
            display: flex;
            align-items: center;
            gap: 6px;
            background: var(--card-background-color, var(--ha-card-background, #f5f5f5));
            border: 1px solid var(--divider-color, #e0e0e0);
            border-radius: 16px;
            padding: 4px 12px;
            font-size: 0.85em;
            color: var(--primary-text-color);
            --mdc-icon-size: 18px;
          }

          /* SVG Car Styles */
          .car-image svg {
            color: var(--primary-text-color);
            opacity: 0.7;
          }

          /* Vehicle image container with overlays */
          .car-image-container {
            position: relative;
            display: flex;
            justify-content: center;
            margin: 8px 0 16px 0;
            overflow: visible;
          }
          .car-image-container .car-image {
            margin: 0;
          }

          /* Overlay indicator base */
          .ov {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1px;
            background: transparent;
            z-index: 2;
            cursor: default;
            pointer-events: auto;
          }
          .ov-label {
            font-size: 9px;
            font-weight: 600;
            white-space: nowrap;
            text-shadow: 0 0 3px var(--card-background-color, #fff), 0 0 6px var(--card-background-color, #fff);
          }
          .ov-tire {
            font-size: 13px;
            font-weight: 700;
            text-shadow: 0 0 3px var(--card-background-color, #fff), 0 0 6px var(--card-background-color, #fff);
          }

          /* Tire positions – at the wheels */
          .ov-tire-fl { top: 15%; left: 18%; }
          .ov-tire-fr { top: 15%; right: 18%; }
          .ov-tire-rl { top: 75%; left: 18%; }
          .ov-tire-rr { top: 75%; right: 18%; }

          /* Door positions – on the door panels */
          .ov-door-fl { top: 33%; left: 10%; }
          .ov-door-fr { top: 33%; right: 10%; }
          .ov-door-rl { top: 48%; left: 10%; }
          .ov-door-rr { top: 48%; right: 10%; }

          /* Hood and trunk – top and bottom center */
          .ov-hood { top: 10%; left: 50%; transform: translateX(-50%); }
          .ov-trunk { bottom: 2%; left: 50%; transform: translateX(-50%); }

          /* Window positions – inside of doors */
          .ov-win-fl { top: 35%; left: 18%; }
          .ov-win-fr { top: 35%; right: 18%; }
          .ov-win-rl { top: 50%; left: 18%; }
          .ov-win-rr { top: 50%; right: 18%; }

          /* Moonroof – center-top */
          .ov-moonroof { top: 42%; left: 50%; transform: translateX(-50%); }

          /* Lock positions – below doors */
          .ov-lock-fl { top: 40%; left: 10%; }
          .ov-lock-fr { top: 40%; right: 10%; }
          .ov-lock-rl { top: 55%; left: 10%; }
          .ov-lock-rr { top: 55%; right: 10%; }
          .ov-lock-trunk { bottom: 8%; left: 50%; transform: translateX(-50%); }

          /* Map section */
          .map-section {
            margin: 0;
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          .map-header {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 0.85em;
            color: var(--primary-text-color);
            margin-bottom: 8px;
            --mdc-icon-size: 18px;
          }
          .map-labels {
            display: flex;
            gap: 14px;
            align-items: center;
            flex-wrap: wrap;
          }
          .map-labels span {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 0.9em;
          }
          .map-labels a {
            color: var(--primary-color, #03a9f4);
            text-decoration: none;
            font-size: 0.9em;
            display: flex;
            align-items: center;
            gap: 4px;
          }
          .map-labels a:hover {
            text-decoration: underline;
          }
          .map-wrap {
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid var(--divider-color, #e0e0e0);
            flex: 1;
            position: relative;
          }
          .map-wrap > * {
            height: 100% !important;
          }

          /* Action buttons */
          .actions-row {
            display: flex;
            gap: 10px;
            margin: 12px 0;
          }
          .action-btn {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 10px 16px;
            border: 1px solid var(--divider-color, #e0e0e0);
            border-radius: 10px;
            background: var(--card-background-color, var(--ha-card-background, #f5f5f5));
            color: var(--primary-text-color);
            font-size: 0.85em;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.2s, box-shadow 0.2s;
          }
          .action-btn:hover {
            background: var(--primary-color, #03a9f4);
            color: #fff;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          }
          .action-btn:active {
            transform: scale(0.97);
          }
          .action-btn-stop {
            border-color: var(--ccc-critical, #f44336);
            color: var(--ccc-critical, #f44336);
          }
          .action-btn-stop:hover {
            background: var(--ccc-critical, #f44336);
            color: #fff;
          }
        </style>
        <ha-card>
            <div id="card-content"></div>
            <div id="card-map"></div>
        </ha-card>
        `;
    }

    // Update dynamic content (everything except persistent map embed)
    this.shadowRoot.getElementById("card-content").innerHTML = `
      <div class="header">
        <span class="title">${this._escapeHtml(this._config.title)}</span>
        ${lastUpdate ? `<span class="last-update">Updated: ${this._formatTimestamp(lastUpdate)}</span>` : ""}
      </div>

      ${imageSection}
      ${fuelSection}
      ${evSection}

      <div class="info-chips">
        ${odometerSection}
        ${speedSection}
        ${serviceSection}
      </div>

      ${buttonsSection}
    `;

    // Update persistent map section (map element is never destroyed)
    const cardMapEl = this.shadowRoot.getElementById("card-map");
    if (mapTrackerIds.length > 0) {
      // Create map section structure once
      if (!cardMapEl.querySelector(".map-wrap")) {
        cardMapEl.innerHTML = `<div class="map-section">
          <div class="map-header" id="map-header-content"></div>
          <div class="map-wrap" id="map-container"></div>
        </div>`;
      }
      // Update header labels
      const headerContent = this.shadowRoot.getElementById("map-header-content");
      if (headerContent) {
        let locLabels = "";
        const curLoc = currentLocationId ? this._getState(currentLocationId) : null;
        const parkedLoc = lastParkedId ? this._getState(lastParkedId) : null;
        if (curLoc) {
          const curState = curLoc.state || "Current";
          const isZone = ["home", "not_home", "unknown", "unavailable"].includes(curState.toLowerCase()) === false
            || curState.toLowerCase() === "home";
          if (curState.toLowerCase() === "not_home" && curLoc.attributes && curLoc.attributes.latitude) {
            const lat = curLoc.attributes.latitude;
            const lon = curLoc.attributes.longitude;
            const mapsUrl = `https://www.google.com/maps?q=${lat},${lon}`;
            this._reverseGeocode(lat, lon).then(address => {
              const el = this.shadowRoot.getElementById("cur-loc-label");
              if (el) {
                el.innerHTML = `<ha-icon icon="mdi:crosshairs-gps" style="--mdc-icon-size: 16px;"></ha-icon> <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">${this._escapeHtml(address)}</a>`;
              }
            });
            locLabels += `<span id="cur-loc-label"><ha-icon icon="mdi:crosshairs-gps" style="--mdc-icon-size: 16px;"></ha-icon> <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">${this._escapeHtml(`${lat.toFixed(4)}, ${lon.toFixed(4)}`)}</a></span>`;
          } else {
            locLabels += `<span><ha-icon icon="mdi:crosshairs-gps" style="--mdc-icon-size: 16px;"></ha-icon> ${this._escapeHtml(curState)}</span>`;
          }
        }
        if (parkedLoc) {
          locLabels += `<span><ha-icon icon="mdi:parking" style="--mdc-icon-size: 16px;"></ha-icon> ${this._escapeHtml(parkedLoc.state || "Last Parked")}</span>`;
        }
        headerContent.innerHTML = `<ha-icon icon="mdi:map-marker" style="--mdc-icon-size: 18px;"></ha-icon>
          <div class="map-labels">${locLabels}</div>`;
      }
      // Create/update map card (persistent, never recreated)
      const mapContainer = this.shadowRoot.getElementById("map-container");
      if (mapContainer) {
        this._updateMap(mapContainer, mapTrackerIds, mapHistoryEntityId);
      }
    } else {
      cardMapEl.innerHTML = "";
      this._mapCard = null;
    }

    // Attach button event handlers
    if (this._config.show_buttons !== false) {
      const card = this.shadowRoot.querySelector("ha-card");
      if (card) {
        card.querySelectorAll(".action-btn").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const action = btn.dataset.action;
            if (action === "lock" && this._config.lock_entity) {
              const lockState = this._getState(this._config.lock_entity);
              const service = lockState && lockState.state === "locked" ? "unlock" : "lock";
              this._hass.callService("lock", service, {
                entity_id: this._config.lock_entity,
              });
            } else if (action === "engine_toggle") {
              const engEnt = this._config.engine_status_entity;
              const engState = engEnt ? this._getState(engEnt) : null;
              const running = engState && engState.state === "on";
              const deviceId = this._config.vehicle;
              if (!deviceId) return;
              this._hass.callService("toyota_na", running ? "engine_stop" : "engine_start", { vehicle: deviceId });
            }
          });
        });
      }
    }
  }

  _escapeHtml(str) {
    if (typeof str !== "string") return str;
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  async _updateMap(container, entityIds, historyEntityId) {
    // If map card already exists, just update hass
    if (this._mapCard) {
      this._mapCard.hass = this._hass;
      if (!container.contains(this._mapCard)) {
        container.innerHTML = "";
        container.appendChild(this._mapCard);
      }
      return;
    }

    // Prevent concurrent creation
    if (this._mapCardLoading) return;
    this._mapCardLoading = true;

    try {
      const helpers = await window.loadCardHelpers();
      this._mapCard = await helpers.createCardElement({
        type: "map",
        entities: entityIds.map((id) => ({ entity: id })),
        default_zoom: 15,
        hours_to_show: historyEntityId ? 24 : 0,
      });
      this._mapCard.hass = this._hass;

      // Wait a frame so the container is laid out, then append
      requestAnimationFrame(() => {
        const cur = this.shadowRoot.getElementById("map-container");
        if (cur) {
          cur.innerHTML = "";
          cur.appendChild(this._mapCard);
        }
      });
    } catch (e) {
      container.innerHTML = `<div style="padding: 16px; text-align: center; font-size: 0.85em; color: var(--secondary-text-color);">Map unavailable</div>`;
    } finally {
      this._mapCardLoading = false;
    }
  }

  async _reverseGeocode(lat, lon) {
    const cacheKey = `${lat.toFixed(4)},${lon.toFixed(4)}`;
    if (this._geocodeCache && this._geocodeCache[cacheKey]) {
      return this._geocodeCache[cacheKey];
    }
    try {
      const resp = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&zoom=18&addressdetails=1`, {
        headers: { "Accept": "application/json" }
      });
      if (!resp.ok) return `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
      const data = await resp.json();
      const addr = data.display_name || `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
      if (!this._geocodeCache) this._geocodeCache = {};
      this._geocodeCache[cacheKey] = addr;
      return addr;
    } catch {
      return `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
    }
  }

  _encodeImageUrl(url) {
    // Only allow http/https/local HA URLs
    if (typeof url !== "string") return "";
    if (
      url.startsWith("/local/") ||
      url.startsWith("/api/") ||
      url.startsWith("http://") ||
      url.startsWith("https://")
    ) {
      return this._escapeHtml(url);
    }
    return "";
  }

  _formatTimestamp(ts) {
    if (!ts) return "";
    const d = new Date(Number(ts) * 1000);
    if (isNaN(d.getTime())) {
      // Try as ISO string
      const d2 = new Date(ts);
      if (isNaN(d2.getTime())) return ts;
      return d2.toLocaleString();
    }
    return d.toLocaleString();
  }

  static getConfigElement() {
    return document.createElement("toyota-car-card-editor");
  }

  static getStubConfig() {
    return {
      title: "My Toyota",
      entities: {},
    };
  }
}

// ── Entity key definitions ──
const ENTITY_KEYS = [
  { key: "fuel_level", label: "Fuel Level", section: "Fuel & Range", domain: "sensor" },
  { key: "distance_to_empty", label: "Distance to Empty", section: "Fuel & Range", domain: "sensor" },
  { key: "odometer", label: "Odometer", section: "General", domain: "sensor" },
  { key: "speed", label: "Speed", section: "General", domain: "sensor" },
  { key: "next_service", label: "Next Service", section: "General", domain: "sensor" },
  { key: "last_update_timestamp", label: "Last Update", section: "General", domain: "sensor" },
  { key: "front_driver_tire", label: "Front Driver Tire", section: "Tires", domain: "sensor" },
  { key: "front_passenger_tire", label: "Front Passenger Tire", section: "Tires", domain: "sensor" },
  { key: "rear_driver_tire", label: "Rear Driver Tire", section: "Tires", domain: "sensor" },
  { key: "rear_passenger_tire", label: "Rear Passenger Tire", section: "Tires", domain: "sensor" },
  { key: "ev_battery_level", label: "EV Battery Level", section: "EV", domain: "sensor" },
  { key: "ev_range", label: "EV Range", section: "EV", domain: "sensor" },
  { key: "front_driver_door", label: "Front Driver Door", section: "Doors", domain: "binary_sensor" },
  { key: "front_passenger_door", label: "Front Passenger Door", section: "Doors", domain: "binary_sensor" },
  { key: "rear_driver_door", label: "Rear Driver Door", section: "Doors", domain: "binary_sensor" },
  { key: "rear_passenger_door", label: "Rear Passenger Door", section: "Doors", domain: "binary_sensor" },
  { key: "hood", label: "Hood", section: "Doors", domain: "binary_sensor" },
  { key: "trunk", label: "Trunk", section: "Doors", domain: "binary_sensor" },
  { key: "front_driver_window", label: "Front Driver Window", section: "Windows", domain: "binary_sensor" },
  { key: "front_passenger_window", label: "Front Passenger Window", section: "Windows", domain: "binary_sensor" },
  { key: "rear_driver_window", label: "Rear Driver Window", section: "Windows", domain: "binary_sensor" },
  { key: "rear_passenger_window", label: "Rear Passenger Window", section: "Windows", domain: "binary_sensor" },
  { key: "moonroof", label: "Moonroof", section: "Windows", domain: "binary_sensor" },
  { key: "front_driver_door_lock", label: "Front Driver Door Lock", section: "Locks", domain: "binary_sensor" },
  { key: "front_passenger_door_lock", label: "Front Passenger Door Lock", section: "Locks", domain: "binary_sensor" },
  { key: "rear_driver_door_lock", label: "Rear Driver Door Lock", section: "Locks", domain: "binary_sensor" },
  { key: "rear_passenger_door_lock", label: "Rear Passenger Door Lock", section: "Locks", domain: "binary_sensor" },
  { key: "trunk_door_lock", label: "Trunk Lock", section: "Locks", domain: "binary_sensor" },
  { key: "current_location", label: "Current Location", section: "Location", domain: "device_tracker" },
  { key: "last_parked_location", label: "Last Parked Location", section: "Location", domain: "device_tracker" },
  { key: "engine_status", label: "Engine Status (Remote Start)", section: "General", domain: "binary_sensor" },
];

// ── Visual card editor ──
class ToyotaCarCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._forms = [];
  }

  setConfig(config) {
    this._config = JSON.parse(JSON.stringify(config || {}));
    if (!this._config.entities) this._config.entities = {};
    this._build();
  }

  set hass(hass) {
    this._hass = hass;
    for (const f of this._forms) f.hass = hass;
  }

  _fireChanged() {
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: true,
        composed: true,
      })
    );
  }

  _updateConfig(key, value) {
    if (value === null || value === undefined || value === "") {
      delete this._config[key];
    } else {
      this._config[key] = value;
    }
    this._fireChanged();
  }

  _updateEntity(key, value) {
    if (!this._config.entities) this._config.entities = {};
    if (value) this._config.entities[key] = value;
    else delete this._config.entities[key];
    this._fireChanged();
  }

  _build() {
    const root = this.shadowRoot;
    root.innerHTML = "";
    this._forms = [];

    const style = document.createElement("style");
    style.textContent = `
      :host { display: block; }
      .editor {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
      }
      .field { display: flex; flex-direction: column; gap: 4px; }
      .field ha-textfield { width: 100%; }
      .hint {
        font-size: 11px;
        color: var(--secondary-text-color, #727272);
        padding: 0 16px;
      }
      .section { margin-top: 8px; }
      .section-title {
        font-size: 13px;
        font-weight: 600;
        color: var(--primary-text-color);
        margin-bottom: 12px;
        padding-bottom: 6px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }
      .toggle-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 0;
      }
      .toggle-row label {
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .switch {
        position: relative;
        width: 40px; height: 22px;
        cursor: pointer;
      }
      .switch input { display: none; }
      .switch .slider {
        position: absolute; top: 0; left: 0; right: 0; bottom: 0;
        background: var(--disabled-text-color, #bdbdbd);
        border-radius: 12px; transition: background 0.2s;
      }
      .switch .slider::before {
        content: ""; position: absolute;
        width: 18px; height: 18px; left: 2px; bottom: 2px;
        background: #fff; border-radius: 50%; transition: transform 0.2s;
      }
      .switch input:checked + .slider {
        background: var(--primary-color, #03a9f4);
      }
      .switch input:checked + .slider::before {
        transform: translateX(18px);
      }
      ha-expansion-panel {
        display: block;
      }
      .section-content {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 8px 0;
      }
      ha-form { width: 100%; }
    `;
    root.appendChild(style);

    const editor = document.createElement("div");
    editor.className = "editor";

    // ── Title field ──
    editor.appendChild(this._makeTextField(
      "Title", this._config.title || "", null,
      (val) => this._updateConfig("title", val)
    ));

    // ── Image URL field ──
    editor.appendChild(this._makeTextField(
      "Vehicle Image URL", this._config.image_url || "",
      "Use /local/your-car.png or an https:// URL",
      (val) => this._updateConfig("image_url", val)
    ));

    // ── Toggles ──
    const toggleSection = document.createElement("div");
    toggleSection.className = "section";
    toggleSection.innerHTML = '<div class="section-title">Visibility</div>';

    const toggles = [
      { key: "show_fuel",    label: "Show Fuel Level",    defaultOn: true },
      { key: "show_odometer",label: "Show Odometer",      defaultOn: true },
      { key: "show_tires",   label: "Show Tire Pressures",defaultOn: true },
      { key: "show_doors",   label: "Show Doors",         defaultOn: true },
      { key: "show_windows", label: "Show Windows",       defaultOn: true },
      { key: "show_locks",   label: "Show Locks",         defaultOn: true },
      { key: "show_ev",      label: "Show EV Info",       defaultOn: false },
      { key: "show_speed",   label: "Show Speed",         defaultOn: false },
      { key: "show_service", label: "Show Next Service",  defaultOn: false },
      { key: "show_map",     label: "Show Map",           defaultOn: true },
      { key: "show_buttons", label: "Show Action Buttons",defaultOn: true },
    ];

    for (const t of toggles) {
      const isOn = t.defaultOn
        ? this._config[t.key] !== false
        : this._config[t.key] === true;
      toggleSection.appendChild(this._makeToggle(t.label, isOn, (checked) => {
        this._updateConfig(t.key, checked);
      }));
    }
    editor.appendChild(toggleSection);

    // ── Action button entities ──
    const actPanel = document.createElement("ha-expansion-panel");
    actPanel.outlined = true;
    actPanel.header = "Action Buttons";
    actPanel.expanded = true;

    const actContent = document.createElement("div");
    actContent.className = "section-content";

    actContent.appendChild(this._makeFormPicker(
      "Lock Entity", "lock", this._config.lock_entity || "",
      (val) => this._updateConfig("lock_entity", val)
    ));

    actContent.appendChild(this._makeFormPicker(
      "Engine Status Entity", "binary_sensor", this._config.engine_status_entity || "",
      (val) => this._updateConfig("engine_status_entity", val)
    ));

    const engineHint = document.createElement("div");
    engineHint.className = "hint";
    engineHint.textContent = "Engine button toggles between toyota_na.engine_start and toyota_na.engine_stop based on the status entity.";
    actContent.appendChild(engineHint);

    // Vehicle device picker
    actContent.appendChild(this._makeFormDevicePicker(
      "Vehicle", this._config.vehicle || "",
      (val) => this._updateConfig("vehicle", val || null)
    ));

    const vinHint = document.createElement("div");
    vinHint.className = "hint";
    vinHint.textContent = "Required for engine start/stop and other toyota_na actions.";
    actContent.appendChild(vinHint);

    actPanel.appendChild(actContent);
    editor.appendChild(actPanel);

    // ── Entities ──
    const entities = this._config.entities || {};
    const sectionMap = {};
    for (const def of ENTITY_KEYS) {
      if (!sectionMap[def.section]) sectionMap[def.section] = [];
      sectionMap[def.section].push(def);
    }

    for (const [sectionName, defs] of Object.entries(sectionMap)) {
      const panel = document.createElement("ha-expansion-panel");
      panel.outlined = true;
      panel.header = sectionName;

      const content = document.createElement("div");
      content.className = "section-content";

      for (const def of defs) {
        content.appendChild(this._makeFormPicker(
          def.label, def.domain, entities[def.key] || "",
          (val) => this._updateEntity(def.key, val)
        ));
      }

      panel.appendChild(content);
      editor.appendChild(panel);
    }

    root.appendChild(editor);

    // Nudge forms once HA finishes upgrading them
    queueMicrotask(() => {
      for (const f of this._forms) {
        if (this._hass) f.hass = this._hass;
      }
    });
  }

  _makeTextField(label, value, hint, onChange) {
    const wrap = document.createElement("div");
    wrap.className = "field";
    const tf = document.createElement("ha-textfield");
    tf.label = label;
    tf.value = value || "";
    const commit = () => onChange(tf.value || "");
    tf.addEventListener("change", commit);
    tf.addEventListener("blur", commit);
    wrap.appendChild(tf);
    if (hint) {
      const h = document.createElement("span");
      h.className = "hint";
      h.textContent = hint;
      wrap.appendChild(h);
    }
    return wrap;
  }

  _makeToggle(label, checked, onChange) {
    const row = document.createElement("div");
    row.className = "toggle-row";
    const lbl = document.createElement("label");
    lbl.textContent = label;
    row.appendChild(lbl);
    const sw = document.createElement("label");
    sw.className = "switch";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = checked;
    cb.addEventListener("change", (e) => onChange(e.target.checked));
    const slider = document.createElement("span");
    slider.className = "slider";
    sw.appendChild(cb);
    sw.appendChild(slider);
    row.appendChild(sw);
    return row;
  }

  _makeFormPicker(label, domain, currentValue, onChange) {
    const form = document.createElement("ha-form");
    form.schema = [{ name: "entity", selector: { entity: domain ? { domain } : {} } }];
    form.data = { entity: currentValue || "" };
    form.computeLabel = () => label;
    form.computeHelper = () => "";
    if (this._hass) form.hass = this._hass;
    form.addEventListener("value-changed", (e) => {
      const val = e.detail?.value?.entity || "";
      if (currentValue === val) return;
      form.data = { entity: val };
      onChange(val);
    });
    this._forms.push(form);
    return form;
  }

  _makeFormDevicePicker(label, currentValue, onChange) {
    const form = document.createElement("ha-form");
    form.schema = [{ name: "device", selector: { device: { integration: "toyota_na" } } }];
    form.data = { device: currentValue || "" };
    form.computeLabel = () => label;
    form.computeHelper = () => "";
    if (this._hass) form.hass = this._hass;
    form.addEventListener("value-changed", (e) => {
      const val = e.detail?.value?.device || "";
      if (currentValue === val) return;
      form.data = { device: val };
      onChange(val);
    });
    this._forms.push(form);
    return form;
  }
}

customElements.define("toyota-car-card", ToyotaCarCard);
customElements.define("toyota-car-card-editor", ToyotaCarCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "toyota-car-card",
  name: "Toyota Car Card",
  description:
    "A visual card for Toyota vehicles using the ha-toyota-na integration",
  preview: true,
  documentationURL: "https://github.com/widewing/ha-toyota-na",
});

console.info(
  `%c TOYOTA-CAR-CARD %c v${CARD_VERSION} `,
  "background: #ef5350; color: white; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;",
  "background: #333; color: white; padding: 2px 6px; border-radius: 0 4px 4px 0;"
);
