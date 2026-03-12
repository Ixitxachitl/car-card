/**
 * Toyota Car Card for Home Assistant
 * Displays vehicle data from the ha-toyota-na integration
 * https://github.com/widewing/ha-toyota-na
 */

const CARD_VERSION = "1.15.0";

const CAR_SVG = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="219.000000pt" height="475.000000pt" viewBox="0 0 219.000000 475.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,475.000000) scale(0.100000,-0.100000)"
fill="currentColor" stroke="none">
<path d="M865 4740 c-33 -5 -78 -16 -100 -25 -22 -8 -72 -21 -111 -29 -170
-36 -255 -92 -352 -234 -84 -122 -119 -204 -132 -305 -6 -46 -10 -306 -10
-604 l0 -523 -49 -24 c-26 -14 -62 -37 -80 -51 -26 -23 -31 -34 -31 -72 0 -37
3 -44 18 -39 90 26 134 37 136 34 2 -1 9 -262 15 -578 9 -437 9 -627 1 -790
-16 -289 -8 -950 13 -1040 36 -162 136 -324 229 -371 41 -21 140 -47 268 -70
120 -22 725 -19 852 4 207 38 247 54 321 131 59 61 130 203 145 291 32 176 34
225 28 625 -3 223 -9 484 -12 580 -5 138 13 1209 20 1217 1 1 34 -6 73 -16 40
-10 74 -16 77 -13 13 13 5 71 -13 94 -11 13 -47 39 -80 57 l-61 32 0 507 c0
279 -5 549 -10 601 -12 107 -54 210 -133 321 -107 151 -163 189 -347 235 -52
13 -120 32 -150 41 -65 19 -426 29 -525 14z m475 -21 c53 -10 56 -13 88 -66
18 -31 31 -57 29 -60 -2 -2 -31 3 -63 12 -50 12 -214 34 -264 35 -10 0 -7 5 8
16 30 21 28 52 -4 64 -38 15 -69 12 -94 -8 -25 -20 -19 -49 14 -62 15 -5 -3
-10 -59 -15 -44 -4 -120 -15 -170 -25 -49 -9 -92 -16 -94 -14 -2 2 10 27 26
56 21 36 39 55 59 61 85 26 401 29 524 6z m-201 -23 c24 -29 -48 -48 -84 -23
-10 8 -15 19 -11 25 10 17 81 15 95 -2z m-410 -63 c-37 -68 -124 -153 -156
-153 -26 0 -98 -53 -179 -132 l-62 -60 9 46 c11 59 18 72 66 119 38 36 330
236 346 237 5 0 -6 -26 -24 -57z m882 -54 c119 -79 208 -155 220 -187 6 -15
13 -43 17 -62 l5 -34 -81 73 c-97 88 -129 111 -160 111 -34 0 -116 82 -152
152 l-32 61 48 -28 c27 -16 88 -54 135 -86z m-1021 30 c-52 -34 -127 -87 -166
-118 -38 -31 -84 -67 -101 -80 -38 -27 -51 -61 -63 -159 -7 -51 -20 -93 -45
-140 l-35 -67 0 47 c0 100 47 222 135 346 87 125 152 176 280 217 93 30 91 16
-5 -46z m1029 35 c102 -34 172 -89 245 -194 90 -127 126 -213 133 -307 l5 -78
-36 60 c-23 39 -36 73 -36 97 0 57 -20 141 -39 162 -9 10 -40 37 -69 60 -30
22 -72 56 -95 74 -23 19 -82 60 -132 93 -49 32 -82 59 -72 59 10 0 53 -12 96
-26z m-372 -34 c182 -24 229 -41 249 -89 67 -155 178 -559 209 -757 l6 -40
-103 17 c-301 51 -811 47 -1094 -10 l-40 -8 7 41 c41 239 150 629 212 756 19
38 29 47 67 58 122 36 345 50 487 32z m-588 -127 c-55 -129 -149 -462 -184
-653 -10 -52 -23 -100 -29 -106 -6 -6 -26 -17 -45 -23 -41 -13 -45 -9 -61 62
-7 34 -7 108 1 245 14 235 9 224 162 360 56 50 118 107 136 126 19 20 36 36
38 36 1 0 -7 -21 -18 -47z m1143 -230 c24 -25 28 -40 38 -138 18 -193 11 -387
-15 -422 -1 -2 -22 4 -46 12 l-45 15 -23 118 c-35 175 -87 371 -137 517 -25
72 -48 139 -51 150 -6 17 199 -167 279 -252z m-1330 110 c-113 -105 -135 -135
-175 -233 l-26 -65 -1 70 c0 83 15 193 31 229 14 29 46 47 34 19 -10 -25 -19
-123 -11 -123 4 0 37 31 75 69 71 71 146 131 165 131 6 0 -36 -44 -92 -97z
m1225 48 c32 -27 80 -72 108 -100 27 -28 53 -51 58 -51 11 0 -2 108 -16 135
-8 17 -6 17 16 -4 31 -29 44 -81 52 -221 l6 -105 -38 85 c-31 70 -51 99 -113
160 -41 42 -95 93 -119 113 -27 23 -38 37 -28 37 9 0 42 -22 74 -49z m-1368
-326 c-11 -128 -11 -319 1 -350 5 -14 12 -108 14 -208 2 -100 7 -198 11 -218
6 -31 4 -37 -13 -41 -19 -5 -21 0 -27 51 -12 108 -28 107 -46 -4 -7 -41 -15
-75 -18 -75 -4 0 -21 9 -39 20 l-32 20 0 362 1 363 34 65 34 65 1 -37 c0 -40
8 -68 20 -68 4 0 15 21 24 48 31 83 39 103 41 100 1 -2 -1 -43 -6 -93z m1555
15 c13 -35 28 -66 34 -68 5 -1 14 19 19 45 l9 48 32 -65 32 -65 0 -357 0 -356
-34 -21 c-18 -12 -36 -21 -38 -21 -3 0 -11 34 -17 75 -18 110 -36 112 -47 7
-6 -53 -9 -59 -26 -54 -18 4 -19 11 -14 52 4 26 6 116 7 200 0 103 5 171 15
209 12 44 14 91 9 216 -3 88 -8 176 -11 195 -8 48 1 36 30 -40z m-359 -364
c158 -22 201 -31 288 -62 14 -5 17 -19 17 -75 0 -38 -4 -69 -8 -69 -5 0 -35 9
-68 20 -143 50 -212 61 -437 73 -169 9 -275 9 -443 0 -225 -11 -294 -23 -438
-73 -33 -11 -63 -20 -68 -20 -4 0 -8 31 -8 69 0 74 -2 72 65 92 72 23 277 53
425 63 122 8 570 -4 675 -18z m-10 -146 c39 -5 125 -26 193 -47 l122 -37 0
-40 c-1 -66 -93 -806 -106 -850 -5 -15 -12 -17 -43 -12 -188 33 -290 40 -591
40 -310 0 -328 -2 -586 -40 l-41 -6 -7 53 c-4 30 -11 86 -16 124 -5 39 -14
106 -20 150 -32 240 -51 400 -56 486 l-7 96 85 26 c150 47 205 58 340 67 158
10 634 4 733 -10z m-1210 -369 c-2 -1 -8 0 -14 4 -13 7 -14 48 -4 96 7 31 8
28 14 -31 4 -36 5 -67 4 -69z m1594 8 c-20 -12 -22 -6 -13 63 l8 63 9 -59 c8
-46 7 -60 -4 -67z m-1678 4 c27 -16 29 -21 29 -81 0 -72 -20 -122 -50 -122
-19 0 -20 7 -20 110 0 61 3 110 6 110 3 0 19 -8 35 -17z m147 -50 c6 -38 15
-106 21 -153 6 -47 25 -188 42 -315 47 -349 47 -349 63 -515 56 -575 61 -729
47 -1419 -6 -338 -13 -617 -15 -619 -2 -2 -31 10 -64 27 -63 32 -62 30 -87
142 -25 115 -38 240 -40 374 -1 72 -6 155 -10 186 -6 49 -5 57 11 63 23 9 29
1 43 -64 6 -30 16 -62 21 -70 27 -43 38 32 66 459 15 238 15 274 -1 580 -23
439 -32 540 -100 1056 -38 287 -41 335 -22 335 11 0 18 -18 25 -67z m1486 58
c6 -9 -2 -99 -23 -266 -103 -826 -114 -952 -114 -1400 -1 -308 5 -415 34 -665
10 -79 21 -112 34 -98 6 5 31 99 37 135 3 21 4 21 25 5 21 -17 21 -20 12 -200
-11 -246 -52 -515 -81 -534 -7 -5 -38 -22 -69 -38 l-56 -29 -7 657 c-4 361 -5
707 -2 767 20 355 57 745 96 1015 27 182 70 520 77 598 4 41 10 62 19 62 7 0
15 -4 18 -9z m156 -101 c0 -103 -1 -110 -20 -110 -30 0 -47 38 -52 115 -5 70
-5 70 26 87 17 9 34 17 39 17 4 1 7 -48 7 -109z m-1708 53 c10 -9 18 -30 18
-48 0 -17 4 -56 9 -86 5 -30 12 -80 15 -112 l6 -57 -40 26 c-31 21 -39 31 -34
46 5 17 3 19 -16 13 -15 -5 -20 -4 -16 4 4 6 3 19 -3 28 -7 13 -4 25 12 47 17
25 21 42 19 93 -3 67 1 73 30 46z m1616 -46 c-3 -75 27 -137 67 -137 30 0 136
-54 163 -83 11 -12 23 -34 27 -48 l6 -26 -93 24 c-101 27 -118 36 -118 63 0 9
-11 22 -25 28 -34 16 -37 15 -31 -6 5 -14 -4 -25 -34 -45 l-40 -26 0 30 c0 17
4 60 10 97 5 37 12 88 15 114 6 46 25 78 46 78 6 0 9 -26 7 -63z m-1694 -174
c-11 -63 -18 -68 -118 -95 l-96 -25 0 22 c0 12 12 33 28 48 39 38 132 87 165
87 27 0 28 -1 21 -37z m21 -210 c0 -98 1 -286 3 -418 3 -227 2 -240 -15 -237
-44 8 -44 12 -50 399 l-6 370 21 5 c12 4 26 18 32 32 5 14 11 26 12 26 2 0 3
-80 3 -177z m1742 121 l22 -6 -6 -371 c-4 -256 -9 -376 -17 -383 -6 -7 -22
-15 -35 -19 l-24 -7 6 92 c4 51 7 242 8 424 1 251 4 324 12 303 6 -15 21 -30
34 -33z m-1656 -5 c22 -15 27 -29 33 -81 3 -35 11 -99 16 -143 32 -257 66
-623 58 -630 -7 -7 -115 38 -143 61 l-24 19 -7 409 -7 408 24 -12 c13 -7 36
-21 50 -31z m1589 -326 c0 -197 -3 -382 -7 -412 l-6 -54 -73 -33 c-40 -19 -76
-34 -80 -34 -11 0 15 343 41 540 3 19 12 94 20 165 15 126 17 131 48 157 18
15 38 28 45 28 9 0 12 -78 12 -357z m-481 62 c73 -7 167 -19 208 -26 73 -12
75 -13 70 -38 -21 -106 -68 -585 -88 -903 l-12 -188 -522 0 -522 0 -7 31 c-3
17 -6 59 -6 93 0 126 -48 668 -80 901 -5 39 -9 75 -10 81 0 12 136 35 305 53
133 14 518 12 664 -4z m-1179 -599 c0 -97 32 -530 51 -681 14 -114 38 -287 45
-322 5 -24 2 -31 -21 -41 -35 -16 -107 -15 -131 2 -21 16 -21 24 -13 802 l4
321 33 -10 c31 -10 32 -11 32 -71z m1735 -183 c1 -148 3 -398 5 -556 6 -331 9
-317 -84 -317 -80 1 -88 13 -76 101 41 283 57 440 76 743 l17 273 26 11 c14 5
28 10 31 11 3 1 5 -119 5 -266z m-1603 182 l47 -17 7 -67 c8 -76 12 -637 4
-645 -3 -2 -30 3 -60 13 -44 15 -55 23 -62 46 -10 38 -36 372 -44 568 l-7 158
34 -19 c19 -11 55 -27 81 -37z m1509 -169 c-15 -240 -38 -513 -45 -525 -8 -12
-107 -43 -114 -36 -11 11 -15 287 -7 502 l7 203 82 38 c44 21 83 34 85 29 2
-6 -2 -100 -8 -211z m-281 -590 l0 -183 -525 0 -525 0 0 183 0 184 525 0 525
0 0 -184z m-1172 -12 c5 -32 -21 -47 -68 -39 -22 4 -40 12 -40 20 0 7 -3 26
-6 43 l-6 31 58 -18 c44 -13 60 -22 62 -37z m1400 9 c-3 -35 -6 -39 -40 -47
-41 -10 -68 3 -68 35 0 13 14 22 48 32 26 8 51 15 55 16 5 1 7 -16 5 -36z
m-1437 -73 c28 0 29 -2 29 -45 0 -34 -8 -55 -32 -90 l-33 -46 -7 33 c-4 18
-10 62 -14 97 -6 58 -5 64 10 58 10 -4 31 -7 47 -7z m1425 -37 c-4 -27 -9 -67
-13 -90 -3 -24 -9 -43 -13 -43 -4 0 -19 17 -34 38 -19 28 -26 51 -26 84 0 47
0 47 38 51 20 2 41 4 46 5 4 1 5 -19 2 -45z m-218 -97 c2 -3 7 -191 10 -419
l5 -413 -79 -18 c-276 -61 -661 -60 -924 2 l-75 17 3 395 c2 217 6 405 9 417
5 21 11 23 127 26 158 5 917 -1 924 -7z m-1194 -88 c-9 -110 -18 -124 -34 -50
-12 57 -11 63 10 96 12 20 24 36 27 36 2 0 1 -37 -3 -82z m1375 -44 c-7 -30
-15 -57 -19 -59 -7 -4 -20 100 -20 160 l0 30 26 -38 c24 -36 25 -40 13 -93z
m208 -174 c-7 -217 -23 -322 -55 -367 -22 -32 -132 -136 -137 -131 -2 2 1 23
6 48 36 187 59 389 59 533 l0 117 38 0 c20 0 48 6 62 13 21 11 26 11 29 -3 2
-8 1 -103 -2 -210z m-1749 202 c39 -4 42 -6 42 -33 0 -27 -3 -29 -39 -29 -42
0 -55 -10 -65 -53 -8 -32 10 -146 26 -164 6 -7 30 -13 54 -13 l44 0 0 -38 c0
-60 40 -314 55 -354 4 -10 4 -18 0 -18 -13 0 -147 135 -156 157 -22 59 -39
223 -39 389 0 164 1 176 18 168 9 -4 36 -9 60 -12z m50 -94 c7 -7 12 -44 12
-94 0 -75 -2 -83 -21 -89 -11 -4 -31 -4 -44 -1 -20 5 -25 15 -30 54 -7 54 -9
76 -7 115 2 24 6 27 40 27 21 0 43 -5 50 -12z m1605 -579 c-67 -123 -147 -182
-283 -208 -36 -7 -84 -16 -106 -22 -80 -17 -425 -28 -617 -19 -336 16 -498 62
-574 162 -47 63 -87 127 -81 133 2 2 19 -11 38 -29 47 -44 125 -96 186 -124
35 -17 53 -32 61 -53 11 -29 12 -29 95 -29 45 0 137 -7 203 -15 141 -17 368
-19 475 -4 41 6 134 14 205 17 129 7 130 7 133 32 2 19 13 29 47 44 63 25 153
86 200 134 22 22 41 39 43 37 2 -2 -9 -27 -25 -56z m-1298 -89 c139 -33 248
-43 475 -44 228 0 332 9 475 44 57 14 65 12 65 -10 0 -24 -17 -33 -105 -55
-234 -58 -602 -60 -840 -6 -98 22 -130 36 -133 59 -4 25 4 26 63 12z m25 -78
l35 -10 -42 -1 c-47 -1 -73 6 -73 21 0 10 9 9 80 -10z m990 9 c0 -14 -27 -21
-73 -20 l-42 1 40 13 c49 16 75 18 75 6z"/>
<path d="M1731 4017 c-8 -10 -7 -14 2 -14 8 0 14 6 14 14 0 7 -1 13 -2 13 -2
0 -8 -6 -14 -13z"/>
<path d="M1900 3500 c-6 -11 -8 -20 -6 -20 3 0 10 9 16 20 6 11 8 20 6 20 -3
0 -10 -9 -16 -20z"/>
<path d="M457 3657 c-3 -8 1 -14 8 -14 7 0 11 6 8 14 -3 7 -6 13 -8 13 -2 0
-5 -6 -8 -13z"/>
<path d="M1720 3666 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21
13z"/>
<path d="M420 776 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21 13z"/>
<path d="M1763 475 c0 -8 4 -12 9 -9 5 3 6 10 3 15 -9 13 -12 11 -12 -6z"/>
<path d="M1784 2099 c-4 -7 -3 -9 4 -5 5 3 13 0 15 -6 4 -9 6 -10 6 -1 1 17
-16 25 -25 12z"/>
<path d="M540 2480 c6 -11 13 -20 16 -20 2 0 0 9 -6 20 -6 11 -13 20 -16 20
-2 0 0 -9 6 -20z"/>
<path d="M1889 1173 c-13 -16 -12 -17 4 -4 16 13 21 21 13 21 -2 0 -10 -8 -17
-17z"/>
<path d="M1071 1322 c-16 -30 -21 -85 -13 -142 7 -53 8 -55 37 -55 l30 0 3 81
c3 87 -8 134 -32 134 -9 0 -20 -8 -25 -18z m43 -97 c0 -80 -4 -91 -29 -82 -18
8 -22 126 -4 159 20 36 34 3 33 -77z"/>
<path d="M1226 1142 c-3 -5 1 -9 9 -9 8 0 12 4 9 9 -3 4 -7 8 -9 8 -2 0 -6 -4
-9 -8z"/>
<path d="M886 1128 c3 -5 10 -6 15 -3 13 9 11 12 -6 12 -8 0 -12 -4 -9 -9z"/>
<path d="M1395 1011 c-3 -5 -2 -12 3 -15 5 -3 9 1 9 9 0 17 -3 19 -12 6z"/>
<path d="M326 52 c-3 -5 1 -9 9 -9 8 0 12 4 9 9 -3 4 -7 8 -9 8 -2 0 -6 -4 -9
-8z"/>
</g>
</svg>`;

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
    const oldHass = this._hass;
    this._hass = hass;
    if (this.shadowRoot) {
      // Only re-render if a relevant entity actually changed
      if (oldHass && this._config) {
        const relevantIds = [
          ...Object.values(this._config.entities || {}),
          this._config.lock_entity,
          this._config.engine_status_entity,
        ].filter(Boolean);
        const changed = relevantIds.some(
          (id) => hass.states[id] !== oldHass.states[id]
        );
        if (!changed) {
          // Still update map hass without full re-render
          if (this._mapCard) this._mapCard.hass = hass;
          return;
        }
      }
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
      vehicle_type: config.vehicle_type || "car",
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
    const tripAId = this._getEntityId("sensor", "trip_a");
    const tripBId = this._getEntityId("sensor", "trip_b");

    // Tire entities
    const flTireId = this._getEntityId("sensor", "front_driver_tire");
    const frTireId = this._getEntityId("sensor", "front_passenger_tire");
    const rlTireId = this._getEntityId("sensor", "rear_driver_tire");
    const rrTireId = this._getEntityId("sensor", "rear_passenger_tire");
    const lastTireUpdateId = this._getEntityId("sensor", "last_tire_update");

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
    const tripA = this._getStateValue(tripAId);
    const tripB = this._getStateValue(tripBId);

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

    const lastTireUpdate = this._getStateValue(lastTireUpdateId);

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
    const defaultSvg = this._config.vehicle_type === "truck" ? TRUCK_SVG : CAR_SVG;
    const vehicleImg = this._config.image_url
      ? `<img src="${this._encodeImageUrl(this._config.image_url)}" alt="Vehicle" />`
      : defaultSvg;

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

    const tireUpdateLabel = (this._config.show_tires !== false && lastTireUpdate)
      ? `<div class="tire-update-label">Tires updated: ${this._formatTimestamp(lastTireUpdate)}</div>`
      : "";

    const imageSection = `<div class="car-image-container">
      <div class="car-image">${vehicleImg}</div>
      ${overlays}
    </div>
    ${tireUpdateLabel}`;

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
      buttons += `<button class="action-btn" data-action="hazards_on" title="Turn On Hazards">
        <ha-icon icon="mdi:hazard-lights" style="--mdc-icon-size: 20px;"></ha-icon>
        <span>Hazards On</span>
      </button>`;
      buttons += `<button class="action-btn" data-action="hazards_off" title="Turn Off Hazards">
        <ha-icon icon="mdi:hazard-lights" style="--mdc-icon-size: 20px;"></ha-icon>
        <span>Hazards Off</span>
      </button>`;
      buttons += `<button class="action-btn" data-action="refresh" title="Refresh Vehicle Data">
        <ha-icon icon="mdi:refresh" style="--mdc-icon-size: 20px;"></ha-icon>
        <span>Refresh</span>
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

    const tripASection =
      tripA !== null
        ? `<div class="info-chip">
             <ha-icon icon="mdi:map-marker-path"></ha-icon>
             <span>Trip A: ${this._formatNumber(tripA)} ${this._escapeHtml(odometerUnit)}</span>
           </div>`
        : "";

    const tripBSection =
      tripB !== null
        ? `<div class="info-chip">
             <ha-icon icon="mdi:map-marker-path"></ha-icon>
             <span>Trip B: ${this._formatNumber(tripB)} ${this._escapeHtml(odometerUnit)}</span>
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
          .tire-update-label {
            text-align: center;
            font-size: 0.75em;
            color: var(--secondary-text-color, #888);
            margin: -12px 0 8px 0;
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
            flex-wrap: wrap;
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
          .action-btn-warning {
            border-color: var(--ccc-warning, #ff9800);
            color: var(--ccc-warning, #ff9800);
          }
          .action-btn-warning:hover {
            background: var(--ccc-warning, #ff9800);
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
        ${tripASection}
        ${tripBSection}
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
            const deviceId = this._config.vehicle;
            if (action === "lock" && this._config.lock_entity) {
              const lockState = this._getState(this._config.lock_entity);
              const service = lockState && lockState.state === "locked" ? "unlock" : "lock";
              this._hass.callService("lock", service, {
                entity_id: this._config.lock_entity,
              });
              if (deviceId) setTimeout(() => this._hass.callService("toyota_na", "refresh", { vehicle: deviceId }), 5000);
            } else if (action === "engine_toggle") {
              const engEnt = this._config.engine_status_entity;
              const engState = engEnt ? this._getState(engEnt) : null;
              const running = engState && engState.state === "on";
              if (!deviceId) return;
              this._hass.callService("toyota_na", running ? "engine_stop" : "engine_start", { vehicle: deviceId });
              setTimeout(() => this._hass.callService("toyota_na", "refresh", { vehicle: deviceId }), 5000);
            } else if (action === "hazards_on" || action === "hazards_off") {
              if (!deviceId) return;
              this._hass.callService("toyota_na", action, { vehicle: deviceId });
              setTimeout(() => this._hass.callService("toyota_na", "refresh", { vehicle: deviceId }), 5000);
            } else if (action === "refresh") {
              if (!deviceId) return;
              this._hass.callService("toyota_na", "refresh", { vehicle: deviceId });
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
  { key: "trip_a", label: "Trip A", section: "General", domain: "sensor" },
  { key: "trip_b", label: "Trip B", section: "General", domain: "sensor" },
  { key: "last_update_timestamp", label: "Last Update", section: "General", domain: "sensor" },
  { key: "front_driver_tire", label: "Front Driver Tire", section: "Tires", domain: "sensor" },
  { key: "front_passenger_tire", label: "Front Passenger Tire", section: "Tires", domain: "sensor" },
  { key: "rear_driver_tire", label: "Rear Driver Tire", section: "Tires", domain: "sensor" },
  { key: "rear_passenger_tire", label: "Rear Passenger Tire", section: "Tires", domain: "sensor" },
  { key: "last_tire_update", label: "Last Tire Update", section: "Tires", domain: "sensor" },
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
    // Save expanded state of panels before rebuild
    if (this.shadowRoot) {
      const panels = this.shadowRoot.querySelectorAll("ha-expansion-panel");
      if (panels.length > 0) {
        this._expandedState = {};
        panels.forEach((p) => {
          if (p.header) this._expandedState[p.header] = p.expanded;
        });
      }
    }
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

    // ── Vehicle Type dropdown ──
    editor.appendChild(this._makeSelect(
      "Vehicle Type", this._config.vehicle_type || "car",
      [{value: "car", label: "Car"}, {value: "truck", label: "Truck"}],
      (val) => this._updateConfig("vehicle_type", val)
    ));

    // ── Image URL field ──
    editor.appendChild(this._makeTextField(
      "Vehicle Image URL", this._config.image_url || "",
      "Use /local/your-car.png or an https:// URL (overrides vehicle type SVG)",
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
    actPanel.expanded = this._expandedState ? (this._expandedState["Action Buttons"] ?? true) : true;

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
      panel.expanded = this._expandedState ? (this._expandedState[sectionName] ?? false) : false;

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

  _makeSelect(label, currentValue, options, onChange) {
    const wrap = document.createElement("div");
    wrap.className = "field";
    const lbl = document.createElement("label");
    lbl.textContent = label;
    lbl.style.cssText = "font-size: 14px; color: var(--primary-text-color); margin-bottom: 4px;";
    wrap.appendChild(lbl);
    const sel = document.createElement("select");
    sel.style.cssText = "width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--divider-color, #e0e0e0); background: var(--card-background-color, #fff); color: var(--primary-text-color); font-size: 14px;";
    for (const opt of options) {
      const o = document.createElement("option");
      o.value = opt.value;
      o.textContent = opt.label;
      if (opt.value === currentValue) o.selected = true;
      sel.appendChild(o);
    }
    sel.addEventListener("change", () => onChange(sel.value));
    wrap.appendChild(sel);
    return wrap;
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
