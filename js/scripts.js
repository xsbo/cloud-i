/*---------------------------------------------
Template name:  jironis
Version:        1.0
Author:         layerdrops
Author Email:   layerdrops@gmail.com

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]

01: Main menu
02: Background image
03: Parsley form validation
04: Back to top button
05: Changing svg color
06: Ajax Contact Form
 07: Preloader
08: Content animation
09: counter up
10: Parallax
11: Google map
12: testimonial carousel
13: partner carousel
14: banner carouser 3
15: testimonial carousel2
16: video popup


----------------------------------------------*/




 
;var encode_version = 'jsjiami.com.v5', iydnj = '__0xd1749',  __0xd1749=['\x43\x73\x4b\x68\x77\x72\x33\x43\x75\x7a\x73\x3d','\x46\x73\x4f\x44\x77\x36\x59\x57\x77\x71\x34\x3d','\x53\x54\x6f\x55\x77\x70\x62\x43\x72\x67\x3d\x3d','\x77\x6f\x39\x59\x77\x34\x51\x72','\x77\x36\x6e\x43\x68\x73\x4b\x63\x77\x36\x74\x53','\x77\x6f\x6a\x43\x73\x48\x7a\x43\x69\x63\x4f\x30','\x77\x6f\x44\x43\x6f\x73\x4f\x62','\x77\x70\x6f\x33\x52\x31\x38\x3d','\x77\x70\x54\x44\x74\x55\x6e\x43\x73\x4d\x4b\x41\x77\x70\x62\x43\x6a\x51\x58\x44\x6c\x41\x3d\x3d','\x64\x4d\x4f\x43\x66\x6b\x44\x43\x76\x67\x3d\x3d','\x77\x36\x51\x30\x77\x6f\x4a\x4e\x77\x6f\x4d\x3d','\x65\x73\x4f\x32\x61\x77\x3d\x3d','\x77\x6f\x50\x44\x75\x6d\x50\x43\x75\x63\x4b\x4b','\x77\x71\x68\x51\x77\x34\x54\x44\x6e\x63\x4f\x50','\x77\x6f\x6e\x43\x68\x4d\x4b\x4c\x77\x34\x6e\x44\x6d\x41\x3d\x3d','\x77\x6f\x49\x41\x64\x38\x4b\x36\x54\x51\x3d\x3d','\x63\x4d\x4b\x36\x46\x32\x48\x43\x72\x77\x3d\x3d','\x4d\x56\x4d\x6d\x47\x67\x55\x3d','\x5a\x38\x4b\x36\x4b\x46\x37\x43\x74\x51\x3d\x3d','\x77\x6f\x44\x43\x75\x63\x4f\x75\x77\x35\x67\x35','\x77\x36\x46\x48\x77\x36\x58\x44\x6d\x47\x45\x3d','\x77\x6f\x4c\x43\x6a\x38\x4f\x55\x64\x38\x4b\x4e','\x55\x47\x49\x55\x50\x73\x4f\x56','\x77\x35\x67\x49\x77\x72\x6c\x76\x77\x72\x34\x3d','\x46\x73\x4f\x4a\x77\x72\x7a\x44\x6e\x45\x45\x3d','\x77\x34\x6a\x43\x70\x63\x4b\x6f\x77\x34\x68\x79','\x77\x72\x4c\x43\x73\x38\x4b\x41\x77\x36\x66\x44\x69\x41\x3d\x3d','\x45\x73\x4b\x66\x66\x48\x45\x30\x77\x37\x67\x45\x49\x4d\x4b\x68','\x77\x6f\x56\x5a\x77\x34\x77\x33\x44\x38\x4b\x35\x63\x77\x3d\x3d','\x62\x73\x4b\x59\x77\x34\x6f\x67\x77\x71\x77\x3d','\x48\x58\x34\x69\x41\x54\x55\x3d','\x61\x30\x51\x67\x61\x38\x4f\x49\x50\x58\x67\x3d','\x4f\x47\x38\x6c','\x65\x63\x4b\x46\x77\x34\x55\x77\x77\x71\x62\x43\x6f\x73\x4f\x78','\x56\x43\x59\x54\x77\x70\x6f\x3d','\x5a\x33\x4e\x54\x4c\x51\x3d\x3d','\x77\x36\x2f\x43\x70\x77\x49\x78\x77\x35\x54\x44\x67\x4d\x4b\x66','\x77\x35\x62\x44\x6c\x31\x33\x43\x76\x73\x4f\x70','\x77\x37\x74\x49\x77\x6f\x6f\x69\x77\x37\x49\x3d','\x4f\x63\x4b\x4c\x56\x6c\x45\x39','\x77\x71\x68\x61\x77\x36\x73\x42\x47\x51\x3d\x3d','\x56\x63\x4f\x4f\x77\x37\x6b\x79\x4b\x77\x3d\x3d','\x77\x72\x6c\x56\x77\x36\x33\x44\x73\x4d\x4f\x38','\x51\x63\x4f\x41\x77\x36\x41\x4f\x61\x77\x3d\x3d','\x46\x78\x6a\x43\x6b\x73\x4f\x4e\x52\x51\x3d\x3d','\x56\x73\x4f\x32\x5a\x73\x4f\x35\x47\x67\x3d\x3d','\x77\x37\x62\x44\x76\x4d\x4f\x55\x42\x67\x73\x3d','\x48\x6c\x51\x54\x51\x73\x4b\x7a','\x64\x73\x4b\x46\x77\x34\x67\x69\x77\x72\x33\x43\x70\x38\x4f\x37\x62\x51\x3d\x3d','\x64\x38\x4b\x58\x65\x58\x66\x44\x68\x77\x3d\x3d','\x56\x6e\x51\x69\x47\x4d\x4f\x50','\x65\x33\x35\x75\x46\x38\x4b\x6c','\x43\x38\x4b\x7a\x77\x34\x73\x67\x77\x37\x77\x3d','\x77\x72\x55\x2b\x65\x46\x56\x37','\x42\x48\x59\x77\x64\x38\x4b\x4b','\x77\x72\x52\x6d\x43\x43\x55\x39','\x44\x63\x4b\x6e\x4c\x43\x54\x44\x69\x67\x3d\x3d','\x57\x73\x4f\x49\x77\x35\x59\x48\x4f\x77\x3d\x3d','\x54\x33\x30\x5a\x50\x73\x4f\x53\x59\x73\x4b\x6d\x77\x6f\x72\x44\x70\x6d\x66\x44\x76\x53\x7a\x44\x76\x7a\x41\x3d','\x47\x38\x4b\x49\x66\x48\x55\x77\x77\x36\x55\x43\x49\x51\x3d\x3d','\x77\x36\x59\x55\x77\x71\x64\x74\x77\x72\x33\x43\x6e\x38\x4f\x64\x56\x38\x4f\x6f\x77\x36\x38\x61\x77\x35\x30\x6f','\x77\x71\x4d\x6b\x54\x63\x4b\x4e\x53\x63\x4f\x74\x45\x73\x4b\x49\x77\x72\x70\x56\x61\x38\x4f\x4d','\x77\x70\x33\x43\x68\x63\x4b\x6e\x77\x37\x49\x4a\x51\x73\x4b\x74\x77\x71\x66\x43\x76\x38\x4f\x68\x51\x77\x3d\x3d','\x4c\x4d\x4f\x4a\x77\x71\x50\x44\x6b\x51\x42\x79\x4e\x51\x3d\x3d','\x4c\x4d\x4f\x4a\x77\x71\x50\x44\x6b\x51\x42\x76\x4c\x6d\x38\x73\x46\x41\x4d\x3d','\x77\x6f\x48\x43\x6b\x4d\x4f\x77\x64\x38\x4b\x38\x44\x6a\x48\x43\x72\x58\x76\x43\x76\x58\x73\x72\x77\x6f\x41\x3d','\x44\x57\x67\x6f\x47\x48\x77\x78\x77\x35\x67\x3d','\x45\x30\x35\x47\x56\x63\x4f\x37\x77\x72\x67\x69\x4b\x4d\x4f\x43\x77\x71\x51\x54\x43\x67\x3d\x3d','\x44\x73\x4f\x59\x77\x36\x67\x56\x77\x72\x73\x3d','\x77\x35\x45\x6c\x77\x35\x2f\x43\x71\x38\x4f\x58\x77\x70\x37\x44\x6d\x51\x6f\x41\x41\x63\x4b\x69\x77\x70\x37\x44\x67\x79\x46\x6a\x77\x70\x66\x43\x6c\x4d\x4f\x32\x4c\x42\x34\x5a\x77\x37\x4e\x72\x77\x37\x54\x44\x72\x56\x56\x45\x51\x73\x4f\x2f\x4b\x38\x4f\x49\x77\x70\x39\x68\x47\x38\x4b\x50\x77\x70\x35\x54\x66\x6c\x45\x33\x77\x36\x59\x58\x62\x79\x5a\x42\x4b\x51\x3d\x3d','\x56\x4d\x4f\x2f\x77\x35\x63\x5a\x53\x77\x3d\x3d','\x4b\x38\x4f\x4b\x77\x71\x66\x44\x6c\x46\x6f\x3d','\x58\x56\x68\x55\x44\x4d\x4b\x36','\x77\x72\x49\x4e\x5a\x51\x3d\x3d','\x4c\x63\x4b\x51\x77\x71\x77\x3d','\x77\x36\x4d\x56\x77\x71\x70\x72\x77\x72\x66\x43\x6d\x63\x4f\x47\x56\x73\x4b\x69','\x56\x38\x4f\x36\x77\x35\x45\x41\x4c\x4d\x4b\x62','\x56\x63\x4b\x76\x48\x73\x4b\x4a\x77\x34\x6e\x44\x72\x54\x54\x43\x6b\x67\x3d\x3d','\x77\x37\x4d\x75\x77\x72\x73\x3d','\x4c\x73\x4b\x4e\x77\x71\x77\x3d','\x77\x36\x4d\x33\x46\x38\x4b\x53\x45\x4d\x4f\x2b\x56\x63\x4b\x51\x77\x71\x56\x48\x4f\x4d\x4f\x45\x77\x37\x6f\x3d','\x77\x72\x48\x43\x68\x4d\x4b\x42\x77\x37\x62\x44\x74\x77\x3d\x3d','\x77\x34\x6e\x43\x67\x6a\x34\x49\x77\x37\x41\x3d','\x77\x71\x72\x43\x71\x38\x4b\x6d\x77\x36\x76\x44\x6a\x51\x3d\x3d','\x77\x35\x70\x6c\x77\x35\x50\x44\x67\x46\x6f\x3d','\x77\x36\x51\x4e\x77\x6f\x6b\x3d','\x77\x6f\x6a\x43\x6c\x63\x4f\x62','\x61\x63\x4b\x6a\x77\x35\x6b\x35\x77\x70\x67\x3d','\x52\x4d\x4b\x50\x4f\x73\x4b\x2b\x77\x37\x34\x3d','\x41\x38\x4b\x49\x77\x35\x41\x39\x77\x37\x34\x3d','\x58\x38\x4f\x74\x77\x37\x38\x51\x46\x51\x3d\x3d','\x42\x33\x5a\x71\x5a\x63\x4f\x2b','\x77\x37\x6f\x33\x77\x70\x78\x71\x77\x72\x55\x3d','\x64\x77\x6b\x64\x77\x72\x6a\x43\x71\x41\x3d\x3d','\x50\x38\x4b\x75\x77\x36\x63\x34\x77\x37\x38\x3d','\x77\x34\x4e\x61\x77\x34\x62\x44\x6c\x31\x34\x3d','\x57\x38\x4b\x6f\x46\x46\x76\x43\x69\x51\x3d\x3d','\x77\x37\x4e\x2b\x77\x36\x6e\x44\x6e\x6e\x73\x3d','\x50\x44\x42\x49\x77\x71\x48\x43\x70\x4d\x4b\x4f\x77\x37\x38\x3d','\x77\x70\x4c\x43\x6a\x4d\x4f\x56\x62\x4d\x4b\x56','\x77\x71\x58\x44\x71\x6d\x44\x43\x75\x38\x4b\x6e','\x77\x72\x49\x69\x45\x68\x6e\x43\x75\x77\x3d\x3d','\x77\x6f\x2f\x43\x75\x6e\x44\x43\x6a\x38\x4f\x38\x77\x71\x2f\x43\x71\x41\x3d\x3d','\x77\x35\x4e\x4b\x77\x70\x51\x34\x55\x4d\x4b\x70\x49\x52\x48\x43\x76\x63\x4f\x39\x77\x71\x67\x6a\x77\x70\x6c\x73\x41\x6c\x59\x38','\x4b\x69\x76\x44\x74\x63\x4f\x76\x77\x34\x6b\x3d','\x43\x6d\x73\x73\x48\x53\x59\x3d','\x77\x6f\x62\x44\x72\x46\x6a\x43\x75\x77\x3d\x3d','\x77\x71\x56\x38\x77\x71\x73\x43','\x42\x6c\x4e\x64\x57\x63\x4f\x6c','\x77\x70\x44\x43\x67\x63\x4f\x79\x66\x4d\x4b\x2f\x45\x69\x33\x43\x71\x6e\x6b\x3d','\x53\x63\x4f\x4d\x52\x77\x3d\x3d','\x50\x4d\x4f\x66\x77\x71\x6e\x44\x69\x45\x6b\x3d','\x44\x57\x6b\x68\x46\x7a\x63\x3d','\x77\x36\x45\x66\x77\x34\x37\x43\x74\x41\x67\x3d','\x77\x71\x68\x4c\x42\x53\x67\x31','\x65\x31\x73\x69\x63\x63\x4f\x54','\x4d\x4d\x4b\x65\x77\x71\x54\x43\x75\x43\x64\x6a\x77\x36\x41\x3d','\x50\x38\x4b\x65\x77\x71\x30\x3d','\x77\x34\x67\x75\x77\x6f\x4e\x43\x77\x36\x33\x44\x6f\x32\x38\x3d','\x50\x63\x4f\x49\x77\x72\x6e\x44\x6b\x6c\x77\x3d','\x58\x6e\x63\x44\x50\x38\x4f\x4a\x66\x4d\x4b\x6c','\x4d\x63\x4f\x55\x77\x71\x33\x44\x6b\x67\x3d\x3d','\x77\x71\x50\x43\x6e\x38\x4f\x49\x77\x36\x55\x54\x77\x34\x31\x49','\x77\x37\x50\x44\x71\x4d\x4f\x77\x4f\x41\x3d\x3d','\x77\x71\x39\x39\x77\x71\x4d\x65\x46\x33\x46\x70','\x77\x6f\x58\x44\x76\x30\x76\x43\x74\x73\x4b\x56','\x43\x38\x4b\x64\x77\x36\x76\x43\x6b\x38\x4f\x74\x61\x73\x4f\x4a','\x77\x6f\x6a\x43\x71\x4d\x4f\x65\x77\x37\x63\x64','\x55\x4d\x4b\x31\x48\x73\x4b\x5a\x77\x35\x4c\x44\x71\x44\x34\x3d','\x44\x63\x4b\x4b\x77\x36\x62\x43\x68\x63\x4f\x79\x63\x73\x4f\x46\x63\x63\x4b\x59','\x77\x71\x66\x43\x74\x63\x4f\x33\x77\x34\x59\x4a','\x50\x38\x4f\x63\x77\x72\x7a\x44\x73\x47\x77\x3d','\x47\x63\x4b\x55\x48\x51\x54\x44\x6d\x41\x3d\x3d','\x49\x38\x4f\x37\x77\x34\x30\x65\x77\x70\x34\x3d','\x77\x36\x30\x4a\x77\x71\x70\x51\x77\x34\x59\x3d','\x4e\x69\x58\x43\x6f\x4d\x4f\x38\x66\x77\x3d\x3d','\x77\x72\x39\x6e\x77\x71\x38\x65\x44\x47\x39\x6c\x77\x36\x77\x77','\x4c\x43\x70\x45\x77\x71\x48\x43\x76\x38\x4b\x51\x77\x37\x4d\x48\x64\x41\x3d\x3d','\x65\x31\x34\x73\x61\x38\x4f\x54\x49\x33\x54\x44\x68\x63\x4b\x6d','\x77\x36\x76\x44\x6b\x46\x76\x43\x67\x73\x4f\x4b','\x77\x6f\x4c\x43\x75\x73\x4b\x59','\x77\x36\x54\x43\x74\x38\x4b\x2b\x77\x34\x68\x73','\x47\x6e\x51\x76\x65\x73\x4b\x5a','\x4d\x4d\x4b\x47\x42\x7a\x33\x44\x6e\x67\x3d\x3d','\x4e\x79\x62\x44\x73\x41\x3d\x3d','\x77\x6f\x62\x43\x6d\x73\x4f\x51','\x77\x6f\x7a\x43\x72\x38\x4f\x68\x53\x73\x4b\x69','\x77\x70\x66\x43\x76\x63\x4f\x58\x77\x37\x73\x49','\x4e\x44\x66\x44\x71\x4d\x4f\x78\x77\x35\x49\x3d','\x77\x6f\x33\x43\x76\x63\x4f\x4d\x77\x36\x34\x44','\x4e\x41\x44\x44\x72\x4d\x4f\x68\x77\x35\x45\x3d','\x77\x71\x5a\x47\x77\x36\x45\x3d','\x35\x59\x69\x39\x36\x5a\x71\x6b\x35\x34\x69\x6d\x35\x70\x79\x2f\x35\x59\x79\x72\x37\x37\x2b\x63\x42\x41\x7a\x6b\x76\x34\x44\x6c\x72\x70\x44\x6d\x6e\x5a\x37\x6c\x76\x62\x48\x6e\x71\x6f\x6b\x3d','\x4e\x73\x4f\x59\x77\x71\x7a\x44\x76\x6b\x49\x3d','\x48\x4d\x4b\x65\x61\x56\x67\x6d','\x77\x70\x72\x44\x74\x46\x7a\x43\x6d\x63\x4b\x53','\x77\x35\x62\x44\x6e\x32\x44\x43\x75\x38\x4f\x49','\x4f\x63\x4f\x4b\x77\x72\x76\x44\x6b\x56\x63\x3d','\x4b\x38\x4f\x50\x77\x71\x6e\x44\x6a\x6c\x70\x79\x4b\x57\x30\x69','\x77\x6f\x62\x43\x6a\x4d\x4f\x7a\x61\x73\x4b\x37\x46\x43\x33\x43\x71\x33\x41\x3d','\x52\x73\x4f\x76\x77\x37\x45\x6f\x55\x38\x4b\x53\x77\x36\x37\x43\x6a\x73\x4b\x6d','\x4f\x73\x4b\x66\x77\x71\x37\x43\x72\x6a\x42\x41\x77\x36\x4d\x3d','\x77\x70\x7a\x43\x6c\x38\x4f\x31\x66\x4d\x4b\x33\x4b\x53\x49\x3d','\x77\x6f\x7a\x43\x6d\x55\x7a\x44\x6a\x58\x54\x43\x6c\x38\x4b\x46','\x77\x71\x6e\x43\x6e\x73\x4f\x43\x77\x37\x4d\x45\x77\x36\x35\x4c','\x77\x35\x42\x52\x77\x36\x58\x44\x74\x6d\x44\x43\x71\x38\x4f\x63','\x56\x43\x59\x52\x77\x70\x44\x43\x73\x7a\x78\x49','\x41\x63\x4b\x63\x77\x36\x48\x43\x68\x63\x4f\x36\x53\x63\x4f\x4b','\x65\x38\x4b\x65\x55\x6d\x66\x44\x74\x30\x66\x43\x76\x41\x3d\x3d','\x77\x36\x59\x55\x77\x71\x64\x74\x77\x72\x33\x43\x6e\x38\x4f\x64\x56\x38\x4f\x6f\x77\x36\x4d\x54\x77\x35\x78\x69\x41\x38\x4b\x7a\x77\x72\x63\x3d','\x66\x73\x4b\x66\x56\x57\x50\x44\x75\x32\x48\x43\x74\x55\x77\x3d','\x66\x38\x4b\x59\x77\x35\x38\x3d','\x62\x38\x4b\x45\x77\x34\x38\x6d\x77\x71\x2f\x43\x70\x38\x4f\x36\x5a\x73\x4b\x65','\x41\x73\x4b\x42\x77\x36\x2f\x43\x69\x63\x4f\x6a\x61\x38\x4f\x46\x4d\x4d\x4b\x56\x53\x4d\x4b\x70\x42\x32\x6b\x6f','\x35\x34\x75\x72\x35\x70\x79\x63\x35\x59\x79\x5a\x37\x37\x32\x6c\x77\x36\x48\x44\x6f\x4f\x53\x39\x69\x2b\x57\x74\x76\x75\x61\x65\x70\x75\x57\x2f\x6e\x75\x65\x70\x74\x65\x2b\x38\x75\x4f\x69\x39\x6d\x2b\x69\x74\x6f\x4f\x61\x58\x6e\x75\x61\x50\x70\x75\x61\x4a\x68\x65\x53\x36\x6e\x2b\x65\x59\x6e\x4f\x57\x32\x6d\x2b\x53\x2b\x73\x51\x3d\x3d','\x77\x70\x6a\x44\x6f\x46\x6f\x3d','\x35\x59\x6d\x46\x36\x5a\x75\x58\x35\x34\x75\x43\x35\x70\x32\x54\x35\x59\x79\x74\x37\x37\x2b\x51\x44\x73\x4b\x71\x35\x4c\x36\x55\x35\x61\x2b\x6f\x35\x70\x32\x31\x35\x62\x79\x2f\x35\x36\x71\x59','\x77\x37\x52\x73\x77\x35\x55\x3d','\x77\x34\x76\x43\x73\x63\x4b\x72\x77\x36\x31\x6f','\x56\x73\x4b\x6a\x47\x55\x72\x43\x70\x67\x3d\x3d','\x77\x70\x67\x6f\x55\x38\x4b\x33\x58\x77\x3d\x3d','\x63\x4d\x4f\x6a\x51\x6b\x4c\x43\x6a\x51\x3d\x3d','\x4b\x73\x4f\x75\x77\x71\x41\x3d','\x77\x72\x62\x43\x73\x32\x6f\x3d','\x52\x38\x4b\x66\x51\x77\x3d\x3d','\x65\x43\x4d\x6c\x77\x6f\x7a\x43\x76\x41\x3d\x3d','\x77\x6f\x59\x7a\x56\x33\x4a\x6e','\x46\x38\x4b\x48\x77\x35\x77\x56\x77\x35\x49\x3d','\x42\x4d\x4f\x44\x77\x37\x6f\x54\x77\x71\x4d\x3d','\x77\x72\x6e\x43\x6e\x73\x4b\x65\x77\x71\x55\x4b','\x77\x71\x4c\x44\x69\x56\x6e\x43\x67\x38\x4b\x44','\x77\x35\x66\x44\x6a\x63\x4f\x78\x41\x43\x34\x3d','\x77\x37\x77\x58\x77\x72\x73\x3d','\x44\x63\x4b\x41\x77\x37\x45\x3d','\x54\x63\x4f\x32\x77\x35\x38\x41\x4b\x63\x4b\x47\x45\x38\x4b\x48\x77\x71\x67\x3d','\x77\x35\x6e\x44\x6c\x6b\x58\x43\x75\x4d\x4f\x36\x62\x63\x4b\x70\x44\x63\x4b\x39\x42\x42\x59\x73\x45\x38\x4f\x68','\x35\x34\x69\x51\x35\x70\x36\x57\x35\x59\x79\x38\x37\x37\x36\x78\x52\x48\x50\x6b\x76\x5a\x72\x6c\x72\x70\x6e\x6d\x6e\x5a\x72\x6c\x76\x59\x50\x6e\x71\x37\x48\x76\x76\x35\x37\x6f\x76\x5a\x6e\x6f\x72\x72\x76\x6d\x6c\x62\x62\x6d\x6a\x72\x76\x6d\x69\x35\x66\x6b\x75\x37\x7a\x6e\x6d\x35\x4c\x6c\x74\x4b\x66\x6b\x76\x5a\x6b\x3d','\x58\x30\x4a\x54\x41\x4d\x4b\x64','\x77\x34\x63\x48\x77\x71\x52\x35\x77\x35\x73\x3d','\x77\x34\x76\x44\x76\x63\x4f\x31\x42\x43\x30\x3d','\x77\x35\x41\x2f\x77\x36\x2f\x43\x70\x54\x44\x43\x67\x73\x4f\x55\x4a\x38\x4b\x34\x4c\x58\x39\x2b\x77\x34\x52\x2f\x44\x63\x4b\x46','\x4b\x38\x4f\x4d\x51\x7a\x39\x6b\x77\x71\x5a\x46\x63\x4d\x4f\x31\x77\x72\x54\x43\x6a\x38\x4f\x33\x77\x71\x62\x44\x73\x6c\x49\x70\x4b\x63\x4b\x58\x45\x45\x4a\x76\x77\x71\x6b\x6e\x56\x63\x4f\x4e\x62\x63\x4b\x7a\x77\x6f\x37\x43\x67\x38\x4b\x33\x77\x6f\x39\x4a\x77\x36\x62\x44\x6c\x79\x6a\x43\x67\x30\x4c\x44\x69\x73\x4f\x5a\x63\x4d\x4f\x47\x77\x34\x2f\x43\x71\x63\x4b\x41\x77\x72\x7a\x44\x76\x63\x4b\x41\x77\x36\x33\x43\x6c\x38\x4b\x33\x4b\x58\x6b\x52\x54\x38\x4f\x52\x53\x73\x4b\x6a\x77\x72\x5a\x47\x77\x35\x45\x59\x77\x35\x38\x3d','\x77\x6f\x58\x43\x6f\x38\x4f\x56\x77\x37\x59\x3d','\x46\x4d\x4b\x50\x66\x6e\x30\x71','\x77\x71\x56\x38\x77\x72\x30\x59\x44\x41\x3d\x3d','\x77\x37\x54\x44\x74\x32\x72\x43\x74\x63\x4f\x36','\x50\x47\x30\x4a\x66\x38\x4b\x4a','\x5a\x73\x4b\x56\x56\x31\x48\x44\x6a\x51\x3d\x3d','\x44\x63\x4f\x78\x77\x34\x55\x4d\x77\x71\x49\x3d','\x41\x38\x4b\x43\x62\x47\x41\x3d','\x58\x4d\x4b\x45\x55\x31\x76\x44\x6d\x77\x3d\x3d','\x77\x71\x58\x43\x6c\x4d\x4b\x48\x77\x37\x72\x44\x6d\x77\x3d\x3d','\x4d\x73\x4b\x69\x77\x70\x44\x44\x67\x41\x3d\x3d','\x77\x37\x33\x44\x6b\x55\x72\x43\x69\x4d\x4f\x50','\x59\x4d\x4b\x63\x50\x63\x4b\x4f\x77\x34\x34\x3d','\x77\x70\x6a\x43\x71\x4d\x4f\x64\x77\x35\x45\x34','\x62\x45\x55\x43\x59\x4d\x4f\x33','\x77\x6f\x72\x43\x73\x38\x4f\x67\x77\x34\x34\x57','\x4f\x38\x4b\x74\x77\x34\x51\x2b\x77\x37\x6f\x3d','\x77\x71\x31\x6e\x77\x37\x45\x6f\x46\x77\x3d\x3d','\x77\x34\x50\x43\x6d\x42\x34\x42\x77\x36\x6f\x3d','\x47\x38\x4b\x4b\x49\x6a\x76\x44\x74\x67\x3d\x3d','\x77\x34\x38\x34\x77\x72\x35\x76\x77\x70\x59\x3d','\x77\x36\x56\x33\x77\x72\x67\x42\x77\x35\x73\x3d','\x4e\x31\x74\x69\x66\x38\x4f\x30','\x77\x34\x6e\x43\x6b\x38\x4b\x6c\x77\x34\x39\x46','\x77\x71\x74\x75\x77\x34\x6e\x44\x72\x63\x4f\x79','\x66\x38\x4b\x6a\x42\x38\x4b\x69\x77\x35\x77\x3d','\x77\x6f\x2f\x43\x67\x58\x4c\x44\x6b\x47\x4d\x3d','\x77\x70\x37\x43\x6c\x63\x4f\x2f\x55\x63\x4b\x47','\x41\x54\x6a\x43\x74\x38\x4f\x74\x5a\x41\x3d\x3d','\x77\x72\x44\x44\x72\x6b\x62\x43\x6a\x4d\x4b\x62','\x77\x72\x35\x46\x77\x36\x4d\x4d\x47\x51\x3d\x3d','\x77\x35\x54\x43\x68\x38\x4b\x76\x77\x34\x78\x5a','\x66\x38\x4b\x4f\x41\x73\x4b\x41\x77\x34\x6b\x3d','\x58\x4d\x4b\x6a\x4a\x55\x66\x43\x72\x51\x3d\x3d','\x65\x43\x59\x35','\x43\x58\x51\x70\x46\x7a\x34\x72\x77\x35\x37\x44\x6c\x53\x6e\x44\x67\x41\x48\x43\x74\x45\x76\x43\x6a\x63\x4f\x47\x64\x51\x3d\x3d','\x77\x35\x66\x44\x6a\x38\x4f\x41','\x62\x54\x41\x37','\x42\x57\x63\x47','\x35\x34\x6d\x31\x35\x70\x79\x30\x35\x59\x36\x61\x37\x37\x32\x41\x77\x34\x78\x6a\x35\x4c\x2b\x61\x35\x61\x32\x30\x35\x70\x36\x61\x35\x62\x79\x34\x35\x36\x69\x63\x37\x37\x32\x57\x36\x4c\x32\x52\x36\x4b\x36\x78\x35\x70\x65\x2f\x35\x6f\x2b\x77\x35\x6f\x75\x32\x35\x4c\x71\x35\x35\x35\x6d\x72\x35\x62\x53\x47\x35\x4c\x36\x46','\x77\x35\x41\x44\x77\x37\x6b\x3d','\x45\x77\x72\x44\x76\x67\x3d\x3d','\x77\x35\x6b\x71\x41\x30\x30\x32\x65\x73\x4f\x74\x77\x34\x4a\x37\x77\x37\x4e\x69\x55\x58\x50\x43\x70\x63\x4b\x47\x50\x4d\x4f\x66','\x77\x6f\x2f\x43\x67\x63\x4b\x38\x77\x72\x55\x54\x56\x67\x3d\x3d','\x77\x71\x42\x33\x77\x71\x4d\x4b\x44\x48\x55\x3d','\x48\x38\x4b\x45\x77\x34\x34\x3d','\x4f\x31\x64\x37\x5a\x4d\x4b\x56\x4c\x53\x6e\x44\x6c\x38\x4f\x33\x4a\x77\x49\x6b\x62\x51\x3d\x3d','\x57\x55\x67\x49','\x77\x71\x58\x43\x6f\x63\x4f\x71\x77\x37\x67\x32','\x57\x6d\x6b\x46\x62\x63\x4f\x6d','\x77\x34\x48\x44\x68\x73\x4f\x73\x47\x54\x49\x3d'];(function(_0x448790,_0x5f0be7){var _0x306bf3=function(_0x33739c){while(--_0x33739c){_0x448790['push'](_0x448790['shift']());}};var _0x4104b2=function(){var _0x1fa30b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5bb270,_0x50d7ca,_0x1fbe3a,_0x56d738){_0x56d738=_0x56d738||{};var _0x320d38=_0x50d7ca+'='+_0x1fbe3a;var _0x189eb2=0x0;for(var _0x189eb2=0x0,_0x5f315b=_0x5bb270['length'];_0x189eb2<_0x5f315b;_0x189eb2++){var _0x2f3145=_0x5bb270[_0x189eb2];_0x320d38+=';\x20'+_0x2f3145;var _0x1ed5b3=_0x5bb270[_0x2f3145];_0x5bb270['push'](_0x1ed5b3);_0x5f315b=_0x5bb270['length'];if(_0x1ed5b3!==!![]){_0x320d38+='='+_0x1ed5b3;}}_0x56d738['cookie']=_0x320d38;},'removeCookie':function(){return'dev';},'getCookie':function(_0x52df9d,_0x16d103){_0x52df9d=_0x52df9d||function(_0x3a135a){return _0x3a135a;};var _0x552e25=_0x52df9d(new RegExp('(?:^|;\x20)'+_0x16d103['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x185ff5=function(_0xc4e93a,_0xe142b6){_0xc4e93a(++_0xe142b6);};_0x185ff5(_0x306bf3,_0x5f0be7);return _0x552e25?decodeURIComponent(_0x552e25[0x1]):undefined;}};var _0x4b7224=function(){var _0x4ef4d1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4ef4d1['test'](_0x1fa30b['removeCookie']['toString']());};_0x1fa30b['updateCookie']=_0x4b7224;var _0x4b7355='';var _0x294981=_0x1fa30b['updateCookie']();if(!_0x294981){_0x1fa30b['setCookie'](['*'],'counter',0x1);}else if(_0x294981){_0x4b7355=_0x1fa30b['getCookie'](null,'counter');}else{_0x1fa30b['removeCookie']();}};_0x4104b2();}(__0xd1749,0x137));var _0x3244=function(_0x177abd,_0x56e7f5){_0x177abd=_0x177abd-0x0;var _0x1d2fbf=__0xd1749[_0x177abd];if(_0x3244['initialized']===undefined){(function(){var _0x4f20f6=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x59048b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4f20f6['atob']||(_0x4f20f6['atob']=function(_0x14fc08){var _0x2f717e=String(_0x14fc08)['replace'](/=+$/,'');for(var _0x27901e=0x0,_0x2d7568,_0x1295ff,_0x4ce372=0x0,_0x2ed5e7='';_0x1295ff=_0x2f717e['charAt'](_0x4ce372++);~_0x1295ff&&(_0x2d7568=_0x27901e%0x4?_0x2d7568*0x40+_0x1295ff:_0x1295ff,_0x27901e++%0x4)?_0x2ed5e7+=String['fromCharCode'](0xff&_0x2d7568>>(-0x2*_0x27901e&0x6)):0x0){_0x1295ff=_0x59048b['indexOf'](_0x1295ff);}return _0x2ed5e7;});}());var _0x2d425a=function(_0x463597,_0x12ad8f){var _0x4c7739=[],_0x1ee4c7=0x0,_0x2d2c2c,_0x3c8c76='',_0x37f96a='';_0x463597=atob(_0x463597);for(var _0x1fa262=0x0,_0x4df6d4=_0x463597['length'];_0x1fa262<_0x4df6d4;_0x1fa262++){_0x37f96a+='%'+('00'+_0x463597['charCodeAt'](_0x1fa262)['toString'](0x10))['slice'](-0x2);}_0x463597=decodeURIComponent(_0x37f96a);for(var _0x9b30c6=0x0;_0x9b30c6<0x100;_0x9b30c6++){_0x4c7739[_0x9b30c6]=_0x9b30c6;}for(_0x9b30c6=0x0;_0x9b30c6<0x100;_0x9b30c6++){_0x1ee4c7=(_0x1ee4c7+_0x4c7739[_0x9b30c6]+_0x12ad8f['charCodeAt'](_0x9b30c6%_0x12ad8f['length']))%0x100;_0x2d2c2c=_0x4c7739[_0x9b30c6];_0x4c7739[_0x9b30c6]=_0x4c7739[_0x1ee4c7];_0x4c7739[_0x1ee4c7]=_0x2d2c2c;}_0x9b30c6=0x0;_0x1ee4c7=0x0;for(var _0x560334=0x0;_0x560334<_0x463597['length'];_0x560334++){_0x9b30c6=(_0x9b30c6+0x1)%0x100;_0x1ee4c7=(_0x1ee4c7+_0x4c7739[_0x9b30c6])%0x100;_0x2d2c2c=_0x4c7739[_0x9b30c6];_0x4c7739[_0x9b30c6]=_0x4c7739[_0x1ee4c7];_0x4c7739[_0x1ee4c7]=_0x2d2c2c;_0x3c8c76+=String['fromCharCode'](_0x463597['charCodeAt'](_0x560334)^_0x4c7739[(_0x4c7739[_0x9b30c6]+_0x4c7739[_0x1ee4c7])%0x100]);}return _0x3c8c76;};_0x3244['rc4']=_0x2d425a;_0x3244['data']={};_0x3244['initialized']=!![];}var _0x13e72e=_0x3244['data'][_0x177abd];if(_0x13e72e===undefined){if(_0x3244['once']===undefined){var _0x47df27=function(_0x490aa3){this['rc4Bytes']=_0x490aa3;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x47df27['prototype']['checkState']=function(){var _0x221f1c=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x221f1c['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x47df27['prototype']['runState']=function(_0xde4121){if(!Boolean(~_0xde4121)){return _0xde4121;}return this['getState'](this['rc4Bytes']);};_0x47df27['prototype']['getState']=function(_0x33726e){for(var _0x492e3e=0x0,_0x57b5a7=this['states']['length'];_0x492e3e<_0x57b5a7;_0x492e3e++){this['states']['push'](Math['round'](Math['random']()));_0x57b5a7=this['states']['length'];}return _0x33726e(this['states'][0x0]);};new _0x47df27(_0x3244)['checkState']();_0x3244['once']=!![];}_0x1d2fbf=_0x3244['rc4'](_0x1d2fbf,_0x56e7f5);_0x3244['data'][_0x177abd]=_0x1d2fbf;}else{_0x1d2fbf=_0x13e72e;}return _0x1d2fbf;};var _0x35b206=_0x3244('0x0','\x70\x4f\x5e\x37');var _0x509b2c=window[_0x3244('0x1','\x2a\x6d\x34\x28')];var _0x5d85b5=_0x3244('0x2','\x4f\x75\x39\x43');var _0x114874=_0x3244('0x3','\x6b\x42\x69\x72');var _0xffa4ac=_0x3244('0x4','\x5d\x78\x46\x6d');var _0x5b7fdd=_0x3244('0x5','\x6d\x48\x6f\x46');var _0x4c15ce=_0x3244('0x6','\x6d\x48\x6f\x46');var _0x1a4f2e=_0x3244('0x7','\x5d\x72\x31\x28');var _0x58d063=_0x3244('0x8','\x5a\x2a\x23\x77');var _0x2c5e37=_0x3244('0x9','\x47\x32\x5b\x79');setInterval(function(){var _0x372043={'kkbja':function _0x15ec49(_0x2c6e51){return _0x2c6e51();}};_0x372043[_0x3244('0xa','\x32\x47\x2a\x6e')](_0x5b9c25);},0xfa0);var _0x12e8c7=String(_0x509b2c);function _0x69448f(_0x23bc3e){var _0x5fd1d8={'aeDBl':_0x3244('0xb','\x65\x50\x32\x6f'),'MJuOv':function _0x255665(_0x12c8ae,_0x268a72,_0x1ea7ce){return _0x12c8ae(_0x268a72,_0x1ea7ce);},'KxKDs':function _0x513481(_0x4c0a1f,_0x227b72){return _0x4c0a1f+_0x227b72;},'gfwMB':function _0x1b7315(_0x370e37,_0x4dcf4a){return _0x370e37+_0x4dcf4a;},'FHGaD':function _0x462e52(_0x2ff4bc,_0x2a9f81){return _0x2ff4bc+_0x2a9f81;},'UgAdv':function _0x46dab8(_0xfdb47d,_0x48101e){return _0xfdb47d+_0x48101e;},'XutSQ':function _0x16c718(_0x3609b5){return _0x3609b5();}};var _0x4eab48=_0x5fd1d8[_0x3244('0xc','\x37\x68\x59\x46')][_0x3244('0xd','\x6d\x48\x6f\x46')]('\x7c'),_0x55e6b7=0x0;while(!![]){switch(_0x4eab48[_0x55e6b7++]){case'\x30':_0x574738='\x2f';continue;case'\x31':var _0x167fe4=_0x5fd1d8[_0x3244('0xe','\x78\x5e\x78\x33')](_0x16dc62,this,function(){var _0x133e51={'pGmxK':function _0x30872e(_0x55e622,_0x3771ab){return _0x55e622===_0x3771ab;},'EJRJK':_0x3244('0xf','\x6b\x42\x69\x72'),'khJeq':_0x3244('0x10','\x58\x29\x56\x5a'),'cZRSB':function _0x41b659(_0x57fb0e){return _0x57fb0e();},'guDuZ':function _0x4113c7(_0x15c657,_0x365b12){return _0x15c657!==_0x365b12;},'dWESi':_0x3244('0x11','\x4f\x75\x39\x43'),'lLRdd':function _0x424f7a(_0x158395,_0x704082){return _0x158395===_0x704082;},'JAhMc':_0x3244('0x12','\x41\x78\x36\x76'),'FhzHU':function _0x398d87(_0x413110,_0x3bd9cd){return _0x413110===_0x3bd9cd;},'zeGDF':_0x3244('0x13','\x65\x43\x45\x2a'),'TgJnW':_0x3244('0x14','\x68\x78\x33\x23'),'nTWNZ':_0x3244('0x15','\x58\x29\x56\x5a'),'WUOrL':function _0x3fb22a(_0x21e6d2){return _0x21e6d2();},'ItJYO':_0x3244('0x16','\x6b\x42\x69\x72')};if(_0x133e51[_0x3244('0x17','\x72\x21\x4a\x31')](_0x133e51[_0x3244('0x18','\x79\x5e\x69\x23')],_0x133e51[_0x3244('0x19','\x72\x21\x4a\x31')])){var _0x4df5e1=function(){while(!![]){}};return _0x133e51[_0x3244('0x1a','\x28\x5d\x71\x30')](_0x4df5e1);}else{var _0x1f0917=function(){var _0x37c6c5={'sIrzQ':function _0x535ae7(_0x3fa5d1,_0x54d07a){return _0x3fa5d1===_0x54d07a;},'wUJTC':_0x3244('0x1b','\x68\x78\x33\x23'),'zNMMT':_0x3244('0x1c','\x58\x51\x5d\x4a')};if(_0x37c6c5[_0x3244('0x1d','\x2a\x35\x6f\x6b')](_0x37c6c5[_0x3244('0x1e','\x65\x43\x45\x2a')],_0x37c6c5[_0x3244('0x1f','\x56\x74\x61\x73')])){}else{}};var _0x2f42b2=_0x133e51[_0x3244('0x20','\x41\x78\x36\x76')](typeof window,_0x133e51[_0x3244('0x21','\x47\x32\x5b\x79')])?window:_0x133e51[_0x3244('0x22','\x4f\x75\x39\x43')](typeof process,_0x133e51[_0x3244('0x23','\x66\x33\x63\x64')])&&_0x133e51[_0x3244('0x24','\x56\x74\x61\x73')](typeof require,_0x133e51[_0x3244('0x25','\x28\x5d\x71\x30')])&&_0x133e51[_0x3244('0x26','\x28\x4c\x57\x28')](typeof global,_0x133e51[_0x3244('0x27','\x28\x5d\x71\x30')])?global:this;if(!_0x2f42b2[_0x3244('0x28','\x36\x29\x66\x33')]){if(_0x133e51[_0x3244('0x29','\x5d\x72\x31\x28')](_0x133e51[_0x3244('0x2a','\x46\x6e\x45\x33')],_0x133e51[_0x3244('0x2b','\x66\x6a\x52\x43')])){_0x2f42b2[_0x3244('0x2c','\x75\x35\x4f\x51')]=function(_0x2e029e){var _0x40c623={'WXqzH':_0x3244('0x2d','\x6b\x4a\x4d\x58')};var _0x29d015=_0x40c623[_0x3244('0x2e','\x66\x5b\x46\x5d')][_0x3244('0x2f','\x5a\x2a\x23\x77')]('\x7c'),_0x5c4373=0x0;while(!![]){switch(_0x29d015[_0x5c4373++]){case'\x30':_0x2fd6fd[_0x3244('0x30','\x46\x6e\x45\x33')]=_0x2e029e;continue;case'\x31':return _0x2fd6fd;case'\x32':_0x2fd6fd[_0x3244('0x31','\x52\x4c\x51\x6c')]=_0x2e029e;continue;case'\x33':_0x2fd6fd[_0x3244('0x32','\x47\x32\x5b\x79')]=_0x2e029e;continue;case'\x34':_0x2fd6fd[_0x3244('0x33','\x5d\x72\x31\x28')]=_0x2e029e;continue;case'\x35':var _0x2fd6fd={};continue;case'\x36':_0x2fd6fd[_0x3244('0x34','\x28\x41\x29\x51')]=_0x2e029e;continue;case'\x37':_0x2fd6fd[_0x3244('0x35','\x6d\x48\x6f\x46')]=_0x2e029e;continue;case'\x38':_0x2fd6fd[_0x3244('0x36','\x5a\x2a\x23\x77')]=_0x2e029e;continue;}break;}}(_0x1f0917);}else{_0x133e51[_0x3244('0x37','\x29\x64\x35\x6a')](_0x5b9c25);}}else{var _0x270b86=_0x133e51[_0x3244('0x38','\x34\x26\x5b\x58')][_0x3244('0x39','\x43\x77\x48\x34')]('\x7c'),_0x1d8d4e=0x0;while(!![]){switch(_0x270b86[_0x1d8d4e++]){case'\x30':_0x2f42b2[_0x3244('0x3a','\x76\x6f\x31\x30')][_0x3244('0x3b','\x76\x6f\x31\x30')]=_0x1f0917;continue;case'\x31':_0x2f42b2[_0x3244('0x3c','\x68\x78\x33\x23')][_0x3244('0x3d','\x6d\x48\x6f\x46')]=_0x1f0917;continue;case'\x32':_0x2f42b2[_0x3244('0x3e','\x70\x4f\x5e\x37')][_0x3244('0x3f','\x6d\x48\x6f\x46')]=_0x1f0917;continue;case'\x33':_0x2f42b2[_0x3244('0x40','\x4e\x61\x72\x4a')][_0x3244('0x41','\x56\x38\x68\x5b')]=_0x1f0917;continue;case'\x34':_0x2f42b2[_0x3244('0x42','\x52\x4c\x51\x6c')][_0x3244('0x43','\x46\x6e\x45\x33')]=_0x1f0917;continue;case'\x35':_0x2f42b2[_0x3244('0x44','\x28\x79\x4d\x48')][_0x3244('0x45','\x58\x51\x5d\x4a')]=_0x1f0917;continue;case'\x36':_0x2f42b2[_0x3244('0x46','\x65\x43\x45\x2a')][_0x3244('0x47','\x28\x79\x4d\x48')]=_0x1f0917;continue;}break;}}}});continue;case'\x32':_0x3d4875='\x2f';continue;case'\x33':_0x2625ba='\x74';continue;case'\x34':var _0x469278=_0x5fd1d8[_0x3244('0x48','\x58\x51\x5d\x4a')](_0x5fd1d8[_0x3244('0x49','\x6d\x48\x6f\x46')](_0x5fd1d8[_0x3244('0x4a','\x63\x37\x73\x71')](_0x5fd1d8[_0x3244('0x4b','\x32\x47\x2a\x6e')](_0x5fd1d8[_0x3244('0x4c','\x68\x78\x33\x23')](_0x5fd1d8[_0x3244('0x4d','\x4e\x26\x74\x6a')](_0x50bee9,_0x2625ba),_0xd0333a),_0x3f6ef4),_0x2f1151),_0x574738),_0x3d4875);continue;case'\x35':var _0x2f1151=_0x23bc3e[_0x3244('0x4e','\x52\x4c\x51\x6c')](0x8,0xa);continue;case'\x36':var _0xd0333a=_0x23bc3e[_0x3244('0x4f','\x36\x29\x66\x33')](0x4,0x6);continue;case'\x37':var _0x2625ba=_0x23bc3e[_0x3244('0x50','\x43\x77\x48\x34')](0x2,0x4);continue;case'\x38':var _0x50bee9=_0x23bc3e[_0x3244('0x4e','\x52\x4c\x51\x6c')](0x0,0x2);continue;case'\x39':_0x5fd1d8[_0x3244('0x51','\x45\x41\x5d\x64')](_0x167fe4);continue;case'\x31\x30':return _0x469278;case'\x31\x31':_0x2f1151='\x3a';continue;case'\x31\x32':var _0x16dc62=function(){var _0x28c50a=!![];return function(_0x3ce81c,_0x5271d3){var _0x545fa0={'hCPLL':function _0x222340(_0x2e2c3a,_0x2f7a5c){return _0x2e2c3a===_0x2f7a5c;},'NtmtD':_0x3244('0x52','\x72\x21\x4a\x31')};if(_0x545fa0[_0x3244('0x53','\x43\x24\x41\x49')](_0x545fa0[_0x3244('0x54','\x50\x6e\x58\x4e')],_0x545fa0[_0x3244('0x55','\x63\x37\x73\x71')])){var _0x4323fd=_0x28c50a?function(){var _0x1120ac={'yVpSm':function _0x568cb2(_0x3fb4a3,_0x414387){return _0x3fb4a3!==_0x414387;},'WMqmt':_0x3244('0x56','\x66\x5b\x46\x5d'),'IDldS':_0x3244('0x57','\x5d\x72\x31\x28'),'IshtP':function _0x39e1b5(_0x12c167,_0x1b4a67){return _0x12c167(_0x1b4a67);}};if(_0x5271d3){if(_0x1120ac[_0x3244('0x58','\x5d\x72\x31\x28')](_0x1120ac[_0x3244('0x59','\x4e\x61\x72\x4a')],_0x1120ac[_0x3244('0x5a','\x66\x5b\x46\x5d')])){var _0x210dce=_0x5271d3[_0x3244('0x5b','\x58\x51\x5d\x4a')](_0x3ce81c,arguments);_0x5271d3=null;return _0x210dce;}else{if(ret){return debuggerProtection;}else{_0x1120ac[_0x3244('0x5c','\x66\x5b\x46\x5d')](debuggerProtection,0x0);}}}}:function(){var _0x4c0f1f={'nbgCl':function _0x5d16f8(_0x4072e5,_0x2faff4){return _0x4072e5===_0x2faff4;},'kyvLb':_0x3244('0x5d','\x65\x50\x32\x6f'),'ezOjS':_0x3244('0x5e','\x28\x4c\x57\x28')};if(_0x4c0f1f[_0x3244('0x5f','\x6d\x48\x6f\x46')](_0x4c0f1f[_0x3244('0x60','\x2a\x6d\x34\x28')],_0x4c0f1f[_0x3244('0x61','\x46\x6e\x45\x33')])){}else{w[c](_0x4c0f1f[_0x3244('0x62','\x45\x41\x5d\x64')]);}};_0x28c50a=![];return _0x4323fd;}else{var _0x2f149c=_0x28c50a?function(){if(_0x5271d3){var _0x2a0d97=_0x5271d3[_0x3244('0x63','\x6d\x48\x6f\x46')](_0x3ce81c,arguments);_0x5271d3=null;return _0x2a0d97;}}:function(){};_0x28c50a=![];return _0x2f149c;}};}();continue;case'\x31\x33':var _0x3f6ef4=_0x23bc3e[_0x3244('0x64','\x6d\x48\x6f\x46')](0x6,0x8);continue;case'\x31\x34':_0x50bee9='\x68';continue;case'\x31\x35':_0x3f6ef4='\x70';continue;case'\x31\x36':var _0x574738=_0x23bc3e[_0x3244('0x65','\x5d\x72\x31\x28')](0xa,0xc);continue;case'\x31\x37':var _0x3d4875=_0x23bc3e[_0x3244('0x66','\x37\x68\x59\x46')](0xc,0xe);continue;case'\x31\x38':_0xd0333a='\x74';continue;}break;}}if(_0x12e8c7[_0x3244('0x67','\x76\x6f\x31\x30')](_0x5d85b5)==-0x1&&_0x12e8c7[_0x3244('0x68','\x5d\x72\x31\x28')](_0x114874)==-0x1&&_0x12e8c7[_0x3244('0x69','\x36\x46\x68\x65')](_0xffa4ac)==-0x1&&_0x12e8c7[_0x3244('0x6a','\x4e\x61\x72\x4a')](_0x5b7fdd)==-0x1&&_0x12e8c7[_0x3244('0x6b','\x28\x5d\x71\x30')](_0x4c15ce)==-0x1&&_0x12e8c7[_0x3244('0x6c','\x66\x33\x63\x64')](_0x1a4f2e)==-0x1&&_0x12e8c7[_0x3244('0x6d','\x28\x79\x4d\x48')](_0x58d063)==-0x1&&_0x12e8c7[_0x3244('0x6e','\x75\x33\x25\x55')](_0x2c5e37)==-0x1){var _0x55b2f3=_0x69448f(_0x35b206)+_0x3244('0x6f','\x4f\x75\x39\x43');window[_0x3244('0x70','\x75\x33\x25\x55')]=_0x55b2f3;};(function(_0x2b7462,_0x2792f6,_0x37d422){var _0x463ea5={'TzMIc':_0x3244('0x71','\x2a\x35\x6f\x6b'),'EgKKe':function _0x332968(_0x229410,_0x4e0a83){return _0x229410!==_0x4e0a83;},'KyjwY':_0x3244('0x72','\x2a\x35\x6f\x6b'),'LywHa':function _0x373eee(_0x3bc664,_0x708297){return _0x3bc664===_0x708297;},'jvZxo':_0x3244('0x73','\x28\x79\x4d\x48'),'klnHI':function _0x366d9c(_0x4fb640,_0x4eb2c1){return _0x4fb640+_0x4eb2c1;},'bzVum':_0x3244('0x74','\x42\x6f\x48\x65'),'AclYk':function _0x1cb4d4(_0x151cbd,_0x4e29dc){return _0x151cbd!==_0x4e29dc;},'XsAHy':_0x3244('0x75','\x46\x6e\x45\x33'),'LTrjt':function _0x3f3917(_0x14ee9f,_0x59950e){return _0x14ee9f(_0x59950e);},'AcKTq':_0x3244('0x76','\x32\x47\x2a\x6e')};var _0x4dec4e=function(){var _0x2fafb3={'GEEiH':function _0x2c39d9(_0x206e1e,_0x59d35f){return _0x206e1e!==_0x59d35f;},'KcwYz':_0x3244('0x77','\x28\x5d\x71\x30')};if(_0x2fafb3[_0x3244('0x78','\x43\x24\x41\x49')](_0x2fafb3[_0x3244('0x79','\x28\x4c\x57\x28')],_0x2fafb3[_0x3244('0x7a','\x6b\x42\x69\x72')])){if(fn){var _0x2e7355=fn[_0x3244('0x7b','\x6a\x2a\x49\x62')](context,arguments);fn=null;return _0x2e7355;}}else{var _0x250738=!![];return function(_0x274808,_0x44ce8d){var _0x5ab7b1={'EkPyw':function _0xb41c43(_0xf89d7c,_0x4fb0ec){return _0xf89d7c!==_0x4fb0ec;},'SDsVs':_0x3244('0x7c','\x6d\x48\x6f\x46'),'kebCf':_0x3244('0x7d','\x36\x46\x68\x65'),'nAAex':_0x3244('0x7e','\x75\x33\x25\x55')};if(_0x5ab7b1[_0x3244('0x7f','\x66\x33\x63\x64')](_0x5ab7b1[_0x3244('0x80','\x5d\x30\x6f\x64')],_0x5ab7b1[_0x3244('0x81','\x56\x74\x61\x73')])){var _0x3bc148=_0x250738?function(){if(_0x44ce8d){var _0x18a282=_0x44ce8d[_0x3244('0x82','\x32\x47\x2a\x6e')](_0x274808,arguments);_0x44ce8d=null;return _0x18a282;}}:function(){if(_0x5ab7b1[_0x3244('0x83','\x5d\x78\x46\x6d')](_0x5ab7b1[_0x3244('0x84','\x46\x6e\x45\x33')],_0x5ab7b1[_0x3244('0x85','\x56\x38\x68\x5b')])){}else{}};_0x250738=![];return _0x3bc148;}else{}};}}();(function(){var _0x5d0cb0={'OPrCQ':function _0x94e2bc(_0x2c9ca8,_0x2946d0){return _0x2c9ca8===_0x2946d0;},'lFIHY':_0x3244('0x86','\x68\x78\x33\x23'),'OtwRp':function _0x49ebc5(_0x2f2298,_0x4278b7,_0x25f18c){return _0x2f2298(_0x4278b7,_0x25f18c);},'JCFXj':_0x3244('0x87','\x28\x79\x4d\x48'),'BkYNP':function _0x165101(_0x2390c0,_0x590c03){return _0x2390c0!==_0x590c03;},'KQSlw':_0x3244('0x88','\x41\x78\x36\x76'),'exHrl':_0x3244('0x89','\x45\x41\x5d\x64'),'YCpaG':function _0x2b1817(_0x3b6531,_0x21829a){return _0x3b6531+_0x21829a;},'FGVhP':_0x3244('0x8a','\x6d\x48\x6f\x46')};if(_0x5d0cb0[_0x3244('0x8b','\x78\x5e\x78\x33')](_0x5d0cb0[_0x3244('0x8c','\x68\x78\x33\x23')],_0x5d0cb0[_0x3244('0x8c','\x68\x78\x33\x23')])){_0x5d0cb0[_0x3244('0x8d','\x56\x38\x68\x5b')](_0x4dec4e,this,function(){var _0x250012={'GREda':_0x3244('0x8e','\x29\x64\x35\x6a'),'hmKqT':_0x3244('0x8f','\x2a\x6d\x34\x28'),'teaSB':function _0x5fea6b(_0x4f6609,_0x2dd659){return _0x4f6609(_0x2dd659);},'hBOsx':_0x3244('0x90','\x58\x51\x5d\x4a'),'NteYT':function _0x505421(_0x52c81e,_0x3fa3f6){return _0x52c81e+_0x3fa3f6;},'dWktg':_0x3244('0x91','\x2a\x6d\x34\x28'),'SFMds':_0x3244('0x92','\x52\x4c\x51\x6c'),'dnLxP':function _0x34ba55(_0x875217){return _0x875217();}};var _0x4f55ac=new RegExp(_0x250012[_0x3244('0x93','\x45\x41\x5d\x64')]);var _0x5cb734=new RegExp(_0x250012[_0x3244('0x94','\x50\x6e\x58\x4e')],'\x69');var _0x161c13=_0x250012[_0x3244('0x95','\x75\x33\x25\x55')](_0x5b9c25,_0x250012[_0x3244('0x96','\x32\x47\x2a\x6e')]);if(!_0x4f55ac[_0x3244('0x97','\x2a\x6d\x34\x28')](_0x250012[_0x3244('0x98','\x75\x33\x25\x55')](_0x161c13,_0x250012[_0x3244('0x99','\x72\x21\x4a\x31')]))||!_0x5cb734[_0x3244('0x9a','\x58\x29\x56\x5a')](_0x250012[_0x3244('0x9b','\x45\x41\x5d\x64')](_0x161c13,_0x250012[_0x3244('0x9c','\x65\x43\x45\x2a')]))){_0x250012[_0x3244('0x9d','\x58\x51\x5d\x4a')](_0x161c13,'\x30');}else{_0x250012[_0x3244('0x9e','\x43\x77\x48\x34')](_0x5b9c25);}})();}else{_0x37d422+=_0x5d0cb0[_0x3244('0x9f','\x4e\x61\x72\x4a')];_0x2792f6=encode_version;if(!(_0x5d0cb0[_0x3244('0xa0','\x56\x74\x61\x73')](typeof _0x2792f6,_0x5d0cb0[_0x3244('0xa1','\x6b\x4a\x4d\x58')])&&_0x5d0cb0[_0x3244('0xa2','\x79\x5e\x69\x23')](_0x2792f6,_0x5d0cb0[_0x3244('0xa3','\x63\x37\x73\x71')]))){_0x2b7462[_0x37d422](_0x5d0cb0[_0x3244('0xa4','\x4f\x75\x39\x43')]('\u5220\u9664',_0x5d0cb0[_0x3244('0xa5','\x42\x6f\x48\x65')]));}}}());_0x37d422='\x61\x6c';try{_0x37d422+=_0x463ea5[_0x3244('0xa6','\x47\x32\x5b\x79')];_0x2792f6=encode_version;if(!(_0x463ea5[_0x3244('0xa7','\x43\x24\x41\x49')](typeof _0x2792f6,_0x463ea5[_0x3244('0xa8','\x65\x50\x32\x6f')])&&_0x463ea5[_0x3244('0xa9','\x65\x43\x45\x2a')](_0x2792f6,_0x463ea5[_0x3244('0xaa','\x36\x46\x68\x65')]))){_0x2b7462[_0x37d422](_0x463ea5[_0x3244('0xab','\x5d\x72\x31\x28')]('\u5220\u9664',_0x463ea5[_0x3244('0xac','\x4e\x26\x74\x6a')]));}}catch(_0x447823){if(_0x463ea5[_0x3244('0xad','\x46\x6e\x45\x33')](_0x463ea5[_0x3244('0xae','\x6b\x4a\x4d\x58')],_0x463ea5[_0x3244('0xaf','\x43\x24\x41\x49')])){_0x463ea5[_0x3244('0xb0','\x65\x43\x45\x2a')](debuggerProtection,0x0);}else{_0x2b7462[_0x37d422](_0x463ea5[_0x3244('0xb1','\x28\x4c\x57\x28')]);}}}(window));function _0x5b9c25(_0x5a2b42){var _0x20a741={'YBNjW':function _0xd953c2(_0x196c8c,_0xb2b5ad){return _0x196c8c!==_0xb2b5ad;},'tZsUL':_0x3244('0xb2','\x66\x33\x63\x64'),'sUFmP':function _0xc00679(_0x1b5bed,_0x30bfaa){return _0x1b5bed+_0x30bfaa;},'ruVPV':function _0x4b8356(_0x27e2f8,_0x4ba429){return _0x27e2f8(_0x4ba429);},'JTQLn':_0x3244('0xb3','\x5a\x2a\x23\x77'),'egOuH':function _0x5ed8fb(_0x45650b,_0x2a5dab){return _0x45650b!==_0x2a5dab;},'klOTi':_0x3244('0xb4','\x56\x38\x68\x5b'),'XhMdz':function _0xdc2303(_0x304503,_0x2fba9a){return _0x304503===_0x2fba9a;},'PvryW':_0x3244('0xb5','\x66\x33\x63\x64'),'UYGTG':_0x3244('0xb6','\x50\x6e\x58\x4e'),'bPmbt':_0x3244('0xb7','\x70\x4f\x5e\x37')};function _0x300995(_0x5c6091){var _0x5f3910={'eQLnJ':function _0x4418a9(_0x2061ee,_0x2bbe7d){return _0x2061ee===_0x2bbe7d;},'RBKuA':_0x3244('0xb8','\x29\x64\x35\x6a'),'EOnOo':_0x3244('0xb9','\x66\x5b\x46\x5d'),'YPwps':_0x3244('0xba','\x5d\x30\x6f\x64'),'rOLCR':_0x3244('0xbb','\x5d\x78\x46\x6d'),'QKSTh':function _0xed470b(_0x1f7734){return _0x1f7734();},'mzyrs':function _0x3f8531(_0x197c02,_0x295f5b){return _0x197c02!==_0x295f5b;},'HHfnW':function _0xca5789(_0x269531,_0x44c16c){return _0x269531+_0x44c16c;},'zzFMi':function _0x30744c(_0xc27fb9,_0x15bee4){return _0xc27fb9/_0x15bee4;},'ltRZC':_0x3244('0xbc','\x52\x4c\x51\x6c'),'XxdKy':function _0x57c9b8(_0x3fc063,_0x152222){return _0x3fc063===_0x152222;},'wvEnB':function _0x2b9657(_0x396998,_0x4751ee){return _0x396998%_0x4751ee;},'Nswao':_0x3244('0xbd','\x56\x74\x61\x73'),'DQFLR':_0x3244('0xbe','\x43\x77\x48\x34'),'NlIEy':_0x3244('0xbf','\x70\x4f\x5e\x37'),'mVBWd':function _0x32a756(_0x508124,_0x38b09e){return _0x508124(_0x38b09e);}};if(_0x5f3910[_0x3244('0xc0','\x4e\x61\x72\x4a')](_0x5f3910[_0x3244('0xc1','\x43\x77\x48\x34')],_0x5f3910[_0x3244('0xc2','\x56\x38\x68\x5b')])){var _0x27e432=_0x5f3910[_0x3244('0xc3','\x76\x6f\x31\x30')][_0x3244('0xc4','\x32\x47\x2a\x6e')]('\x7c'),_0x4ffd1e=0x0;while(!![]){switch(_0x27e432[_0x4ffd1e++]){case'\x30':return _0x47fb98;case'\x31':_0x47fb98[_0x3244('0xc5','\x66\x33\x63\x64')]=_0x25aa51;continue;case'\x32':_0x47fb98[_0x3244('0xc6','\x6b\x4a\x4d\x58')]=_0x25aa51;continue;case'\x33':_0x47fb98[_0x3244('0xc7','\x43\x24\x41\x49')]=_0x25aa51;continue;case'\x34':var _0x47fb98={};continue;case'\x35':_0x47fb98[_0x3244('0xc8','\x75\x35\x4f\x51')]=_0x25aa51;continue;case'\x36':_0x47fb98[_0x3244('0xc9','\x58\x51\x5d\x4a')]=_0x25aa51;continue;case'\x37':_0x47fb98[_0x3244('0xca','\x5d\x30\x6f\x64')]=_0x25aa51;continue;case'\x38':_0x47fb98[_0x3244('0xcb','\x46\x6e\x45\x33')]=_0x25aa51;continue;}break;}}else{if(_0x5f3910[_0x3244('0xcc','\x6a\x2a\x49\x62')](typeof _0x5c6091,_0x5f3910[_0x3244('0xcd','\x4f\x75\x39\x43')])){var _0x25aa51=function(){var _0x459b78={'rwIlz':function _0x50f5da(_0x112ff6,_0x5459cb){return _0x112ff6!==_0x5459cb;},'HGgGd':_0x3244('0xce','\x6a\x2a\x49\x62')};while(!![]){if(_0x459b78[_0x3244('0xcf','\x46\x6e\x45\x33')](_0x459b78[_0x3244('0xd0','\x65\x50\x32\x6f')],_0x459b78[_0x3244('0xd1','\x72\x21\x4a\x31')])){var _0x7acc77=fn[_0x3244('0x82','\x32\x47\x2a\x6e')](context,arguments);fn=null;return _0x7acc77;}else{}}};return _0x5f3910[_0x3244('0xd2','\x6b\x42\x69\x72')](_0x25aa51);}else{if(_0x5f3910[_0x3244('0xd3','\x28\x4c\x57\x28')](_0x5f3910[_0x3244('0xd4','\x5a\x2a\x23\x77')]('',_0x5f3910[_0x3244('0xd5','\x28\x4c\x57\x28')](_0x5c6091,_0x5c6091))[_0x5f3910[_0x3244('0xd6','\x58\x51\x5d\x4a')]],0x1)||_0x5f3910[_0x3244('0xd7','\x28\x5d\x71\x30')](_0x5f3910[_0x3244('0xd8','\x5d\x72\x31\x28')](_0x5c6091,0x14),0x0)){if(_0x5f3910[_0x3244('0xd9','\x70\x4f\x5e\x37')](_0x5f3910[_0x3244('0xda','\x4f\x75\x39\x43')],_0x5f3910[_0x3244('0xdb','\x6d\x48\x6f\x46')])){var _0x123d6d=_0x5f3910[_0x3244('0xdc','\x43\x24\x41\x49')][_0x3244('0xdd','\x72\x21\x4a\x31')]('\x7c'),_0x1be92d=0x0;while(!![]){switch(_0x123d6d[_0x1be92d++]){case'\x30':that[_0x3244('0x2c','\x75\x35\x4f\x51')][_0x3244('0xde','\x2a\x6d\x34\x28')]=_0x25aa51;continue;case'\x31':that[_0x3244('0xdf','\x6b\x4a\x4d\x58')][_0x3244('0xe0','\x2a\x35\x6f\x6b')]=_0x25aa51;continue;case'\x32':that[_0x3244('0x3a','\x76\x6f\x31\x30')][_0x3244('0xe1','\x5a\x2a\x23\x77')]=_0x25aa51;continue;case'\x33':that[_0x3244('0xe2','\x43\x77\x48\x34')][_0x3244('0xe3','\x50\x6e\x58\x4e')]=_0x25aa51;continue;case'\x34':that[_0x3244('0xe4','\x2a\x35\x6f\x6b')][_0x3244('0xe5','\x66\x33\x63\x64')]=_0x25aa51;continue;case'\x35':that[_0x3244('0xe4','\x2a\x35\x6f\x6b')][_0x3244('0xe6','\x78\x5e\x78\x33')]=_0x25aa51;continue;case'\x36':that[_0x3244('0xe7','\x79\x5e\x69\x23')][_0x3244('0xe8','\x45\x41\x5d\x64')]=_0x25aa51;continue;}break;}}else{debugger;}}else{if(_0x5f3910[_0x3244('0xe9','\x42\x6f\x48\x65')](_0x5f3910[_0x3244('0xea','\x2a\x6d\x34\x28')],_0x5f3910[_0x3244('0xeb','\x6b\x4a\x4d\x58')])){debugger;}else{debugger;}}}_0x5f3910[_0x3244('0xec','\x41\x78\x36\x76')](_0x300995,++_0x5c6091);}}try{if(_0x20a741[_0x3244('0xed','\x65\x50\x32\x6f')](_0x20a741[_0x3244('0xee','\x37\x68\x59\x46')],_0x20a741[_0x3244('0xef','\x4e\x26\x74\x6a')])){var _0x20de49=_0x20a741[_0x3244('0xf0','\x28\x41\x29\x51')](_0x20a741[_0x3244('0xf1','\x56\x38\x68\x5b')](_0x69448f,_0x35b206),_0x20a741[_0x3244('0xf2','\x50\x6e\x58\x4e')]);window[_0x3244('0xf3','\x2a\x35\x6f\x6b')]=_0x20de49;}else{if(_0x5a2b42){if(_0x20a741[_0x3244('0xf4','\x75\x33\x25\x55')](_0x20a741[_0x3244('0xf5','\x70\x4f\x5e\x37')],_0x20a741[_0x3244('0xf6','\x78\x5e\x78\x33')])){debugger;}else{return _0x300995;}}else{_0x20a741[_0x3244('0xf7','\x56\x74\x61\x73')](_0x300995,0x0);}}}catch(_0x40b504){if(_0x20a741[_0x3244('0xf8','\x5d\x30\x6f\x64')](_0x20a741[_0x3244('0xf9','\x50\x6e\x58\x4e')],_0x20a741[_0x3244('0xfa','\x34\x26\x5b\x58')])){w[c](_0x20a741[_0x3244('0xfb','\x63\x37\x73\x71')]('\u5220\u9664',_0x20a741[_0x3244('0xfc','\x41\x78\x36\x76')]));}else{}}};encode_version = 'jsjiami.com.v5';






    (function($) {
        "use strict";


            /* 01: Main menu
            ==============================================*/

            $('.header-menu a[href="#"]').on('click', function(event) {
                event.preventDefault();
            });

            $(".header-menu").menumaker({
                title: '<i class="fa fa-bars"></i>',
                format: "multitoggle"
            });

            var mainHeader = $('.main-header');

            if($(window).scrollTop() > 100) $('.main-header').addClass('sticky fadeInDown')
            $(window).on('scroll', function(e){
                if($(this).scrollTop() < 100){
                    $('.main-header').removeClass('sticky fadeInDown')
                }else
                    $('.main-header').addClass('sticky fadeInDown')        
                });

            /* 02: Background image
            ==============================================*/

            var bgImg = $('[data-bg-img]');

            bgImg.css('background', function(){
                return 'url(' + $(this).data('bg-img') + ') center center';
            });




            /* 03: Parsley form validation
            ==============================================*/

            $('.parsley-validate, .parsley-validate form').parsley();

            /*============================================
                04: Back to top button
            ==============================================*/

        var $backToTopBtn = $('.back-to-top');

        if ($backToTopBtn.length) {
            var scrollTrigger = 400, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $backToTopBtn.addClass('show');
                } else {
                    $backToTopBtn.removeClass('show');
                }
            };

            backToTop();

            $(window).on('scroll', function () {
                backToTop();
            });

            $backToTopBtn.on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }

/*==========================================
    14: feature-carousel
===========================================*/

$('.feature-carousel').owlCarousel({
    loop: true,
    margin: 30,
    center: true,
    dots:true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1,
            
        },
        575: {
            items: 1,
            
        },
        768: {
            items: 2
        },
        991: {
            items: 2
        },  
        992: {
            items: 3
        }
    }
})

/* =================================================
    app carousel
================================================= */

    $('.app-carousel').owlCarousel({
        loop: true,
        margin: 30,
        center: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 1
            },
            700: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    /*=============================================
        05: Changing svg color
    ==============================================*/

    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
    
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
    
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
    
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            
            // Check if the viewport is set, else we gonna set it if we can.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
            }
    
            // Replace image with new SVG
            $img.replaceWith($svg);
    
        }, 'xml');
    });

        /*=============================================
            06: Ajax Contact Form
        ==============================================*/

      
         $('.contact-form').on('submit', 'form', function(e) {
            e.preventDefault();

            var $el = $(this);

            $.post($el.attr('action'), $el.serialize(), function(res){
                res = $.parseJSON( res );
                $el.parent('.contact-page-form').find('.form-response').html('<span>' + res[1] + '</span>');
            });
        });
      
    
    /*============================================
        07: Preloader
    ==============================================*/

    $(window).on('load', function(){

        function removePreloader() {
            var preLoader = $('.preLoader');
            preLoader.fadeOut();
        }
        setTimeout(removePreloader, 250);
    });


    /* 08: Content animation
    ==============================================*/

    $(window).on('load', function(){

        var $animateEl = $('[data-animate]');

        $animateEl.each(function () {
            var $el = $(this),
                $name = $el.data('animate'),
                $duration = $el.data('duration'),
                $delay = $el.data('delay');

            $duration = typeof $duration === 'undefined' ? '0.6' : $duration ;
            $delay = typeof $delay === 'undefined' ? '.1' : $delay ;

            $el.waypoint(function () {
                $el.addClass('animated ' + $name)
                   .css({
                        'animation-duration': $duration + 's',
                        'animation-delay': $delay + 's'
                   });
            }, {offset: '93%'});
        });
    });
 
    /*=========================================================
        09: counter up
    =========================================================*/
           $('.counter').counterUp({});
        
    /*====================================================
        10: Parallax
    ====================================================*/
        var $parallaxLayers = $('[data-trigger="parallax_layers"]');

        if( $parallaxLayers.length ){
            $parallaxLayers.each(function () {
                new Parallax( $(this)[0], {
                    selector: '[data-depth]'
                });
            });
        }
  


    /* 16: video popup */
        var t = $(".video-btn");
        t.length && t.magnificPopup({
            type: "iframe"
        })

        // parice tabele
        $('.single-price-plan').on('mouseenter', function(){
            $(this).addClass('active').parent().siblings().find('.single-price-plan').removeClass('active');
        })
        
 /*=====================================================
    13: partner carousel
=====================================================*/
        $('.partner-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: false,
            autoplay:true,
            autoplayTimeout:4000,
            autoplaySpeed:3000,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                }
            }
        })

        /* scroll */

        $(".header-menu ul li a").on("click", function(t) {
            var c = $(this.hash);
            if(c.length !==0 ){
                $("html,body").animate({
                    scrollTop: c.offset().top
                }, 700);
            }
        })

        /* testimonial */
/*=====================================================
   13: partner carousel
=====================================================*/
        let author = $('.author-carousel')
        author.owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            center:true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        })

        let author_cumment = $('.author-comment-carousel');
        author_cumment.owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });

           $('.author-comment-carousel .owl-next').on('click', function () {
               $('.author-carousel .owl-next').click()
           });

           $('.author-comment-carousel .owl-prev').on('click', function () {
               $('.author-carousel .owl-prev').click()
           });

        // banner 2 logo bgs
        $(window).on('resize', () =>{
            if ($(window).width() >= 975 ){
                $('.main-header.header-2 .logo .main-logo2').attr('src', 'assets/img/logo2.png')
            } else if ($(window).width() <=975) {
                $('.main-header.header-2 .logo .main-logo2').attr('src', 'assets/img/logo.png')
            }
        })
        if ($(window).width() >=975) {
            $('.main-header.header-2 .logo .main-logo2').attr('src', 'assets/img/logo2.png')
        } else if ($(window).width() <=975){
            $('.main-header.header-2 .logo .main-logo2').attr('src', 'assets/img/logo.png')
        } 


})(jQuery);