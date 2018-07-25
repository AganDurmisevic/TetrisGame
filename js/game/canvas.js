
 // This is the Canvas for player one on which the tiles are being drawn, additionally there is a small Canvas which shows the next tile
const canvas1 = document.getElementById ('canvas');
const context1 = canvas1.getContext ('2d');
const smallCanvas1 = document.getElementById ('nextTile');
const smallContext1 = smallCanvas1.getContext ('2d');

context1.scale (20, 20);
smallContext1.scale (77, 35);
context1.fillStyle = '#2B3D51';
context1.fillRect (0, 0, canvas1.width, canvas1.height);





